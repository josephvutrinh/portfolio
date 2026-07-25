const ProjectCard = ({ project }) => {
    const Wrapper = project.url ? "a" : "div";
    const linkProps = project.url
        ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <Wrapper
            {...linkProps}
            className="flex flex-col rounded-2xl p-3 bg-white dark:bg-[#262626] shadow-lg
                ring-1 ring-black/10 dark:ring-white/10
                hover:scale-[1.02] hover:shadow-xl
                [transition:background-color_.5s,scale_.3s,box-shadow_.3s]"
        >
            <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-40 object-cover rounded-xl"
            />
            <div className="px-1 pt-3 pb-1 flex flex-col flex-1">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-nav-light dark:text-nav-dark transition-colors duration-500">
                    {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-xs font-medium
                                bg-black/5 dark:bg-white/10 [transition:background-color_.5s]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default ProjectCard;
