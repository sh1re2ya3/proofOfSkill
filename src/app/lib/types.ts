export type Direction = "up" | "down" | "left" | "right";

export interface NavLink {
  label: string;
  href: string;
  direction: Direction;
}
