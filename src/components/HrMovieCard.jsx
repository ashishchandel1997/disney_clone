import React from "react";

const HrMovieCard = ({ movie }) => {
  const img_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
      <img
        src={img_url + movie.backdrop_path}
        className="w-[120px] md:w-[260px] rounded-lg hover:border-[2px] border-gray-400 hover:scale-60 transition duration-300 ease-in-out cursor-pointer"
      />
      <h2 className="text-white text-center w-[120px] md:w-[260px] mt-5">
        {movie.title}
      </h2>
    </div>
  );
};

export default HrMovieCard;
