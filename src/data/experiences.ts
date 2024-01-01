export type WorkExperience = {
  employer: string;
  position: string;
  startDate: Date;
  endDate: Date | string;
};

const WORKEXPERIENCES: WorkExperience[] = [
  {
    employer: "HP Canada",
    position: "Software Applications Engineer 2",
    startDate: new Date("2022-06-01"),
    endDate: "Present"
  },
  {
    employer: "The University of British Columbia",
    position: "Research Programmer",
    startDate: new Date("2020-04-30"),
    endDate: new Date("2022-04-30")
  },
  {
    employer: "The University of British Columbia",
    position: "Teaching Assistant",
    startDate: new Date("2019-09-04"),
    endDate: new Date("2022-04-30")
  },
];

export { WORKEXPERIENCES };
