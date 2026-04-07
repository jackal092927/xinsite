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
};

export const featuredProjects = [
  {
    title: "Agent Systems & OpenClaw Workflows",
    tag: "Agents · Systems · Tooling",
    summary:
      "Designed and iterated on agent workflows, memory routing, and execution patterns for real AI assistants that need to do more than generate text.",
    bullets: [
      "Worked on orchestration patterns for tool use, long-context handling, task decomposition, and structured execution.",
      "Explored coding-agent loops, subagent coordination, and ways to make agent behavior more observable and debuggable.",
      "Focus: move from 'LLM demo' to durable product behavior with real operational constraints.",
    ],
  },
  {
    title: "TopInG",
    tag: "ML · Graph Learning · Interpretability",
    summary:
      "Built an interpretable graph learning framework that makes model rationales more stable, inspectable, and resistant to spurious shortcuts.",
    bullets: [
      "Combined graph learning with persistent homology to identify stable rationale subgraphs instead of brittle post-hoc explanations.",
      "Targeted a problem industry teams actually care about: when a model looks right, is it right for the right reason?",
      "Accepted to ICML 2025.",
    ],
  },
  {
    title: "Neuc-MDS",
    tag: "Geometry · ML Theory · Representation",
    summary:
      "Reworked multidimensional scaling beyond Euclidean assumptions so difficult geometric structure can still be used instead of thrown away.",
    bullets: [
      "Generalized classical MDS with bilinear-form machinery for non-Euclidean and non-metric settings.",
      "Turned a mathematically awkward case—negative eigenvalue information—into something usable for representation learning.",
      "Presented at NeurIPS 2024.",
    ],
  },
  {
    title: "DL3DV-10K",
    tag: "3D Vision · Data · Benchmarking",
    summary:
      "Helped build a large-scale 3D vision dataset and benchmark designed for modern deep-learning pipelines, not toy academic setups.",
    bullets: [
      "Dataset scale: 51.2M frames across 10,510 real-world videos.",
      "Supports benchmarking for NeRF, reconstruction, and broader 3D scene understanding workflows.",
      "Published at CVPR 2024.",
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
