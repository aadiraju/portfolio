import { WorkExperience } from "@/data/experiences";

const ExperienceRow = ({employer, position, startDate, endDate}: WorkExperience) => {
  return (
    <>
      <div>{employer}</div>
      <div>{position}</div>
      <div>{startDate.toDateString()} - {(typeof endDate === 'string')? endDate : endDate.toDateString()}</div>
      <div className="h-[0.25vh] w-full rounded-full bg-white" />
    </>
  );
};

export default ExperienceRow;
