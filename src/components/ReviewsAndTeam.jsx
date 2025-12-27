
import { useState } from "react";

export default function ReviewsAndTeam() {

  /* ================= MOBILE SLIDER INDEX ================= */
  const total = teamData.length;
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex(prev => (prev + 1) % total);
  const prevSlide = () => setIndex(prev => (prev - 1 + total) % total);

  const looped = [...teamData, ...teamData, ...teamData]; // infinite queue

  return (
    <section className="w-full bg-[#141414] pt-6 pb-0 lg:pt-10 lg:pb-0 overflow-hidden">

{/* =========================== REVIEWS (UNCHANGED) =========================== */}

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

      <div className="relative mt-6 w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll px-4 sm:px-6 lg:hidden">
          <ReviewRow /><ReviewRow />
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-6 animate-scroll px-4 sm:px-6 lg:px-20"><ReviewRow /><ReviewRow /></div>
          <div className="flex gap-6 animate-scroll-reverse px-4 sm:px-6 lg:px-20 mt-4"><ReviewRow /><ReviewRow /></div>
        </div>

        <div className="absolute left-0 inset-y-0 w-[100px] bg-gradient-to-r from-[#141414] to-transparent z-10" />
        <div className="absolute right-0 inset-y-0 w-[100px] bg-gradient-to-l from-[#141414] to-transparent z-10" />
      </div>


{/* ============================= TEAM SECTION ============================= */}

      <div className="w-full bg-black mt-10 pt-12 pb-10 px-4 sm:px-6 lg:px-20 text-center min-h-[692px]">

        <h2 className="text-white text-[26px] sm:text-[30px] md:text-[34px] font-semibold">The Team</h2>
        <p className="text-gray-400 text-[13px] sm:text-[15px] mt-2 max-w-[400px] mx-auto">
          Protected by a multi-level security architecture and is regularly
        </p>


{/* -------- MOBILE VIEW FINAL (2 CARDS + SMOOTH SLIDE + NO GAPS) -------- */}

        <div className="relative mt-10 lg:hidden overflow-hidden flex justify-center">
          <div className="w-full max-w-[428px]">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
              {looped.map((m, i) => (
                <div key={i} className="w-[48%] min-w-[48%] sm:min-w-[46%]">
                  <TeamCard member={m} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-6 lg:hidden">
          <button onClick={prevSlide} className="w-[45px] opacity-80 active:scale-90">
            <img src="/arrow-left.png" />
          </button>
          <button onClick={nextSlide} className="w-[45px] opacity-80 active:scale-90">
            <img src="/arrow-right.png" />
          </button>
        </div>


{/* ================= DESKTOP VIEW (RESTORED AS IS) ================= */}

        <div className="relative mt-14 hidden lg:flex items-center justify-center">

          <button onClick={prevSlide} className="absolute left-0 w-[40px] opacity-70 hover:opacity-100 transition">
            <img src="/arrow-left.png" />
          </button>

          <div className="flex gap-8">
            {teamData.map((m, i) => (
              <div key={i} className="w-[230px]">
                <TeamCard member={m} />
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className="absolute right-0 w-[40px] opacity-70 hover:opacity-100 transition">
            <img src="/arrow-right.png" />
          </button>

        </div>
      </div>


{/* ===================== CSS FOR REVIEWS SCROLL ===================== */}

      <style jsx>{`
        @keyframes scroll {0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        @keyframes scrollReverse {0%{transform:translateX(-50%);}100%{transform:translateX(0);}}
        .animate-scroll{animation:scroll 25s linear infinite;width:max-content;}
        .animate-scroll-reverse{animation:scrollReverse 25s linear infinite;width:max-content;}
      `}</style>
    </section>
  );
}



function TeamCard({ member }) {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    if (window.innerWidth < 1024) setShowBio((prev) => !prev);
  };

  return (
    <div className="rounded-[22px] transition shadow-none">

      <div 
        className="relative h-[240px] rounded-[18px] overflow-hidden group cursor-pointer"
        onClick={toggleBio}
      >
        <img 
          src={member.image} 
          className="w-full h-full object-cover duration-500 group-hover:scale-105"
        />

        <div 
          className={`absolute inset-0 bg-black/70 flex items-center justify-center px-4 text-center transition duration-500 
          ${showBio ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}
        >
          <p className="text-white text-[12.5px] leading-[18px]">{member.bio}</p>
        </div>
      </div>

      <div className="pt-4 text-left">
        <h4 className="text-white text-[16px] font-semibold">{member.name}</h4>
        <p className="text-gray-400 text-[13px] mt-1">{member.role}</p>

        <div className="h-[1px] bg-gray-700 my-3"></div>

        <div className="flex gap-2 text-[13px]">
          <a className="text-violet-400 hover:underline">LinkedIn</a>
          <span className="text-gray-600">|</span>
          <a className="text-white hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  );
}


/* ===================== DATA ===================== */
const teamData = [
  { name:"Jared E. Wallace", role:"CEO & Co-Founder", image:"/person1.png", bio:"Blockchain strategist with 10+ years experience in Web3." },
  { name:"Jessica Johnson", role:"Co-Founder", image:"/person2.png", bio:"Design-first thinker focused on intuitive crypto UX." },
  { name:"Trevor Nash", role:"Tech Lead", image:"/person3.png", bio:"Full-stack engineer specializing in secure systems." },
  { name:"Kate Winslet", role:"Marketing", image:"/person1.png", bio:"Growth-focused marketer with deep crypto insights." },
];


/* ===================== REVIEW ROW ===================== */
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
