import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import firebase from "../../Firebase";
import "./MessageList.css";
import { Redirect, Link } from "react-router-dom";
import "firebase/firestore";
import { UserContext } from "../../Context";
import { useContext } from "react";
import { toast } from "react-toastify";

const MessageList = () => {
  const [contacts, setContacts] = useState([]);
  const context = useContext(UserContext);
  console.log("context", context);

  const ref = firebase
    .firestore()
    .collection("contacts")
    .orderBy("name", "asc");
  console.log(ref);

  function getContacts() {
    ref.onSnapshot((querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setContacts(item);
    });
  }

  useEffect(() => {
    getContacts();
  }, []);

  if (!context.user?.uid) {
    return <Redirect to="/Adminlogin" />;
  } else {
    return (
      <div>
        <div className="nav">
          <h1 className="h1"> Admin Dashboard</h1>
        </div>
        <div className="top_buttons">
          <div className="backTo">
            <Link to="/AdminDashboard" className="backto_h2">
              Back To Dashboard
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

        <div className="message_center">
          <div className="message_big_container">
            <h2 className="message_heading">Messages</h2>
            <div class="message_container">
              <div className="message_data">
                <table id="messages">
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>

                  {contacts.map((contacts) => (
                    <>
                      <tr>
                        <td class="count"></td>
                        <td>{contacts.name}</td>
                        <td>{contacts.email}</td>
                        <td>{contacts.message}</td>
                      </tr>
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MessageList;
