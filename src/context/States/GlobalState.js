/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";
import appReducer from "../Reducers/AppReducer";

const initialState = {
  login: JSON.parse(window.localStorage.getItem("login")),
  user: window.localStorage.getItem("user"),
  image: window.localStorage.getItem("imageURL")
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function storeUser(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "STORE_EMPLOYEE",
      payload: user
    });
  }

  function storeLogin(login) {
    window.localStorage.setItem("login", JSON.stringify(login));
    dispatch({
      type: "LOGIN_EMPLOYEE",
      payload: login
    });
  }

  function storeImage(imageURL) {
    window.localStorage.setItem("imageURL", imageURL);
    dispatch({
      type: "IMAGE_EMPLOYEE",
      payload: imageURL
    });
  }

  function storeReset() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    dispatch({
      type: "RESET_EMPLOYEE"
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        Global: state,
        storeUser,
        storeLogin,
        storeImage,
        storeReset
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
