"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "lab", path: "/projects" },
  { name: "tooling", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1">
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        return (
          <Link
            key={index}
            href={link.path}
            className={`relative px-4 py-2 font-mono text-sm font-medium transition-all duration-200 capitalize group ${
              isActive
                ? "text-base-900 bg-terminal-500"
                : "text-muted-200 hover:text-terminal-500"
            }`}
          >
            <span className="relative z-10">
              {isActive && "["}
              {link.name}
              {isActive && "]"}
            </span>

            {/* Underline effect for non-active items */}
            {!isActive && (
              <span className="absolute bottom-1 left-4 right-4 h-px bg-terminal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
