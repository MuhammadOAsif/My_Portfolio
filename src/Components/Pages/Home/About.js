import React from "react";

// import About image
import Image from "../../../assets/img/about-side-banner.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div>
              <h1 className="text-center text-4xl text-accent-hover font-bold mb-8">
                ABOUT ME
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-5xl font-bold lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Muhammad Asif
              </h2>
              <p className="mb-4 text-accent">
                Full Stack Web Developer & Designer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am Muhammad Asif. I live in Dhaka Bangladesh. I am a
                Full-Stack web developer and also I think since React works very
                well and I feel quite comfortable working with React so you can
                call me React developer too. <br />
                <br />I am now a candidate for SSC Batch 2022. Not much has
                improved in my studies, but I am still aiming to improve my
                studies.
              </p>

              <div className="pb-6">
                <p className="text-accent text-bold text-2xl">
                  About Information
                </p>
                <p>
                  Name{" "}
                  <span className="xl:pl-[17px] lg:pl-[17px]">
                    : Muhammad Asif
                  </span>
                </p>
                <p>
                  Email{" "}
                  <span className="xl:pl-[19px] lg:pl-[19px]">
                    : muhammadasif2m@gmail.com
                  </span>
                </p>
                <p>Number : 01830018193</p>
                <p>
                  Birth{" "}
                  <span className="xl:pl-[25px] lg:pl-[25px]">
                    : 18 February, 2007
                  </span>
                </p>
                <p>Address : Dhaka, Bangladesh</p>

                <div>
                  <p className="text-2xl text-accent pt-3">
                    1+ year experience in development
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="ContactMe"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-500"
            >
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all text-white">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
