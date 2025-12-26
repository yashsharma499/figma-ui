

export default function ReviewsAndTeam() {
  return (
    <section className="w-full bg-[#141414] pt-6 pb-0 lg:pt-10 lg:pb-0 overflow-hidden">

      {/* ================= REVIEWS ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="rounded-[32px] px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10">
          <h2 className="text-center text-white text-[22px] sm:text-[28px] md:text-[32px] font-semibold">
            What our users say 💬
          </h2>
          <p className="text-center text-gray-400 text-[12px] sm:text-[14px] mt-2 max-w-[420px] mx-auto">
            Protected by a multi-level security architecture and is regularly
          </p>
        </div>
      </div>

      {/* ================= MARQUEE AUTO SCROLL ================= */}

      <div className="relative mt-6 w-full overflow-hidden">

        {/* 🔥 Mobile — Single Row */}
        <div className="flex gap-6 animate-scroll px-4 sm:px-6 lg:hidden">
          <ReviewRow /> <ReviewRow /> {/* Duplicate for looping */}
        </div>

        {/* 🔥 Desktop — Dual rows unchanged */}
        <div className="hidden lg:block">
          <div className="flex gap-6 animate-scroll px-4 sm:px-6 lg:px-20">
            <ReviewRow /> <ReviewRow />
          </div>

          <div className="flex gap-6 animate-scroll-reverse mt-4 px-4 sm:px-6 lg:px-20">
            <ReviewRow /> <ReviewRow />
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#141414] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#141414] to-transparent z-10" />
      </div>

      {/* ================= TEAM SECTION ================= */}
      <div className="w-full bg-black mt-10 pt-12 pb-10 px-4 sm:px-6 lg:px-20 text-center">

        <h2 className="text-white text-[22px] sm:text-[28px] md:text-[32px] font-semibold">The Team</h2>
        <p className="text-gray-400 text-[12px] sm:text-[14px] mt-2">
          Protected by a multi-level security architecture and is regularly
        </p>

        {/* -------- MOBILE SLIDER -------- */}
        <div className="relative mt-8 sm:mt-10 lg:hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {teamData.map((m,i)=>(
              <div key={i} className="min-w-[220px] snap-center flex-shrink-0">
                <TeamCard member={m}/>
              </div>
            ))}
          </div>
        </div>

        {/* -------- MOBILE ARROWS BELOW -------- */}
        <div className="flex justify-center items-center gap-8 mt-6 lg:hidden">
          <button className="w-[40px] opacity-80 hover:opacity-100 active:scale-90 transition">
            <img src="/arrow-left.png" />
          </button>
          <button className="w-[40px] opacity-80 hover:opacity-100 active:scale-90 transition">
            <img src="/arrow-right.png"/>
          </button>
        </div>

        {/* -------- DESKTOP GRID + ARROWS -------- */}
        <div className="relative mt-10 hidden lg:flex items-center justify-center">
          <button className="absolute left-0 w-[40px] opacity-70 hover:opacity-100 transition">
            <img src="/arrow-left.png" />
          </button>

          <div className="flex gap-8">
            {teamData.map((m,i)=>(
              <div key={i} className="w-[220px]">
                <TeamCard member={m}/>
              </div>
            ))}
          </div>

          <button className="absolute right-0 w-[40px] opacity-70 hover:opacity-100 transition">
            <img src="/arrow-right.png"/>
          </button>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes scroll {0%{transform:translateX(0);}100%{transform:translateX(-50%);} }
        @keyframes scrollReverse {0%{transform:translateX(-50%);}100%{transform:translateX(0);} }
        .animate-scroll{width:max-content;animation:scroll 25s linear infinite;}
        .animate-scroll-reverse{width:max-content;animation:scrollReverse 25s linear infinite;}
      `}</style>
    </section>
  );
}


/* ================= TEAM CARD ================= */
function TeamCard({ member }) {
  return (
    <div className="rounded-[24px] overflow-hidden bg-black">
      <div className="group relative h-[260px] overflow-hidden rounded-[20px]">
        <img src={member.image} className="w-full h-full object-cover transition duration-500 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 
            group-hover:opacity-100 transition duration-500 px-4 text-center">
          <p className="text-white text-[12px] leading-[18px]">{member.bio}</p>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6 text-left">
        <h4 className="text-white text-[16px] font-medium">{member.name}</h4>
        <p className="text-[#9CA3AF] text-[13px] mt-1">{member.role}</p>
        <div className="w-[34px] h-[1px] bg-[#6B7280] mt-3 mb-3"></div>
        <div className="text-[13px] flex items-center gap-2">
          <a className="text-[#8B5CF6] hover:underline">LinkedIn</a>
          <span className="text-gray-500">|</span>
          <a className="text-white hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  );
}

/* ================= TEAM DATA ================= */
const teamData = [
  { name:"Jared E. Wallace", role:"CEO & Co-Founder", image:"/person1.png", bio:"Blockchain strategist with 10+ years experience in Web3." },
  { name:"Jessica Johnson", role:"Co-Founder", image:"/person2.png", bio:"Design-first thinker focused on intuitive crypto UX." },
  { name:"Trevor Nash", role:"Tech Lead", image:"/person3.png", bio:"Full-stack engineer specializing in secure systems." },
  { name:"Kate Winslet", role:"Marketing", image:"/person1.png", bio:"Growth-focused marketer with deep crypto insights." },
];

/* ================= REVIEW CARD ROW ================= */
function ReviewRow() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="w-[240px] border border-white/20 rounded-[16px] p-5 h-[160px] flex flex-col justify-between">
          <p className="text-gray-300 text-[12px] leading-[18px]">
            Experience has been seamless and smooth. Great UI, fast transactions and very secure platform.
          </p>
          <div className="flex justify-between text-white text-[11px]">
            <span>▶ Logan</span> ★★★★★
          </div>
        </div>
      ))}
    </>
  );
}
