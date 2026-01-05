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

import richErrorLogLogoImg from "../assets/projects/rich-error-log/rich-error-log.png";
import richErrorLogDashboardImg from "../assets/projects/rich-error-log/dashboard.png";
import richErrorLogLoginImg from "../assets/projects/rich-error-log/login.png";
import richErrorLogPostErrorImg from "../assets/projects/rich-error-log/post-error.png";
import richErrorLogPostErrorBodyImg from "../assets/projects/rich-error-log/post-error-body.png";
import richErrorLogTenantsImg from "../assets/projects/rich-error-log/tenants.png";

export const projects = [
  {
    id: "cchat",
    name: "CChat",
    tagline: "A whatsapp clone with realtime messaging.",
    status: PROJECT_STATUS.LIVE,
    cover: cchatImg,
    description:
      "A web application made in React and with backend in Firebase. The app has a login with google authentication, allows users to create chats and groups, and message in real time. The technology used was the firebase firestore and the firebase storage for the images. The users are searched with ElasticSearch that is hosted in a VPS server. The project counts with CI/CD with GitHub Actions connected to firebase platform. It works for mobile and for desktop. This application was also configured a cusom domain and SSL certificate (https://cchat.uk).",
    technologies: ["React", "JavaScript", "Firebase", "ElasticSearch"],
    howToUse: ["Sign in.", "Start chats", "Create groups", "Send messages"],
    repoUrl: "https://github.com/riricardo/cchat-frontend",
    liveUrl: "https://cchat.uk",
    gallery: [cchatChatImg, cchatChatsImg, cchatLoginImg, cchatSettingsImg],
  },
  {
    id: "rich-error-log",
    name: "Rich Error Log",
    tagline: "Web app tailored to store application errors.",
    status: PROJECT_STATUS.LIVE,
    cover: richErrorLogLogoImg,
    description:
      "This project is an error log website built to collect, display, and analyze errors occurring in web applications. It helps developers monitor and debug issues efficiently by providing a centralized platform for error reporting and tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase hosting"],
    howToUse: [
      "Log in (use login: admin, password: 123)",
      "View errors",
      "Filter and search",
      "Create new API key",
      "Post errors to the API using the key (the body must have a title and a message)",
    ],
    repoUrl: "https://github.com/riricardo/rich-error-log-frontend",
    liveUrl: "https://rich-error-log.web.app/",
    gallery: [
      richErrorLogLoginImg,
      richErrorLogDashboardImg,
      richErrorLogTenantsImg,
      richErrorLogPostErrorImg,
      richErrorLogPostErrorBodyImg,
    ],
  },
  {
    id: "ctrainer",
    name: "CTrainer",
    tagline: "Workout planning app with clean UX and tracking.",
    status: PROJECT_STATUS.IN_PROGRESS,
    cover: ctrainerImg,
    description:
      "A training planner focused on structured routines and progress. Built with Flutter and focused in android applications. Login made with Firebase Authentication and data stored in MongoDb Atlas. The app uses an api in Node.js to connect the app with the database. The app allows users to create workout plans, add exercises, track progress.",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB"],
    howToUse: ["Create a plan", "Add exercises", "Track progress"],
    repoUrl: "https://github.com/riricardo/ctrainer-app",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.cardonatech.ctrainer&hl=en",
    gallery: [],
  },
  {
    id: "qhub",
    name: "QHub",
    tagline: "Service management system concept for CardonaTech.",
    status: PROJECT_STATUS.NOT_STARTED,
    cover: qhubImg,
    description:
      "Planned service management platform (work orders, customers, scheduling). Currently in design phase.",
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase Auth"],
    howToUse: ["(Coming soon)"],
    repoUrl: "",
    liveUrl: "",
    gallery: ["/src/assets/projects/qhub.jpg"],
  },
];
