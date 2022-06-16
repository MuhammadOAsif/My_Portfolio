import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/MuhammadOAsif/projects.json/main/projects.json?token=GHSAT0AAAAAABVQ273JZJ7UT22MTFAUXIKMYVHFLSQ/${id}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      {projects.map((project) => (
        <Detail project={project} key={project.name}></Detail>
      ))}
    </div>
  );
};

export default Details;
