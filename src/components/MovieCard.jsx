import React from "react";

const img_url = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ movie }) => {
  console.log(movie, "moviee");
  return (
    <>
      <img
        src={img_url + movie.poster_path}
        className="w-[120px] md:w-[200px] rounded-lg hover:border-[2px] border-gray-400 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
      />
    </>
  );
};

export default MovieCard;
