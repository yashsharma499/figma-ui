
export default function InvestCrypto() {
  return (
    <section
      className="
        w-full text-white 
        py-[60px] sm:py-[80px] lg:py-[120px]   /* ↓ Mobile padding reduced */
        flex justify-center
      "
      style={{
        background: "linear-gradient(90deg, #616996 0%, #b38fc0 100%)",
      }}
    >
      <div className="w-full max-w-[1728px] 
                      px-4 sm:px-8 md:px-12 lg:px-20 /* Shrink padding on mobile */">

        <div className="max-w-[1100px] mx-auto 
                        grid grid-cols-1 lg:grid-cols-2
                        gap-y-10 lg:gap-y-16 gap-x-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-lg text-center lg:text-left">

            <h1 className="text-[26px] sm:text-[30px] md:text-5xl lg:text-6xl 
                           font-bold leading-[1.15]">
              Invest in Crypto, <br />
              Starting with Just $1
            </h1>

            <p className="mt-4 sm:mt-5 text-white/95 
                          text-[14px] sm:text-base md:text-lg leading-relaxed">
              Buy BTC, ETH, Matic, & 100,000+ crypto assets across
              multiple chains with ease.
            </p>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex mt-10 gap-6">
              <StoreButton img="/app-store-icon.png" alt="App Store" />
              <StoreButton img="/play-store-icon.png" alt="Play Store" />
            </div>
          </div>

          {/* ================= RIGHT IMAGE SECTION ================= */}
          <div className="flex flex-col items-center lg:items-end">

            <img
              src="/crypto-app-image.png"
              alt="Crypto Investment App Interface"
              className="
                w-[70%] sm:w-[80%] md:w-[90%] lg:w-full
                max-w-[430px]
                object-contain rounded-lg
              "
            />

            {/* MOBILE BUTTONS - stacked vertically */}
            <div className="flex flex-col lg:hidden mt-6 gap-4 w-full items-center">
              <StoreButton img="/app-store-icon.png" alt="App Store" />
              <StoreButton img="/play-store-icon.png" alt="Play Store" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STORE BUTTON ================= */
function StoreButton({ img, alt }) {
  return (
    <button
      className="
        rounded-xl bg-black overflow-hidden shadow-lg
        transition-all duration-300
        h-[54px] sm:h-[60px]
        w-[200px] sm:w-[220px] md:w-[240px] lg:w-[220px] /* Scales on mobile */
        flex items-center justify-center
      "
    >
      <img src={img} alt={alt} className="w-full h-full object-contain p-2" />
    </button>
  );
}
