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
      "Building and studying agentic workflows, orchestration patterns, memory systems, coding-agent loops, and evaluation methods for real-world AI assistants.",
    bullets: [
      "Worked on agent orchestration, long-context workflows, memory routing, and structured task execution.",
      "Explored coding-agent patterns, subagent coordination, and evaluation over session logs.",
      "Interested in bridging research ideas with usable AI infrastructure.",
    ],
  },
  {
    title: "TopInG",
    tag: "ML · Graph Learning · Interpretability",
    summary:
      "A topologically interpretable graph learning framework that uses persistent rationale filtration to identify stable rationale subgraphs.",
    bullets: [
      "Built a principled framework for interpretable GNNs with topological discrepancy constraints.",
      "Focused on explanation quality, rationale discovery, and robustness to spurious correlations.",
      "Accepted to ICML 2025.",
    ],
  },
  {
    title: "Neuc-MDS",
    tag: "Geometry · ML Theory · Representation",
    summary:
      "Generalized classical MDS to non-Euclidean settings using bilinear forms so information in negative eigenvalues becomes useful rather than discarded.",
    bullets: [
      "Extended dimensionality reduction beyond Euclidean assumptions.",
      "Connected mathematical structure with practical embedding performance.",
      "Presented at NeurIPS 2024.",
    ],
  },
  {
    title: "DL3DV-10K",
    tag: "3D Vision · Data · Benchmarking",
    summary:
      "Contributed to a large-scale real-world 3D vision dataset and benchmark for modern deep learning-based 3D scene understanding.",
    bullets: [
      "Large-scale scene dataset with 51.2M frames across 10,510 videos.",
      "Supports benchmarking for NeRF and related 3D vision systems.",
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
      "Researching geometric and topological methods for trustworthy machine learning, with increasing focus on connecting deep ML ideas to useful AI systems.",
  },
  {
    role: "Ph.D. in Computer Science",
    org: "Purdue University",
    period: "Completed",
    description:
      "Worked on topological data analysis, multiparameter persistent homology, algorithms, and mathematical foundations for modern machine learning.",
  },
  {
    role: "Lecturer",
    org: "Rutgers University",
    period: "Selected",
    description:
      "Taught graduate algorithms and communicated complex technical material with rigor and clarity.",
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
