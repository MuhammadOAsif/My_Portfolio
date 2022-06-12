import React from "react";
import { FiEye } from "react-icons/fi";

const ProjectsData = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div>
        <div class="card lg:w-96 shadow-xl bg-[#131419]">
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-2xl font-semibold pb-5">
              {item.name}
              <div class=""></div>
            </h2>
            <p>{item.description}</p>
            <div class="card-actions pt-5 justify-center">
              <button>
                <a
                  href={item.href}
                  target="_blank"
                  className="flex items-center gap-1 mr-10 border rounded-3xl px-2 border-[#ac6b34]"
                >
                  <p className="text-sm">Go Live</p>
                  <FiEye />
                </a>
              </button>
              <button>
                <div class="badge badge-outline border-[#ac6b34]">Details</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;
