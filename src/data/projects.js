export const PROJECT_STATUS = {
  NOT_STARTED: "Not started",
  IN_PROGRESS: "In progress",
  LIVE: "Live",
};

export const projects = [
  {
    id: "cchat",
    name: "CChat",
    tagline: "Multi-tenant chat platform with modern auth and search.",
    status: PROJECT_STATUS.IN_PROGRESS,
    cover: "/src/assets/projects/cchat.jpg",
    description:
      "A scalable chat app designed for whitelabel/multi-tenant use. Includes advanced authentication flows and search for fast message retrieval.",
    technologies: ["React", "TypeScript", "Firebase", "ElasticSearch"],
    howToUse: [
      "Sign in and create or join a workspace.",
      "Start chats, send messages, and search conversations.",
      "Admins manage tenants and theming.",
    ],
    repoUrl: "https://github.com/yourname/cchat-frontend",
    liveUrl: "https://your-live-app-url.com",
    gallery: ["/src/assets/projects/cchat.jpg"],
  },
  {
    id: "ctrainer",
    name: "CTrainer",
    tagline: "Workout planning app with clean UX and tracking.",
    status: PROJECT_STATUS.LIVE,
    cover: "/src/assets/projects/ctrainer.jpg",
    description:
      "A training planner focused on structured routines and progress. Built with a mobile-first mindset and clear workout flows.",
    technologies: ["Flutter", "Dart", "Firebase"],
    howToUse: ["Create a plan", "Add exercises", "Track progress"],
    repoUrl: "https://github.com/yourname/ctrainer-app",
    liveUrl: "",
    gallery: ["/src/assets/projects/ctrainer.jpg"],
  },
  {
    id: "qhub",
    name: "QHub",
    tagline: "Service management system concept for CardonaTech.",
    status: PROJECT_STATUS.NOT_STARTED,
    cover: "/src/assets/projects/qhub.jpg",
    description:
      "Planned service management platform (work orders, customers, scheduling). Currently in design phase.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    howToUse: ["(Coming soon)"],
    repoUrl: "https://github.com/yourname/qhub",
    liveUrl: "",
    gallery: ["/src/assets/projects/qhub.jpg"],
  },
];
