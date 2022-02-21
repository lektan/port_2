import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Work from "./components/Work";

import { gsap } from "gsap/all";
import AnimationContext from "./hooks/animation-hook";

function App() {
  const [currentBg, setCurrentBg] = useState();
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    });
  }, [currentBg]);

  const about = useRef();
  const work = useRef();
  const services = useRef();
  const contact = useRef();

  const scrollHandler = (arg) => {
    if (arg === about) {
      about.current.scrollIntoView({ behavior: "smooth" });
    } else if (arg === work) {
      work.current.scrollIntoView({ behavior: "smooth" });
    } else if (arg === services) {
      services.current.scrollIntoView({ behavior: "smooth" });
    } else {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimationContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef}>
        <Hero
          about={about}
          work={work}
          services={services}
          contact={contact}
          scrollHandler={scrollHandler}
        />
        <About />
        <Features />
        <Work />
        <Contacts />
      </div>
    </AnimationContext.Provider>
  );
}

export default App;
