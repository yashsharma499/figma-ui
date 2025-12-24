
export default function CryptoPortfolioCTA() {
  return (
    <section
      className="w-full flex justify-center py-12 sm:py-16 md:py-[100px] lg:py-[120px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #2a2a3e 100%)",
      }}
    >
      <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1f1f1f] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.15]">
                <span className="text-cyan-300">Start building </span>
                <span className="text-purple-400">your</span>
                <br />
                <span className="text-cyan-300">portfolio </span>
                <span className="text-white">with just </span>
                <span className="text-purple-400">$1</span>
              </h2>

              <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                Over 100,000+ Crypto to choose from,
                <br />
                Download the app now!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <img
                  src="/app-store-icon.png"
                  alt="Download on App Store"
                  className="h-[52px] sm:h-[56px] w-auto cursor-pointer hover:opacity-90 transition"
                />
                <img
                  src="/play-store-icon.png"
                  alt="Download on Play Store"
                  className="h-[52px] sm:h-[56px] w-auto cursor-pointer hover:opacity-90 transition"
                />
              </div>
            </div>

            {/* ================= RIGHT CONTENT (RESPONSIVE & OVERLAPPING) ================= */}
            <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[520px] h-[360px] sm:h-[420px] lg:h-[520px]">

                {/* LEFT PHONE (BACK) */}
                <img
                  src="/mobile_portfolio.png"
                  alt="Portfolio Phone Back"
                  className="
                    absolute
                    top-[100px] sm:top-[120px]
                    left-[20px] sm:left-[40px]
                    w-[220px] sm:w-[300px] lg:w-[320px]
                    rotate-[-45deg] sm:rotate-[-60deg]
                    z-10
                    drop-shadow-2xl
                  "
                />

                {/* RIGHT PHONE (FRONT) */}
                <img
                  src="/Large.png"
                  alt="Portfolio Phone Front"
                  className="
                    absolute
                    top-[30px] sm:top-[40px]
                    left-[140px] sm:left-[200px]
                    w-[200px] sm:w-[280px] lg:w-[300px]
                    rotate-[45deg] sm:rotate-[60deg]
                    z-20
                    drop-shadow-2xl
                  "
                />

                {/* CRYPTO COINS */}
                <img
                  src="/crypto-coins.png"
                  alt="Crypto Coins"
                  className="
                    absolute
                    top-[120px] sm:top-[150px]
                    left-[260px] sm:left-[360px]
                    w-[100px] sm:w-[150px] lg:w-[180px]
                    z-30
                    drop-shadow-xl
                    hidden sm:block
                  "
                />
              </div>
            </div>
          </div>

          {/* ================= BACKGROUND GLOWS ================= */}
          <div className="absolute top-[-50%] right-[-20%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
