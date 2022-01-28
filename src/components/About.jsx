import React from "react";
import logo from "../images/log.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:p-20 lg:mt-20 p-10"
    >
      <h1 className="text-right uppercase text-sm font-semibold tracking-wider">
        About me
      </h1>
      <p className="lg:col-start-3 lg:col-end-5 col-span-1">
        Hi, my name is Baistan Tashkulov, a multidisciplinary UI & UX designer &
        Front End Developer. With a passion for well-crafted (digital)
        experiences, I believe in beauty to empower ideas.
      </p>
      <div className="lg:col-start-5 row-span-2 md:col-start-2">
        {/* <img className="h-full object-cover" alt="Me" src={logo} /> */}
      </div>
      <p className="lg:col-start-2 lg:col-end-4 md:row-start-2">
        My goal is to create a stunning web applications for people. A
        combination of strong concepts and refined execution to deliver premium
        results. Basically I like creating cool sh*t.
      </p>
    </div>
  );
};

export default About;
