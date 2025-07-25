import React, { use } from "react";
import { Header } from "./Header";
import useNowPlayingmovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingmovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
     
      <MainContainer />
      <SecondaryContainer />

    </div>
  );
};

export default Browse;
