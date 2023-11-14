import LinkedinLogo from "../assets/images/linkedin.png";
import PaytmLogo from "../assets/images/paytm.png";
import OlaLogo from "../assets/images/ola.png";
import { ReactComponent as LyearnLogo } from "../assets/images/lyearn.svg";
import RocketChat from "../assets/images/rocketchat.png";
import { TypeAnimation } from 'react-type-animation';

import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/animation/database.json";

const Home = () => {
  return (
    <section id="home" className="">
      <div className="grid  min-h-screen lg:grid-rows-5 grid-rows-4  grid-flow-row">
        <div className="lg:row-span-4 row-span-3 flex items-center px-6 justify-center max-w-2xl lg:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex items-center">
            <div className="flex-row">
            <div className="h-24 lg:h-24">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Improved database performance',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Reduced downtime',
                        1000,
                        'Enhanced data security',
                        1000,
                        'Increased compliance',
                        1000,
                        'Reduced IT costs',
                        1000,
                        'Peace of mind',
                        1000
                    ]}
                    className="text-4xl md:text-5xl"
                    wrapper="h1"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <h1 className="py-8 text-xl">We are a team of experienced database consultants with a passion for helping businesses optimize their database performance. We offer a wide range of services, including database design, implementation, optimization, and 24/7 support.</h1>
            </div>
            </div>
            <div className="flex items-center justify-center">
              <Lottie animationData={groovyWalkAnimation} />
            </div>
          </div>
        </div>
        <div className="row-span-1">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-center text-2xl text-gray-500  w-full">
                Let your Database be managed by people who have worked in
              </p>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin"
                  className="h-14 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                ></img>
                <img
                  src={PaytmLogo}
                  alt="Paytm"
                  className="col-span-2 w-full object-contain lg:col-span-1 h-24"
                ></img>
                <img
                  src={OlaLogo}
                  alt="Ola"
                  className="h-24 grayscale col-span-2  w-full object-contain lg:col-span-1"
                ></img>
                <LyearnLogo className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                <img
                  src={RocketChat}
                  alt="RocketChat"
                  className="h-10 grayscale col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
