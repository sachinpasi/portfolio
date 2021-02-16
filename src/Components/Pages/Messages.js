import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import firebase from "../../Firebase";
import "./Messages.css";
import { Redirect, Link } from "react-router-dom";

import "firebase/firestore";
import { UserContext } from "../../Context";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

const Messages = () => {
  const [contacts, setContacts] = useState([]);
  const context = useContext(UserContext);
  console.log("context", context);

  const ref = firebase.firestore().collection("contacts");
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
        <div className="backTo">
          <Link to="/AdminDashboard" className="backto_h2">
            Back To Dashboard
          </Link>
        </div>
        <div className="message_center">
          <div className="message_big_container">
            <h2 className="message_heading">Messages</h2>
            <Swiper class="message_container">
              {contacts.map((contacts) => (
                <SwiperSlide>
                  <div className="message_data">
                    <h5 className="message_h5">Sender,s Email :-</h5>
                    <h3 className="message_email">{contacts.email} </h3>
                    <h5 className="message_h5">Name :-</h5>
                    <h3 className="message_h3">{contacts.name}</h3>
                    <h5 className="message_h5">Message :-</h5>
                    <p className="message_message">{contacts.message}</p>
                  </div>
                  <div className="message_swipe">
                    <h4>Swipe</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
};

export default Messages;
