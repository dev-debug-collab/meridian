# Meridian Advisory — Tender & Procurement Consultancy Website

A premium, dark-themed corporate website for a tender, procurement, and EPC
consultancy. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- Premium dark theme with gold / emerald / royal-blue accents and glassmorphism
- Smooth scrolling powered by **Lenis**
- Scroll-triggered reveal animations, animated counters, and a magnetic CTA button
- Premium loading screen + scroll progress indicator
- Sticky glass navbar with a mega menu for Services
- 12 fully-built sections: Hero, About, Services, Industries, Why Choose Us,
  Tender Process timeline, Stats, Featured Projects, Testimonials, FAQ, Contact, Footer
- Contact form built with **React Hook Form + Zod** validation
- SEO: metadata, Open Graph, JSON-LD schema, `robots.ts`, `sitemap.ts`
- Fully responsive, accessible, and optimized for performance

## 🛠 Tech Stack

Next.js 15 · React 18 · TypeScript · Tailwind CSS · Framer Motion · GSAP ·
Lenis · Lucide Icons · React Hook Form · Zod

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata, JSON-LD
    page.tsx           # Home page — composes all sections
    globals.css         # Theme tokens & global styles
    robots.ts / sitemap.ts
  components/
    navbar.tsx, hero.tsx, about.tsx, services.tsx, industries.tsx,
    why-choose-us.tsx, process.tsx, stats.tsx, projects.tsx,
    testimonials.tsx, faq.tsx, contact.tsx, contact-form.tsx, footer.tsx
    loading-screen.tsx, scroll-progress.tsx, smooth-scroll-provider.tsx
    magnetic-button.tsx, reveal.tsx, section-heading.tsx, counter.tsx
  lib/
    data.ts            # All site copy & content (edit here to rebrand)
    utils.ts, smooth-scroll.ts
```

## ✏️ Customizing Content

All business copy (services, industries, stats, testimonials, FAQs, contact
info) lives in `src/lib/data.ts`. Update the `siteConfig` object and the
exported arrays to rebrand the site for a different company.

## 🖼 Images

Placeholder project/about imagery is pulled from Unsplash at build/runtime.
Replace `src` URLs in `data.ts` and `about.tsx` with your own licensed assets
before going to production, and add a real Open Graph image at
`public/og-image.jpg` plus a favicon at `public/favicon.ico`.

## 📦 Deployment

This project deploys cleanly to **Vercel**:

```bash
npm run build
```

Push to GitHub and import the repository on [vercel.com](https://vercel.com),
or deploy to any Node.js-compatible host that supports Next.js 15.

## 📄 License

Proprietary — content and branding (Meridian Advisory) are illustrative
placeholders. Replace with your own company branding before commercial use.
