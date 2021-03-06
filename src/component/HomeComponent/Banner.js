import React from "react";
import bgImg from "../../assets/set-yellow-tools.jpg";

const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage: `url(${bgImg})`,
        height: 700,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md uppercase leading-10">
          <div data-aos="fade-down" data-aos-delay="500">
            <h1 className=" text-xl font-bold text-gray-300">
              Best discount up to 25% off
            </h1>
          </div>

          <div data-aos="fade-left" data-aos-delay="1000">
            <h1>
              <span className="text-4xl md:text-5xl font-bold">
                Summer 10% sale
              </span>{" "}
              <br />
              <span className="text-primary font-bold text-2xl">
                For all power tools
              </span>
            </h1>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1500">
            <button className="btn hover:bg-primary hover:text-white  bg-base-100 text-black">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
