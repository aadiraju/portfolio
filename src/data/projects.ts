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
  imgAltText?: string;
  links: Link[];
};

const PROJECTS: Project[] = [
  {
    title: "HP Anyware Manager",
    synopsis: "Highly available SaaS service for managing remote desktops",
    skills: ["Kubernetes", "Microsoft Azure", "Express", "TypeScript"],
    imgPath: "/awm.png",
    links: [
      { linkText: "See it Live", hyperlink: PROJECT_LINKS.AWM_WEBSITE },
      { linkText: "Read the Docs", hyperlink: PROJECT_LINKS.AWM_DOCS },
    ],
  },
  {
    title: "JUnit++",
    synopsis:
      "Simplified JUnit 5 testing for student-submitted code solutions.",
    skills: ["Java", "JUnit 5", "Judge0"],
    imgPath: "/JunitDocs.png",
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
    imgPath: "/gamification.png",
    links: [
      {
        linkText: "See the Research",
        hyperlink: PROJECT_LINKS.GAMIFICATION_PAPER,
      },
      { linkText: "Github", hyperlink: PROJECT_LINKS.GAMIFICATION_REPO },
    ],
  },
];

export { PROJECTS };
export type { Project, Link };
