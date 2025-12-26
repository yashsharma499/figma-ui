
export default function CryptoPortfolioCTA() {
  return (
    <section
      className="w-full flex justify-center items-center overflow-hidden"
      style={{
        height: "600px",                             
        background: "linear-gradient(180deg,#050509,#0d0d14 60%,#14141d 100%)",
      }}
    >
      <div className="w-full max-w-[950px] px-4 flex justify-center">

        <div
          style={{ height: "400px" }}               
          className="
            relative rounded-[28px] w-full
            px-6 md:px-10 py-6                       
            bg-[#0f0f12] bg-gradient-to-br from-[#151519] to-[#0d0d11]
            border border-white/5 shadow-lg overflow-visible
            flex items-center                         
          "
        >
          <div className="grid lg:grid-cols-2 gap-4 items-center w-full">

            
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

              <div className="hidden sm:flex gap-3 pt-1">
                <img src="/app-store-icon.png" className="h-[38px]" />
                <img src="/play-store-icon.png" className="h-[38px]" />
              </div>
            </div>

            {/* PHONE IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/Gemini3.png"
                style={{ width: "565px", height: "438px" }}  
                className="relative right-[-40px] drop-shadow-[0_0_45px_rgba(0,0,0,0.7)]"
              />
            </div>

          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden flex-col items-center gap-1 absolute bottom-3 w-full">
            <img src="/app-store-icon.png" className="h-[38px]" />
            <img src="/play-store-icon.png" className="h-[38px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
