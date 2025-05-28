"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* Main stairs container */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          {/* Enhanced overlay with sophisticated effects */}
          <motion.div
            className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-30"
            initial={{ 
              opacity: 1,
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))"
            }}
            animate={{ 
              opacity: 0,
              background: "linear-gradient(135deg, transparent, transparent)"
            }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          />

          {/* Subtle glow effect */}
          <motion.div
            className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-20"
            initial={{ 
              opacity: 0.3,
              background: "radial-gradient(circle at center, hsl(var(--accent) / 0.2), transparent 70%)"
            }}
            animate={{ 
              opacity: 0,
              scale: 1.5
            }}
            transition={{ 
              delay: 0.8, 
              duration: 1, 
              ease: "easeOut" 
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
