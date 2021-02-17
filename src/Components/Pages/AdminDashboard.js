import React, { useContext, useState } from "react";
import "./AdminDashboard.css";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../Context";

const AdminDashboard = () => {
  const context = useContext(UserContext);
  console.log();
  if (!context.user?.uid) {
    return <Redirect to="/Adminlogin" />;
  } else {
    return (
      <div>
        <div className="nav">
          <h1 className="h1">Dashboard</h1>
        </div>
        <div className="top_buttons">
          <div className="backTo">
            <Link to="/" className="backto_h2">
              Back To Home
            </Link>
          </div>
          <div className="SignOut">
            <button
              onClick={() => {
                context.setUser(null);
              }}
              className="SignOut_Link"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="dashboard_center">
          <div className="dashboard_big_container">
            <div className="dashboard_container">
              <Link to="/MessagesList" className="dashboard_card">
                <div class="dash_face dash_face2">
                  <div class="content">
                    <div class="content">
                      <img
                        style={{ width: "5rem" }}
                        src="http://24.media.tumblr.com/a91ed85d38dbe807aafaf6ecf6cb200c/tumblr_mq9r9zr6Sg1sn8q7mo1_250.gif"
                        alt=""
                      />
                      <h3 className="dash_h3">Messages</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminDashboard;
