
export default function HeroContent() {
  return (
    <section className="relative w-full bg-black overflow-visible lg:overflow-hidden z-10">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-6 lg:px-20 pt-14 sm:pt-16 lg:pt-20 pb-24 lg:pb-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ================= LEFT ================= */}
          <div className="z-10 text-center lg:text-left">
            <h1 className="font-extrabold leading-tight text-white">
              <span className="block text-[36px] sm:text-[44px] md:text-[56px] lg:text-[72px]">
                Be Your
              </span>
              <span className="block text-[36px] sm:text-[44px] md:text-[56px] lg:text-[72px]">
                Own Bank
              </span>
            </h1>

            <img
              src="/underline.png"
              alt=""
              className="mt-3 mx-auto lg:mx-0 w-[120px] sm:w-[140px]"
            />

            <p className="mt-5 text-gray-400 max-w-[420px] mx-auto lg:mx-0 text-sm sm:text-base">
              Introducing Plena 2.0, Self-Custodial Smart Wallet with EIP-4337:
              Account Abstraction
            </p>

            {/* ✅ RESPONSIVE BUTTONS FIX */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
  <img
    src="/get-the-app-btn.png"
    alt="Get the App"
    className="h-[36px] sm:h-[46px] cursor-pointer shrink-0"
  />
  <img
    src="/play-icon.png"
    alt="Watch Intro"
    className="h-[36px] sm:h-[46px] cursor-pointer shrink-0"
  />
</div>

          </div>

          {/* ================= RIGHT (PHONES) ================= */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-[-5cm]">
            
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[420px] h-[420px] lg:w-[700px] lg:h-[700px] bg-purple-500/20 rounded-full blur-[160px]" />
            </div>

            {/* Phones wrapper */}
            <div
              className="
                relative
                w-full
                max-w-[360px]
                sm:max-w-[420px]
                lg:max-w-[700px]
                h-[320px]
                sm:h-[420px]
                lg:h-[620px]
                flex
                items-end
                justify-center
              "
            >
              {/* Back phone */}
              <img
                src="/hero_phone_back.png"
                alt="Phone Back"
                className="
                  absolute
                  left-1/2
                  -translate-x-[85%]
                  bottom-0
                  w-[220px]
                  sm:w-[260px]
                  lg:w-[380px]
                  rotate-[6deg]
                  z-10
                "
              />

              {/* Front phone */}
              <img
                src="/herophone.png"
                alt="Phone Front"
                className="
                  absolute
                  left-1/2
                  -translate-x-[15%]
                  bottom-0
                  w-[220px]
                  sm:w-[260px]
                  lg:w-[380px]
                  -rotate-[6deg]
                  z-20
                "
              />
            </div>
          </div>
        </div>

        {/* Mobile note */}
        <p className="mt-8 text-center text-xs text-gray-400 lg:hidden">
          *Available for iOS & Android
        </p>
      </div>
    </section>
  );
}
