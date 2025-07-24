import React from "react";
import { Header } from "./Header";
import useNowPlayingmovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingmovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
