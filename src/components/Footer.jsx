export default function Footer() {
  return (
    <footer
      className="
        w-full flex justify-center items-center
        overflow-hidden relative
      "
      style={{
        background: "linear-gradient(180deg,#0d0d14,#14141d)",
      }}
    >
      <div
        className="
          relative flex flex-col 
          w-full max-w-[1728px]
          px-6 sm:px-10 lg:px-20
          pt-14 pb-10
          text-center lg:text-left
          lg:rounded-t-[32px]
          rounded-t-[32px]
        "
      >

        {/* ================= LOGO ================= */}
        <div className="flex justify-center lg:justify-start">
          <img src="/logo.png" className="w-[70px] h-[70px] mb-10" />
        </div>

        {/* ================= SOCIAL LINKS ROW (MOBILE TOP) ================= */}
        <div className="lg:hidden flex justify-center gap-8 text-white/80 text-[14px] mb-6">
          {["Instagram","Twitter","Facebook"].map(s => (
            <span key={s} className="flex items-center gap-1 cursor-pointer hover:text-white">
              {s} <span className="text-[#A56FFF] text-[15px]">↗</span>
            </span>
          ))}
        </div>

        {/* ================= SOCIAL LINKS SECOND ROW (MOBILE) ================= */}
        <div className="lg:hidden flex justify-center gap-8 text-white/80 text-[14px] mb-10">
          {["Instagram","Twitter","Facebook"].map(s => (
            <span key={s} className="flex items-center gap-1 cursor-pointer hover:text-white">
              {s} <span className="text-[#A56FFF] text-[15px]">↗</span>
            </span>
          ))}
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:flex flex-row justify-between mb-12">
          <div>
            <div className="flex gap-7 text-[15px] text-white/80 whitespace-nowrap mt-4">
              {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(s => (
                <span key={s} className="flex items-center gap-1 hover:text-white cursor-pointer">
                  {s} <span className="text-[#A56FFF] text-[16px]">↗</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-white/75 text-[15px]">
            <div className="space-y-3">
              <p className="hover:text-white cursor-pointer">Terms of use</p>
              <p className="hover:text-white cursor-pointer">Privacy notice</p>
              <p className="hover:text-white cursor-pointer">Security notice</p>
              <p className="hover:text-white cursor-pointer">Contact us</p>
            </div>

            <div className="space-y-3">
              <p className="hover:text-white cursor-pointer">Press</p>
              <p className="hover:text-white cursor-pointer">Blog</p>
              <p className="hover:text-white cursor-pointer">FAQs</p>
              <p className="hover:text-white cursor-pointer">Support</p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU LIST ================= */}
        <div className="flex flex-col text-white/75 lg:hidden text-[15px] space-y-4 mb-10">
          <p className="hover:text-white cursor-pointer">Press</p>
          <p className="hover:text-white cursor-pointer">Blog</p>
          <p className="hover:text-white cursor-pointer">FAQs</p>
          <p className="hover:text-white cursor-pointer">Support</p>
          <p className="hover:text-white cursor-pointer">Terms of use</p>
          <p className="hover:text-white cursor-pointer">Privacy notice</p>
          <p className="hover:text-white cursor-pointer">Security notice</p>
          <p className="hover:text-white cursor-pointer">Contact us</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* ================= DISCLAIMER ================= */}
        <p className="text-[11px] text-white/40 leading-relaxed max-w-[900px] mx-auto mb-0 pb-0">
          Plena and the articles contained herein (the “Website”) is for informational
          purposes only. Please do not construe any such information or material
          on this Website as legal, tax, investment, financial, or other advice.
          Cryptocurrency involves high risk and may result in loss. Plena Ltd
          makes no guarantee of accuracy or completeness and is not responsible
          for actions taken based on this content. Use of this Website implies
          acceptance of Terms & Privacy Policy which may change anytime.
        </p>

      </div>
    </footer>
  );
}
