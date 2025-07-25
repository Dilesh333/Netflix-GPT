import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component umnounts
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className=" w-screen absolute px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2 items-center">
           {showGptSearch&& <select
              onChange={handleLanguageChange}
              className="px-2 py-1 rounded-md bg-gray-500"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
            <button
              onClick={handleGptSearchClick}
              className="px-4 py-2 font-semibold text-white border rounded-md mx-4 hover:bg-white hover:text-black"
            >
              {showGptSearch? "Home Page":"GPT Search"}
            </button>
            <img className="w-10 h-10" src={USER_AVATAR} alt="usericon" />
            <button
              onClick={handleSignOut}
              className="font-bold text-white p-2"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
