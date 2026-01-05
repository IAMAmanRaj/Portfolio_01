import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../constants/Projects/projectsData";

export const HoverImageLinks = () => {
  return (
    <section className="bg-transparent relative z-[20] w-full p-4 md:p-8">
      <div className="mx-auto w-[250px] vxs:w-full overflow-hidden vxs:max-w-5xl">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            heading={project.heading}
            subheading={project.subheading}
            imgSrc={project.imgSrc}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};
