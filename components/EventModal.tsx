import { Dialog } from "@headlessui/react";
import Image from "next/image";

const EventModal = ({ isOpen, setIsOpen, event }: any) => {
  const isWorkshop = event.isWorkshop;
  const registerURL = "https://forms.gle/RUKYBpTmGk6EDccPA";

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-blue-950/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 overflow-y-auto p-4">
        <div className="min-h-full items-center max-w-7xl mx-auto ">
          <Dialog.Panel>
            <div className="bg-blue-50 p-0 sm:p-10 xl:p-20 rounded-3xl relative w-full flex-1">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 sm:top-4 sm:right-4 p-4 rounded-full bg-blue-50 z-20 hover:bg-blue-100 text-blue-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative h-64 w-full transform overflow-hidden rounded-3xl">
                <div className="absolute bottom-6 left-0 right-4 top-0 rounded-3xl border transition duration-300 xl:right-6 border-blue-300"></div>
                <div
                  className="absolute inset-0 bg-blue-50"
                  style={{
                    clipPath: `url(#clip${Math.floor(
                      Math.random() * (3 - 1 + 1) + 1
                    )})`,
                  }}
                >
                  <Image
                    src={`/events/${event.img}`}
                    alt={event.name}
                    width="640"
                    height="480"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300"
                  />
                  <span className="w-full pointer-events-none bg-blue-300 absolute inset-0 z-10 bg-blend-lighten text-white opacity-75 flex items-center justify-center p-4 text-center font-extrabold uppercase text-5xl sm:text-7xl">
                    {event.name}
                  </span>
                </div>
              </div>
              <div className="p-4 pb-10 sm:p-0">
                <div className="mt-10 bg-blue-800/10 p-2 px-10 pb-10 rounded-2xl">
                  <h3 className=" font-display text-blue-900 mt-10 text-2xl font-bold flex gap-2 items-center">
                    {event.name} ({event.shortDesc})
                    {event.isOnline && (
                      <span className="text-sm uppercase font-mono bg-blue-800 text-white leading-none px-2 py-1.5 animate-pulse rounded-md">
                        Online Workshop
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 leading-normal text-lg">{event.desc}</p>
                </div>
                {event.abstractEmail && (
                  <div>
                    <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                      Submission of Abstract
                    </h4>
                    <p className="text-lg">
                      To participate, please submit a one-page abstract of your
                      paper to{" "}
                      <a
                        className="underline font-bold hover:text-blue-800"
                        href={`mailto:${event.abstractEmail}`}
                      >
                        {event.abstractEmail}
                      </a>{" "}
                      before <span className="font-bold">April 17th, 2023</span>.{" "}
                      <br />
                      The email should contain the contact details of the
                      participants. Shortlisted participants will be invited to
                      present their work during the event on Day 1 of COMPCOM.
                    </p>
                  </div>
                )}
                <div className="sm:flex gap-10 mt-5 pb-7 px-10 border-4 rounded-xl">
                  {event.rules && (
                    <div className="sm:min-w-[320px] sm:w-1/2 flex-1">
                      <h4 className=" font-display text-blue-900 mt-10 text-xl font-bold">
                        Rules
                      </h4>
                      <ul className="list-none list-inside mt-1">
                        {event.rules.map((e: any, idx: number) => (
                          <li
                            key={idx}
                            className="text-lg relative pl-5 sm:pl-6 pb-1"
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  </div>
                  <div className="sm:flex gap-10 mt-5 pb-7 px-10 border-4 rounded-xl">
                  {event.rounds && (
                    <div className="sm:min-w-[320px] sm:w-1/2">
                      <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                        Rounds
                      </h4>
                      <ul className="list-none list-inside mt-1">
                        {event.rounds.map((e: any, idx: number) => (
                          <li
                            key={idx}
                            className="text-lg relative pl-5 sm:pl-6 pb-1"
                          >
                            <span className="font-bold">
                              Round {idx + 1} -{" "}
                            </span>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.topics && (
                    <div className="sm:min-w-[320px] sm:w-1/2">
                      <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                        Topics
                      </h4>
                      <ul className="list-none list-inside mt-1">
                        {event.topics.map((e: any, idx: number) => (
                          <li
                            key={idx}
                            className="text-lg relative pl-5 sm:pl-6 pb-1"
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {isWorkshop && (
                  <div className="md:flex flex-wrap gap-x-32">
                    <div>
                      <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                        Price
                      </h4>
                      <p className="text-xl font-bold mt-1">
                        Rs. {event.cost}/-
                      </p>
                    </div>
                    {event.specialCost && (
                      <div>
                        <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                          Special Offers
                        </h4>
                        <ul className="list-none list-inside mt-1">
                          {event.specialCost.map((c: [string, string]) => (
                            <li className="text-lg relative pl-5 sm:pl-6 pb-1">
                              {c[0]} participants -&gt;{" "}
                              <span className="line-through text-red-700">
                                Rs. {event.cost * parseInt(c[0])}
                              </span>{" "}
                              <span className="font-bold text-xl">
                                Rs. {c[1]}/-
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <h4 className="font-display text-blue-900 mt-10 text-xl font-bold">
                        Date & Time
                      </h4>
                      <p className="text-xl font-bold mt-1">{event.date}</p>
                      <span>{event.time}</span>
                    </div>
                  </div>
                )}
                <div className="xl:flex">
                  <div>
                    <h4 className="font-display text-blue-900 mt-10 mb-4 text-xl font-bold">
                      {isWorkshop ? "Speaker" : "Organizers"}
                    </h4>
                    <div className="p-4 border-2 rounded-2xl border-red-900/20 sm:flex gap-5 sm:w-max text-xl">
                      {isWorkshop ? (
                        <a
                          href={`email:${event.speaker.email}`}
                          className="hover:text-blue-800 block pb-4 last:pb-0 last:pt-4 sm:last:pt-0 sm:pb-0 sm:border-b-0 border-slate-900/10 border-b-2 sm:pr-10 sm:border-r-2 last:border-r-0 last:border-b-0"
                        >
                          <h3 className="font-display font-bold">
                            {event.speaker.name}
                          </h3>
                          <small>{event.speaker.email}</small>
                        </a>
                      ) : (
                        event.contact?.map((e: any, idx: number) => (
                          <a
                            key={idx}
                            href={`tel:+91${e.number}`}
                            className="hover:text-blue-800 block pb-4 last:pb-0 last:pt-4 sm:last:pt-0 sm:pb-0 sm:border-b-0 border-slate-900/10 border-b-2 sm:pr-10 sm:border-r-2 last:border-r-0 last:border-b-0"
                          >
                            <small>
                              <h3 className="font-display font-bold">
                                {e.name}
                              </h3>
                            </small>
                            +91 {e.number}
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="mt-8 w-full sm:w-max sm:ml-auto sm:mt-auto">
                    <a
                      className="w-full inline-flex justify-center rounded-2xl bg-blue-900 p-4 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:text-white/70"
                      href={isWorkshop ? event.url : registerURL}
                      target="_blank"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default EventModal;
