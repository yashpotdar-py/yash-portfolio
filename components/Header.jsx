import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Yash<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {/* Desktop/Large Screen Nav */}
          <Nav />
          <Link
            href={
              "https://www.upwork.com/freelancers/~01277c4d278595bf41?mp_source=share"
            }
            target="_blank"
          >
            <Button className="">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
