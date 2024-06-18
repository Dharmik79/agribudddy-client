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
              src="https://media.gettyimages.com/id/167805081/photo/soy-bean-crops.jpg?s=612x612&w=0&k=20&c=JAFz4Nnr8ojsC60fDNuozsbOgl-UZsqj72oGDf4K6JY="/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Enhance ease of farming
            </h1>
            <p className="mb-8 leading-relaxed text-left">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="font-bold text-4xl mb-7">
                We Offer
              </h1>
              <div className="h-1 w-20 blueColor rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Link
                    to="/membership"
                    className="LoginButton"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                <img
                  className="h-72 rounded w-full object-cover object-center mb-6"
                  src="https://media.istockphoto.com/id/1350041645/photo/design-team-discussing-plans-together.jpg?s=612x612&w=0&k=20&c=GpsVm3kGnmn6V0emX1fu2lg5dZ46UmnA_wNKtmJ4OkM="
                  alt="content"
                />
                <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                  CONSULTING
                </h1>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                  </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <Link
                    to="/SoilTesting"
                    className="LoginButton"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                <img
                  className="h-72 rounded w-full object-cover object-center mb-6"
                  src="https://t3.ftcdn.net/jpg/02/75/11/28/360_F_275112884_Ewsb9PBzX8tNanNf2KbHCVu2eJZmP7PU.jpg"
                  alt="content"
                />
                <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                  SOIL TESTING
                </h1>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
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
                  src="https://t4.ftcdn.net/jpg/04/20/08/75/360_F_420087581_UHJebqBGQO1tivCoDkLykg7vQaCgH7sb.jpg"
                  alt="content"
                />
                <h1 className="text-2xl blueColorText font-medium title-font mb-4">
                  MARKETPLACE
                </h1>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
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
                Moon hashtag pop-up try-hard offal truffaut
              </h1>
              <div className="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
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
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded blueColor mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
