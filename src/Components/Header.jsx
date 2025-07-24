import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  };

   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    //unsubscribe when component umnounts
    return ()=> unSubscribe();
  }, []);
  return (
    <>
      <div className=" w-screen absolute px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />
        {user && (<div className="flex p-2 items-center">
          <img
            className="w-10 h-10"
            src={USER_AVATAR}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white p-2">
            Sign Out
          </button>
        </div>)}
      </div>
    </>
  );
};
