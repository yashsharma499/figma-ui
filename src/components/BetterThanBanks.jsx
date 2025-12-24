
export default function BetterThanBanks() {
  return (
    <section className="w-full bg-[#7E4BC2] py-16 sm:py-20 lg:py-[120px]">
      {/* FULL WIDTH CARD */}
      <div className="w-full bg-[#7E4BC2] rounded-none lg:rounded-[32px] overflow-hidden">

        {/* ================= TOP CONTENT ================= */}
        <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20 pt-12 sm:pt-14 pb-8 text-center text-white">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight">
            Better than
            <br className="sm:hidden" /> Banks
          </h2>

          <p className="mt-3 text-[13px] sm:text-sm md:text-base text-white/80 max-w-[360px] mx-auto">
            Watch our quick intro video to learn more
          </p>
        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div className="flex justify-center px-4 sm:px-8 pb-0">
          <div className="relative w-full max-w-[1100px] rounded-[20px] overflow-hidden shadow-2xl">

            <img
              src="/better-than-banks.png"
              alt="Better than Banks"
              className="w-full h-auto object-cover block"
            />

            <div className="absolute inset-0 bg-black/25" />

            <img
              src="/playbutton.png"
              alt="Play video"
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-20
                w-[114px]
                h-[114px]
                sm:w-[120px]
                sm:h-[120px]
                cursor-pointer
                drop-shadow-2xl
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
