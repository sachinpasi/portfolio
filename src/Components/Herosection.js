import React, { useEffect } from "react";
import "./Herosection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LaptopIcon from "@material-ui/icons/Laptop";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Aos from "aos";
import "aos/dist/aos.css";

const Herosection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="herosection">
      <Swiper className="hero_container">
        <SwiperSlide>
          <div className="about_section">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="section_title"
            >
              <h1 className="hero_title" style={{ color: "black" }}>
                Hi, I'm Sachin
              </h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="section_sub_title"
            >
              <h2>Web Developer</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="about-text"
            >
              <p className="about_data">
                A web designer/developer focused on crafting great web
                experiences.
                <br /> Designing and Coding have been my passion since the days
                I started working with computers Through constant learning and
                creation,
                <br /> I’m largely framework agnostic but technologies I love
                right now are React and Styled Components.
                <br />I enjoy creating beautifully designed, intuitive and
                functional websites.
              </p>
            </div>
            <div data-aos="fade-right" className="swipe">
              <ArrowBackIcon />
              <h1 style={{ marginLeft: "5px", color: "#9273cd" }}>Swipe</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill_section">
            <div className="Skills_title">
              <h1 style={{ color: "black" }}>Skills</h1>
            </div>
            <div className="row">
              <div className="col-1">
                <div className="col-1_title">
                  <h2>Development</h2>
                </div>
                <div className="col-1_list">
                  <div className="skills_list_item">
                    <h2>React</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Node</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>MySQL</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>PHP</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Css</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Styled Components</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Git</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>C++</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Python</h2>
                  </div>
                  <div className="skills_list_item">
                    <h2>Javascript</h2>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-2_title">
                  <h2>Design</h2>
                </div>
                <div className="col-2_list">
                  <div className="design_list_item">
                    <h2>Photoshop</h2>
                  </div>
                  <div className="design_list_item">
                    <h2>Adobe XD</h2>
                  </div>
                  <div className="design_list_item">
                    <h2>Illustrator</h2>
                  </div>
                  <div className="design_list_item">
                    <h2>Premier Pro</h2>
                  </div>
                  <div className="design_list_item">
                    <h2>After Effects</h2>
                  </div>
                  <div className="design_list_item">
                    <h2>Lightroom</h2>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="swipe">
              <ArrowBackIcon />
              <h1 style={{ marginLeft: "5px", color: "#9273cd" }}>Swipe</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill_section">
            <div className="row">
              <div className="col-1">
                <div
                  className="col-1_title"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  <h2>Passion</h2>
                </div>
                <div className="item_list">
                  <div className="item">
                    <MenuBookIcon />
                    <div className="item_name">Learning</div>
                  </div>
                  <div className="item">
                    <LaptopIcon />
                    <div className="item_name">Technology</div>
                  </div>
                  <div className="item">
                    <CameraAltIcon />
                    <div className="item_name">Photography</div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="col-2_title"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  <h2>Languages</h2>
                </div>
                <div className="col-2_list_page3">
                  <div className="item">
                    <div className="item_name">
                      <div>English</div>
                      <div className="subtitle">High Intermediate</div>
                    </div>
                    <div className="progress_wrapper">
                      <div
                        className="progress_bar"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item_name">
                      <div>Hindi</div>
                      <div className="subtitle">Fluent</div>
                    </div>
                    <div className="progress_wrapper">
                      <div className="progress_bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herosection;
