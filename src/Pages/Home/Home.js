import React from "react";
import About from "../About";
import Action from "../Action";
import Banner from "../Banner";
import Blogs from "../Blogs";
import CTA from "../CTA";
import FAQ from "../FAQ/FAQ";
import Feature from "../Feature";
import Star from "../Star";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Blogs />
      <About />
      <FAQ />
      <CTA />
      <Star />
      <Action />
    </div>
  );
};

export default Home;
