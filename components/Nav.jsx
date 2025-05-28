"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "services", path: "/services" },
  { name: "more", path: "/resume" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="relative"
          >
            <Link
              href={link.path}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize tracking-wide ${
                isActive
                  ? "text-primary bg-gradient-to-r from-accent to-accent-hover shadow-lg shadow-accent/30"
                  : "text-white/80 hover:text-white hover:bg-white/5 backdrop-blur-sm"
              }`}
            >
              {link.name}

              {/* Animated background for non-active items */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              )}

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover rounded-xl"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Nav;
