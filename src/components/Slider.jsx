import React, { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slider = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const image_base_url = "https://image.tmdb.org/t/p/original";

  const elementRef = useRef();

  const scrollLeft = (ref) => {
    ref.scrollLeft -= window.innerWidth - 125;
  };

  const scrollRight = (ref) => {
    ref.scrollLeft += window.innerWidth - 125;
  };

  useEffect(() => {
    getTrendingVideos()
      .then((data) => {
        setTrendingVideos(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        console.error("Error fetching trending videos:", err);
      });
  }, []);
  return (
    <div>
      <HiChevronLeft
        className="text-white absolute mt-[180px] text-[50px] cursor-pointer hidden md:block"
        onClick={() => scrollLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white absolute mt-[180px] text-[50px] right-0 cursor-pointer hidden md:block"
        onClick={() => {
          scrollRight(elementRef.current);
        }}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none  scroll-smooth"
        ref={elementRef}
      >
        {trendingVideos.map((ele) => {
          return (
            <React.Fragment>
              <img
                src={`${image_base_url}${ele.backdrop_path}`}
                className="min-w-full md:h-[410px] object-cover mr-[20px] object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all ease-in duration-100 border-collapse"
              />
            </React.Fragment>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default Slider;
