"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "services",
    path: "/services",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Yash<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Navigation */}
        <Nav className="flex flex-col gap-8 p-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href={
              "https://www.upwork.com/freelancers/~01277c4d278595bf41?mp_source=share"
            }
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <Button className="w-full">Hire Me</Button>
          </Link>
        </Nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
