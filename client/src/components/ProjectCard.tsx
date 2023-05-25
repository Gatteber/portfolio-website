type project = {
  projectID: number;
  projectName: string;
  gitLink: string;
  liveLink: string;
  image: string;
  description: string;
};

interface IProject {
  projectList: project[] | undefined;
}

const ProjectCard = ({projectList}: IProject) => {
  return (
    <>
      {projectList &&
        projectList.map((proj) => (
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
            <div className="flex flex-col">
              <p>{proj.description}</p>
              <img
                src="#"
                alt="Project Image name"
                className="bg-purple-900 grow w-96 h-48"
              />
            </div>
          </div>
        ))}
    </>
  );
};
export default ProjectCard;
