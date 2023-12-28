import { PROJECT_LINKS } from "./links";

type Link = {
  linkText: string;
  hyperlink: URL;
};
type Project = {
  title: string;
  synopsis: string;
  skills: string[];
  imgPath: string;
  links: Link[];
};

const PROJECTS: Project[] = [
  {
    title: "JUnit++",
    synopsis:
      "Simplified JUnit 5 testing for student-submitted code solutions.",
    skills: ["Java", "JUnit 5", "Judge0"],
    imgPath: "/",
    links: [
      { linkText: "See the Research", hyperlink: PROJECT_LINKS.JUNIT_PAPER },
      { linkText: "Read the Docs", hyperlink: PROJECT_LINKS.JUNIT_DOCS },
      { linkText: "Github", hyperlink: PROJECT_LINKS.JUNIT_REPO },
    ],
  },
  {
    title: "Canvas Gamification",
    synopsis:
      "Extra-credit/Practice Platform for introductory Java courses in university.",
    skills: ["Angular", "Django REST Framework", "TypeScript"],
    imgPath: "/",
    links: [
      {
        linkText: "See the Research",
        hyperlink: PROJECT_LINKS.GAMIFICATION_PAPER,
      },
      { linkText: "Github", hyperlink: PROJECT_LINKS.GAMIFICATION_REPO },
    ],
  },
  {
    title: "Bytesized",
    synopsis:
      "Dockerized E-commerce prototype deployed on Google Cloud Platform.",
    skills: ["Express", "Google Cloud Platform", "JavaScript"],
    imgPath: "/",
    links: [{ linkText: "Github", hyperlink: PROJECT_LINKS.BYTESIZED_REPO }],
  },
];

export { PROJECTS };
export type { Project, Link };
