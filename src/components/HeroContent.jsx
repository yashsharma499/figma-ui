
export default function HeroContent() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-6 lg:px-20 pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="z-10 text-center lg:text-left">
            <h1 className="font-extrabold leading-tight text-white">
              <span className="block text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px]">
                Be Your
              </span>
              <span className="block text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px]">
                Own Bank
              </span>
            </h1>

            <img
              src="/underline.png"
              alt=""
              className="mt-3 mx-auto lg:mx-0 w-[100px] sm:w-[140px]"
            />

            <p className="mt-5 text-gray-400 max-w-[360px] sm:max-w-[480px] mx-auto lg:mx-0 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px]">
              Introducing Plena 2.0, Self-Custodial Smart Wallet with
              EIP-4337: Account Abstraction
            </p>

            {/* ================= CTA BUTTONS ================= */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <img
                src="/get-the-app-btn.png"
                alt="Get the App"
                className="h-[48px] sm:h-[52px] cursor-pointer hover:opacity-90 transition"
              />

              <img
                src="/play-icon.png"
                alt="Watch Intro"
                className="h-[48px] sm:h-[52px] cursor-pointer hover:opacity-90 transition"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT (PHONES) ================= */}
          <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0">

            {/* Glow */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Phones */}
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] h-[340px] sm:h-[420px] md:h-[500px] flex items-end justify-center">

              {/* Back Phone */}
              <img
                src="/hero_phone_back.png"
                alt="Phone Back"
                className="
                  absolute
                  left-1/2
                  -translate-x-[95%]
                  bottom-0
                  w-[190px] sm:w-[240px] md:w-[300px]
                  rotate-[6deg]
                  origin-bottom-right
                  drop-shadow-2xl
                  z-10
                "
              />

              {/* Front Phone */}
              <img
                src="/herophone.png"
                alt="Phone Front"
                className="
                  absolute
                  left-1/2
                  -translate-x-[5%]
                  bottom-0
                  w-[190px] sm:w-[240px] md:w-[300px]
                  -rotate-[6deg]
                  origin-bottom-left
                  drop-shadow-2xl
                  z-20
                "
              />
            </div>
          </div>
        </div>

        {/* ================= MOBILE APP NOTE ================= */}
        <div className="mt-6 flex flex-col items-center lg:hidden">
          <p className="text-xs text-gray-400">
            *Available for iOS & Android
          </p>
        </div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </section>
  );
}
