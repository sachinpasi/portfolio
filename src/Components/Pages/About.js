import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutpage_section">
        <div className="aboutpage_title">-About-</div>
        <div className="aboutpage_data">
          <p className="aboutpage_p">
            I’m Sachin Pasi. I’m a designer who codes. I care deeply about
            creating world-class, useful, and beautiful products that help
            people and make a difference. I can be as involved in your project
            as you need me to be; from the seed of the idea, to sketches,
            creative direction, design, and the front-end.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
