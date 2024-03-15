import React from "react";
import BraImg from "../../../assets/bra.webp";
import { LuDot } from "react-icons/lu";
const BlogsBox = () => {
  const blogDetails = [
    {
      id: 1,
      img: BraImg,
      profileImg: "",
      name: "Lara Jhonson",
      date: "18 Jan 2024",
      title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    },
    {
      id: 2,
      img: BraImg,
      profileImg: "",
      name: "Lara Jhonson",
      date: "18 Jan 2024",
      title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    },
    {
      id: 3,
      img: BraImg,
      profileImg: "",
      name: "Lara Jhonson",
      date: "18 Jan 2024",
      title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    },
  ];
  return (
    <>
      {blogDetails.map((detail) => (
        <div
          key={detail.id}
          className="w-[400px] h-[500px] shadow-md pb-5 rounded-lg"
        >
          <div className="h-[350px] w-full overflow-hidden rounded-t-lg">
            <img
              src={detail.img}
              alt=""
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="flex items-center mt-5 gap-3 px-5">
            <img
              src={detail.profileImg}
              alt=""
              className="bg-black/40 rounded-full p-6"
            />
            <p>{detail.name}</p>
            <LuDot size={25} />
            <p className="text-gray-600">{detail.date}</p>
          </div>
          <div className="px-5 text-base mt-2 text-gray-700">
            <p>{detail.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsBox;
