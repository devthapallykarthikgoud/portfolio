# Devathapally Umakarthikeya — AI Engineer Portfolio

## Stack
- Next.js 15 + TypeScript
- TailwindCSS
- Framer Motion (stagger reveals, blur-to-focus, parallax)
- Three.js (neural network hero background)
- Lenis (smooth scrolling)
- GSAP-ready (ScrollTrigger integration via globals.css)

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (recommended)

```bash
# Option 1 — CLI
npm i -g vercel
vercel --prod

# Option 2 — GitHub
# Push to GitHub → import on vercel.com → auto-deploy
```

## Features
| Feature | File |
|---|---|
| ⌘K Command Palette | `components/ui/CommandPalette.tsx` |
| Three.js Neural Network | `components/three/NeuralNetwork.tsx` |
| Smooth Scroll (Lenis) | `components/animations/LenisProvider.tsx` |
| Custom Cursor + Ring | `components/ui/Cursor.tsx` |
| Scroll Progress Bar | `components/ui/ProgressBar.tsx` |
| Boot Loading Screen | `components/ui/LoadingScreen.tsx` |
| Typed Role Animation | Inside `Hero.tsx` |
| Project Case Study Tabs | Inside `Projects.tsx` |
| Bento Skill Grid | `components/sections/Skills.tsx` |
| Animated Architecture Flows | Inside `Projects.tsx` |
| Mobile Responsive Nav | `components/sections/Navbar.tsx` |

## Customization

### Update your links
Search for `devthapallykarthikgoud` and replace with your GitHub username.
Search for `devathapallyumakarthikeya@gmail.com` and update.

### Add profile photo
Drop `photo.jpg` in `/public/` and add an `<Image>` tag in the About or Hero section.

### Update colors
All design tokens are in `tailwind.config.ts` and `globals.css` `:root` variables.

## Also included
`portfolio-v2.html` — Zero-dependency single file version. Same design, no build step needed. 
Drop on any static host (GitHub Pages, Netlify drag-drop, Vercel) and it works immediately.
