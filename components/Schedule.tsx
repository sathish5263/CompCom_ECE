"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

const Schedule = () => {
  const schedule = [
    [
      ["Day 1 Inauguration", "Auditorium, GCE Salem", "9:00AM - 11:00AM"],
      ["Events", "Dept. of ECE", "11:00AM - 12:00PM"],
      ["Lunch Break", "", "12:00PM - 1:00PM"],
      ["Events (continued)", "Dept. of ECE", "1:00PM - 3:00PM"],
      ["Prize Distribution", "Auditorium, GCE Salem", "3:00PM - 5:00PM"]
    ],
   
  ];
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Our One day schedule is jam-packed with brilliant, creative events.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-950">
            Discover a dynamic lineup of events in our one-day
            schedule, designed to inspire and educate. Join us and explore the
            latest trends in tech and beyond.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-white">
          {/* <Image
            alt=""
            src="/bg.jpg"
            width="918"
            height="1495"
            decoding="async"
            data-nimg="1"
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
            loading="lazy"
          /> */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>
        <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-1 items-center lg:hidden">
            <Tab.Group>
              <Tab.List
                className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8"
                aria-orientation="horizontal"
              >
                <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0">
                  <h3 className="text-2xl font-semibold tracking-tight text-blue-950">
                    <time dateTime="2022-04-19">
                      <Tab>
                        <span className="absolute inset-0"></span>March 13
                      </Tab>
                    </time>
                  </h3>
                  <p className="mt-1.5 text-base tracking-tight text-blue-950">
                    A day full of innovative technical and non technical
                    extravaganza
                  </p>
                </div>
                {/* <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 opacity-70">
                  <h3 className="text-2xl font-semibold tracking-tight text-blue-950">
                    <time dateTime="2022-04-20">
                      <Tab>
                        <span className="absolute inset-0"></span>March 14
                      </Tab>
                    </time>
                  </h3>
                  <p className="mt-1.5 text-base tracking-tight text-blue-950">
                    Engage, explore, excel and ofcourse celebrate
                  </p>
                </div> */}
              </Tab.List>
              <div>
                <Tab.Panels>
                  {schedule.map((s) => (
                    <Tab.Panel>
                      <ol
                        role="list"
                        className=" space-y-8 bg-gradient-to-b from-blue-800 to-gray-900 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur rounded-3xl"
                      >
                        {s.map((e, i) => (
                          <li key={i}>
                            <h4 className="text-lg font-semibold tracking-tight text-white">
                              {e[0]}
                            </h4>
                            <p className="mt-1 tracking-tight text-white">
                              {e[1]}
                            </p>
                            <p className="mt-1 font-mono text-sm text-gray-400">
                              {e[2]}
                            </p>
                            {i !== s.length - 1 && (
                              <div className="mx-auto mt-8 h-px w-48 bg-blue-500/10 border-2"></div>
                            )}
                          </li>
                        ))}
                      </ol>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:mx-20 lg:max-w-3xl lg:gap-x-8 lg:flex lg:items-center lg:justify-center">
            <section className="">
              <h3 className="text-2xl font-semibold tracking-tight text-blue-950">
                <time dateTime="2022-04-04">March 13</time>
              </h3>
              <p className="mt-1.5 text-base tracking-tight text-blue-950">
                A day full of innovative technical and non technical
                extravaganza
              </p>
              <ol
                role="list"
                className="mt-10 space-y-8 bg-gradient-to-b from-blue-800 to-gray-900 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur rounded-2xl"
              >
                {schedule[0].map((e, i) => (
                  <li key={i} aria-label={`${e[0]} - ${e[2]}`}>
                    <h4 className="text-lg font-semibold tracking-tight text-white">
                      {e[0]}
                    </h4>
                    <p className="mt-1 tracking-tight text-white">{e[1]}</p>
                    <p className="mt-1 font-mono text-sm text-gray-400">
                      {e[2]}
                    </p>
                    {i !== schedule[0].length - 1 && (
                      <div className="mx-auto mt-8 h-px w-48 bg-blue-500/10 border-2"></div>
                    )}
                  </li>
                ))}
              </ol>
            </section>
            {/* <section>
              <h3 className="text-2xl font-semibold tracking-tight text-blue-950">
                <time dateTime="2022-04-04">March 14</time>
              </h3>
              <p className="mt-1.5 text-base tracking-tight text-blue-950">
                Engage, explore, excel and ofcourse celebrate
              </p>
              <ol
                role="list"
                className="mt-10 space-y-8 bg-gradient-to-b from-blue-800 to-gray-900 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur rounded-2xl"
              >
                {schedule[1].map((e, i) => (
                  <li key={i} aria-label={`${e[0]} - ${e[2]}`}>
                    <h4 className="text-lg font-semibold tracking-tight text-white">
                      {e[0]}
                    </h4>
                    <p className="mt-1 tracking-tight text-white">{e[1]}</p>
                    <p className="mt-1 font-mono text-sm text-gray-400">
                      {e[2]}
                    </p>
                    {i !== schedule[0].length - 1 && (
                      <div className="mx-auto mt-8 h-px w-48 bg-blue-500/10 border-2"></div>
                    )}
                  </li>
                ))}
              </ol>
            </section> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
