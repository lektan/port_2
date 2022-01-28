import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowDownSharp, IoCloseSharp } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

const Hero = ({ work, contact, services, about, scrollHandler }) => {
  const [showMenu, setshowMenu] = useState(false);

  const menuHandler = () => {
    setshowMenu((prevState) => !prevState);
  };

  const hero = useRef();
  const heroText = useRef();

  useEffect(() => {
    gsap.from([hero.current], {
      width: "0",
      duration: 0.8,
    });
    gsap.from([heroText.current], {
      opacity: "0",
      duration: 0.3,
      delay: 0.8,
    });
    gsap.from(".reveal", {
      opacity: "0",
      duration: 0.2,
      delay: 0.8,
    });
    TweenMax.staggerFrom(
      ".menuItem",
      0.3,
      { y: 100, delay: 1, opacity: 0 },
      0.2
    );
  }, []);
  return (
    <div className="relative w-full h-screen grid grid-cols-8 grid-rows-6 md:p-10 lg:px-20 lg:py-16 p-5 overflow-hidden">
      <div
        ref={hero}
        className="flex justify-center text-center items-center p-5 w-full md:col-start-2 md:col-end-8 col-span-8 row-start-2 row-end-6 md:bg-black md:text-white h-full"
      >
        <h1
          ref={heroText}
          className="font-lime lg:text-7xl text-5xl md:text-6xl"
        >
          If you think math is hard, try web.
        </h1>
      </div>
      <button
        onClick={menuHandler}
        className={`md:hidden reveal fixed top-5 right-10 text-3xl z-20 block ${
          !showMenu ? "text-black" : "text-white"
        }`}
      >
        {showMenu ? <IoCloseSharp /> : <HiOutlineMenuAlt4 />}
      </button>
      <div className="md:col-span-1 col-span-4 reveal">
        <span className="uppercase">
          made with <br /> soul
        </span>
      </div>
      <a
        className="reveal col-start-8 z-10 bg-black text-white flex justify-center items-center md:w-32 md:h-32 w-20 h-20 rounded-full hover:scale-110 transform duration-300 ease-in-out md:static fixed bottom-5 right-5"
        href="#contact"
      >
        <span className="uppercase leading-4 text-sm font-semibold transform rotate-12">
          Get in <br /> Touch
        </span>
      </a>
      <div
        className={`col-start-8 row-start-6 z-10 flex flex-col text-4xl md:bg-transparent bg-black md:h-auto h-screen w-full md:text-base uppercase md:items-end md:static fixed duration-300 ease-in-out ${
          showMenu ? "left-0 text-white" : "left-full"
        } top-0 md:justify-start justify-center items-center`}
      >
        <a
          className="mb-3 relative block w-max group menuItem"
          href="#about"
          onClick={menuHandler}
        >
          About
          <div className="bg-black absolute bottom-0 left-0 w-full h-1 transform translate-y-2 opacity-0 duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" />
        </a>
        <a
          href="#services"
          className="mb-3 relative block w-max group menuItem"
          onClick={menuHandler}
        >
          Services
          <div className="bg-black absolute bottom-0 left-0 w-full h-1 transform translate-y-2 opacity-0 duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" />
        </a>
        <a
          href="#work"
          className="mb-3 relative block w-max group menuItem"
          onClick={menuHandler}
        >
          Work
          <div className="bg-black absolute bottom-0 left-0 w-full h-1 transform translate-y-2 opacity-0 duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" />
        </a>
        {/* <a
          href="#contact"
          className="relative block w-max group menuItem"
          onClick={menuHandler}
        >
          Contact
          <div className="bg-black absolute bottom-0 left-0 w-full h-1 transform translate-y-2 opacity-0 duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" />
        </a> */}
      </div>
      <Link
        className="reveal col-span-1 row-start-6 z-0 flex w-max items-end text-3xl duration-300 transform hover:translate-y-4"
        to="/"
      >
        <IoArrowDownSharp />
      </Link>
    </div>
  );
};

export default Hero;
