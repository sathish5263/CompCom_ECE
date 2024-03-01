const Footer = () => {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
        <span className=" welcome uppercase font-display text-2xl font-bold">
          COMPCOM<span className="text-gray-600">2024</span>
        </span>
        <div className="flex gap-2 mt-4 mb-8 md:m-0">
          <a
            href="mailto:compcom2024@gmail.com"
            className="ml-5 flex items-center bg-black hover:bg-blue-950 hover:text-white p-3 rounded-full text-blue-800 hover:shadow-blue-900/20 shadow-xl shadow-red-900/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/compcom24?igsh=MXNlN3RxN3MweWR4Zg%3D%3D"
            target="_blank"
            className="ml-5 flex items-center bg-black hover:bg-blue-950 hover:text-white p-3 rounded-full text-blue-800 hover:shadow-red-900/20 shadow-xl shadow-red-900/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="tel:+919585888184"
            className="ml-5 flex items-center bg-black hover:bg-blue-950 hover:text-white p-3 rounded-full text-blue-800 hover:shadow-red-900/20 shadow-xl shadow-red-900/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          <a
            href="https://gcesalem.edu.in/17/department-electronics-and-communication-engineeering"
            target="_blank"
            className="ml-5 flex items-center bg-black hover:bg-blue-950 hover:text-white p-3 rounded-full text-blue-800 hover:shadow-red-900/20 shadow-xl shadow-red-900/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-6 text-base text-gray-500 md:mt-0">
          Copyright © 2024 Dept. of ECE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
