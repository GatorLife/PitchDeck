# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Slidev-based presentation deck for GATOR (Cyber Training & Readiness Platform), targeting DoD commanders. The deck is optimized for a commander-focused narrative about cyber readiness measurement and follows a 12-slide structure from problem identification through call to action.

## Commands

### Development
```bash
npm run dev          # Start dev server at localhost:3030 with hot reload
npm run build        # Build static files to dist/
npm run export       # Export presentation to PDF
```

### Installation
```bash
npm install          # Install all dependencies (Slidev + Vue)
```

## Architecture

### Core Structure

**slides.md** - Main entry point that imports modular slide pages
- Configures theme, transitions, and metadata in front matter
- Each slide referenced via `src: ./pages/N-slide-name.md` syntax
- Slides numbered 1-13 following the narrative structure

**pages/** directory - Individual slide files (1-title.md through 13-call-to-action.md)
- Each page is a standalone markdown file with its own front matter (`layout: default`, `layout: center`, etc.)
- Each page imports style.css via `<style src="../style.css"></style>` at the top
- Uses Slidev's markdown syntax with Vue components and HTML

**style.css** - Complete custom theme implementation
- Defines all GATOR brand colors as CSS variables (--gator-*)
- Overrides Slidev's default layout styles (`.slidev-layout`)
- Custom component styles: `.gator-card`, `.stat-box`, `.highlight`, `.citation`
- Utility classes: `.compact-list`, `.text-xs`, `.grid-cols-2`, `.grid-cols-3`

### Critical Styling Constraints

**Slidev's Base Layout:**
- `.slidev-layout` has `h-full` (100% viewport height) - content MUST fit within this
- Default padding is `px-14 py-10` (3.5rem horizontal, 2.5rem vertical)
- Default heading sizes: h1=`text-4xl`, h2=`text-3xl`, h3=`text-2xl`

**Avoiding Overflow:**
- Never add `padding-bottom` or `position: relative` to `.slidev-layout` (conflicts with Slidev)
- Keep top margins minimal: use `mt-2` instead of `mt-8`
- Grid gaps should be `0.75rem` or less
- Use `.compact-list` class for list-heavy slides (reduces line-height and margins)
- Card padding should be `0.75rem` or less
- Footer `.citation` uses `margin-top: auto` NOT `position: absolute`

**Layout Patterns:**
- Two-column layouts: `<div class="grid-cols-2 mt-2">` (0.75rem gap defined in CSS)
- Three-column layouts: `<div class="grid-cols-3 mt-6">` (for centered slides only)
- Cards: `<div class="gator-card">` with minimal internal spacing
- Compact lists: `<ul class="text-sm compact-list">` for dense content
- Footers: `<div class="citation">` at bottom of each slide

### Slide Layouts

Slidev provides built-in layouts via front matter:
- `layout: default` - Standard content layout
- `layout: center` with `class: text-center` - Centered content (thesis, call-to-action)
- `layout: two-cols` - Two-column layout with `::right::` separator

### Component Hierarchy

**Custom Components (in style.css):**
1. `.gator-card` - Content containers with border, padding, shadow
2. `.stat-box` - Highlighted metrics with large numbers (e.g., "90%" rubric agreement)
3. `.highlight` - Important callouts with gradient background and left border
4. `.citation` - Source citations that appear at bottom of slides
5. `.compact-list` - Tighter list spacing for content-heavy slides

**Typography Scale:**
- h1: 2rem (slide titles)
- h2: 1.5rem (section headers)
- h3: 1.125rem (subsection headers)
- text-sm: 0.875rem (body text in cards)
- text-xs: 0.7rem (supporting text, labels)

### Color System

Primary colors defined as CSS variables in style.css:
- `--gator-bg`: Dark background (hsl(0, 0%, 3.92%))
- `--gator-fg`: Light text (hsl(0, 0%, 98.04%))
- `--gator-primary`: Green accent (hsl(142.09, 70.56%, 45.29%))
- `--gator-card`: Card background (hsl(240, 5.88%, 10%))
- `--gator-muted`: Muted text (hsl(240, 5.03%, 64.90%))

Use `.text-primary` class for green accent text.

## Content Guidelines

### Narrative Structure
The deck follows a specific flow optimized for commander audiences:
1. Cold Open - Establish urgency (readiness risk)
2. Problem - Define gaps (standards drift, subjectivity, speed-of-change)
3. Market Reality - PCTE context and scale
4. Thesis - GATOR value proposition
5. Technical Detail - How it works (3-component loop)
6. Commander Benefits - "Why buy" in 90 seconds
7. Security - Enclave deployment and compliance
8. Differentiators - vs. traditional ranges and commercial courses
9. Credibility - Mission match and policy alignment
10. Metrics - Data-backed evidence
11. Pilot Plan - 60-90 day concrete action
12. Call to Action - Next steps

### Source Citations
All substantive claims must cite authoritative sources in `.citation` divs:
- GAO reports (e.g., GAO-23-106673)
- USCYBERCOM guidance (JQR, JCT&CS)
- DoD policy (e.g., DoD CIO Cyber Workforce Strategy)
- Defense media (DefenseScoop, War on the Rocks)

### Writing Style
- Commander-focused language (not technical jargon)
- Action-oriented ("can answer 'Are we ready?'" not "provides capability to assess")
- Evidence-backed (cite sources, use specific metrics)
- Military aesthetics (use emojis sparingly: 🎯 ⚡ 🔒 ✅ 📊)

## Common Modifications

### Adding a New Slide
1. Create new file in `pages/` directory (e.g., `14-new-slide.md`)
2. Add layout front matter and style import
3. Start with h1 title (`# **Title**`)
4. Keep spacing tight (`mt-2` for first content)
5. Use `.grid-cols-2` for two-column layouts
6. End with `.citation` if needed
7. Reference the new page in `slides.md` with `---` separator and `src: ./pages/14-new-slide.md`

Example (pages/14-new-slide.md):
```markdown
---
layout: default
---

<style src="../style.css"></style>

# **New Slide Title**

<div class="grid-cols-2 mt-2">
<div class="gator-card">
Content here
</div>
</div>

<div class="citation">
Source: Citation here
</div>
```

Then in slides.md, add:
```markdown
---
src: ./pages/14-new-slide.md
---
```

### Preventing Content Overflow
If a slide is overflowing:
1. Reduce top margins (mt-8 → mt-2)
2. Apply `.compact-list` to lists
3. Reduce font sizes (add `.text-sm` or `.text-xs`)
4. Use `<h3 class="mb-1">` instead of `###` for tighter spacing
5. Ensure card content is minimal

### Updating Brand Colors
Edit CSS variables in style.css under `:root`:
```css
--gator-primary: hsl(142.09, 70.56%, 45.29%);  /* Change hue for different accent */
```

## Testing
No automated tests. Visual QA via:
1. Run `npm run dev`
2. Navigate through all slides (use arrow keys or Space)
3. Check for content overflow (especially on slides with lists/tables)
4. Verify citations are visible at bottom
5. Test in presenter mode (press `P` key in browser)

### Presenter Mode Shortcuts
- **Arrow keys / Space** - Navigate slides
- **P** - Toggle presenter mode (shows notes and next slide preview)
- **F** - Toggle fullscreen
- **O** - Toggle overview mode
- **G** - Toggle grid view

## Deployment
Configured for both Netlify and Vercel via `netlify.toml` and `vercel.json`. The build command is `npm run build` and output directory is `dist/`.
