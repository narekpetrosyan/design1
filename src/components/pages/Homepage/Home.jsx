import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Priceing";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./data";

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Home;
