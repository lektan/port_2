import React, { useContext, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import AnimationContext from "../hooks/animation-hook";

const Features = () => {
  let secondRef = useRef(null);

  let animationContext = useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg("#000");
          gsap.to(".text-col", {
            color: "#fff",
            duration: 1,
          });
        },
        onEnterBack: () => {
          animationContext.setCurrentBg("#000");
          gsap.to(".text-col", {
            color: "#fff",
            duration: 1,
          });
        },
        onLeave: () => {
          animationContext.setCurrentBg("#fff");
          gsap.to(".text-col", {
            color: "#000",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg("#fff");
          gsap.to(".text-col", {
            color: "#000",
            duration: 1,
          });
        },
      },
    });
  }, []);

  return (
    <div
      id="services"
      ref={secondRef}
      className="flex flex-col justify-center items-center w-full h-auto lg:h-screen lg:px-20 px-10 my-10 lg:my-0"
    >
      <span className="self-start md:mb-10 mb-5 uppercase md:text-xs text-sm tracking-wider text-col">
        Services i Can help you with
      </span>
      <h1 className="lg:text-8xl text-5xl font-lime text-col">
        Animations. UI. UX. WebSites. Modern Design. Motion.
      </h1>
    </div>
  );
};

export default Features;
