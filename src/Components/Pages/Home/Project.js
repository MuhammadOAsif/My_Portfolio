import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../../Data/Data";
import { projectsNav } from "../../Data/Data";

// import components
import ProjectsData from "./ProjectsData";
const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="text-white bg-secondary p-16" id="projects">
      <div>
        <h1 className="text-4xl text-center font-light mb-6 text-accent">
          MY PROJECTS
        </h1>
        <p className="text-center w-96 mx-auto mb-10 text-[#70757f]">
          My Projects Of the few projects I have done, only three are shown
          here. One is warehouse-related manufacturing related and the other is
          single-product reviews.
        </p>
      </div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center ">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid lg:grid-cols-3 lg:gap-x-8 gap-y-8">
        {projects.map((item) => {
          return <ProjectsData item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
