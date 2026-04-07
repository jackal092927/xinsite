import Link from "next/link";
import { profile, publications, researchExtras } from "@/content/site-data";

export default function ResearchPage() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="section-title mb-3">Research archive</div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Academic work, publications, and teaching
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                This page keeps the academic side of my work accessible without making it the center of my industry-facing homepage.
              </p>
            </div>
            <Link
              href="/"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4"
            >
              ← Back home
            </Link>
          </div>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5">
            {publications.map((paper) => (
              <article key={paper.title} className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{paper.title}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-indigo-200">
                      {paper.venue} · {paper.year}
                    </p>
                  </div>
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100 transition hover:bg-indigo-500/20"
                  >
                    Open paper
                  </a>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{paper.summary}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="glass rounded-3xl p-5">
              <p className="text-sm font-semibold text-white">Profile links</p>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <a className="block rounded-2xl border border-white/8 bg-white/4 px-4 py-3 hover:border-indigo-400/30" href={researchExtras.scholar} target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
                <a className="block rounded-2xl border border-white/8 bg-white/4 px-4 py-3 hover:border-indigo-400/30" href={researchExtras.oldSite} target="_blank" rel="noreferrer">
                  Previous academic site
                </a>
                <a className="block rounded-2xl border border-white/8 bg-white/4 px-4 py-3 hover:border-indigo-400/30" href={`mailto:${profile.email}`}>
                  Email
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-5">
              <p className="text-sm font-semibold text-white">Teaching</p>
              <div className="mt-4 space-y-3">
                {researchExtras.teaching.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                    <div className="text-sm font-medium text-white">{item.title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{item.org}</div>
                    <div className="mt-2 text-sm text-zinc-300">{item.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
