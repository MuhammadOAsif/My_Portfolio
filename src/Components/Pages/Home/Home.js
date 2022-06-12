import React from "react";
import Header from "./../../Header/Header";
import Footer from "./../../Footer/Footer";
import Banner from "./Banner";
import About from "./About";

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
        {/* Import Banner */}
        <About />
      </div>
      <div>
        {/* Import Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
