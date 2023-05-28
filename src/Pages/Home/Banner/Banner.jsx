import React from "react";
import caroselOne from "../../../assets/carosel-logo/carosel-1.png";
import caroselTwo from "../../../assets/carosel-logo/carosel-2.png"
import caroselThree from "../../../assets/carosel-logo/carosel-3.png";
import caroselFour from "../../../assets/carosel-logo/carosel-4.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={caroselOne} className="w-full" />
          <div className="carousel-text space-y-4">
            <p className="text-orange-100 font-bold text-7xl w-1/3 hidden md:block ">
              Toys that Spark Smiles and Ignite Endless Adventures
            </p>
            <div className="flex  space-x-3">
              <button className="btn btn-outline btn-danger custom-button hidden md:block ">
                Lets Explore
              </button>
              <button className="btn btn-outline btn-secondary custom-button hidden md:block ">
                Get Item
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={caroselTwo} className="w-full" />
          <div className="carousel-text space-y-4">
            <p className="text-orange-100  font-bold text-7xl w-1/3 hidden md:block ">
              Toys that Spark Smiles and Ignite Endless Adventures
            </p>
            <div className="flex  space-x-3">
              <button className="btn btn-outline btn-danger custom-button hidden md:block">
                Lets Explore
              </button>
              <button className="btn btn-outline btn-secondary custom-button hidden md:block ">
                Get Item
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={caroselThree} className="w-full" />
          <div className="carousel-text space-y-4">
            <p className="text-green-950 font-bold text-7xl w-1/3 hidden md:block">
              Toys that Spark Smiles and Ignite Endless Adventures
            </p>
            <div className="flex  space-x-3">
              <button className="btn btn-outline btn-danger custom-button hidden md:block">
                Lets Explore
              </button>
              <button className="btn btn-outline btn-secondary custom-button hidden md:block">
                Get Item
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={caroselFour} className="w-full" />
          <div className="carousel-text space-y-4">
            <p className="text-orange-100  font-bold text-7xl w-1/3 hidden md:block ">
              Toys that Spark Smiles and Ignite Endless Adventures
            </p>
            <div className="flex  space-x-3">
              <button className="btn btn-outline btn-danger custom-button hidden md:block">
                Lets Explore
              </button>
              <button className="btn btn-outline btn-secondary custom-button hidden md:block">
                Get Item
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
