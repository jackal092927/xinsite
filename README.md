# xinsite

A modern, dark-themed personal portfolio for **Cheng Xin** — AI engineer, agent builder, startup technical generalist. Features an integrated AI assistant that visitors can chat with to learn about Xin's work, projects, and capabilities.

**Live:** `https://chengxin.dev` (planned)

## Features

- **Dark sci-fi aesthetic** — deep background, subtle grid/glow accents, high contrast typography
- **Single-page storytelling** — Hero → Projects → Skills → Experience → Writing → Contact
- **Integrated AI Assistant** — persistent chat panel on the homepage; visitors can ask about projects, technical decisions, background, and more
- **Voice input** (v0) — push-to-talk voice transcription for assistant queries
- **Project showcase** — 4–6 featured projects with problem/build/architecture/impact cards
- **Responsive** — works cleanly on desktop and mobile
- **Fast** — static-first with edge deployment, dynamic only for assistant API
- **SEO-friendly** — proper meta tags, Open Graph, structured data

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animations | Framer Motion |
| AI Assistant | Vercel AI SDK + OpenAI-compatible API |
| Voice Input | Web Speech API (browser-native STT) |
| Deployment | Vercel |
| Content | MDX files (local, no CMS) |
| Analytics | Vercel Analytics (or PostHog) |

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- An OpenAI-compatible API key (for the assistant)

## Installation

```bash
git clone https://github.com/jackal092927/xinsite.git
cd xinsite
pnpm install
cp .env.example .env.local
# Fill in your API key in .env.local
pnpm dev
```

## Usage

```bash
# Development
pnpm dev          # Start dev server at localhost:3000

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Lint & Format
pnpm lint         # ESLint
pnpm format       # Prettier
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI-compatible API key for assistant | Yes |
| `OPENAI_BASE_URL` | Custom base URL (if not using OpenAI directly) | No |
| `ASSISTANT_MODEL` | Model to use for assistant (default: `gpt-4o-mini`) | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics / PostHog ID | No |

## Project Structure

```
xinsite/
├── public/
│   ├── images/           # Project screenshots, profile photo
│   └── files/            # Resume PDF, etc.
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (fonts, theme, metadata)
│   │   ├── page.tsx      # Homepage (single-page sections)
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts  # Assistant API endpoint
│   ├── components/
│   │   ├── sections/     # Hero, Projects, Skills, Experience, Writing, Contact
│   │   ├── assistant/    # ChatPanel, VoiceButton, MessageBubble
│   │   └── ui/           # shadcn/ui primitives
│   ├── content/
│   │   ├── projects/     # MDX files for each project
│   │   ├── experience/   # Work experience entries
│   │   └── system-prompt.md  # Assistant persona & knowledge base
│   ├── lib/
│   │   ├── ai.ts         # AI SDK config, streaming helpers
│   │   └── utils.ts      # Shared utilities
│   └── styles/
│       └── globals.css   # Tailwind base + custom theme tokens
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Content Architecture

### Projects (featured on homepage)

Each project is an MDX file in `src/content/projects/` with frontmatter:

```yaml
---
title: "Project Name"
tagline: "One-line description"
tags: ["agents", "rust", "systems"]
links:
  github: "https://github.com/..."
  live: "https://..."
  paper: "https://arxiv.org/..."
image: "/images/projects/project-name.png"
featured: true
order: 1
---

## Problem
...

## What I Built
...

## Architecture
...

## Impact / Results
...
```

### Assistant Knowledge

The assistant is grounded in `src/content/system-prompt.md`, which contains:
- Who Xin is (condensed bio)
- Summary of each project
- Technical strengths and interests
- Career goals and what he's looking for
- Tone: helpful, technical, direct — not salesy

The assistant does NOT hallucinate details. If it doesn't know, it says so and suggests contacting Xin directly.

## Information Architecture (Homepage Sections)

1. **Hero** — Name, one-liner ("I build AI agents and the systems around them"), CTA buttons (Resume, GitHub, Contact), ambient visual (grid/particles)
2. **Selected Work** — 4–6 project cards, expandable to full detail
3. **Technical DNA** — Skill clusters: Agent Systems, ML/AI, Systems & Infrastructure, Full-Stack Product Engineering
4. **Experience** — Timeline or cards, industry-oriented framing
5. **Thinking** — Optional: 2–3 blog posts or short essays (links to future blog)
6. **Contact** — Email, GitHub, LinkedIn, "or ask the assistant →"

## Design Tokens (Dark Theme)

```
Background:     #0a0a0f (near-black with slight blue)
Surface:        #12121a
Card:           #1a1a2e
Border:         #2a2a3e
Text Primary:   #e4e4e7
Text Secondary: #a1a1aa
Accent:         #6366f1 (indigo-500)
Accent Glow:    #818cf8 (indigo-400)
Success:        #22c55e
```

## Phased Rollout

### v0 — MVP (target: 1 weekend)
- [x] Project scaffold (Next.js + Tailwind + shadcn/ui)
- [ ] Homepage with all 6 sections (static content)
- [ ] Dark theme with design tokens
- [ ] AI assistant panel (text chat, streaming responses)
- [ ] Voice input (Web Speech API push-to-talk)
- [ ] Mobile responsive
- [ ] Deploy to Vercel

### v1 — Polish & Content
- [ ] Real project content (MDX files with screenshots)
- [ ] Smooth scroll-triggered animations (Framer Motion)
- [ ] Assistant grounding with full project knowledge
- [ ] Resume PDF download
- [ ] SEO optimization (meta, OG, structured data)
- [ ] Custom domain setup

### v2 — Voice Output & Beyond
- [ ] Text-to-speech assistant responses (ElevenLabs or browser TTS)
- [ ] Blog/writing section with MDX
- [ ] Visitor analytics dashboard
- [ ] Rate limiting and cost controls for assistant API

## Assumptions (please review)

> These are decisions I made based on best practices and our discussion. Let me know if any should change.

- **Domain**: Planning for `chengxin.dev` — you'll need to register this (or suggest alternatives)
- **Hosting**: Vercel free tier is sufficient for v0; upgrade if traffic spikes
- **AI Provider**: OpenAI by default, but the abstraction supports any OpenAI-compatible endpoint (Groq, Together, self-hosted)
- **Assistant cost control**: v0 uses `gpt-4o-mini` to keep costs low; rate-limited to ~20 messages per visitor session
- **No CMS**: Content lives in MDX files checked into git; no Notion/Contentful integration
- **No auth**: The site is fully public; no login or gated content
- **No blog in v0**: Writing section is a placeholder with links; full blog comes in v1
- **Voice input only in v0**: Voice output (TTS) deferred to v2
- **Academic publications**: Not featured on homepage; available via a subtle "Publications" link or through the assistant
- **Profile photo**: Will reuse existing asset or you provide a new one
- **Language**: Site is English-only for v0; bilingual (EN/ZH) is a potential v2 feature

## License

MIT
