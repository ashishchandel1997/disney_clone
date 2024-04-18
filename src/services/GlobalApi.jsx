import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const api_key = "7e14e66eaf6d636b41db0ada49fd5e2f";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=7e14e66eaf6d636b41db0ada49fd5e2f';

export const getTrendingVideos = () => {
    return axios
      .get(`${baseUrl}trending/all/day?api_key=${api_key}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };


  export const getGenreVideos = (id) => {
    return axios
    .get(movieByGenreBaseURL+"&with_genres="+id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

 
