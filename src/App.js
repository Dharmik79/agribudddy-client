/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import head from "lodash.head";
import compact from "lodash.compact";
import find from "lodash.find";
import NotFound from './Components/NotFound';
import Header from './Components/Header';
import SignUpPage from './Components/SignUpPage';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import MainApp from './MainApp';
import LogInPage from './Components/LogIn';
import Cart from "./Components/Cards";
import ProductPage from "./Components/Product";
import ThankYou from "./Components/ThankYou";
import "./index.css"
import MembershipPage from "./Components/Membership";
import Item from "./Components/Products/Item";
import CreateProductForm from "./Components/CreateProduct";
import LandingPage from "./Components/LandingPage";

import Payment from "./Components/Payment";
import SoilTesting from "./Components/SoilTesting";
function App() {
  const login =
    window.localStorage?.getItem("login") ||
    window.sessionStorage?.getItem("login");
  const loginData = typeof login === "string" ? JSON.parse(login) : login;
  const RoutesConst =
[
  { path: "/SignUp", name: "SignUpPage", component: <SignUpPage /> },
    { path: "/login", name: "LogInPage", component: <LogInPage /> },
    // { path: "/", name: "HomePage", component: <Products /> },
];
  const RestrictedRoutes = ({ ...props }) => {
    const newPath = find(RoutesConst, function (o) {
      if (o.CheckFirst) {
        const path = head(compact(o.path.split("/")));
        const NewProps = props.location.pathname;
        const newData = head(compact(NewProps.split("/")));
        return path === newData;
      }
      return o.path === props.location.pathname;
    });

    if (newPath) {
      const token =
        localStorage.getItem("upCrop-token") ??
        sessionStorage.getItem("upCrop-token");
      if (newPath.tokenAllow) {
        if (token) {
          if (
            newPath.user == loginData?.user_type?.userType ||
            newPath.user == "all"
          ) {
            return <Route {...props} component={() => newPath.component} />;
          } else {
            window.location.href = "/";
          }
        }
        if (!token) {
          window.location.href = "/login";
        }
      } else {
        return <Route {...props} component={() => newPath.component} />;
      }
    } else {
      return <Route {...props} component={NotFound} />;
    }
  };

  return (
    <BrowserRouter>
        <MainApp>
          <Switch>
            <Route exact path="/Products" component={ProductPage} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/SoilTesting" component={SoilTesting} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/SignUp" component={SignUpPage} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/membership" component={MembershipPage} />
            <Route exact path="/createproduct" component={CreateProductForm} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/ThankYou" component={ThankYou} />
            
            <Route exact path="/payment" component={Payment} />

            
            
            <RestrictedRoutes path={`${window?.location?.pathname}`} />
          </Switch>
        </MainApp>
    </BrowserRouter>
  );
}

export default App;
