import React from "react";

const WorkItem = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      className="md:w-8/12 w-full relative flex flex-col group mb-40"
    >
      <div className="absolute top-3 md:top-10 -left-6 md:-left-16 block overflow-hidden z-10">
        <h1 className="md:text-5xl text-3xl uppercase font-lime text-right">
          {item.title}
          <h1>{item.title2}</h1>
        </h1>
        <span className="transform md:translate-y-3 text-xs uppercase tracking-widest duration-300 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 block">
          Visit this work
        </span>
      </div>
      <div className="relative">
        <img alt="img" src={item.img} />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50" />
      </div>
    </a>
  );
};

export default WorkItem;
