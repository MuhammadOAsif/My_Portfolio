import React from "react";

// import skill data
import { skills } from "../../Data/Data";
import WorkPlace from "./WorkPlace";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12 " id="skills">
      <div>
        <WorkPlace />
      </div>
      <div className="lg:w-96 mx-auto  mb-16 text-center">
        <h1 className="text-3xl text-center mb-3 font-light text-accent">
          SKILLS
        </h1>
        <p>
          All the languages and frameworks I know as well as what the library
          knows and how proficient I am being shown by the progress bar.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img className="lg:h-20" src={skill.image} alt="" />
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-4 md:lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-16">
          <div>
            <label htmlFor="HTML">
              HTML 5 <span className="text-[#ac6b34]">85%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              CSS 3 <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Bootstrap <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Tailwind CSS <span className="text-[#ac6b34]">95%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="95"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              GitHub <span className="text-[#ac6b34]">85%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              JavaScript <span className="text-[#ac6b34]">85%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              ECMA Script <span className="text-[#ac6b34]">85%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Node JS <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              React <span className="text-[#ac6b34]">90%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              React Native <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              React Router <span className="text-[#ac6b34]">95%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="95"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Material UI <span className="text-[#ac6b34]">50%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="50"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Daisy UI <span className="text-[#ac6b34]">95%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="95"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Stripe JS <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Mongo DB <span className="text-[#ac6b34]">65%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="65"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Express JS <span className="text-[#ac6b34]">75%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Type Script <span className="text-[#ac6b34]">50%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="50"
              max="100"
            ></progress>
          </div>
          <div>
            <label htmlFor="HTML">
              Next JS <span className="text-[#ac6b34]">25%</span>
            </label>
            <progress
              class="progress progress-success w-56"
              value="25"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
