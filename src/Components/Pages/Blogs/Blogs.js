import React from "react";
import coming_soon from "../../../assets/coming_soon.mp4";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="bg-black">
      <video width="1125px" height="700px" autoplay="true">
        <source src={coming_soon} type="video/mp4" />
      </video>
      <div className="w-full mx-auto btn btn-square text-3xl ">
        <Link to="/home">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
