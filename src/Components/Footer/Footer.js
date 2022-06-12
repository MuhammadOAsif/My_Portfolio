import React from "react";

// import social data
import { social } from "../Data/Data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-accent text-base"
                  href={href}
                  key={index}
                  target="_blank"
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <h2 className="text-4xl font-normal">Asif</h2>
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2022 Muhammad Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
