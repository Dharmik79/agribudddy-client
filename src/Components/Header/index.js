import React from "react";
import $ from "jquery";
import { buttonClose, dataTrigger } from "../../assets/js/custom";
import logo from "../../assets/images/upCrops1.png";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/States/GlobalState";
import { postResponse } from "../../services/API/CommonAPI";
import avatar from '../../assets/images/avatar.png';

export default function Header(props) {
  const [authToken, setAuthToken] = React.useState(undefined);
  const { Global, storeReset } = React.useContext(GlobalContext);

  const login =
    window.localStorage?.getItem("login") ||
    window.sessionStorage?.getItem("login");
  const [state, setState] = React.useState({
    firstName: JSON.parse(login)?.admin?.firsName ?? undefined,
    lastName: JSON.parse(login)?.admin?.lasName?? undefined,
  });
  const [tab, setTab] = React.useState(props.tab);
  React.useEffect(() => {
    $(".navbar-nav li a.nav-link").on("click", function () {
      $("body").removeClass("offcanvas-active");
      $(".navbar-collapse").removeClass("show");
    });
    const login = window.localStorage?.getItem("login");
    setAuthToken(authToken);
    setState({
      ...state,
      firstName: JSON.parse(login)?.admin?.firsName ?? undefined,
    lastName: JSON.parse(login)?.admin?.lasName ?? undefined,
      user_type:
        typeof login === "string"
          ? JSON.parse(login)?.user_type
          : login?.user_type,
      user:
        Global?.user?.user?.userTypeToDisplay ??
        Global?.user?.personal?.user?.userTypeToDisplay
    });
  }, [authToken, Global, Global?.login, Global?.user, Global?.image]);

  const handleLogOut = async () => {
    localStorage.getItem("connect-token");
    await storeReset();
    localStorage.clear();
    window.location.href = "/"
  };

  React.useEffect(() => {
    setTab(props.tab);
  }, [props.tab]);

  return (
    <header className="Header" id="myHeader">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="img-fluid logoHeader" alt="Logo" />
          </Link>
          <div className=" navbar-collapse">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to="/"
                  className={tab === "/" ? "nav-link active" : "nav-link"}
                  onClick={() => setTab("/")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Products"
                  className={
                    tab === "/Products" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setTab("/Products")}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Cart"
                  className={
                    tab == "/Cart" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setTab("/Cart")}
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ContactUS"
                  className={
                    tab == "/ContactUS" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setTab("/ContactUS")}
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown Profile">
                {!login ? (
                  <Link
                    to="/login"
                    className="LoginButton"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Log In / Sign Up
                  </Link>
                ) : (
                        <button onClick={handleLogOut} className="dropdown-item">
                          Log Out
                        </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
