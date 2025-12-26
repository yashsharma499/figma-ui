
export default function HeroContent() {
  return (
    <section className="relative w-full bg-black overflow-hidden z-10">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-6 lg:px-20 pt-14 sm:pt-16 lg:pt-20 pb-12 lg:pb-16">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="z-10 text-center lg:text-left">

            {/* TEXT IMAGE */}
            <div className="relative inline-block">
              <img
                src="/Be_Your_Own_Bank_hero.png"
                alt="Be Your Own Bank"
                className="
                  mx-auto
                  lg:mx-0
                  w-[260px]
                  sm:w-[360px]
                  md:w-[460px]
                  lg:w-[720px]
                "
              />

              <img
                src="/own_hero.png"
                alt=""
                className="
                  absolute
                  left-[10%]
                  -bottom-10
                  w-[200px]
                "
              />
            </div>

            <p className="mt-6 text-gray-400 max-w-[420px] mx-auto lg:mx-0 text-sm sm:text-base">
              Introducing Plena 2.0, Self-Custodial Smart Wallet with EIP-4337:
              Account Abstraction
            </p>

            {/* Buttons — hidden only on mobile */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 hidden md:flex">
              <img src="/get-the-app-btn.png" alt="Get the App" className="h-[36px] sm:h-[46px] cursor-pointer" />
              <img src="/play-icon.png" alt="Watch Intro" className="h-[36px] sm:h-[46px] cursor-pointer" />
            </div>
          </div>

          {/* ================= RIGHT (Single Phone + QR) ================= */}
          <div className="relative flex justify-center lg:justify-end mt-6 sm:mt-10 lg:translate-y-[-120px]">

            {/* Glow */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[420px] h-[420px] lg:w-[700px] lg:h-[700px] bg-purple-500/20 rounded-full blur-[160px]" />
            </div>

            {/* Phone Wrapper */}
            <div
              className="
                relative
                w-full
                max-w-[360px]
                sm:max-w-[420px]
                lg:max-w-[700px]
                h-[350px]           /* moved phone up in mobile */
                sm:h-[380px]
                lg:h-[620px]
                flex
                items-end
                justify-center
              "
            >
              {/* QR CODE – desktop only */}
              <img
                src="/qr.png"
                alt="QR Code"
                className="
                  hidden lg:block
                  absolute
                  right-[0px]
                  bottom-[0px]
                  w-[110px]
                  z-30
                "
              />

              {/* NEW Single Phone Image */}
              <img
                src="/Gemini1.png"
                alt="Phone Display"
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-0
                  w-[240px]          /* slightly resized looks cleaner in mobile */
                  sm:w-[300px]
                  lg:w-[420px]
                  z-20
                "
              />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
