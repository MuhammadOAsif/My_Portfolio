import React from "react";

// import Banner Image
import BannerImg from "../../../assets/img/banner.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px] mt-[72px]">
              Hey, I'm Muhammad Asif! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Website.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Hi! My name is Asif. I am a full stack web developer and designer.
              You can also catch me as a react developer and frontend developer.
            </p>

            <a
              href="https://drive.google.com/file/d/1eCyb8vrGZxVPybQjifMw0DpK9GSMxCna/view?usp=sharing"
              target={"_blank"}
            >
              {" "}
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all text-white">
                {" "}
                Download Resume
              </button>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
