"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "services", path: "/services" },
  { name: "more", path: "/resume" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center items-center w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries className="text-2xl text-accent" />
        </motion.button>
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-primary/95 backdrop-blur-xl border-l border-white/10">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-16 mb-12 text-center"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <h1 className="text-4xl font-black">
                <span className="text-white">Yash</span>
                <span className="text-transparent bg-gradient-to-r from-accent to-accent-hover bg-clip-text">
                  .
                </span>
              </h1>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 px-6 flex-1">
            {links.map((link, index) => {
              const isActive = link.path === pathname;

              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`relative block px-6 py-4 rounded-2xl font-semibold capitalize transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-gradient-to-r from-accent to-accent-hover shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}

                    {isActive && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Hire Me Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="px-6 pb-8"
          >
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent text-primary font-bold py-4 rounded-2xl shadow-xl hover:shadow-accent/30 transition-all duration-300 border-0">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
