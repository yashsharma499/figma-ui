

export default function ReviewsAndTeam() {
  return (
    <section className="w-full bg-black py-16 lg:py-[120px] overflow-hidden">

      {/* ================= BOXED CONTENT ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="w-full bg-[#141414] rounded-[24px] sm:rounded-[32px] px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-14 relative overflow-hidden">

          <h2 className="text-center text-white text-[22px] sm:text-[28px] md:text-[32px] font-semibold">
            What our users say 💬
          </h2>

          <p className="text-center text-gray-400 text-[12px] sm:text-[14px] mt-2 max-w-[420px] mx-auto">
            Protected by a multi-level security architecture and is regularly
          </p>
        </div>
      </div>

      {/* ================= FULL WIDTH MARQUEE ================= */}
      <div className="relative mt-10 w-full overflow-hidden">

        {/* ROW 1 */}
        <div className="flex gap-4 sm:gap-6 animate-scroll px-4 sm:px-6 lg:px-20">
          <ReviewRow />
          <ReviewRow />
        </div>

        {/* ROW 2 */}
        <div className="flex gap-4 sm:gap-6 animate-scroll-reverse mt-6 px-4 sm:px-6 lg:px-20">
          <ReviewRow />
          <ReviewRow />
        </div>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[60px] sm:w-[120px] bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[60px] sm:w-[120px] bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      {/* ================= THE TEAM ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-20 mt-20 sm:mt-[140px] text-center">
        <h2 className="text-white text-[22px] sm:text-[28px] md:text-[32px] font-semibold">
          The Team
        </h2>

        <p className="text-gray-400 text-[12px] sm:text-[14px] mt-2">
          Protected by a multi-level security architecture and is regularly
        </p>

        <div className="relative mt-10 sm:mt-12 flex justify-center items-center gap-6 md:gap-8 flex-wrap lg:flex-nowrap">

          <img
            src="/arrow-left.png"
            alt="Previous"
            className="hidden lg:block absolute left-0 w-[36px] cursor-pointer"
          />

          {["Jared E. Wallace", "Jessica Johnson", "Trevor Nash", "Kate Winslet"].map(
            (name, i) => (
              <div key={i} className="w-[180px] sm:w-[200px] md:w-[220px]">
                <div className="h-[220px] sm:h-[240px] md:h-[260px] rounded-[20px] bg-gradient-to-b from-purple-500/40 to-black flex items-end p-4">
                  <p className="text-white text-[10px] leading-[14px] opacity-80">
                    Short bio text placed here describing experience and role.
                  </p>
                </div>
                <h4 className="mt-3 text-white text-[13px] sm:text-[14px] font-semibold">
                  {name}
                </h4>
                <p className="text-gray-400 text-[11px] sm:text-[12px]">
                  LinkedIn | Twitter
                </p>
              </div>
            )
          )}

          <img
            src="/arrow-right.png"
            alt="Next"
            className="hidden lg:block absolute right-0 w-[36px] cursor-pointer"
          />
        </div>
      </div>

      {/* ===== CSS ===== */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 28s linear infinite;
        }
        .animate-scroll-reverse {
          width: max-content;
          animation: scrollReverse 28s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ===== REVIEW CARDS ===== */
function ReviewRow() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="w-[220px] sm:w-[240px] md:w-[260px] border border-white/20 rounded-[16px] p-4 sm:p-5 h-[150px] sm:h-[160px] flex flex-col justify-between bg-transparent"
        >
          <p className="text-gray-300 text-[11px] sm:text-[12px] leading-[18px]">
            Experience has been seamless and smooth. Great UI, fast transactions
            and very secure platform overall.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 text-[11px] sm:text-[12px]">
              ▶ Logan
            </div>
            <div className="text-white text-[10px]">★★★★★</div>
          </div>
        </div>
      ))}
    </>
  );
}
