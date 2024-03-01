"use client";

import Image from "next/image";
import Countdown from "react-countdown-simple";

const CountdownTimer = () => {
  const zeroPad = (val: number) => (val < 10 ? "0" + val : val);

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="overflow-hidden grid-cols-2 gap-2 flex justify-center py-10 relative  text-blue-900">
      {/* <svg
        viewBox="0 0 200 200"
        className="countdown-spinner absolute inset-0 hidden lg:block"
      >
        <path
          className="fill-transparent"
          id="curve"
          d="M25,100A75,75 0 1 1175,100A75,75 0 1 125,100M100,100"
        />
        <text className="fill-blue-800">
          <textPath
            xlinkHref="#curve"
            className="uppercase text-xs tracking-[0.3em]"
          >
            COMPCOM2024 - COMPCOM2024 - COMPCOM2024 -
          </textPath>
        </text>
      </svg> */}
      <div className="flex flex-col items-center w-20 py-2 rounded-2xl bg-blue-300/10 backdrop-blur">
        <p className="font-display font-bold text-4xl">{zeroPad(days)}</p>
        <span className="font-mono text-sm">days</span>
      </div>
      <div className="flex flex-col items-center w-20 py-2 rounded-2xl bg-blue-300/10 backdrop-blur ">
        <p className="font-display font-bold text-4xl">{zeroPad(hours)}</p>
        <span className="font-mono text-sm">hours</span>
      </div>
      <div className="flex flex-col items-center w-20 py-2 rounded-2xl bg-blue-300/10 backdrop-blur ">
        <p className="font-display font-bold text-4xl"> {zeroPad(minutes)}</p>
        <span className="font-mono text-sm">mins</span>
      </div>
      <div className="flex flex-col items-center w-20 py-2 rounded-2xl bg-blue-300/10 backdrop-blur ">
        <p className="font-display font-bold text-4xl">{zeroPad(seconds)}</p>
        <span className="font-mono text-sm">secs</span>
      </div>
      <p className="text-blue-950 mb-2  absolute bottom-0 font-display">
        - left until COMPCOM<span className="text-blue-800">2024</span> -
      </p>
      
    </div>
  );

  return (
    <Countdown
      targetDate={new Date("13 March 2024").toString()}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
