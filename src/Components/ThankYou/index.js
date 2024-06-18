import React from "react";
import { Link } from "react-router-dom";

export default function JobListing() {
  return (
    <section className="Error_Block min-h-screen flex justify-center items-center">
      <div className="container">
        <div className="row justify-content-center mt-50 mb-50">
          <div className="col-xl-7 paddingClass col-md-10 col-12">
            Thank you for the Payment. Now our Associate will reach out within 48 hours to serves you.In case if you any inquires then you can reach out us on contact@airbuddy.com.
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
