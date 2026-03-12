import { Project } from "../lib/projects"
import ProjectCard from "./ProjectCard"

type Props = {
  projects: Project[]
}

export default function ProjectGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}