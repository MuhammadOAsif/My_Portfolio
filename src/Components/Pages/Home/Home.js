import React from "react";
import Header from "./../../Header/Header";
import Footer from "./../../Footer/Footer";
import Banner from "./Banner";
import About from "./About";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Projects from "./Project";

const Home = () => {
  return (
    <div>
      {/* Import Navbar */}
      <Header />
      <div>
        {/* Import Banner */}
        <Banner />
      </div>
      <div>
        {/* Import About */}
        <About />
      </div>
      <div>
        {/* Import Skills */}
        <Skills />
      </div>
      <div>
        {/* Import Projects */}
        <Projects />
      </div>
      <div>
        {/* Import ContactME */}
        <ContactMe />
      </div>
      <div>
        {/* Import Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
