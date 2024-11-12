import React from "react";
import dog5 from "../../assets/dog5.png";
import dog3 from "../../assets/dog3.png";
import dog2 from "../../assets/dog2.png";
import Vector from "../../assets/vector3.png";

const ImageList = [
  {
    id: 1,
    img: dog5,
  },
  {
    id: 2,
    img: dog3,
  },
  {
    id: 3,
    img: dog2,
  },
];

const Hero = () => {
  // Initialize with the first image in the list
  const [imageId, setImageId] = React.useState(ImageList[0].img);

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
          .container {
            max-width: 1500px;
            margin: 0 auto;
            padding: 0 20px;
          }
        `}
      </style>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Welcome{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  DBreed
                </span>{" "}
                Zone
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Go to destination for discovering and identifying dog breeds with ease.
                Explore detailed breed information, insights, and everything you need to know about dogs, all in one place.
                From finding the right breed to understanding their unique traits, Dbreed is here to help you connect with your perfect canine companion!
              </p>
              <div>
                {/* Optional Button Section */}
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[400px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-auto w-auto max-w-[100%] sm:max-w-[450px] flex justify-center items-center overflow-hidden">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="dog img"
                  className="h-auto w-full max-h-[450px] max-w-full object-contain"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute right-[-30px] lg:right-[-50px] bg-white/30 rounded-full p-2 shadow-lg">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => setImageId(item.img)}
                    alt="dog img"
                    className="w-[60px] sm:w-[80px] h-auto object-contain cursor-pointer hover:scale-105 duration-200 rounded-md shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
