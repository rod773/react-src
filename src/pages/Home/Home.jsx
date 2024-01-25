import React from "react";
import { StyledHome } from "./Home.styled";
//import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import images from "./../../Images";

const Home = () => {
  return (
    <StyledHome className="container-fluid">
      <h1>Home</h1>
      <img src={images[0]} alt="" />
    </StyledHome>
  );
};

export default Home;
