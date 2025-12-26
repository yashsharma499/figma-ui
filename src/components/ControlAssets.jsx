
export default function ControlAssets() {
  return (
    <section
      className="w-full flex justify-center"
      style={{ backgroundColor: "rgb(126, 75, 194)" }}
    >
      <div
        className="
          w-full bg-deep-dark text-white 
          py-[60px] sm:py-[80px] lg:py-[120px]         
          rounded-none lg:rounded-t-[40px]            
          flex justify-center
        "
      >
        <div className="w-full max-w-[1728px] px-4 sm:px-8 md:px-12 lg:pl-28 lg:pr-20 flex justify-center">

          <div
            className="
              max-w-[1200px] w-full mx-auto
              grid grid-cols-1 lg:grid-cols-2
              justify-center items-center lg:pl-6    /* PAGE CENTERED */
              gap-y-10 sm:gap-y-12 lg:gap-y-20
              gap-x-10                         /* balanced spacing */
              text-center lg:text-left         /* mobile center, desktop natural */
            "
          >

        {/* ================= Section 1 ================= */}
<div className="max-w-md order-2 lg:order-1 mx-auto lg:mx-0">
  <h2 className="text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.2]">
    Take control of <br /> your assets
  </h2>

  <p className="mt-3 sm:mt-4 md:mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
    Unlike centralized exchanges, Plena ensures that only users
    have full control over their crypto assets.
  </p>
</div>

<div className="flex justify-center lg:justify-start items-start order-1 lg:order-2">
  <img
    src="/shield.png"
    alt="Security Shield"
    className="w-[60px] sm:w-[70px] lg:w-[200px] lg:-mt-4 lg:ml-4"  /* closer + smooth spacing */
  />
</div>


          {/* ================= Section 2 ================= */}
          <div className="flex justify-center lg:justify-end items-start order-3">
            <img
              src="/social-lock.png"
              alt="Social login lock"
              className="w-[60px] sm:w-[80px] lg:w-[220px] lg:-mt-5 lg:mr-50" /* small right margin */
            />
          </div>

          <div className="max-w-md order-4 mx-auto lg:mx-0">
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
<div className="max-w-md order-6 lg:order-5 mx-auto lg:mx-0">
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

<div className="flex justify-center lg:justify-start items-start order-5 lg:order-6">
  <img
    src="/tokens.png"
    alt="Crypto tokens"
    className="w-[60px] sm:w-[80px] lg:w-[220px] lg:-mt-4 lg:ml-4"  
  />
</div>


          </div>
        </div>
      </div>
    </section>
  );
}
