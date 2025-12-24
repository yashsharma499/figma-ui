

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(2);

  const faqs = [
    {
      q: "What is Plena crypto wallet?",
      a: "",
    },
    {
      q: "What makes Plena wallet the most secured among others?",
      a: "",
    },
    {
      q: "Where can I download the Plena wallet App?",
      a: "Plena App can be downloaded on the App Store on Apple devices or Play Store on Android Devices",
    },
  ];

  return (
    <section
      className="w-full flex justify-center py-12 md:py-20 lg:py-[120px]"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #1a1a2e 100%)",
      }}
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold flex items-center justify-center md:justify-start gap-2 md:gap-3 leading-tight">
            Have more questions?
            <span className="text-[26px] sm:text-[32px] md:text-[40px]">🛟</span>
          </h2>

          <p className="mt-3 text-gray-400 text-[13px] sm:text-[14px] md:text-[15px]">
            Read our{" "}
            <span className="text-[#a78bfa] cursor-pointer hover:underline">
              support document
            </span>{" "}
            to find out more
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="
                  bg-[#1a1a1a]/60
                  backdrop-blur-sm
                  rounded-[16px] md:rounded-[20px]
                  px-4 sm:px-6 md:px-8
                  py-4 sm:py-5 md:py-6
                  cursor-pointer
                  transition-all
                  hover:bg-[#252525]/60
                  border border-[#2a2a2a]/40
                "
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] font-medium leading-snug">
                    {item.q}
                  </h3>

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {isOpen && item.a && (
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]/40">
                    <p className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] leading-[24px]">
                      Plena App can be downloaded on the{" "}
                      <span className="text-[#a78bfa] cursor-pointer hover:underline">
                        App Store
                      </span>{" "}
                      on Apple devices or{" "}
                      <span className="text-[#a78bfa] cursor-pointer hover:underline">
                        Play Store
                      </span>{" "}
                      on Android Devices
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
