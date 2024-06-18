import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/images/404.svg";

export default function JobListing() {
  return (
    <section className="Error_Block mt-120">
      <div className="container">
        <div className="row justify-content-center mt-50 mb-50">
          <div className="col-xl-7 col-md-10 col-12">
            <img src={ErrorImage} className="img-fluid" alt="Error " />
            <div className="mt-40 text-center">
              <Link
                to="/"
                type="button"
                className=" CommonButton  btn btn-link "
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
