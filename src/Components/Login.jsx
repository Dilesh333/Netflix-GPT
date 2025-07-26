import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { chceckValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //validate the form data
  const handleButtonClick = () => {
    const message = chceckValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message === null) return;

    //sign in signup logic

    if (!isSignInForm) {
      //signIn logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {USER_AVATAR},
          })
            .then(() => {
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signUp logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={LOGIN_BG}
        alt="Netflix Background"
      />

      <div className="fixed inset-0 bg-black opacity-60 -z-10"></div>

      <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-10 bg-black bg-opacity-70 text-white rounded-md shadow-lg"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="bg-transparent border border-gray-500 p-3 my-2 w-full rounded-md placeholder-gray-400 focus:outline-none"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="bg-transparent border border-gray-500 p-4 my-2 w-full rounded-md placeholder-gray-400 focus:outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-transparent border border-gray-500 p-4 my-2 w-full rounded-md placeholder-gray-400 focus:outline-none"
          />

          <p className="text-red-500 text-sm font-semibold mt-1">{errorMessage}</p>

          <button
            onClick={handleButtonClick}
            className="p-3 my-4 bg-red-700 hover:bg-red-800 w-full rounded-md font-semibold transition"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
            <label>
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
            <span
              onClick={toggleSignInForm}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign In now"}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
