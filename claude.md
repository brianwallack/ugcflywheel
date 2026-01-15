# UGC Flywheel - Project Documentation

## Overview

UGC Flywheel is a premium landing page for a UGC (User Generated Content) creator training program powered by Triibe Talents. The site features a dark, bold design with gold accents, targeting aspiring content creators who want to monetize their content through brand partnerships.

## Tech Stack

- **Framework**: Next.js 16.1.2 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.26.2
- **Icons**: Lucide React 0.562.0
- **Language**: TypeScript 5

## Project Structure

```
ugcflywheel/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & design system
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   └── page.tsx         # Main landing page
│   └── components/
│       ├── LoadingScreen.tsx  # Animated loading overlay
│       ├── Navbar.tsx         # Fixed navigation bar
│       ├── Hero.tsx           # Hero section with CTAs
│       ├── BrandMarquee.tsx   # Infinite-scroll brand logos
│       ├── VideoSection.tsx   # VSL video embed
│       ├── Testimonials.tsx   # Creator success stories
│       ├── Directors.tsx      # Team profiles (Jaden & Brian)
│       ├── FAQ.tsx            # Accordion FAQ section
│       └── Footer.tsx         # Footer with CTAs & contact
├── public/
│   └── images/              # Static assets (placeholder)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Design System

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | #0A0A0A | Primary background |
| `--background-secondary` | #121212 | Section backgrounds |
| `--background-card` | #1A1A1A | Card backgrounds |
| `--accent-gold` | #D4AF37 | Primary gold accent |
| `--accent-gold-light` | #FFD700 | Light gold accent |
| `--foreground` | #F5F5F0 | Primary text |
| `--foreground-muted` | #888888 | Secondary text |

### Typography
- **Display**: Bebas Neue (`--font-bebas`) - Headlines
- **Body**: DM Sans (`--font-dm-sans`) - Body text
- **Mono**: Space Mono (`--font-space-mono`) - Stats/numbers

### Utility Classes
- `.text-gold-gradient` - Gold gradient text effect
- `.btn-gold` - Primary gold button
- `.btn-gold-outline` - Outlined gold button
- `.card-dark` - Dark card with hover effects
- `.section-padding` - Consistent section spacing
- `.geometric-bg` - Subtle grid background pattern

## Components

### LoadingScreen
Full-screen loading overlay with animated "UGC FLYWHEEL" wordmark. Displays for 2 seconds on page load, then fades out.

### Navbar
Fixed navigation with:
- Logo (left)
- Navigation links: About, Testimonials, FAQ, Contact
- CTA button: "Join the Community"
- Mobile hamburger menu

### Hero
Main hero section featuring:
- Animated counter: "500+ Creators Trained"
- Headline: "Turn Content Into Paid UGC, Or Get Every Dollar Back"
- Three CTAs:
  1. Join the Community (Whop)
  2. Want to see if you qualify? (Typeform)
  3. Brand booking link (Calendly)
- Scroll indicator animation

### BrandMarquee
Infinite scrolling carousel of brand logos (currently placeholders).

### VideoSection
YouTube embed with custom play button and gold corner accents. Uses placeholder video ID.

### Testimonials
6 creator testimonial cards in a 3-column grid with:
- Avatar, name, handle
- 5-star rating
- Quote
- Achievement badge (e.g., "First Deal in 2 Weeks")

### Directors
Two profile cards for Jaden Versluis and Brian Wallack with:
- Avatar placeholder
- Name, title, bio
- Email contact
- Social links (placeholder)

### FAQ
5-question accordion with animated expand/collapse.

### Footer
- Final CTA section
- Contact emails
- Social links
- Copyright

## External Links

| Purpose | URL |
|---------|-----|
| Whop Community | https://whop.com/checkout/plan_CQEyhzLHHXd81 |
| Qualification Form | https://form.typeform.com/to/XGz0agvh |
| Brand Booking | https://calendly.com/jaden-triibetalents/triibe-1on1-coaching-call |

## Commands

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Placeholder Content (TODO)

Items that need real content:
- [ ] Brand logos in `/public/images/brands/`
- [ ] YouTube video ID in `VideoSection.tsx` (currently: `dQw4w9WgXcQ`)
- [ ] Creator testimonial photos in `/public/images/testimonials/`
- [ ] Director headshots in `/public/images/directors/`
- [ ] Actual creator count in `Hero.tsx` (currently: 500)
- [ ] Social media links in Footer and Directors components

## Animation Timings

The page uses staggered animations synced with the 2-second loading screen:
- Loading screen: 0-2s
- Navbar: delay 2s
- Hero badge: delay 2.2s
- Hero headline: delay 2.4s
- Hero subheadline: delay 2.6s
- Hero CTAs: delay 2.8s
- Brand CTA: delay 3s
- Scroll indicator: delay 3.2s

## Contact

- **Brian Wallack**: brian@triibetalents.com
- **Jaden Versluis**: jaden@triibetalents.com
