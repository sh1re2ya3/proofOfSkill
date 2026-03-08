import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Direction } from "../lib/types";

interface NavigationContextType {
  direction: Direction;
  setDirection: (dir: Direction) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  direction: "up",
  setDirection: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [direction, setDirectionState] = useState<Direction>("up");

  const setDirection = useCallback((dir: Direction) => {
    setDirectionState(dir);
  }, []);

  return (
    <NavigationContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
