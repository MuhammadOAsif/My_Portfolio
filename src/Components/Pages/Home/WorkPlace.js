import React from "react";

// import WorkPlace data
import { brands } from "../../Data/Data";

const WorkPlace = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, idx) => {
          return (
            <div key={idx}>
              <a href={brand.href} target="_blank">
                {" "}
                <img src={brand.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkPlace;
