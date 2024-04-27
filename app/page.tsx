import { About } from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Workflow from "@/components/Workflow/Workflow";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* <Workflow /> */}
    </>
  );
};

export default Home;
