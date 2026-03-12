import { Project } from "../lib/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:bg-accent/20 cursor-pointer">

      {/* Thumbnail */}
      <div className="h-48 bg-muted flex items-center justify-center">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        <h3 className="text-lg font-medium">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 pt-2 text-sm">

          <a
            href={project.github}
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="text-primary hover:underline"
          >
            Open
          </a>

        </div>

      </div>
    </div>
  )
}