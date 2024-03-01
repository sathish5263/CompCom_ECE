"use client";
import Image from "next/image";
import { MouseEvent, MouseEventHandler, useState } from "react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const registerURL = "https://docs.google.com/forms/d/e/1FAIpQLSc3NL-GQo5iMpZj3Y4WFSrkk5_XQaz44hto1K8iCaKRgYFicA/viewform";

  const [hideText, setHideText] = useState(true);
  const showMore = (e: MouseEvent) => {
    e.preventDefault();
    setHideText(false);
  };
  return (
    <div className="pb-20 pt-10 sm:py-24">
      <div className=" min-h-screen flex item-center justify px-16">
      <div className="relative w-full max-w-lg">
        {/* <Image
          alt="background"
          src="/bg.jpg"
          width="918"
          height="1495"
          decoding="async"
          data-nimg="1"
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
        /> */}
        <div className="absolute  top-12 -left-4 w-72 mt- h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-12 -right-4 w-72 mt- h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-20 left-20 w-72 mt- h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        {/* <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div> */}
      </div>
      
      <div className="  max-w-7xl px-4  sm:px-6 lg:px-8 relative ml-0">
        <div className="mx-auto max-w-2xl lg:max-w-5xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-900 sm:text-7xl">
          Embark on a technological journey at COMPCOM
            <span className="hidden sm:inline"></span>
            <span className="hidden sm:inline">
              {" "}
        
            </span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl sm:text-2xl tracking-tight text-blue-950">
            <p>
            A nationally renowned technical symposium hosted by the esteemed{" "}
              <a
                href="https://gcesalem.edu.in/"
                className="hover:text-blue-800 hover:underline font-extrabold"
                target="_blank"
              >
                Government College of Engineering, Salem, Tamil Nadu, India
              </a>
              . This avant-garde event provides a distinguished platform for students to flaunt their technical acumen in the vast realm of Electronics and Communication Engineering.{" "}
              {hideText && (
                <a
                  href="#"
                  onClick={showMore}
                  className="text-blue-800 sm:hidden text-base"
                >
                  [read more]
                </a>
              )}
            </p>
            <p className={(hideText ? "hidden " : " ") + "sm:block"}>
            COMPCOM unveils a spectrum of avant-garde events, spanning technical intricacies, non-technical facets, and immersive workshops delving into cutting-edge domains such as antennas, communication, augmented reality, virtual reality, and other emerging technologies. Attendees will seize the golden opportunity to engage with proficient experts across diverse domains, extracting valuable insights into the latest advancements and trends shaping the technological landscape.
            </p>
            <p className={(hideText ? "hidden " : " ") + "sm:block"}>
            With its unparalleled content and networking prospects, COMPCOM stands as an imperative on the agenda for individuals passionate about delving into the forefront of Electronics and Communication engineering, ensuring an enriching exploration and expansion of their technological interests.
            </p>
          </div>
          </div>
          <CountdownTimer />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur"></div>
          <a
            className=" relative ml-10 px-20 inline-flex justify-center rounded-xl bg-black p-3 px-10 text-lg font-semibold text-white hover:bg-blue-900  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 active:text-white/70 sm:hidden"
            href={registerURL}
            target="_blank"
          >
            Register Now
          </a>
         </div>
          {/* <a
            className="inline-flex justify-center rounded-2xl bg-blue-900 p-4 text-base font-semibold text-white hover:bg-red-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 active:text-white/70 mt-10 w-full sm:hidden"
            href={registerURL}
            target="_blank"
          >
            Register Now
          </a> */}
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left lg:ml-40">
            <div>
              <dt className="font-mono text-sm text-blue-900">Events</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-950">
                8
              </dd>
            </div>
            
            <div>
              <dt className="font-mono text-sm text-blue-900">Venue</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-950">
                Dept. of ECE
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-900">Location</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-950">
                GCE, Salem
              </dd>
            </div>
          </dl>
          <div className="mt-20 bg-gradient-to-b from-blue-800 to-gray-900 max-w-3xl p-10 rounded-3xl">
            <h2 className="font-bold text-2xl text-white mb-5">Registration</h2>
            <ul className="list-disc list-inside text-white">
              <li><span className="text-gray-200">Online Regsitration: Rs.250/-</span></li>
              <li><span className="text-gray-200">Onspot registration: Rs.300/-</span></li>
              <li><span className="text-gray-200">If you register as a group of 5 members, you only need to pay for 4 registrations. That's a savings of Rs. 250! i.e 5(4+1)= Rs.1000/-</span></li>
            </ul>
            
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
