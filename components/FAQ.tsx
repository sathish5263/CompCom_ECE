"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  const qa = [
    {
      q: "What is the fee structure for participating in the event?",
      a: "The registration fee for the event is Rs. 250/- for online registration. Once registered, you can participate in any number of events. We also provide on-spot registration for ease-of-access for the participants for which the fee would be Rs. 300/-",
    },
   
    {
      q: "Is there a discount for event registration?",
      a: "Yes, we offer a group discount where if you register as a group of 5 members, you only need to pay for 4 registrations. That's a savings of Rs. 250! To avail of this discount, please contact Moorthy at 9360378375 or Divith at 7708251457.",
    },
    
    {
      q: "How many events can I participate in?",
      a: "You can participate in multiple events during the oneday event, as long as the timings don't clash.",
    },
    {
      q: "Will we receive awards/certificates for participating in the events?",
      a: "Yes, winners will be awarded with cash prizes during the prize distribution ceremony. All event participants will receive a certificate of participation too.",
    },
   
    {
      q: "Will lunch be provided?",
      a: "Lunch and refreshment will be provided for all participants.",
    },
  ];
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-20 mx-auto w-full max-w-4xl rounded-2xl bg-white p-2 flex flex-col gap-4">
          {qa.map((e: any) => (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-xl bg-gray-300 px-4 py-4 text-left font-medium text-blue-900 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-opacity-75">
                    <span>{e.q}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-blue-900`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 text-black bg-white border">
                    {e.a}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
