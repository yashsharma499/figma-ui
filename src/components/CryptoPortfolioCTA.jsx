
export default function CryptoPortfolioCTA() {
  return (
    <section
      className="w-full flex justify-center py-0 sm:py-12 md:py-16 relative overflow-hidden" 
      /* ⬆ Mobile = no vertical padding at all */
      style={{
        background: "linear-gradient(180deg,#050509,#0d0d14 60%,#14141d 100%)",
      }}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-10">

        <div
          className="
            relative 
            rounded-[28px] md:rounded-[36px]
            p-0 sm:p-8 md:p-10 lg:p-12          /* Mobile no padding */
            border border-white/5 shadow-xl overflow-hidden

            bg-black sm:bg-gradient-to-br sm:from-[#111113] sm:to-[#1b1b1e]
          "
        >

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-10 items-center relative z-10">

            {/* ================= LEFT ================= */}
            <div className="space-y-3 sm:space-y-6 text-center lg:text-left mt-6 sm:mt-0">
              <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] font-bold leading-[1.1]">
                <span className="bg-gradient-to-r from-[#7ddfff] to-[#c29bff] bg-clip-text text-transparent">
                  Start building your
                </span><br/>
                <span className="bg-gradient-to-r from-[#7ddfff] to-[#c29bff] bg-clip-text text-transparent">
                  portfolio
                </span>
                <span className="text-white"> with just </span>
                <span className="text-purple-400">$1</span>
              </h2>

              <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[420px] mx-auto lg:mx-0">
                Over 100,000+ Crypto to choose from,<br /> Download the app now!
              </p>

              {/* Desktop buttons only */}
              <div className="hidden sm:flex gap-4 pt-2 justify-center lg:justify-start">
                <img src="/app-store-icon.png" className="h-[48px] hover:opacity-90 cursor-pointer"/>
                <img src="/play-store-icon.png" className="h-[48px] hover:opacity-90 cursor-pointer"/>
              </div>
            </div>

            {/* ================= RIGHT PHONE STACK (Reduced mobile height) ================= */}
            <div className="relative flex justify-center lg:justify-end 
                            h-[240px] sm:h-[380px] md:h-[460px] lg:h-[500px]">
              {/* Back phone */}
              <img src="/mobile_portfolio.png"
                className="absolute top-[65px] sm:top-[95px] left-[30%]
                w-[180px] sm:w-[250px] md:w-[290px] rotate-[-28deg] z-10 drop-shadow-2xl" />

              {/* Front phone */}
              <img src="/Large.png"
                className="absolute top-[0px] sm:top-[20px] left-[15%] sm:left-[26%]
                w-[180px] sm:w-[250px] md:w-[290px] rotate-[30deg] z-20 drop-shadow-[0_0_35px_rgba(0,0,0,0.7)]" />

              {/* Coins */}
              <img src="/crypto-coins.png"
                className="absolute top-[120px] sm:top-[160px] left-[55%] sm:left-[60%]
                w-[80px] sm:w-[120px] md:w-[140px] z-[30] drop-shadow-xl" />
            </div>
          </div>

          {/* ================= MOBILE BUTTONS — One Above Another ================= */}
          <div className="flex sm:hidden flex-col justify-center items-center gap-3 mt-2 mb-0 pb-2">
            <img src="/app-store-icon.png" className="h-[48px] hover:opacity-90 cursor-pointer"/>
            <img src="/play-store-icon.png" className="h-[48px] hover:opacity-90 cursor-pointer"/>
          </div>

          {/* Glow only desktop */}
          <div className="absolute top-[-40%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] hidden sm:block"/>
          <div className="absolute bottom-[-30%] left-[-10%] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] hidden sm:block"/>
        </div>
      </div>
    </section>
  );
}
