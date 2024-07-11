import React from "react";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HiddenArrow />,
    prevArrow: <HiddenArrow />,
  };

  function HiddenArrow() {
    return <div style={{ display: "none" }} />;
  }

  return (
    <div className="w-full h-[500px] bg-blue-500">
      <Slider {...settings}>
        <div className="slide">
          <div className="w-full flex justify-  items-center bg-opacity-20">
            <div>Sol Taraf</div>
            <div>Sağ Taraf</div>
          </div>
        </div>
        <div className="slide">
          <div className="w-full h-[500px] bg-red-500">
            <h3>2</h3>
          </div>
        </div>
        <div className="slide">
          <div className="w-full h-[500px] bg-red-500">
            <h3>3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
