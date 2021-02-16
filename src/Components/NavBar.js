import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="NavbarItem">
        <div
          className={navbar ? "Navbar_Menu_Item_active" : "Navbar_Menu_Item"}
        >
          <div>
            <ul>
              <li>
                <Link className="menu" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu" to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className="menu" to="/Project">
                  Project
                </Link>
              </li>
              <li>
                <a
                  className="menu"
                  href="https://onedrive.live.com/download?cid=F3A70EED44B237FB&resid=F3A70EED44B237FB%217182&authkey=AF3FtTwtzRPp4Eo&em=2"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link className="menu" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="banner_img">
        <h1 data-aos="fade-down" className="name_heading">
          <ArrowDownwardIcon />
          Scroll Down
        </h1>
      </div>
    </>
  );
};

export default NavBar;
