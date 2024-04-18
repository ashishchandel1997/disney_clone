import React, { useEffect, useRef, useState } from "react";
import { getGenreVideos } from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MoviesList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  const eleRef = useRef();
  const slideLeft = (ele) => {
    ele.scrollLeft -= 500;
  };

  const slideRight = (ele) => {
    ele.scrollLeft += 500;
  };

  useEffect(() => {
    getGenreVideos(genreId)
      .then((data) => {
        setMovieList(data.results);
        console.log(data.results, "---------------------------");
      })
      .catch((err) => {
        console.error("Error fetching trending videos:", err);
      });
  }, []);
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(eleRef.current)}
        className={`text-[50px] text-white p-2 cursor-pointer z-10 hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
      />
      <IoChevronForwardOutline
        onClick={() => slideRight(eleRef.current)}
        className={`text-[50px] text-white p-2 cursor-pointer z-10 hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        } right-0`}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10 transition duration-700 ease-in-out scroll-smooth"
        ref={eleRef}
      >
        {movieList.map((ele, index) => {
          return (
            <>
              {index_ % 3 == 0 ? (
                <HrMovieCard movie={ele} />
              ) : (
                <MovieCard movie={ele} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
