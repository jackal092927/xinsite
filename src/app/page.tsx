import Link from "next/link";
import {
  experiences,
  featuredProjects,
  profile,
  skillGroups,
  thinking,
} from "@/content/site-data";

function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <div className="section-title mb-3">{eyebrow}</div>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function AssistantPlaceholder() {
  return (
    <aside className="glass sticky top-6 rounded-3xl p-5 shadow-2xl shadow-indigo-950/30">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">Assistant</p>
          <p className="mt-1 text-xs text-zinc-400">
            Reserved for future web chat / voice assistant.
          </p>
        </div>
        <div className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] text-indigo-200">
          coming soon
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-white/6 bg-white/4 p-3 text-sm text-zinc-300">
          Ask about Xin&apos;s projects, technical strengths, research, or
          startup fit.
        </div>
        <div className="rounded-2xl border border-dashed border-indigo-400/25 bg-indigo-500/5 p-3 text-sm text-zinc-400">
          Chat backend intentionally deferred. This panel reserves the space so
          the future assistant has a natural home.
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          "What kinds of AI systems has Xin built?",
          "Which projects best show startup fit?",
          "Show me research work relevant to industry.",
        ].map((prompt) => (
          <button
            key={prompt}
            className="w-full rounded-2xl border border-white/8 bg-white/3 px-3 py-2 text-left text-sm text-zinc-300 transition hover:border-indigo-400/30 hover:bg-indigo-500/8"
            type="button"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/6 bg-black/20 p-3 text-xs leading-6 text-zinc-500">
        Future hook: <code className="text-indigo-200">POST /api/chat</code>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
          {/* ── Nav ── */}
          <header className="glass sticky top-4 z-20 rounded-full px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="text-sm font-semibold tracking-[0.18em] text-white uppercase"
              >
                Cheng Xin
              </Link>
              <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                <a href="#work" className="hover:text-white">
                  Work
                </a>
                <a href="#skills" className="hover:text-white">
                  Skills
                </a>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
                <a href="#thinking" className="hover:text-white">
                  Thinking
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
                <Link
                  href="/research"
                  className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-indigo-100 hover:bg-indigo-500/20"
                >
                  Research
                </Link>
              </nav>
            </div>
          </header>

          {/* ── Two-column layout ── */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            {/* Left: main content */}
            <div className="space-y-20 pb-24">
              {/* Hero */}
              <section className="pt-8 sm:pt-16">
                <div className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs tracking-[0.12em] text-indigo-200">
                  AI/ML Researcher, Agent Builder, Startup Funding Engineer
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl sm:leading-[1.05]">
                  {profile.tagline}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  {profile.subtagline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                  >
                    View selected work
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4"
                  >
                    Resume PDF
                  </a>
                  <Link
                    href="/research"
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4"
                  >
                    Research archive
                  </Link>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4"
                  >
                    GitHub
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {(
                    [
                      ["Resume", "Current industry-facing PDF ready to send", profile.resume],
                      ["GitHub", "Code, repos, and technical footprint", profile.github],
                      ["LinkedIn", "Recruiter-friendly profile surface", profile.linkedin],
                      ["Research", "Papers, academic work, and teaching archive", "/research"],
                    ] as const
                  ).map(([label, value, href]) => {
                    const isInternal = href.startsWith("/");
                    const className =
                      "glass rounded-2xl p-4 transition hover:border-indigo-400/30 hover:bg-white/5";

                    return isInternal ? (
                      <Link key={label} href={href} className={className}>
                        <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          {label}
                        </div>
                        <div className="mt-3 text-sm leading-6 text-zinc-200">
                          {value}
                        </div>
                      </Link>
                    ) : (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={className}
                      >
                        <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          {label}
                        </div>
                        <div className="mt-3 text-sm leading-6 text-zinc-200">
                          {value}
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Mini stat cards */}
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {(
                    [
                      [
                        "Focus",
                        "AI agents, interpretable ML, intelligent systems",
                      ],
                      [
                        "Bias",
                        "Build useful things, not just clever demos",
                      ],
                      [
                        "Current mode",
                        "Positioning for industry, startup, and builder-facing opportunities",
                      ],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label} className="glass rounded-2xl p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        {label}
                      </div>
                      <div className="mt-3 text-sm leading-6 text-zinc-200">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Selected Work */}
              <SectionShell
                id="work"
                eyebrow="Selected work"
                title="Case studies that show how I attack hard technical problems"
              >
                <div className="grid gap-5">
                  {featuredProjects.map((project) => (
                    <article
                      key={project.title}
                      className="glass rounded-3xl p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-indigo-200">
                            {project.tag}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                            Problem
                          </div>
                          <p className="mt-3 text-sm leading-7 text-zinc-300">
                            {project.problem}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                            What I built
                          </div>
                          <p className="mt-3 text-sm leading-7 text-zinc-300">
                            {project.built}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                            Why it matters
                          </div>
                          <p className="mt-3 text-sm leading-7 text-zinc-300">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-indigo-400/15 bg-indigo-500/5 p-4">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-indigo-200/80">
                          Evidence
                        </div>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                          {project.evidence.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.links ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.links.map((link) => {
                            const isInternal = link.href.startsWith("/");
                            const className =
                              "rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4";

                            return isInternal ? (
                              <Link key={link.label} href={link.href} className={className}>
                                {link.label}
                              </Link>
                            ) : (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={className}
                              >
                                {link.label}
                              </a>
                            );
                          })}
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </SectionShell>

              {/* Technical DNA */}
              <SectionShell
                id="skills"
                eyebrow="Technical DNA"
                title="What I bring to a team"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {skillGroups.map((group) => (
                    <div
                      key={group.title}
                      className="glass rounded-3xl p-6"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {group.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionShell>

              {/* Experience */}
              <SectionShell
                id="experience"
                eyebrow="Experience"
                title="A research background shaped for high-agency technical work"
              >
                <div className="space-y-4">
                  {experiences.map((item) => (
                    <div
                      key={item.role}
                      className="glass rounded-3xl p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-indigo-200">
                            {item.org}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/8 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionShell>

              {/* Thinking */}
              <SectionShell
                id="thinking"
                eyebrow="Thinking"
                title="The kind of problems I like"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {thinking.map((item) => (
                    <div
                      key={item.title}
                      className="glass rounded-3xl p-6"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionShell>

              {/* Contact */}
              <SectionShell
                id="contact"
                eyebrow="Contact"
                title="If you think we should build something, talk to me"
              >
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      className="rounded-2xl border border-white/8 bg-white/4 p-4 transition hover:border-indigo-400/30"
                      href={`mailto:${profile.email}`}
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        Email
                      </div>
                      <div className="mt-2 text-base text-white">
                        {profile.email}
                      </div>
                    </a>
                    <a
                      className="rounded-2xl border border-white/8 bg-white/4 p-4 transition hover:border-indigo-400/30"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        GitHub
                      </div>
                      <div className="mt-2 text-base text-white">
                        jackal092927
                      </div>
                    </a>
                    <a
                      className="rounded-2xl border border-white/8 bg-white/4 p-4 transition hover:border-indigo-400/30"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        LinkedIn
                      </div>
                      <div className="mt-2 text-base text-white">
                        jackalxin
                      </div>
                    </a>
                    <a
                      className="rounded-2xl border border-white/8 bg-white/4 p-4 transition hover:border-indigo-400/30"
                      href={profile.resume}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        Resume PDF
                      </div>
                      <div className="mt-2 text-base text-white">
                        Current industry-facing version
                      </div>
                    </a>
                    <Link
                      className="rounded-2xl border border-white/8 bg-white/4 p-4 transition hover:border-indigo-400/30"
                      href="/research"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        Research archive
                      </div>
                      <div className="mt-2 text-base text-white">
                        Publications, academic profile, teaching
                      </div>
                    </Link>
                  </div>
                </div>
              </SectionShell>
            </div>

            {/* Right: assistant placeholder */}
            <AssistantPlaceholder />
          </div>
        </div>
      </div>
    </main>
  );
}
