import React from "react";
import BikiniImg from "../../../assets/Bikini.webp";
import BodySuitImg from "../../../assets/BodySuit.webp";
import BustierImg from "../../../assets/Bustier.webp";
import BabydollImg from "../../../assets/Babydoll.webp";

const CatComp = () => {
  const contents = [
    {
      id: 1,
      img: BikiniImg,
      title: "Bikkini",
    },
    {
      id: 2,
      img: BodySuitImg,
      title: "Bodysuit",
    },
    {
      id: 3,
      img: BustierImg,
      title: "Bustier",
    },
    {
      id: 4,
      img: BabydollImg,
      title: "Babydoll",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-16 mt-16">
      <div className="relative w-72 rounded-md h-80 col overflow-hidden shadow-xl ">
        <img
          src={contents[0].img}
          alt=""
          className="object-cover rounded-md "
        />

        <div className="absolute left-0 top-0 w-full h-full bg-black/20">
          <p className="absolute bottom-2 left-2 text-xl text-white">
            {contents[0].title}
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="relative w-72 h-80 rounded-md overflow-hidden">
          <img
            src={contents[1].img}
            alt=""
            className="object-cover rounded-md"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black/20">
            <p className="absolute bottom-2 left-2 text-xl text-white">
              {contents[1].title}
            </p>
          </div>
        </div>
        <div className="relative w-72 h-80 rounded-md overflow-hidden">
          <img
            src={contents[2].img}
            alt=""
            className="object-cover rounded-md"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black/20">
            <p className="absolute bottom-2 left-2 text-xl text-white">
              {contents[2].title}
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-72 rounded-md h-80 shadow-xl overflow-hidden">
        <img
          src={contents[3].img}
          alt=""
          className="object-cover rounded-md "
        />
        <div className="absolute left-0 top-0 w-full h-full bg-black/20">
          <p className="absolute bottom-2 left-2 text-xl text-white">
            {contents[3].title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatComp;
