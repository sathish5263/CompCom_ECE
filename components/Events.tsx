"use client";
import eventData from "@/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import EventModal from "./EventModal";

const Events = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [currEvent, setCurrEvent] = useState(false);
  const openModal = (event: any) => {
    setCurrEvent(event);
    setShowEventModal(true);
  };
  return (
    <section id="events" className="py-20 sm:py-32">
      <EventModal
        isOpen={showEventModal}
        setIsOpen={setShowEventModal}
        event={currEvent}
      />
      {/* <svg aria-hidden="true" width="0" height="0">
        <defs>
          <clipPath id="clip1" clipPathUnits="objectBoundingBox">
            <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0"></path>
          </clipPath>
          <clipPath id="clip2" clipPathUnits="objectBoundingBox">
            <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"></path>
          </clipPath>
          <clipPath id="clip3" clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"></path>
          </clipPath>
        </defs>
      </svg> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            Events
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-950">
            Discover, explore and participate in a diverse range of exciting
            events all in one place!
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          <Tab.Group>
            <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
              <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-gray-200 lg:block"></div>
              <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                {[
                  ["Technical", "4"],
                  ["Non-Technical", "4"],
                  // ["Workshops", "3"],
                ].map((e, idx) => (
                  <Tab className="flex text-left outline-none" key={idx}>
                    <div className="relative lg:pl-8">
                      {/* <svg
                        aria-hidden="true"
                        viewBox="0 0 6 6"
                        className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block ui-selected:fill-blue-600 ui-selected:stroke-blue-600 ui-not-selected:fill-transparent ui-not-selected:stroke-gray-400"
                      >
                        <path
                          d="M3 0L6 3L3 6L0 3Z"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                      </svg> */}
                      <div className="relative bg-gray-200 p-1 px-20 rounded-2xl xl:px-10">
                        <time
                          dateTime="2022-04-04"
                          className="mt-1.5 block text-2xl font-semibold tracking-tight ui-selected:text-blue-900 ui-not-selected:text-blue-950"
                        >
                          {e[0]}
                        </time>
                        <div className="font-mono text-sm ui-selected:text-blue-900 ui-not-selected:text-gray-500">
                          <span className="absolute inset-0"></span>
                          {e[1]} events
                        </div>
                      </div>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <div className="lg:col-span-3">
              <Tab.Panels>
                {["technicalEvents", "nonTechnicalEvents"].map(
                  (e, i) => (
                    <Tab.Panel
                      key={i}
                      className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                    >
                      {eventData[e as keyof Object].map((event) => (
                        <div
                          key={event.name}
                          className="cursor-pointer"
                          onClick={() => openModal(event)}
                        >
                          {event.img && (
                            <div className="group relative h-[17.5rem] transform overflow-hidden rounded-3xl">
                              <div className="absolute bottom-6 left-0 right-4 top-0 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300"></div>
                              <div
                                className="absolute inset-0 bg-blue-50 group"
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
                                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                />
                                <span className="pointer-events-none group-hover:opacity-0 transition-opacity bg-blue-100 absolute min-w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-blend-lighten text-gray-800 opacity-60 flex items-center p-4 text-center font-extrabold uppercase text-5xl">
                                  {event.name}
                                </span>
                              </div>
                            </div>
                          )}
                          <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-gray-900 flex gap-2 items-center">
                            {event.name}{" "}
                            {event.isOnline && (
                              <span className="text-sm uppercase font-mono animate-pulse bg-blue-800 text-white leading-none p-1 rounded-md">
                                Online
                              </span>
                            )}
                          </h3>
                          <p className="mt-1 text-base tracking-tight text-gray-500">
                            {event.shortDesc}
                          </p>
                        </div>
                      ))}
                    </Tab.Panel>
                  )
                )}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Events;
