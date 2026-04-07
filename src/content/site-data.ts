export const profile = {
  name: "Cheng Xin",
  shortName: "Xin",
  tagline: "I turn AI research into working systems.",
  subtagline:
    "AI/ML researcher, agent builder, and startup funding engineer focused on turning fuzzy ideas into useful products, technical leverage, and real execution.",
  location: "New Jersey, USA",
  email: "cx122@rutgers.edu",
  github: "https://github.com/jackal092927",
  linkedin: "https://www.linkedin.com/in/jackalxin/",
  resume: "/resume/cheng-xin-resume-agent-dev-2026-04-07.pdf",
};

export const featuredProjects = [
  {
    title: "Agent Systems & OpenClaw Workflows",
    tag: "Agents · Systems · Tooling",
    signals: ["Open Source", "Production-minded", "AI agents"],
    problem:
      "Most AI assistants are still fragile demos: weak tool orchestration, poor memory behavior, low observability, and not enough structure to survive real usage.",
    built:
      "Designed and iterated on agent workflows, memory routing, task decomposition, and execution patterns for assistants that need to actually do work instead of just answer nicely.",
    impact:
      "This is the layer that turns a model capability into product behavior: better reliability, better debugging, and better chances of surviving operational constraints.",
    evidence: [
      "Worked on orchestration patterns for tool use, long-context handling, and structured execution.",
      "Explored coding-agent loops, subagent coordination, and more observable agent behavior.",
      "Focus: move from 'LLM demo' to durable product behavior with real operational constraints.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/openclaw/openclaw", kind: "Code" },
      { label: "Research archive", href: "/research", kind: "Archive" },
    ],
  },
  {
    title: "TopInG",
    tag: "ML · Graph Learning · Interpretability",
    signals: ["ICML 2025", "Research", "Interpretability"],
    problem:
      "A model can look accurate while relying on the wrong signals. For high-stakes use, explanation quality and rationale stability matter almost as much as raw accuracy.",
    built:
      "Built an interpretable graph learning framework that uses persistent homology to surface stable rationale subgraphs instead of brittle post-hoc explanations.",
    impact:
      "Targets a practical trust problem industry teams care about: not just whether the model works, but whether it is right for the right reason.",
    evidence: [
      "Combined graph learning with persistent homology for rationale discovery.",
      "Improved stability and interpretability under spurious-correlation pressure.",
      "Accepted to ICML 2025.",
    ],
    links: [
      { label: "Paper", href: "https://openreview.net/pdf?id=u4LlYWJHUF", kind: "Paper" },
      { label: "Research archive", href: "/research", kind: "Archive" },
    ],
  },
  {
    title: "Neuc-MDS",
    tag: "Geometry · ML Theory · Representation",
    signals: ["NeurIPS 2024", "Theory", "Representation"],
    problem:
      "Classical dimensionality reduction throws away useful structure when the data geometry stops behaving nicely in Euclidean terms.",
    built:
      "Reworked multidimensional scaling beyond Euclidean assumptions with bilinear-form machinery so previously discarded negative-eigenvalue information could become usable.",
    impact:
      "Shows the kind of technical work I like: take an awkward theoretical limitation, then turn it into something that expands what representation-learning systems can do.",
    evidence: [
      "Generalized classical MDS for non-Euclidean and non-metric settings.",
      "Converted difficult geometric structure into usable signal rather than wasted residue.",
      "Presented at NeurIPS 2024.",
    ],
    links: [
      { label: "Paper", href: "http://jackal092927.github.io/files/neucmds.pdf", kind: "Paper" },
      { label: "Research archive", href: "/research", kind: "Archive" },
    ],
  },
  {
    title: "DL3DV-10K",
    tag: "3D Vision · Data · Benchmarking",
    signals: ["CVPR 2024", "51.2M frames", "Dataset"],
    problem:
      "Modern 3D vision systems need scale and realism, but many benchmarks are too small, too clean, or too detached from how deep-learning pipelines are actually used.",
    built:
      "Helped build a large-scale 3D vision dataset and benchmark for modern reconstruction and scene-understanding workflows.",
    impact:
      "Created infrastructure other teams can build on: better evaluation, harder real-world conditions, and a more serious benchmark surface for 3D learning systems.",
    evidence: [
      "Dataset scale: 51.2M frames across 10,510 real-world videos.",
      "Supports benchmarking for NeRF, reconstruction, and broader 3D scene understanding workflows.",
      "Published at CVPR 2024.",
    ],
    links: [
      { label: "Paper", href: "http://jackal092927.github.io/files/DL3DV-10K_CVPR2024.pdf", kind: "Paper" },
      { label: "Research archive", href: "/research", kind: "Archive" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Agent Systems",
    items: ["AI agents", "tool orchestration", "memory systems", "evaluation loops", "workflow design"],
  },
  {
    title: "ML & AI",
    items: ["graph learning", "interpretability", "representation learning", "AI for science", "3D vision"],
  },
  {
    title: "Systems & Infra",
    items: ["Python", "TypeScript", "automation", "developer tooling", "rapid prototyping"],
  },
  {
    title: "Builder Mode",
    items: ["0→1 execution", "research-to-product translation", "technical writing", "startup-style ownership"],
  },
];

export const experiences = [
  {
    role: "Postdoctoral Researcher",
    org: "Rutgers University",
    period: "Current",
    description:
      "Lead technically deep work across topological learning, trustworthy ML, and research-to-system translation. Increasingly focused on turning research judgment into usable AI tooling, agentic systems, and product-shaping technical direction.",
  },
  {
    role: "Ph.D. in Computer Science",
    org: "Purdue University",
    period: "Completed",
    description:
      "Built strong mathematical and algorithmic depth in topology, geometry, and machine learning foundations—training that now shows up as unusually high leverage on hard model, representation, and system-design problems.",
  },
  {
    role: "Lecturer",
    org: "Rutgers University",
    period: "Selected",
    description:
      "Owned end-to-end delivery of graduate algorithms instruction: structure, explanation, pacing, and technical communication. Good preparation for cross-functional environments where clarity matters as much as correctness.",
  },
];

export const thinking = [
  {
    title: "Research → Systems → Product",
    text: "I care about the translation layer between technically deep ideas and systems that actually ship.",
  },
  {
    title: "Interpretability where it matters",
    text: "A lot of my work focuses on structure, rationale quality, and guarantees. That bias carries into production AI too.",
  },
  {
    title: "Ambitious but grounded",
    text: "The sweet spot is technically nontrivial, product-relevant, and compact enough for a small team to push fast.",
  },
];

export const publications = [
  {
    title: "TopInG: Topologically Interpretable Graph Learning via Persistent Rationale Filtration",
    venue: "ICML 2025",
    year: "2025",
    href: "https://openreview.net/pdf?id=u4LlYWJHUF",
    summary:
      "A principled framework for interpretable graph learning using persistent homology and topological discrepancy.",
  },
  {
    title: "Johnson-Lindenstrauss Lemma Beyond Euclidean Geometry",
    venue: "NeurIPS 2025",
    year: "2025",
    href: "http://jackal092927.github.io/files/NeucJL/neucJL.pdf",
    summary:
      "Extends JL-style guarantees to non-Euclidean settings with fine-grained error analysis.",
  },
  {
    title: "Neuc-MDS: Non-Euclidean Multidimensional Scaling Through Bilinear Forms",
    venue: "NeurIPS 2024",
    year: "2024",
    href: "http://jackal092927.github.io/files/neucmds.pdf",
    summary:
      "Generalizes MDS to non-Euclidean and non-metric inputs using symmetric bilinear forms.",
  },
  {
    title: "Optimally Improving Cooperative Learning in a Social Setting",
    venue: "ICML 2024",
    year: "2024",
    href: "http://jackal092927.github.io/files/social_learning_arxiv.pdf",
    summary:
      "Studies how to optimally improve classifier quality in cooperative social learning networks.",
  },
  {
    title: "DL3DV-10K: A Large-Scale Scene Dataset for Deep Learning-based 3D Vision",
    venue: "CVPR 2024",
    year: "2024",
    href: "http://jackal092927.github.io/files/DL3DV-10K_CVPR2024.pdf",
    summary:
      "Large-scale real-world 3D vision benchmark with over 51 million frames.",
  },
  {
    title: "Generalized Persistence Algorithm for Decomposing Multi-parameter Persistence Modules",
    venue: "JACT 2022",
    year: "2022",
    href: "http://jackal092927.github.io/files/paper1.pdf",
    summary:
      "Generalizes the persistence algorithm for decomposing multiparameter persistence modules.",
  },
  {
    title: "Computing Bottleneck Distance for 2-D Interval Decomposable Modules",
    venue: "SoCG 2018",
    year: "2018",
    href: "http://jackal092927.github.io/files/paper2.pdf",
    summary:
      "Efficient algorithm for bottleneck distance in 2-parameter interval decomposable modules.",
  },
];

export const researchExtras = {
  scholar: "https://jackal092927.github.io/scholar",
  oldSite: "https://jackal092927.github.io",
  teaching: [
    {
      title: "CS 513: Design and Analysis of Algorithms",
      org: "Rutgers University",
      period: "Fall 2025",
    },
  ],
};
