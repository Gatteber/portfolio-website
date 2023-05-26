import ProjectCard from '../components/ProjectCard';

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

const Projects = ({projectList}: IProject) => {
  return (
    <article className="flex flex-col items-center font-poppins text-slate-700 dark:text-slate-50">
      <h3 className="text-3xl">
        <span className="text-orange-600 dark:text-purple-500">P</span>rojects
      </h3>
      <p className="mb-5">What I've built.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
        <ProjectCard projectList={projectList} />
      </div>
    </article>
  );
};
export default Projects;
