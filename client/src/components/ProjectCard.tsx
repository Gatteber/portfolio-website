import {projects} from '../assets/projectList';

const ProjectCard = () => {
  return (
    <>
      {projects.map((proj) => (
        <div
          className="outline outline-1 font-poppins p-2"
          key={proj.projectID}
        >
          <div className="flex">
            <span className="mr-auto">{proj.projectName}</span>
            <ul className="flex gap-5">
              <li>Github</li>
              <li>Live</li>
            </ul>
          </div>
          <div className="flex">
            <p>{proj.description}</p>
            <img
              src="#"
              alt="Project Image name"
              className="bg-purple-900 w-48 h-48"
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default ProjectCard;
