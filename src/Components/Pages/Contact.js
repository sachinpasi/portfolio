import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState } from "react";
import firebase from "firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const database = firebase.firestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    database
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message Sent ");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="contact_area">
        <div className="conatact_container">
          <div className="container_1">
            <h1
              className="h1_contact"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              Contact Us
            </h1>
            <p
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              Reach Me Out!
            </p>
            <div className="form_section">
              <form onSubmit={handleSubmit}>
                <div className="name_and_email">
                  <div className="name">
                    <label>Name : </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="email">
                    <label>Email :</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="Email"
                    />
                  </div>
                </div>
                <div className="message">
                  <label>Message :</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="500"
                  className="submit_button"
                >
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="container_2">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="300"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>Email</h3>
              <a href="mailto:sachinpasi2000@gmail.com">
                Sachinpasi2000@gmail.com
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="400"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>Telephone</h3>
              <a href="tel:8349587567">8349587567</a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>GitHub</h3>
              <a href="https://github.com/sachinpasi">Sachinpasi</a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="600"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sachin-pasi-7713191b6/">
                Sachin-pasi-7713191b6
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="700"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>Twitter</h3>
              <a href="https://twitter.com/_Sachin_Pasi_">_Sachin_Pasi_</a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="800"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/_sachin.pasi_/">
                _sachin.pasi_
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="900"
              data-aos-duration="500"
              className="container_2_data"
            >
              <h3>Address</h3>
              <a href="https://www.google.com/maps/place/23%C2%B012'07.3%22N+77%C2%B026'15.5%22E/@23.2020222,77.4370878,200m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x397c43ecd10433f7:0x9194fd628bbf29e8!2s33,+E-8,+Bawadiya+Kalan,+Shri+Ram+Colony,+Bhopal,+Madhya+Pradesh+462026!3b1!8m2!3d23.1777811!4d77.4477549!3m5!1s0x0:0x0!7e2!8m2!3d23.2020206!4d77.4376354">
                E8/33, Arera Colony, Bhopal <br /> [Madhya Pradesh] <br />{" "}
                462016{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
