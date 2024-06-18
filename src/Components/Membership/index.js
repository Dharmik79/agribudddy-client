import React, { useState, useEffect } from "react";
import { getResponse } from "../../services/API/CommonAPI";

const MembershipPage = () => {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const fetchMemberships = async () => {
      const data = await getResponse("plans/getPlans");
      setMemberships(data.payload.plans);
    };
    fetchMemberships();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose a membership plan that fits your needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {memberships.map((membership, index) => (
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full" key={index}>
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-lg tracking-widest font-medium text-gray-900">
                  {membership.name}
                </h2>
                <h1 className="text-4xl text-gray-900 pb-15 my-2 border-b border-gray-200 leading-none">
                  ${membership.price}
                </h1>
                <ul className="flex-grow my-2">
                  {membership.description.map((desc, index) => (
                    <li key={index} className="text-gray-600 my-2">
                      <div className="flex items-center space-x-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => (window.location.href = "/Payment")}
                  className="flex items-center justify-center mt-4 text-white blueColor border-0 py-2 px-4 w-full focus:outline-none hover:bg-slate-600 rounded"
                >
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPage;
