import React from "react";
import dog9 from "../../assets/dog9.jpeg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <style>
        {`
          .banner-container {
            max-width: 2000px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}
      </style>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container banner-container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={dog9}
                  alt="dog img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Best Dog Foods
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Give your dog the best with our premium dog food, crafted to
                  provide complete nutrition for every stage of life. Made with
                  high-quality ingredients, our food supports healthy growth,
                  shiny coats, and strong immune systems.
                  <br />
                  <br />
                  Packed with essential vitamins and minerals, our dog food
                  helps maintain energy levels, promotes digestive health, and
                  ensures your dog stays active and happy. Treat your dog to the
                  delicious taste they love and the nutrients they need for a
                  healthy, balanced life.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
