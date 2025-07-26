import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="min-w-[45%] sm:min-w-[12rem] md:min-w-[12rem] lg:min-w-[12rem]">
      <img alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  );
};

export default MovieCard;
