import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from "../assets/pic3.jpg"
import pic1 from "../assets/pic4.jpg"

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={pic} alt="Item1"/>
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={pic1} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
