import React from "react";
import Carousel from "better-react-carousel";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import ImageCard from "./card";
import "../App.css";

function TopCarousel() {
  return (
    <div className="carousel-container">
      <Carousel gap={5} loop={true} scrollSnap={true}>
        <Carousel.Item>
          <ImageCard
            title={"Our special night!"}
            message={"Every night is perfect by your side."}
            image={pic1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ImageCard
            title={"Our special night!"}
            message={"Every night is perfect by your side."}
            image={pic2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ImageCard
            title={"Our special night!"}
            message={"Every night is perfect by your side."}
            image={pic3}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TopCarousel;
