import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Audio } from  'react-loader-spinner'
import Card from "../Card/Card";
import axios from "axios";
import "./MovieList.css";
import Header from "../Header/Header";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true)
  const { type } = useParams();

  const getData = async () => {
    try {
        setIsloading(true)
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setMovieList(response?.data?.results);
      setIsloading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);
  
  if(isLoading){
        <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
    />
  }

  return (
    <>
    <Header />
    <div className="movie__list">
      <h2 className="list__title">
        {type ? type?.split("_").join(' ') : "POPULAR"}
      </h2>
      <div className="list__cards">
        {movieList?.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
    </>
  );
};
export default MovieList;
