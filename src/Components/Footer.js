import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_row">
          <div className="about__section">
            <div className="about_title">About</div>
            <p className="about_p">Handcrafted with React and Css</p>
            <h5 className="copyright">&copy; Sachin Pasi 2021</h5>
          </div>
          <div className="explore_section">
            <div className="explore_title">Explore</div>

            <Link className="explore_link" to="/">
              Home
            </Link>
            <Link className="explore_link" to="/About">
              About
            </Link>
            <Link className="explore_link" to="/Project">
              Project
            </Link>

            <a
              className="explore_link"
              href="https://onedrive.live.com/download?cid=F3A70EED44B237FB&resid=F3A70EED44B237FB%217182&authkey=AF3FtTwtzRPp4Eo&em=2"
            >
              Resume
            </a>
            <Link className="explore_link" to="/Contact">
              Contact
            </Link>
            <Link className="explore_link" to="/Adminlogin">
              Admin
            </Link>
          </div>
          <div className="Follow_link">
            <div className="follow_link_title">Links</div>
            <div className="link_list">
              <a href="mailto:sachinpasi2000@gmail.com">
                <MailIcon className="link_icon" />
              </a>
              <a href="https://github.com/sachinpasi">
                <GitHubIcon className="link_icon" />
              </a>
              <a href="https://www.linkedin.com/in/sachin-pasi-7713191b6/">
                <LinkedInIcon className="link_icon" />
              </a>
              <a href="https://www.instagram.com/_sachin.pasi_/">
                <InstagramIcon className="link_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
