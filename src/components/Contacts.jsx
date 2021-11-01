import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center w-full h-auto lg:px-20 px-10 my-10 lg:my-0"
    >
      <div className="flex flex-col justify-center items-center w-full h-auto ">
        <span className="self-start md:mb-10 mb-5 uppercase md:text-xs text-sm tracking-wider">
          Get in touch
        </span>
        <a
          href="mailto:baistan.xi@gmail.com"
          className="lg:text-8xl text-5xl font-lime text-center"
        >
          baistan.xi @gmail.com
        </a>
      </div>
      <div className="flex w-full md:w-1/2 md:p-20 my-10">
        <div className="text-xs uppercase font-semibold tracking-widest mr-32">
          Follow me
        </div>
        <div className="flex flex-col text-sm tracking-widest">
          <a
            className="mb-5 uppercase"
            href="http://www.instagram.com/watts.en"
          >
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=<+996771390338>"
            className="mb-5 uppercase"
          >
            Whatsapp
          </a>
          <a className="mb-5 uppercase" href="https://t.me/Lolip_o_p">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
