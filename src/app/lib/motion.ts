import type { Direction } from "./types";

const ease = [0.16, 1, 0.3, 1] as const;
const duration = 0.45;

function getOffset(direction: Direction): { x: string; y: string } {
  switch (direction) {
    case "left":
      return { x: "-100%", y: "0%" };
    case "right":
      return { x: "100%", y: "0%" };
    case "up":
      return { x: "0%", y: "-100%" };
    case "down":
      return { x: "0%", y: "100%" };
  }
}

function getExitOffset(direction: Direction): { x: string; y: string } {
  switch (direction) {
    case "left":
      return { x: "100%", y: "0%" };
    case "right":
      return { x: "-100%", y: "0%" };
    case "up":
      return { x: "0%", y: "100%" };
    case "down":
      return { x: "0%", y: "-100%" };
  }
}

export function slideVariants(direction: Direction) {
  const enter = getOffset(direction);
  const exit = getExitOffset(direction);

  return {
    initial: {
      x: enter.x,
      y: enter.y,
    },
    animate: {
      x: "0%",
      y: "0%",
      transition: { duration, ease },
    },
    exit: {
      x: exit.x,
      y: exit.y,
      transition: { duration, ease },
    },
  };
}
