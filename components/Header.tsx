import CountdownTimer from "./CountdownTimer";

const Header = () => {
  const registerURL = "https://docs.google.com/forms/d/e/1FAIpQLSc3NL-GQo5iMpZj3Y4WFSrkk5_XQaz44hto1K8iCaKRgYFicA/viewform";

  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="flex mt-10 lg:mt-0 lg:grow lg:basis-0">
          <div className="image w-20 h-20">
            <img src="./events/compcom.png"/>
          </div>
          <span className="welcome h-12 mt-10 uppercase font-display text-4xl font-bold">
            COMPCOM<span className="text-gray-600">2024</span>
          </span>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-gray-700 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
      
              <time dateTime="2023-04-20">13 of March, 2024</time>
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 6 6"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
            </svg>
            <a href="https://gcesalem.edu.in/" target="_blank">
              GCE - SALEM
            </a>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur"></div>
          <a
            className=" relative inline-flex justify-center rounded-xl bg-black p-3 px-10 text-lg font-semibold text-white hover:bg-blue-900  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 active:text-white/70"
            href={registerURL}
            target="_blank"
          >
            Register Now
          </a>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
