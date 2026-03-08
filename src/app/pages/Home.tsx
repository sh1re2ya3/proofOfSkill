import { Link } from "react-router";
import { useNavigation } from "../components/navigation-context";
import type { Direction } from "../lib/types";

interface DirectionalLinkProps {
  to: string;
  direction: Direction;
  children: React.ReactNode;
  className?: string;
}

function DirectionalLink({ to, direction, children, className = "" }: DirectionalLinkProps) {
  const { setDirection } = useNavigation();

  return (
    <Link
      to={to}
      onClick={() => setDirection(direction)}
      className={`text-white/60 hover:text-[#8b5cf6] transition-colors duration-200 tracking-widest uppercase ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#1a1a1a] relative select-none">
      {/* Center headline */}
      <div className="text-center">
        <h1 className="text-white text-[clamp(2rem,5vw,4rem)] tracking-tight">
          What can <span className="text-[#8b5cf6]">Shreya</span> do?
        </h1>
      </div>

      {/* Top — About (top-right corner) */}
      <div className="absolute top-10 right-10">
        <DirectionalLink to="/about" direction="up" className="text-[0.75rem]">
          About  ↑
        </DirectionalLink>
      </div>

      {/* Left — Creative Coding */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2">
        <DirectionalLink to="/creative" direction="left" className="text-[0.8rem]">
          ← Creative Coding
        </DirectionalLink>
      </div>

      {/* Right — Frontend */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2">
        <DirectionalLink to="/frontend" direction="right" className="text-[0.8rem]">
          Frontend →
        </DirectionalLink>
      </div>

      {/* Bottom — Design */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <DirectionalLink to="/design" direction="down" className="text-[0.8rem]">
          Design ↓
        </DirectionalLink>
      </div>
    </div>
  );
}
