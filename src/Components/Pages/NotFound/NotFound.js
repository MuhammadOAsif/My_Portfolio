import React from "react";
import notFound from "../../../assets/img/NotFound.jpg";

const NotFound = () => {
  return (
    <div className="bg-primary text-6xl ">
      <img className="w-full mx-auto absolute" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
