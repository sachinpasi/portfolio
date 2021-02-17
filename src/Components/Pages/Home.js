import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
import Herosection from "../Herosection";
import NavBar from "../NavBar";
import "./Spinner.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Footer />
    </div>
  );
};

export default Home;
