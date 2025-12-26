
export default function ControlAssets() {
  return (
    <section
      className="w-full flex justify-center"
      style={{ backgroundColor: "rgb(126, 75, 194)" }}
    >
      <div
        className="
          w-full bg-deep-dark text-white 
          py-[60px] sm:py-[80px] lg:py-[120px]         /* reduced mobile padding */
          rounded-none lg:rounded-t-[40px]            /* no rounding in mobile, keep in desktop */
          flex justify-center
        "
      >
        <div className="w-full max-w-[1728px] px-4 sm:px-8 md:px-12 lg:px-20">
          
          <div
            className="
              max-w-[1200px] mx-auto
              grid grid-cols-1 lg:grid-cols-2
              gap-y-10 sm:gap-y-12 lg:gap-y-20         /* reduced mobile gaps */
              gap-x-6
            "
          >

            {/* ================= Section 1 ================= */}
            <div className="max-w-md order-2 lg:order-1">
              <h2 className="text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.2]">
                Take control of <br /> your assets
              </h2>

              <p className="mt-3 sm:mt-4 md:mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Unlike centralized exchanges, Plena ensures that only users
                have full control over their crypto assets.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end items-start order-1 lg:order-2 lg:pr-4">
              <img
                src="/shield.png"
                alt="Security Shield"
                className="w-[50px] sm:w-[60px] lg:w-[220px]"
              />
            </div>

            {/* ================= Section 2 ================= */}
            <div className="flex justify-start items-start order-3 lg:pl-4">
              <img
                src="/social-lock.png"
                alt="Social login lock"
                className="w-[50px] sm:w-[60px] lg:w-[240px]"
              />
            </div>

            <div className="max-w-md order-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2]">
                Social Login & <br /> Easy recovery
              </h3>

              <p className="mt-3 sm:mt-4 md:mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Sign in quickly and effortlessly using social media accounts,
                and retrieve your account even if your device is lost with
                MPC (Multi-Party Computation) security.
              </p>
            </div>

            {/* ================= Section 3 ================= */}
            <div className="max-w-md order-6 lg:order-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2]">
                100K+ Tokens
              </h3>

              <p className="mt-3 sm:mt-4 md:mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Store, Send, Receive and Trade over 100,000 crypto across
                multiple chains at best rates.
              </p>

             <div className="mt-5 sm:mt-6 md:mt-7 hidden md:block">
  <img
    src="/getappbutton.png"
    alt="Get the App"
    className="h-[48px] md:h-[52px] cursor-pointer hover:opacity-90 transition"
  />
</div>

            </div>

            <div className="flex justify-start lg:justify-end items-start order-5 lg:order-6 lg:pr-4">
              <img
                src="/tokens.png"
                alt="Crypto tokens"
                className="w-[50px] sm:w-[60px] lg:w-[240px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
