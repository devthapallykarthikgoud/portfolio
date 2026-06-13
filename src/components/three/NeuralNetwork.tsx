"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current;
    const w = el.clientWidth, h = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 4;

    // Nodes
    const nodeCount = 80;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.02, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x8B5CF6 });

    for (let i = 0; i < nodeCount; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      nodePositions.push(v);
      const mesh = new THREE.Mesh(nodeGeo, nodeMat.clone());
      mesh.position.copy(v);
      // Vary colors
      const colors = [0x8B5CF6, 0x60A5FA, 0x22D3EE];
      (mesh.material as THREE.MeshBasicMaterial).color.setHex(colors[Math.floor(Math.random() * 3)]);
      scene.add(mesh);
    }

    // Edges
    const maxDist = 2.5;
    const edgePositions: number[] = [];
    const edgeColors: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < maxDist) {
          edgePositions.push(...nodePositions[i].toArray(), ...nodePositions[j].toArray());
          const alpha = 1 - nodePositions[i].distanceTo(nodePositions[j]) / maxDist;
          edgeColors.push(0.34 * alpha, 0.22 * alpha, 0.96 * alpha,
                          0.24 * alpha, 0.65 * alpha, 0.98 * alpha);
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgePositions, 3));
    edgeGeo.setAttribute("color", new THREE.Float32BufferAttribute(edgeColors, 3));
    const edgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.3 });
    scene.add(new THREE.LineSegments(edgeGeo, edgeMat));

    // Floating particles
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pVel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 12;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      pVel[i * 3] = (Math.random() - 0.5) * 0.004;
      pVel[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      pVel[i * 3 + 2] = 0;
    }
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x8B5CF6, size: 0.03, transparent: true, opacity: 0.5 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse parallax
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.5;
      my = -(e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", onMouse);

    let animId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rotate scene slowly
      scene.rotation.y = mx * 0.3;
      scene.rotation.x = my * 0.2;

      // Animate particles
      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += pVel[i * 3];
        pos[i * 3 + 1] += pVel[i * 3 + 1];
        if (Math.abs(pos[i * 3]) > 6) pVel[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 4) pVel[i * 3 + 1] *= -1;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Pulse nodes
      scene.children.forEach((child, idx) => {
        if (child instanceof THREE.Mesh) {
          child.scale.setScalar(1 + Math.sin(t * 2 + idx * 0.5) * 0.2);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
