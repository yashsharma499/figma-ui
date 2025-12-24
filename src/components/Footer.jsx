
export default function Footer() {
  return (
    <footer className="w-full bg-black flex justify-center">
      <div className="w-full max-w-[1727px] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">

        {/* ================= TOP ROW ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">

          {/* ================= LEFT ================= */}
          <div className="max-w-[520px] space-y-6">
            {/* LOGO */}
            <img src="/logo.png" alt="Plena" className="w-[48px] h-[48px]" />

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[13px] sm:text-sm text-white/80">
              {[
                "Instagram",
                "Twitter",
                "Facebook",
                "LinkedIn",
                "TikTok",
                "YouTube",
                "Medium",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 cursor-pointer hover:text-white transition"
                >
                  {item}
                  <span className="text-purple-400">↗</span>
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT LINKS ================= */}
          <div className="grid grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-4 text-[13px] sm:text-sm text-white/70">
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

        {/* ================= DIVIDER ================= */}
        <div className="my-8 sm:my-10 h-px w-full bg-white/10" />

        {/* ================= DISCLAIMER ================= */}
        <p className="text-[11px] sm:text-xs text-white/40 leading-relaxed max-w-[1400px]">
          Plena and the articles contained herein (the “Website”) is for informational purposes only.
          Please do not construe any such information or material on this Website as legal, tax,
          investment, financial, or other advice. This Website and the information contained herein
          is not an endorsement of any digital asset, protocol, network, or project. The risks of
          loss in cryptocurrency can be substantial and nothing herein is intended to be a guarantee
          against the possibility of loss. This Website and the content contained herein are based on
          information which is believed to be reliable and has been obtained by sources believed to
          be reliable, but Plena Ltd. makes no representation or warranty, express or implied, as to
          the fairness, accuracy, adequacy, reasonableness, or completeness of such information.
          Plena Ltd. cannot be responsible in any way whatsoever for your use of the information
          contained herein linked from this Website. Any use of Plena Ltd. services are at all times
          subject to and governed by Plena Ltd. policies, including, without limitation, its Terms of
          Service and Privacy Policy, as may be amended from time to time.
        </p>

      </div>
    </footer>
  );
}
