
export default function CryptoPortfolioCTA() {
  return (
    <section
      className="
        w-full flex justify-center items-center overflow-hidden
        sm:h-[600px]     /* desktop original height */
        h-auto           /* mobile expands naturally */
        py-6             /* only mobile spacing, desktop unaffected */
      "
      style={{
        background: "linear-gradient(180deg,#050509,#0d0d14 60%,#14141d 100%)",
      }}
    >
      <div className="w-full max-w-[950px] px-4 flex justify-center">

        <div
          className="
            relative rounded-[28px] w-full
            px-6 md:px-10 py-6
            bg-[#0f0f12] bg-gradient-to-br from-[#151519] to-[#0d0d11]
            border border-white/5 shadow-lg overflow-visible
            flex items-center

            sm:h-[400px]  /* desktop card fixed height remains SAME */
            h-auto        /* mobile auto height to prevent cropping */
          "
        >
          <div className="grid lg:grid-cols-2 gap-4 items-center w-full">

            {/* TEXT LEFT */}
            <div className="space-y-3">
              <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-bold leading-[1.1]">
                <span className="bg-gradient-to-r from-[#7ddfff] to-[#c29bff] bg-clip-text text-transparent">
                  Start building your
                </span><br />
                <span className="bg-gradient-to-r from-[#7ddfff] to-[#c29bff] bg-clip-text text-transparent">
                  portfolio
                </span>
                <span className="text-white"> with just </span>
                <span className="text-purple-400">$1</span>
              </h2>

              <p className="text-gray-300 text-[14px] md:text-[16px] max-w-[360px] leading-snug">
                Over 100,000+ Crypto to choose from,<br />Download the app now!
              </p>

              {/* DESKTOP BUTTONS (unchanged) */}
              <div className="hidden sm:flex gap-3 pt-1">
                <img src="/app-store-icon.png" className="h-[38px]" />
                <img src="/play-store-icon.png" className="h-[38px]" />
              </div>
            </div>

            {/* PHONE + MOBILE BUTTONS BELOW */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="flex flex-col items-center">

                <img
                  src="/Gemini3.png"
                  className="
                    relative right-[-40px] drop-shadow-[0_0_45px_rgba(0,0,0,0.7)]
                    sm:w-[565px] sm:h-[438px]   /* desktop EXACT same */
                    w-[300px] h-auto           /* mobile scaled to fit */
                  "
                />

                {/* MOBILE BUTTONS BELOW IMAGE */}
                <div className="flex sm:hidden flex-col items-center gap-2 mt-3">
                  <img src="/play-store-icon.png" className="h-[38px]" />
                  <img src="/app-store-icon.png" className="h-[38px]" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
