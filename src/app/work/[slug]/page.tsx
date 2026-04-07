import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects, getFeaturedProjectBySlug, profile } from "@/content/site-data";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getFeaturedProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Case study not found",
    };
  }

  return {
    title: `${project.title} · Case Study`,
    description: project.impact,
  };
}

export default function WorkCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getFeaturedProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="grid-bg">
        <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8 lg:px-10">
          <header className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <a href="/#work" className="hover:text-white">
                Selected work
              </a>
              <span>/</span>
              <span className="text-zinc-200">Case study</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.signals?.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-indigo-100"
                >
                  {signal}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-indigo-200">
              {project.tag}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              {project.caseStudy.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => {
                const isInternal = link.href.startsWith("/");
                const text = link.kind ? `${link.kind} · ${link.label}` : link.label;
                const className =
                  "rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/30 hover:bg-white/4";

                if (link.href.includes(`/work/${project.slug}`)) {
                  return null;
                }

                return isInternal ? (
                  <Link key={link.label} href={link.href} className={className}>
                    {text}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-6">
              {[
                ["Problem", project.problem],
                ["What I built", project.built],
                ["Why it matters", project.impact],
                ["Situation", project.caseStudy.situation],
                ["Industry relevance", project.caseStudy.relevance],
              ].map(([title, body]) => (
                <section key={title} className="glass rounded-3xl p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {title}
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{body}</p>
                </section>
              ))}

              <section className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Constraints
                </div>
                <ul className="mt-4 space-y-3 text-base leading-8 text-zinc-300">
                  {project.caseStudy.constraints.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Approach
                </div>
                <ul className="mt-4 space-y-3 text-base leading-8 text-zinc-300">
                  {project.caseStudy.approach.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Outcomes / Evidence
                </div>
                <ul className="mt-4 space-y-3 text-base leading-8 text-zinc-300">
                  {[...project.evidence, ...project.caseStudy.outcomes].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Contact
                </div>
                <div className="mt-4 space-y-3 text-sm text-zinc-300">
                  <a href={`mailto:${profile.email}`} className="block hover:text-white">
                    {profile.email}
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="block hover:text-white">
                    GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
                    LinkedIn
                  </a>
                  <a href={profile.resume} target="_blank" rel="noreferrer" className="block hover:text-white">
                    Resume PDF
                  </a>
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  More
                </div>
                <div className="mt-4 space-y-3 text-sm text-zinc-300">
                  <Link href="/research" className="block hover:text-white">
                    Research archive
                  </Link>
                  <a href="/#work" className="block hover:text-white">
                    Back to selected work
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
