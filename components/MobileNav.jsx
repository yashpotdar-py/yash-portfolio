"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "home", path: "/" },
  { name: "lab", path: "/projects" },
  { name: "tooling", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center w-11 h-11 rounded-terminal bg-base-800 border border-base-500 hover:border-terminal-500 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-500"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-terminal-500" />
        </motion.button>
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-base-900/95 backdrop-blur-xl border-l border-base-500 p-0">
        {/* Terminal header */}
        <div className="terminal-header justify-between">
          <div className="flex items-center gap-2">
            <div className="terminal-dot bg-danger-500" />
            <div className="terminal-dot bg-amber-500" />
            <div className="terminal-dot bg-terminal-500" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-300 hover:text-terminal-500 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block">
              <div className="flex items-center gap-2">
                <span className="font-mono text-terminal-500 text-lg font-bold">$</span>
                <span className="font-display text-xl font-bold text-white">
                  yash<span className="text-terminal-500">@</span>portfolio
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1">
            {links.map((link, index) => {
              const isActive = link.path === pathname;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`block px-4 py-3 font-mono text-sm font-medium capitalize transition-all duration-200 ${
                      isActive
                        ? "text-base-900 bg-terminal-500"
                        : "text-muted-200 hover:text-terminal-500 hover:bg-base-800 border border-base-500 hover:border-terminal-500/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {isActive && "[ "}
                    {link.name}
                    {isActive && " ]"}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-auto pt-6 border-t border-base-500"
          >
            <div className="font-mono text-xs text-muted-300 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-terminal-500">➜</span>
                <span>infrastructure & security</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terminal-500">➜</span>
                <span>homelab tinkerer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

