import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


export const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId)

  return (
    <div className=" top-0 left-0 h-screen w-full  overflow-hidden -mt-5 -z-10 overflow-x-hidden " >
      <iframe className="aspect-video pointer-events-none"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
