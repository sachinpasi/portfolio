import React, { useEffect } from "react";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import Aos from "aos";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "aos/dist/aos.css";
import "./Style.css";
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";
const NetflixClone = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <NavBar />
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-duration="500"
        className="backtoprojects"
      >
        <Link className="linkofbtp" to="/Project">
          <ExitToAppIcon />
          Back To Projects
        </Link>
      </div>
      <div className="main_project">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-duration="500"
          className="main_title"
        >
          <h1 className="title">Netflix Clone</h1>
        </div>
        <div className="description_section">
          <div className="description">
            <p>
              This Is A Netflix Frontend Clone Made Using React J.S And Firebase
              <br />
            </p>
            <div className="Features">
              <div className="Features_title">
                <h3 className="h3">Features :</h3>
              </div>
              <div className="Features_list">
                <ul
                  className="ul_projects"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    listStyleType: "disc",
                  }}
                >
                  <li style={{ color: "black" }}>
                    {" "}
                    Integration Of Movie Trailers Using Youtube{" "}
                  </li>
                  <li style={{ color: "black" }}>
                    {" "}
                    User Sign Up and Sign In Using Firebase{" "}
                  </li>{" "}
                  <li style={{ color: "black" }}>
                    {" "}
                    Profile Section To Manage Plans{" "}
                  </li>{" "}
                  <li style={{ color: "black" }}>
                    {" "}
                    <span style={{ color: "gray" }}>
                      Payment Integration
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="button_section">
            <div className="buttons">
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="500"
                className="linkForCode"
              >
                <h6>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                    }}
                    href="https://github.com/sachinpasi/React-Netflix-With-User-SignUp-Signin"
                  >
                    <CodeIcon style={{ marginRight: "3px" }} />
                    Code
                  </a>
                </h6>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="500"
                className="linkForLiveProject"
              >
                <h6>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                    }}
                    href="https://netflix-build-6ad68.web.app/"
                  >
                    <LanguageIcon style={{ marginRight: "3px" }} />
                    Project Link
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NetflixClone;
