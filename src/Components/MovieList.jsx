import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  

  return (
    <div className="relative  sm:pl-6 mt-0">
      <h1 className="sm:text-xl font-bold mb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
