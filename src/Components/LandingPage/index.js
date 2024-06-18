import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LandingPage = () => {
  return (
    <>
      <section className="text-gray-900 body-font mt-80">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.deere.com/assets/images/hay-forage/baling/round-baler/r4k007576-r1-1024x576.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Enhance the way of farming by renting
            </h1>
            <p className="mb-8 leading-relaxed text-left">
              Enhance your farm's productivity with our flexible rental terms
              and expert support, ensuring you have the right tools when you
              need them. Join AgriBuddy today for efficient, cost-effective land
              rental solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="font-bold text-4xl mb-7">We Offer</h1>
              <div className="h-1 w-20 blueColor rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Link
                  to="/Products"
                  className="LoginButton"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img
                    className="h-72 rounded w-full object-cover object-center mb-6"
                    src="https://www.nextgenag.us/wp-content/uploads/2019/12/modernizingfarming.png"
                    alt="content"
                  />
                  <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                    Farm Renting
                  </h1>
                  <p className="leading-relaxed text-base">
                    Secure prime agricultural land with flexible lease terms and
                    expert support, tailored to boost your farming success.
                  </p>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Link
                  to="/Products"
                  className="LoginButton"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img
                    className="h-72 rounded w-full object-cover object-center mb-6"
                    src="https://miro.medium.com/v2/resize:fit:673/1*Zcm85Wt1KYlJi8KfHDEhCw.jpeg"
                    alt="content"
                  />
                  <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                    Equipment Renting
                  </h1>
                  <p className="leading-relaxed text-base">
                    Access top-notch machinery with flexible terms and expert
                    support to lease and boost your farm's productivity.
                  </p>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Link
                  to="/Products"
                  className="LoginButton"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img
                    className="h-72 rounded w-full object-cover object-center mb-6"
                    src="https://youngagrarians.org/wp-content/uploads/ninja-forms/29/Silverstar-Veggies-8.jpg"
                    alt="content"
                  />
                  <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                    Farm Jobs
                  </h1>
                  <p className="leading-relaxed text-base">
                    Join a dedicated team for advancing sustainable agriculture
                    and gain hands-on experience in a dynamic, growth-oriented
                    environment
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="font-bold text-4xl mb-7">Statistics</h1>
            <div className="h-1 w-20 blueColor rounded"></div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                AgriBuddy is dedicated to enhancing farming efficiency and
                success in Agriculture Industry
              </h1>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                5K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                10K
              </h2>
              <p className="leading-relaxed">Tools Rented</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.5k
              </h2>
              <p className="leading-relaxed">Jobs Placed</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://t3.ftcdn.net/jpg/00/19/87/62/360_F_19876231_edoDErhi94Ev2MX2buwbN7Q0EyHUbx76.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="font-bold text-4xl mb-7">Testimonial</h1>
            <div className="h-1 w-20 blueColor rounded"></div>
          </div>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              AgriBuddy has transformed my farming operations. Renting equipment
              has never been easier, and the quality of service is unmatched.
              It's been a game-changer for my productivity.
            </p>
            <span className="inline-block h-1 w-10 rounded blueColor mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              John D.
            </h2>
            <p className="text-gray-500">Farmer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
