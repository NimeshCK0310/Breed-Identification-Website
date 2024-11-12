import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Breed() {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchDogData();
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForDog();
    setSearched(true);
  };

  return (
    <div>
      <Navbar />
      <>
        <style>
          {`
            body {
              background-color: #131959;
            }
            .text-white {
              color: #ffffff;
            }
            .text-slate-400 {
              color: #94a3b8;
            }
            .bg-slate-400 {
              background-color: #64748b;
            }
            .bg-slate-700 {
              background-color: #334155;
            }
            .bg-slate-600 {
              background-color: #475569;
            }
          `}
        </style>
        {!dogs.length ? (
          <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
            Loading...
          </h1>
        ) : (
          <section className="p-8 max-w-[1500px] mx-auto padding 10px">
            <div className="text-center">
              <h1 className="text-center text-3xl font-bold lg:text-5xl text-white">
                The Dog Breeds
              </h1>
              <p className="my-8 text-white">
                {/* This application is powered by{" "} */}
                <a
                  href="https://thedogapi.com"
                  className="text-indigo-600 underline active:text-orange-400"
                >
                  {/* The Dog Api */}
                </a>
              </p>

              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a dog / breed"
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
              {dogs.map((dog) => (
                <Link
                  to={`/${dog.name}`}
                  key={dog.id || dog.name} // Fallback key if dog.id is unavailable
                  className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                >
                  <article>
                    <img
                      src={
                        dog.image?.url ||
                        (dog.reference_image_id
                          ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
                          : "https://via.placeholder.com/300x200?text=No+Image+Available")
                      } // Fallback image URL
                      alt={dog.name}
                      loading="lazy"
                      className="rounded md:h-72 w-full object-cover"
                    />
                    <h3 className="text-white text-lg font-bold mt-4">
                      {dog.name}
                    </h3>
                    <p className="text-slate-400">Bred For: {dog.bred_for}</p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </>
    </div>
  );
}
