import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const About = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/hospital.jpg"}
      />
      <Biography imageUrl={"/doctors.avif"} />
    </>
  );
};

export default About;