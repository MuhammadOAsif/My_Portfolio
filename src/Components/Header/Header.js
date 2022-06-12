import React, { useEffect, useState } from "react";

// import components
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link
          to="home"
          activeClass="none"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="transition-all duration-300"
        >
          <button className="text-4xl ">Asif</button>
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">{/* <NavMobile /> */}</div>
      </div>
    </header>
  );
};

export default Header;
