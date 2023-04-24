import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import { FaUser } from 'react-icons/fa';
import Plan from "../components/Plan";
import MyCarousel from "../components/MyCarousel";
import Slidebar from "../components/Slidebar"


function Home() {

  return (
    <div>
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
        </div>
        <div className="slidebar">
          <Slidebar />
        </div>
        <div className="carr">
          <MyCarousel />
        </div>
        <div className="mx-auto">
          <Plan />
        </div>
    </div>
  );
}

export default Home;