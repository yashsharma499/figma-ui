
export default function FasterSwap() {
  return (
    <section className="w-full bg-[#0b0b0e] flex justify-center pt-16 lg:pt-[120px] pb-0">
      <div className="relative w-full max-w-[1728px] overflow-hidden">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center lg:hidden overflow-hidden">
          <h1 className="text-white font-extrabold text-[44px] leading-none text-center">
            <span className="text-yellow-400">⚡</span> Faster
          </h1>
          <h1 className="text-white font-extrabold text-[44px] leading-none text-center mt-1">
            Transactions
          </h1>

          <div className="mt-8 overflow-hidden">
            <img
              src="/phone.png"
              alt="Phone UI"
              className="w-[260px]"s
            />
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative">

          {/* LEFT TEXT */}
          <div className="absolute top-24 left-12 z-10">
            <h1 className="flex items-center gap-4 text-white font-extrabold text-[96px] leading-none">
              <span className="text-yellow-400">⚡</span>
              Faster
            </h1>
          </div>

          {/* CENTER PHONE — SLIGHTLY TOWARDS FASTER */}
          <div className="flex justify-center z-20 relative -translate-x-15">
            <img
              src="/phone.png"
              alt="Phone UI"
              className="w-[360px]"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute bottom-10 right-12 z-10">
            <h1 className="text-white font-extrabold text-[96px] leading-none text-right">
              Transactions
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
