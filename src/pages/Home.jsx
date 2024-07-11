import React from "react";
import Slider from "react-slick";
import ProductList from "../components/Products/ProductList/ProductList";

const Home = ({ mainData }) => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <HiddenArrow />,
  //   prevArrow: <HiddenArrow />,
  // };

  // function HiddenArrow() {
  //   return <div style={{ display: "none" }} />;
  // }

  return (
    <div>
      <h1 className="px-36 text-4xl font-semibold my-6 text-[#202020]">
        Ürünler
      </h1>
      <hr className="py-2" />
      <ProductList mainData={mainData} />
    </div>
  );
};

export default Home;
