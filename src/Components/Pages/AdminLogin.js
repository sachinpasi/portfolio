import React from "react";
import "./AdminLogin.css";
import { UserContext } from "../../Context";
import { Redirect, Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import firebase from "firebase/app";

const AdminLogin = () => {
  const context = useContext(UserContext);
  console.log("context", context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSigin();
  };

  if (context.user?.uid) {
    return <Redirect to="/AdminDashboard" />;
  } else {
    return (
      <div>
        <div className="nav">
          <h1 className="nav_h1">Admin Panel</h1>
        </div>
        <div className="backTo">
          <Link to="/" className="backto_h2">
            Back To Home
          </Link>
        </div>
        <div className="admincenter">
          <div className="adminForm">
            <div className="admin_Sign_In">
              <div className="admin_sign_in_form">
                <form className="form" onSubmit={handleSubmit}>
                  <h1 className="h1_login">Log In</h1>
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="button" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminLogin;
