import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
   <div className="absolute top-[15%] sm:top-[35%] left-4 sm:left-12 text-white z-20 max-w-xs sm:max-w-2xl">
  <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-4">{title}</h1>

  <p className="hidden sm:block text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-300 max-w-lg drop-shadow-md line-clamp-3">
    {overview}
  </p>

  <div className="flex gap-2 sm:gap-4">
    <button className="bg-white text-black px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg rounded-md font-semibold hover:bg-gray-300 transition">
      ▶ Play
    </button>
    <button className="bg-gray-700 bg-opacity-80 text-white px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg rounded-md font-semibold hover:bg-gray-600 transition">
      ℹ More Info
    </button>
  </div>
</div>


  )
}

export default VideoTitle