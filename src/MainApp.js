import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { GlobalContext } from "./context/States/GlobalState";
import { getResponse } from "./services/API/CommonAPI";
import { ToastContainer } from "react-toastify";

import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
function MainApp(props) {
  const { storeImage, storeUser } = React.useContext(GlobalContext);
  const location = useLocation();
  const [loader, setLoader] = React.useState(false);

  const hideLoader = () => {
    setLoader(false);
  };
  const showLoader = () => {
    setLoader(true);
  };
  const defaultData = async () => {
    showLoader();
    const id =
      window.localStorage?.getItem("connect-id") ||
      window.sessionStorage?.getItem("connect-id");
    const login =
      window.localStorage?.getItem("login") ||
      window.sessionStorage?.getItem("login");
      const user_type =2;
    const profileData =
      user_type &&
      id &&
      (await getResponse(`${user_type}/${id}/personal/all`, {}));
    const Image =
      user_type &&
      id &&
      (await getResponse(`${user_type}/${id}/personal/profile_pic`, {}));
    storeUser(profileData?.data);
    storeImage(Image?.data?.url);
    hideLoader();
  };

  React.useEffect(() => {
    defaultData();
  }, []);

  return (
    <>
      {loader ? (
        {/* <Loader /> */}
      ) : (
        <>
          <Header
            tab={location.pathname}
            loader={loader}
            hideLoader={hideLoader}
            showLoader={showLoader}
          />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
            <div>{props.children}</div>
          <Footer />
        </>
      )}
    </>
  );
}

export default MainApp;
