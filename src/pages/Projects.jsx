import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="flex flex-col pb-4">
            <section className="mt-8 animate-fade-up">
                <h2 className="text-xl font-medium mb-6">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
