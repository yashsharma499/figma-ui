
export default function CryptoAppSection() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div
          className="
            relative w-full
            rounded-[28px] sm:rounded-[36px] lg:rounded-[52px]
            overflow-hidden

            min-h-fit            /* Mobile auto height */
            lg:min-h-[932px]     /* Keep height only desktop */
          "
          style={{
            background:
              "linear-gradient(90deg, #aee1ec 0%, rgb(174,225,236) 35%, #a687fb 65%, rgb(166,135,251) 100%)",
          }}
        >

          {/* ================= MOBILE ================= */}
          <div className="flex flex-col items-center text-center w-full px-4 pt-10 pb-4 lg:hidden">

            <p className="text-[18px] font-medium text-black mb-2">
              Worlds first crypto
            </p>

            <h1 className="text-[32px] sm:text-[36px] leading-[42px] font-extrabold text-black mb-3">
              Chat’n’Pay 🤑
            </h1>

            <p className="text-[14px] leading-[22px] text-black/80 max-w-[340px] mb-6">
              The new culture of money is making headlines check out our latest blog
            </p>

            <img
              src="/chatnpay-mobile.png"
              alt="Chat n Pay Mobile"
              className="w-full max-w-[420px] object-contain mb-0"
            />

            {/* ❌ Button removed for mobile */}
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:block">
            <div className="absolute left-[160px] top-[240px] max-w-[520px] text-black">
              <p className="text-[24px] font-medium mb-4">
                Worlds first crypto
              </p>

              <h1 className="text-[72px] leading-[78px] font-extrabold mb-6">
                Chat’n’Pay 🤑
              </h1>

              <p className="text-[18px] leading-[28px] mb-10">
                The new culture of money is making headlines check out our latest blog
              </p>

              <button
                className="flex items-center justify-center font-extrabold text-[32px] text-black"
                style={{
                  width: "256px",
                  height: "61px",
                  borderRadius: "16px",
                  borderTop: "1px solid #000",
                  borderRight: "4px solid #000",
                  borderBottom: "5px solid #000",
                  borderLeft: "1px solid #000",
                  background: "transparent",
                }}
              >
                Get the App
              </button>
            </div>

            <img
              src="/chess.png"
              alt="Hero Visual"
              className="absolute right-[160px] top-[120px]"
              style={{ width: "536px", height: "687px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
