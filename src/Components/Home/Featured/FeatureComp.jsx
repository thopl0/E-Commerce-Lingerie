import React from "react";
import braImg from "../../../assets/bra.webp";
import Box from "./Box";
const FeatureComp = ({ selectedCategory }) => {
  const details = [
    {
      id: 1,
      img: braImg,
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Bra",
    },
    {
      id: 2,
      img: "https://www.thelingerieaddict.com/wp-content/uploads/tallulah-love-seductress-slip-dress-1-684x1024.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Shapewear",
    },
    {
      id: 3,
      img: "https://i0.wp.com/underlinesmagazine.com/wp-content/uploads/2018/08/GUESS-UNDERWEAR-AW18-3.jpg?fit=780%2C1045&ssl=1",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Activewear",
    },

    {
      id: 4,
      img: "https://image.made-in-china.com/202f0j00cvRitSjlCzbk/Wholesale-Lemon-Yellow-Soft-Stretchy-Sports-Lingerie-Bralette-Top-Wear-Adjustable-Workout-Yoga-Sexy-Activewear-Bra-for-Woman-Running-Gym-Fitness.webp",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Activewear",
    },

    {
      id: 5,
      img: "https://images-cdn.ubuy.co.id/653cfbd960825648c75ad87b-avidlove-womens-lace-lingerie-sexy-bra.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Panties",
    },
    {
      id: 6,
      img: "https://img.fruugo.com/product/0/59/566716590_max.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Panties",
    },
    {
      id: 7,
      img: "https://dfcdn.defacto.com.tr/2/U4694AZ_21SM_BK27_01_03.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Panties",
    },
    {
      id: 8,
      img: "https://thulo.com/images/detailed/193/ry.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Nightwear",
    },
    {
      id: 9,
      img: "https://i5.walmartimages.com/asr/b596fe64-7cfe-488a-94e3-ee550b8f7172.d6f4061328327927bd744c0f2b77d4cd.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Nightwear",
    },
    {
      id: 10,
      img: "https://m.media-amazon.com/images/I/71dQgRvuE+L._AC_UY350_.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Nightwear",
    },
    {
      id: 11,
      img: "https://www.zimisa.com/media/cache/resolve/thumb_w_800/u/714/p/602107b4dec95.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Panties",
    },

    {
      id: 12,
      img: "https://media-api.xogrp.com/images/dc1309ce-02c6-4a6c-bcbc-682ae5155574~rs_768.h-cr_150.0.1050.1200",
      title: "Lingierie in Silk, Lace & Tulle",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Shapewear",
    },
    {
      id: 13,
      img: "https://images.ctfassets.net/3zzevkhc8io9/59hinI4I0wt0dfg0A4rzIW/d6c948f1cc3bfaa1fa0525a3bf37d5f4/eservices_primadonna-lingerie-body-madison-0462120-green-0_3573503.jpg?fm=webp&q=70&w=3840",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Shapewear",
    },
    {
      id: 14,
      img: "  https://cdn.shopify.com/s/files/1/0612/3837/8704/products/30200001_00010_1_540x.jpg?v=1674131741",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Shapewear",
    },
    {
      id: 15,
      img: "https://bella-fit.nl/cdn/shop/products/kate-shapewear-lingerie-bodysuit-987942_900x.jpg?v=1697722544",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Shapewear",
    },
    {
      id: 16,
      img: "https://img.fruugo.com/product/9/75/454634759_max.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Nightwear",
    },
    {
      id: 17,
      img: "https://np-live-21.slatic.net/kf/S9e9553a0513747d1becf841485c5f74fD.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Panties",
    },
    {
      id: 18,
      img: "https://i5.walmartimages.com/seo/Woman-Seamless-Lace-Sports-Underwear-Set-Cross-Front-Side-Buckle-Lounge-Bra-Yoga-Workout-Activewear-Without-Steel-Ring-S-4XL_5955a8d9-0c2e-4a42-bc54-f193b086bc56.34a534a7fdbbc4a4e699ced6325a7d14.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      title: "Lingierie in Silk, Lace & Tulle",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Activewear",
    },
    {
      id: 19,
      img: "   https://static-01.daraz.com.np/p/6d3b3b713165d74fc129d62e4dfa02cd.png_750x400.jpg_.webp",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Bra",
    },
    {
      id: 20,
      img: "https://image.made-in-china.com/202f0j00wCYlvIZdMgoV/Hot-Sale-Fashion-Sexy-Lingerie-Women-Activewear-Outfits-Breathable-Ballet-Pilates-Yoga-Gym-Sportswear-Double-Strap-Sport-Sexy-Bra.webp",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Activewear",
    },
    {
      id: 21,
      img: "https://www.zimisa.com/media/cache/resolve/thumb_w_800/u/714/p/5fc38ba5e694c.jpg",
      title: "Dummy Title",
      price: "230",
      discountedPrice: "200",
      discount: "-13%",
      category: "Bra",
    },
  ];

  const filteredDetails =
    selectedCategory === "All"
      ? details
      : details.filter((item) => item.category === selectedCategory);
  return (
    <>
      {filteredDetails.map((detail) => (
        <Box
          key={detail.id}
          img={detail.img}
          title={detail.title}
          price={detail.price}
          discountedPrice={detail.discountedPrice}
          discount={detail.discount}
        />
      ))}
    </>
  );
};

export default FeatureComp;
