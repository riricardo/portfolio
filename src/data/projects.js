export const PROJECT_STATUS = {
  NOT_STARTED: "Not started",
  IN_PROGRESS: "In progress",
  LIVE: "Live",
};

import cchatImg from "../assets/projects/cchat/cchat.png";
import cchatChatImg from "../assets/projects/cchat/chat.png";
import cchatChatsImg from "../assets/projects/cchat/chats.png";
import cchatLoginImg from "../assets/projects/cchat/login.png";
import cchatSettingsImg from "../assets/projects/cchat/settings.png";

import ctrainerImg from "../assets/projects/ctrainer/ctrainer.png";

import qhubImg from "../assets/projects/qhub/qhub.png";

export const projects = [
  {
    id: "cchat",
    name: "CChat",
    tagline: "A whatsapp clone with realtime messaging.",
    status: PROJECT_STATUS.IN_PROGRESS,
    cover: cchatImg,
    description:
      "A web application made in React and with backend in Firebase. The app has a login with google authentication, allows users to create chats and groups, and message in real time. The technology used was the firebase firestore and the firebase storage for the images. The users are searched with ElasticSearch that is hosted in a VPS server. The project counts with CI/CD with GitHub Actions connected to firebase platform. It works for mobile and for desktop. This application was also configured a cusom domain and SSL certificate (https://cchat.uk).",
    technologies: ["React", "JavaScript", "Firebase", "ElasticSearch"],
    howToUse: ["Sign in.", "Start chats, create groups, send messages."],
    repoUrl: "https://github.com/riricardo/cchat-frontend",
    liveUrl: "https://cchat.uk",
    gallery: [cchatChatImg, cchatChatsImg, cchatLoginImg, cchatSettingsImg],
  },
  {
    id: "ctrainer",
    name: "CTrainer",
    tagline: "Workout planning app with clean UX and tracking.",
    status: PROJECT_STATUS.LIVE,
    cover: ctrainerImg,
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
    cover: qhubImg,
    description:
      "Planned service management platform (work orders, customers, scheduling). Currently in design phase.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    howToUse: ["(Coming soon)"],
    repoUrl: "https://github.com/yourname/qhub",
    liveUrl: "",
    gallery: ["/src/assets/projects/qhub.jpg"],
  },
];
