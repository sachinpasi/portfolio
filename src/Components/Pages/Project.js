import React from "react";
import NavBar from "../NavBar";
import "./Project.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Project = () => {
  return (
    <div>
      <NavBar />
      <div className="project_section">
        <div className="project_title">-Projects-</div>
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src="https://i.pinimg.com/originals/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.png" />
                <h3>Netflix</h3>
                <h5>Clone</h5>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Netflix Front-End Clone Powered By React J.S and Firebase</p>

                <Link to="/Project/Netflix-Clone">Read More</Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src="https://pbs.twimg.com/profile_images/1311766254873710592/qOapH6Tl_400x400.jpg" />
                <h3>Tinder</h3>
                <h5>Clone</h5>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Tinder Front-End Clone Powered By React J.S.</p>
                <Link to="/Project/Tinder-Clone">Read More</Link>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/26/Notes-Logo-Graphics-3958844-1-1-580x435.jpg" />
                <h3>iNotes</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>A Fully Functional Notes App Powered By PHP and MySQL.</p>
                <Link to="/Project/INotes">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
