import React from "react";
import Img from "../../assets/dog6.png";
import Img2 from "../../assets/dog7.png";
import Img3 from "../../assets/dog8.jpg";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Breed Identify",
    description:
      "Dbreed offers a complete platform to identify dog breeds, explore breed information, and access essential dog care resources, all in one convenient place.",
  },
  {
    id: 2,
    img: Img,
    name: "Breed Details",
    description:
      "Explore detailed descriptions of each dog breed, including their characteristics, temperament, care needs, and unique traits to help you make informed decisions about your new companion.",
  },
  {
    id: 3,
    img: Img3,
    name: "Dog Store",
    description:
      "Discover a wide range of high-quality dog products, from food and accessories to toys and grooming essentials, all carefully selected to keep your dog happy and healthy.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[500px] mx-auto px-4">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
            <p className="text-xs md:text-sm text-gray-600">
              At Dbreed, we help you easily identify and explore dog breeds with our powerful breed identification tools. Discover comprehensive breed information, health tips, and everything you need to know about caring for your furry friend, all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-6 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white relative shadow-xl duration-300 group max-w-[280px] h-[400px] transform transition-all"
              >
                <div className="flex justify-center items-center h-[200px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-full h-full object-contain group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"
                  />
                </div>
                <div className="p-4 text-center space-y-2 flex flex-col justify-between h-[200px]">
                  <h1 className="text-lg md:text-xl font-bold text-primary group-hover:text-white">
                    {service.name}
                  </h1>
                  <p className="text-gray-500 group-hover:text-white text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
