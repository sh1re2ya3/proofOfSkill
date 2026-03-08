import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { slideVariants } from "../../lib/motion";
import { useNavigation } from "../navigation-context";
import { cloneElement } from "react";

export function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const { direction } = useNavigation();
  const variants = slideVariants(direction);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {outlet && cloneElement(outlet, { key: location.pathname })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
