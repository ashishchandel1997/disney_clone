import React, { useState } from "react";
import GenreList from "../constant/GenreList";
import MoviesList from "./MoviesList";

const GenreMovieList = () => {
  const [genreList, setGenreList] = useState([]);
  return (
    <div>
      {GenreList.genre.map((ele, index) => {
        return (
          index < 5 && (
            <div key={index} className="p-8 px-8 md:px-16">
              <h2 className="text-white text-[20px] font-bold">{ele.name}</h2>
              <MoviesList genreId={ele.id} index_={index} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default GenreMovieList;
