
export default function CryptoAppSection() {
  return (
    <section className="w-full bg-black py-16 lg:py-[120px]">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div
          className="
            relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[52px]
            overflow-hidden
          "
          style={{
            minHeight: "932px",
            background:
              "linear-gradient(90deg, #aee1ec 0%, rgb(174,225,236) 35%, #a687fb 65%, rgb(166,135,251) 100%)",
          }}
        >
          {/* ================= MOBILE VIEW ================= */}
          <div className="flex flex-col items-center text-center px-6 pt-14 lg:hidden">
            <p className="text-[18px] font-medium text-black mb-3">
              Worlds first crypto
            </p>

            <h1 className="text-[36px] leading-[42px] font-extrabold text-black mb-4">
              Chat’n’Pay 🤑
            </h1>

            <p className="text-[14px] leading-[22px] text-black/80 mb-8 max-w-[320px]">
              The new culture of money is making headlines check out our latest blog
            </p>

            {/* MOBILE PHONE IMAGE */}
<img
  src="/chatnpay-mobile.png"
  alt="Chat n Pay Mobile"
  className="w-[300px] sm:w-[340px] md:w-[380px] mb-10"
 />

            {/* BUTTON */}
            <button
              className="flex items-center justify-center font-extrabold text-[18px] text-black"
              style={{
                width: "200px",
                height: "52px",
                borderRadius: "14px",
                borderTop: "1px solid #000",
                borderRight: "4px solid #000",
                borderBottom: "5px solid #000",
                borderLeft: "1px solid #000",
                background: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              Get the App
            </button>
          </div>

          {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
          <div className="hidden lg:block">
            {/* LEFT CONTENT */}
            <div className="absolute left-[160px] top-[240px] max-w-[520px] text-black">
              <p className="text-[24px] font-medium mb-4">
                Worlds first crypto
              </p>

              <h1 className="text-[72px] leading-[78px] font-extrabold mb-6">
                Chat’n’Pay 🤑
              </h1>

              <p className="text-[18px] leading-[28px] mb-10">
                The new culture of money is making headlines check out our latest
                blog
              </p>

              {/* BUTTON */}
              <button
                className="flex items-center justify-center font-extrabold text-[32px] text-black"
                style={{
                  width: "256.2px",
                  height: "61px",
                  borderRadius: "16.27px",
                  borderTop: "1px solid #000",
                  borderRight: "4px solid #000",
                  borderBottom: "5px solid #000",
                  borderLeft: "1px solid #000",
                  background: "transparent",
                  letterSpacing: "0.6px",
                  lineHeight: "1",
                }}
              >
                Get the App
              </button>
            </div>

            {/* DESKTOP IMAGE */}
            <img
              src="/chess.png"   // ✅ desktop image (existing)
              alt="Hero Visual"
              className="absolute right-[160px] top-[120px]"
              style={{
                width: "536px",
                height: "687px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
