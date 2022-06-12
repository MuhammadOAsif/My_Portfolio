import React from "react";

// import navigation data
import { navigation } from "../Data/Data";

// import Link
import { Link } from "react-scroll";
import BlogsLink from "./../Pages/Blogs/BlogsLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <BlogsLink />
      </ul>
    </nav>
  );
};

export default Navbar;
