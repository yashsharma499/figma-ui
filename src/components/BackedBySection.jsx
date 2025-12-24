
export default function BackedBySection() {
  return (
    <section className="w-full bg-black overflow-hidden">
      {/* CONTROLLED VERTICAL SPACE */}
      <div className="w-full max-w-[1728px] mx-auto px-6 lg:px-20 py-12 lg:py-20">

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">

          {/* ================= LEFT TEXT ================= */}
          <div className="max-w-[520px] text-center lg:text-left">
            <h2 className="text-white text-[34px] sm:text-[40px] lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] mb-4">
              Backed by the <br className="hidden lg:block" /> best
            </h2>

            <p className="text-[#A3A3A3] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] max-w-[440px] mx-auto lg:mx-0">
              Protected by a multi-level security architecture and is regularly
              audited to ensure that all of our users are safe.
            </p>
          </div>

          {/* ================= LOGOS (CENTERED BLOCK) ================= */}
          <div className="flex justify-center w-full lg:w-auto">
            <div className="flex gap-14">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6 items-center">
                <PolygonLogo faded />
                <PolygonLogo highlight />
                {Array.from({ length: 6 }).map((_, i) => (
                  <PolygonLogo key={i} faded />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6 items-center">
                <PolygonLogo faded />

                {/* BICONOMY */}
                <div className="flex items-center h-[28px]">
                  <span className="text-white text-[20px] sm:text-[22px] lg:text-[32px] font-semibold tracking-[-0.03em]">
                    Biconomy
                  </span>
                </div>

                {Array.from({ length: 6 }).map((_, i) => (
                  <PolygonLogo key={i} faded />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= POLYGON LOGO ================= */
function PolygonLogo({ faded = false, highlight = false }) {
  const opacityClass = highlight ? "opacity-100" : "opacity-35";

  return (
    <div className={`flex items-center gap-3 ${opacityClass}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M10 12.3L14.4 9.8C15.4 9.3 16.6 9.3 17.6 9.8L22 12.3C23 12.8 23.6 13.8 23.6 14.9V19
             C23.6 20.1 23 21.1 22 21.6L17.6 24.1C16.6 24.6 15.4 24.6 14.4 24.1L10 21.6
             C9 21.1 8.4 20.1 8.4 19V14.9C8.4 13.8 9 12.8 10 12.3Z"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className={`text-[18px] sm:text-[20px] lg:text-[24px] font-medium tracking-[-0.03em] ${
          highlight ? "text-white" : "text-[#A3A3A3]"
        }`}
      >
        polygon
      </span>
    </div>
  );
}
