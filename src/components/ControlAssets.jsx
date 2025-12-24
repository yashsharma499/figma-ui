
export default function ControlAssets() {
  return (
    <section
      className="w-full flex justify-center"
      style={{ backgroundColor: "rgb(126, 75, 194)" }}
    >
      <div className="w-full bg-deep-dark text-white py-[120px] rounded-t-[40px] flex justify-center">
        <div className="w-full max-w-[1728px] px-6 md:px-12 lg:px-20">
          {/* ⬇ reduced gap-x */}
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-y-20 gap-x-6">

            {/* ================= SECTION 1 ================= */}

            {/* TEXT */}
            <div className="max-w-md order-2 lg:order-1">
              <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.15]">
                Take control of <br /> your assets
              </h2>

              <p className="mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Unlike centralized exchanges, Plena ensures that only users
                have full control over their crypto assets.
              </p>
            </div>

            {/* ICON */}
            <div className="flex justify-start lg:justify-end items-start order-1 lg:order-2 lg:pr-4">
              <img
                src="/shield.png"
                alt="Security Shield"
                className="w-[56px] lg:w-[220px]"
              />
            </div>

            {/* ================= SECTION 2 ================= */}

            {/* ICON */}
            <div className="flex justify-start items-start order-3 lg:pl-4">
              <img
                src="/social-lock.png"
                alt="Social login lock"
                className="w-[56px] lg:w-[240px]"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-md order-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15]">
                Social Login & <br /> Easy recovery
              </h3>

              <p className="mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Sign in quickly and effortlessly using social media accounts,
                and retrieve your account even if your device is lost with
                MPC (Multi-Party Computation) security.
              </p>
            </div>

            {/* ================= SECTION 3 ================= */}

            {/* TEXT */}
            <div className="max-w-md order-6 lg:order-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15]">
                100K+ Tokens
              </h3>

              <p className="mt-5 text-gray-300 text-sm md:text-lg leading-relaxed">
                Store, Send, Receive and Trade over 100,000 crypto across
                multiple chains at best rates.
              </p>

              <div className="mt-7">
                <img
                  src="/getappbutton.png"
                  alt="Get the App"
                  className="h-[52px] cursor-pointer hover:opacity-90 transition"
                />
              </div>
            </div>

            {/* ICON */}
            <div className="flex justify-start lg:justify-end items-start order-5 lg:order-6 lg:pr-4">
              <img
                src="/tokens.png"
                alt="Crypto tokens"
                className="w-[56px] lg:w-[240px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
