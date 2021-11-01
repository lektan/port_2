import React from "react";
import WorkItem from "./WorkItem";
import Img1 from "../images/1.png";
import Img2 from "../images/2.png";
import Img3 from "../images/3.png";
import Img4 from "../images/4.png";

const list = [
  {
    id: 1,
    title: "Todo",
    title2: "List",
    url: "https://listtodo-app.netlify.app",
    img: Img1,
  },
  {
    id: 2,
    title: "Music",
    title2: "Player",
    url: "https://playboii.netlify.app",
    img: Img2,
  },
  {
    id: 3,
    title: "Notes",
    title2: "app",
    url: "https://notts.netlify.app/",
    img: Img3,
  },
  {
    id: 4,
    title: "Black",
    title2: "Messa",
    url: "https://monster-pay.netlify.app/",
    img: Img4,
  },
];

const Work = () => {
  return (
    <div id="work" className="my-20 md:my-0 lg:px-20 px-10">
      <h1 className="uppercase text-xs tracking-widest">My projects</h1>
      <div className="flex flex-col nth-child-2n:self-end w-full my-20 md:px-20 lg:px-32">
        {list.map((item) => (
          <WorkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
