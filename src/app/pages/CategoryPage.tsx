import { Link } from "react-router";
import { useNavigation } from "../components/navigation-context";
import type { Direction } from "../lib/types";

interface CategoryPageProps {
  title: string;
  subtitle: string;
  backDirection: Direction;
}

export default function CategoryPage({ title, subtitle, backDirection }: CategoryPageProps) {
  const { setDirection } = useNavigation();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1a1a1a] relative">
      {/* Back to home */}
      <Link
        to="/"
        onClick={() => setDirection(backDirection)}
        className="absolute top-10 left-10 text-white/40 hover:text-[#8b5cf6] transition-colors duration-200 text-[0.8rem] tracking-widest uppercase"
      >
        ← Back
      </Link>

      {/* Content */}
      <div className="text-center px-8">
        <p className="text-[#8b5cf6] text-[0.75rem] tracking-[0.3em] uppercase mb-4">
          {subtitle}
        </p>
        <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] tracking-tight">
          {title}
        </h1>
        <div className="mt-12 w-16 h-px bg-white/10 mx-auto" />
        <p className="mt-6 text-white/30 text-[0.85rem] max-w-md mx-auto">
          This section is a canvas for showcasing work. Content coming soon.
        </p>
      </div>
    </div>
  );
}
