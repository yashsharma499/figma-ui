
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
        className="relative flex flex-col"
        style={{
          width: "1500px",              // smaller page width
          padding: "50px 70px",         // compact top-bottom
        }}
      >

        {/* ================== TOP SECTION ================== */}
        <div className="flex flex-col lg:flex-row justify-between gap-14">

          {/* Left Section - Logo + Social */}
          <div className="max-w-[550px]">
            <img src="/logo.png" className="w-[65px] h-[65px] mb-10" /> 

            {/* Social Links - Single Line + Lowered */}
            <div className="flex gap-7 text-[15px] text-white/80 whitespace-nowrap mt-10">
              {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(s => (
                <span key={s} className="flex items-center gap-1 hover:text-white cursor-pointer">
                  {s} <span className="text-[#A56FFF] text-[16px]">↗</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Links Section */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-6 text-white/75 text-[15px] leading-relaxed">
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

        {/* Divider - Closer to social links */}
        <div className="w-full h-px bg-white/10 mt-10 mb-4" />

        {/* ================= DISCLAIMER ================= */}
        <p className="text-[11px] text-white/40 leading-relaxed max-w-[1400px] mt-2 mb-4">
          Plena and the articles contained herein (the “Website”) is for informational purposes only. 
          Please do not construe any such information or material on this Website as legal, tax, investment, 
          financial, or other advice. This Website and the information contained herein is not an endorsement 
          of any digital asset, protocol, network, or project. The risk of loss in cryptocurrency can be 
          substantial and nothing herein is intended to be a guarantee against the possibility of loss. 
          This Website and the content contained herein are based on information which is believed to be 
          reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no 
          representation or warranty, express or implied, as to the fairness, accuracy, adequacy, 
          reasonableness, or completeness of such information. Plena Ltd. cannot be responsible, in any way 
          whatsoever, for your use of the information contained herein or linked from this Website. Any use 
          of Plena Ltd. services are at all times subject to and governed by Plena Ltd. policies, including, 
          without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
        </p>

      </div>
    </footer>
  );
}
