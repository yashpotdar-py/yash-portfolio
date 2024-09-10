import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

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
          <Link href={"/contact"}>
            <Button className="bg-accent hover:bg-accent-hover transition-all rounded">
              Hire Me
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
        {/* Mobile Nav */}
        mobile nav
        </div>
      </div>
    </header>
  );
};

export default Header;
