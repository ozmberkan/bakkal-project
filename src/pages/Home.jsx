import React from "react";
import Slider from "react-slick";
import ProductList from "../components/Products/ProductList/ProductList";
import Basket from "../components/Basket/Basket";

const Home = ({
  mainData,
  isOpen,
  setIsOpen,
  basket,
  setBasket,
  filtered,
  setFiltered,
}) => {
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
      <ProductList
        mainData={mainData}
        basket={basket}
        setBasket={setBasket}
        filtered={filtered}
        setfiltered={setFiltered}
      />
      <Basket
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        basket={basket}
        setBasket={setBasket}
      />
    </div>
  );
};

export default Home;
