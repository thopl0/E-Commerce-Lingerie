import React from "react";
import Box from "../Featured/Box";
import fashionImg from "../../../assets/fashion.jpg";
import braImg from "../../../assets/bra.webp";
import heartImg from "../../../assets/heart.webp";
import anthroImg from "../../../assets/anthro.webp";
const PopularCont = () => {
  const details = [
    {
      id: 1,
      img: braImg,
      title: "Auden Women's Racerback Lace Push-Up Bra",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 2,
      img: heartImg,
      title: "Only Hearts Joey Bralette",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 3,
      img: anthroImg,
      title: "Anthropologie Giselle Lace Bustier",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 4,
      img: "https://media-api.xogrp.com/images/a214f129-71bf-4502-9a55-08800437f433~rs_768.h-cr_30.0.1330.1733",
      title: "Adore Me Reign Plus Camisole Set",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 5,
      img: "https://media-api.xogrp.com/images/b8a802e3-5063-4359-9fc4-8bdc0180da9d~rs_768.h-cr_0.0.971.971",
      title: "Torrid Lace Garter Belt in Black",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 6,
      img: "https://media-api.xogrp.com/images/eafb2c2a-9223-4355-aaac-85205fdeac35~rs_768.h-cr_0.109.1314.1861",
      title: "Flora Nikrooz Rosa Lace-Trimmed Kimono",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 7,
      img: "https://media-api.xogrp.com/images/f80c0968-d975-43b5-8a79-69ec41eb5c0b~rs_768.h-cr_0.187.1120.1680",
      title: "Lulus Be My Love White Satin Lace Lounge Romper",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
    {
      id: 8,
      img: "https://media-api.xogrp.com/images/b97df5db-dd50-423a-81fd-1ad982f25176~rs_768.h-cr_150.0.1050.1200",
      title: "SKIMS Fits Everybody Dipped Front Thong",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
    },
  ];
  return (
    <>
      {details.map((detail) => (
        <Box
          key={detail.id}
          img={detail.img}
          title={detail.title}
          price={detail.price}
          discount={detail.discount}
          discountedPrice={detail.discountedPrice}
        />
      ))}
    </>
  );
};

export default PopularCont;
