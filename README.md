# GATOR Pitch Deck

Commander-focused pitch deck for GATOR Cyber Training & Readiness Platform, built with [Slidev](https://sli.dev/).

## Overview

This presentation addresses three critical pain points in DoD cyber readiness:
1. **Unknown readiness** - No standardized metrics or reporting
2. **Subjective & drifting standards** - Unit-level variance and continuous JQR updates
3. **Speed-of-change gap** - Threats evolve faster than training syllabi

GATOR provides objective, AI-powered evaluation of operator performance with real-time readiness analytics tied to JQRs.

## Features

- **12 Commander-Focused Slides**
  - Cold Open (readiness risk)
  - Problem Statement (3 gaps)
  - Market Reality (PCTE + scale)
  - GATOR Thesis
  - How It Works (3-component loop)
  - Commander Benefits
  - Security & Deployment
  - Differentiators
  - Credibility & Alignment
  - Data-Backed Metrics
  - Pilot Plan (60-90 days)
  - Call to Action

- **GATOR Brand Theme**
  - Dark background (hsl(0, 0%, 3.92%))
  - Primary green accent (hsl(142.09, 70.56%, 45.29%))
  - Professional military aesthetics
  - Custom CSS styling

- **Source Citations**
  - GAO reports
  - USCYBERCOM guidance
  - DefenseScoop
  - DoD CIO frameworks

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start dev server with hot reload
npm run dev
# or
pnpm dev
```

Open [http://localhost:3030](http://localhost:3030) in your browser.

### Build for Production

```bash
# Build static files
npm run build
```

Output will be in `dist/` directory.

### Export to PDF

```bash
# Export presentation to PDF
npm run export
```

## Presentation Structure

The deck follows a commander-focused narrative:

1. **Opening Hook** - Establishes urgency around unknown readiness
2. **Problem Definition** - Three gaps backed by policy/GAO data
3. **Market Context** - PCTE scale & measurement bottleneck
4. **Solution Positioning** - GATOR as evidence-based readiness tool
5. **Technical Detail** - How the system works (3 components)
6. **Value Proposition** - Commander benefits in 90 seconds
7. **Risk Mitigation** - Security/deployment for enclaves
8. **Competitive Position** - vs ranges & commercial courses
9. **Trust Building** - Mission alignment & TRL status
10. **Data Credibility** - Metrics from authoritative sources
11. **Action Plan** - Concrete 60-90 day pilot
12. **Close** - Clear next steps

## Customization

### Updating Content

Edit [slides.md](./slides.md) to modify slide content. Each slide is separated by `---`.

### Styling

The GATOR theme is defined in `style.css`. Key CSS variables:

```css
--gator-bg: hsl(0, 0%, 3.92%);           /* Background */
--gator-fg: hsl(0, 0%, 98.04%);          /* Text */
--gator-primary: hsl(142.09, 70.56%, 45.29%);  /* Green accent */
--gator-card: hsl(240, 5.88%, 10%);      /* Card background */
```

### Adding Slides

Add new slides in `slides.md`:

```markdown
---
layout: default
---

# Your Slide Title

Your content here...
```

## Keyboard Shortcuts (Presenter Mode)

- **Arrow keys** - Navigate slides
- **Space** - Next slide
- **F** - Toggle fullscreen
- **O** - Toggle overview
- **G** - Toggle grid view

## Deployment

### Netlify

Already configured with `netlify.toml`. Connect your repo to Netlify for automatic deployments.

### Vercel

Already configured with `vercel.json`. Deploy with:

```bash
vercel
```

### Static Export

After building (`npm run build`), serve the `dist/` directory with any static host.

## Resources

- [Slidev Documentation](https://sli.dev/)
- [Markdown Syntax](https://sli.dev/guide/syntax.html)
- [Customization Guide](https://sli.dev/custom/)

## License

Proprietary - GATOR Platform
