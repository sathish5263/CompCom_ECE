import Image from "next/image";

const Contact = () => {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-4 overflow-hidden bg-red-50  sm:-mx-6 md:mx-0 md:rounded-3xl shadow-xl shadow-red-900/10 ">
        <div className="relative w-full max-w-lg">
        <div className="absolute  top-12 -left-4 w-72 mt- h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-12 -right-4 w-72 mt- h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-20 left-20 w-72 mt- h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
          {/* <Image
            alt="background"
            src="/bg.jpg"
            width="919"
            height="1351"
            decoding="async"
            data-nimg="1"
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            loading="lazy"
          /> */}
          <div className="relative mx-auto grid grid-cols-1 xl:max-w-none xl:grid-cols-5">
            <div className="px-4 py-20 sm:px-6  md:px-16 xl:px-24 xl:py-36 col-span-3">
              <p className="text-lg -tracking-wide text-black">
                Mark your calendars
              </p>
              <p className="mt-2 font-display text-4xl font-bold tracking-tighter text-blue-900 sm:text-5xl">
               14th March
              </p>
              <div className="mt-8">
                <p className="text-lg -tracking-wide text-red-950 mb-2">
                  For any queries
                </p>
                <div className="p-4 border-2 rounded-2xl border-blue-900/20 sm:flex gap-5 bg-white/20 backdrop-blur sm:w-max text-xl">
                  <a href="tel:+916379066717" className="hover:text-blue-800">
                    <div className="pb-4 sm:pb-0 sm:border-b-0 border-slate-900/10 border-b-2 sm:pr-10 sm:border-r-2">
                      <small>
                        <h3 className="font-display font-bold">Moorthy N</h3>
                      </small>
                      +91 9360378375
                    </div>
                  </a>
                  <a href="tel:+919361693890" className="hover:text-blue-800">
                    <div className="pt-4 sm:pt-0 sm:pr-10">
                      <small>
                        <h3 className="font-display font-bold">Surya</h3>
                      </small>
                      +91 8667383006
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1953.3646170243999!2d78.087592!3d11.71358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3defbaaaab%3A0x41c1ba88d642282d!2sECE!5e0!3m2!1sen!2sin!4v1680357661885!5m2!1sen!2sin"
                className="h-full min-h-[480px] p-4 xl:p-0 rounded-3xl xl:rounded-l-none overflow-hidden xl:border-4 border-blue-200 w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
