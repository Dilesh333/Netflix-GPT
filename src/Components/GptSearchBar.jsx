import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langkey =  useSelector(store => store.config.lang)
  return (
    <div className="flex justify-center items-cente pt-36 bg-black pb-5">
      <form>
        <input
          type="text"
          className="text-lg px-6 py-3 w-80 sm:w-[500px] border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 bg-white/10 backdrop-blur text-white placeholder-gray-300"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="ml-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-200 text-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
