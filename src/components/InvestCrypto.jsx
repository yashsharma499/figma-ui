
export default function InvestCrypto() {
  return (
    <section
      className="w-full text-white py-[100px] lg:py-[120px] flex justify-center"
      style={{
        background: "linear-gradient(90deg, #616996 0%, #b38fc0 100%)",
      }}
    >
      <div className="w-full max-w-[1728px] px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-y-16 gap-x-16 items-center">

          {/* ================= LEFT : TEXT ================= */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-[28px] sm:text-[32px] md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Invest in Crypto, <br />
              Starting with Just $1
            </h1>

            <p className="mt-5 text-white/95 text-base sm:text-lg md:text-xl leading-relaxed">
              Buy BTC, ETH, Matic, & 100,000+ crypto assets across
              multiple chains with ease.
            </p>

            {/* STORE BUTTONS — DESKTOP ONLY */}
            <div className="hidden lg:flex mt-10 gap-6">
              <StoreButton img="/app-store-icon.png" alt="App Store" />
              <StoreButton img="/play-store-icon.png" alt="Play Store" />
            </div>
          </div>

          {/* ================= RIGHT : IMAGE ================= */}
          <div className="flex flex-col items-center lg:items-end">

            <img
              src="/crypto-app-image.png"
              alt="Crypto Investment App Interface"
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-auto object-contain rounded-lg shadow-2xl"
            />

            {/* STORE BUTTONS — MOBILE ONLY (BELOW IMAGE) */}
            <div className="flex lg:hidden mt-8 gap-4">
              <StoreButton img="/app-store-icon.png" alt="App Store" />
              <StoreButton img="/play-store-icon.png" alt="Play Store" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= BUTTON COMPONENT ================= */
function StoreButton({ img, alt }) {
  return (
    <div className="relative group">
      <button
        className="
          relative
          rounded-xl
          overflow-hidden
          bg-black
          transition-all duration-300
          h-[56px] sm:h-[60px] md:h-[70px]
          min-w-[160px] sm:min-w-[180px] md:min-w-[220px]
          shadow-lg
        "
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-contain p-2"
        />
      </button>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300 pointer-events-none" />
    </div>
  );
}
