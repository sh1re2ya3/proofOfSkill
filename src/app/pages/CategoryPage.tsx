import { Link } from "react-router";
import { useNavigation } from "../components/navigation-context";
import type { Direction } from "../lib/types";
import { projects } from "../lib/projects";
import { useLocation  } from "react-router";
import ProjectGrid from "../components/ProjectGrid";
interface CategoryPageProps {
  title: string;
  subtitle: string;
  backDirection: Direction;
}

export default function CategoryPage({ title, subtitle, backDirection }: CategoryPageProps) {
  const { setDirection } = useNavigation();
  const location = useLocation();
const category = location.pathname.replace("/", "");

const filteredProjects = projects.filter(
  (project) => project.category === category
);
 return (
    <div className="min-h-screen w-full bg-background relative px-10 py-16">

      {/* Back */}
      <Link
        to="/"
        onClick={() => setDirection(backDirection)}
        className="absolute top-10 left-10 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs tracking-widest uppercase"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto">

        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
          {subtitle}
        </p>

        <h1 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] tracking-tight">
          {title}
        </h1>

        <div className="mt-8 w-16 h-px bg-border mx-auto" />

      </div>

      {/* Project Grid */}
      <div className="mt-16 max-w-6xl mx-auto">
        <ProjectGrid projects={filteredProjects} />
      </div>

    </div>
  );
}
