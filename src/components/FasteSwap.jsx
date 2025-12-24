export default function FasterSwap() {
  return (
    <section className="w-full bg-[#0b0b0e] flex justify-center py-10 lg:py-[120px]">
      {/* 👇 min-h ONLY on desktop */}
      <div className="relative w-full max-w-[1728px] overflow-hidden lg:min-h-[900px]">

        {/* ================= MOBILE VIEW ================= */}
        <div className="flex flex-col items-center lg:hidden">

          {/* TEXT ABOVE IMAGE */}
          <h1 className="text-white font-extrabold text-[44px] leading-none text-center">
            <span className="text-yellow-400">⚡</span> Faster
          </h1>
          <h1 className="text-white font-extrabold text-[44px] leading-none text-center mt-1">
            Transactions
          </h1>

          {/* IMAGE */}
          <img
            src="/phone.png"
            alt="Phone UI"
            className="
              mt-6
              mb-0
              w-[260px]
              drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            "
          />
        </div>

        {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
        <div className="hidden lg:block">

          {/* TOP LEFT TEXT */}
          <div className="absolute top-12 left-20 z-10">
            <h1 className="flex items-center gap-4 text-white font-extrabold text-[96px] leading-none">
              <span className="text-yellow-400">⚡</span>
              Faster
            </h1>
          </div>

          {/* CENTER PHONE */}
          <div className="absolute inset-0 flex items-center justify-center z-20 -translate-x-16">
            <img
              src="/phone.png"
              alt="Phone UI"
              className="w-[340px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* BOTTOM RIGHT TEXT */}
          <div className="absolute bottom-12 right-20 z-10">
            <h1 className="text-white font-extrabold text-[96px] leading-none text-right">
              Transactions
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
