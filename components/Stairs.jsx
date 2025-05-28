"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 1,
  },
  animate: {
    top: "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoother motion
    },
  },
  exit: {
    top: ["100%", "0%"],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reverseIndex = (index) => {
  const totalSteps = 10; // Increased for smoother effect
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Enhanced stairs with gradient and glow effects */}
      {[...Array(10)].map((_, index) => {
        const delay = reverseIndex(index) * 0.05; // Faster, smoother timing

        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay,
            }}
            className="h-full w-full relative pointer-events-none overflow-hidden"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--accent)) ${index * 10}%, 
                hsl(var(--accent-hover)) ${50 + index * 5}%, 
                hsl(var(--primary)) ${100 - index * 5}%
              )`,
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2,
                delay: delay + 0.2,
                ease: "easeInOut",
                repeat: 1,
                repeatType: "reverse",
              }}
              style={{
                background: `linear-gradient(90deg, 
                  transparent, 
                  rgba(255, 255, 255, 0.1), 
                  transparent
                )`,
              }}
            />

            {/* Subtle particle effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 0.8,
                delay: delay + 0.1,
                ease: "easeInOut",
              }}
            >
              {Array.from({ length: 3 }).map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    y: "-20px",
                  }}
                  transition={{
                    duration: 1,
                    delay: delay + particleIndex * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
