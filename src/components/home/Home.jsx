import React, { useEffect } from "react";
import MovieListing from "../movielisting/MovieListing";
import movieApi from "../../constant/apis/movieApi";
import { APIKey } from "../../constant/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    let movieText = "harry"
    const fetchMovies = async () => {
      let response = await movieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch(err=>{
        console.log("error", err)
      })
      console.log(response)
    };
    fetchMovies(); 
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
