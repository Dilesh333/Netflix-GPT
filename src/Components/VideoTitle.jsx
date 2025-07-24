import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-[35%] left-12 text-white  z-20 max-w-2xl '>
        <h1 className='text-5xl font-bold  mb-4'>{title}</h1>
        <p className='text-lg  mb-6 text-gray-400'>{overview}</p>
        <div className='flex gap-4'>
            <button className="bg-white text-black px-6 py-2 text-lg rounded-md font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-80 text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-gray-600 transition">
          ℹ More Info
        </button>
        </div>
    </div>
  )
}

export default VideoTitle