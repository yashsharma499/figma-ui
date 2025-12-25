
// export default function PlenaInTheNews() {
//   return (
//     <section
//       className="w-full overflow-hidden py-[100px]"
//       style={{
//         background:
//           "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a2a 100%)",
//       }}
//     >
//       {/* TITLE */}
//       <h2 className="text-center text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-12 md:mb-16">
//         Plena in the News
//       </h2>

//       {/* MARQUEE AREA */}
//       <div className="relative space-y-8 md:space-y-10">
//         {/* ROW 1 */}
//         <div className="flex w-max gap-12 md:gap-16 lg:gap-20 animate-scroll">
//           <LogoSet />
//           <LogoSet />
//         </div>

//         {/* ROW 2 (REVERSE) */}
//         <div className="flex w-max gap-12 md:gap-16 lg:gap-20 animate-scroll-reverse">
//           <LogoSet />
//           <LogoSet />
//         </div>

//         {/* FADE EDGES */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />
//       </div>

//       {/* CSS INSIDE COMPONENT */}
//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-reverse {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }

//         .animate-scroll-reverse {
//           animation: scroll-reverse 30s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------- LOGO SET ---------------- */

// function LogoSet() {
//   return (
//     <>
//       <Logo text="Google" sub="for Entrepreneurs" />
//       <Logo text="LinkedIn" />
//       <Logo text="reddit" />
//       <Logo text="facebook" />
//       <Logo text="Google" sub="for Entrepreneurs" />
//       <Logo text="LinkedIn" />
//       <Logo text="reddit" />
//       <Logo text="facebook" />
//     </>
//   );
// }

// function Logo({ text, sub }) {
//   return (
//     <div className="flex items-center gap-4 flex-shrink-0 opacity-80">
//       <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center">
//         <span className="text-white text-lg md:text-xl font-bold">
//           {text[0]}
//         </span>
//       </div>

//       <div className="leading-tight">
//         <div className="text-white text-[18px] md:text-[22px] font-semibold">
//           {text}
//         </div>
//         {sub && (
//           <div className="text-white/50 text-[11px] md:text-[12px]">
//             {sub}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default function PlenaInTheNews() {
  return (
    <section
      className="w-full overflow-hidden py-[50px] md:py-[70px]"  // reduced top-bottom space
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a2a 100%)",
      }}
    >
      {/* TITLE */}
      <h2 className="text-center text-white text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-6 md:mb-8"> 
        Plena in the News
      </h2>

      {/* MARQUEE AREA */}
      <div className="relative space-y-4 md:space-y-6"> 
        {/* ROW 1 */}
        <div className="flex w-max gap-10 md:gap-14 lg:gap-16 animate-scroll">
          <LogoSet />
          <LogoSet />
        </div>

        {/* ROW 2 (REVERSE) */}
        <div className="flex w-max gap-10 md:gap-14 lg:gap-16 animate-scroll-reverse">
          <LogoSet />
          <LogoSet />
        </div>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] md:w-[100px] bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] md:w-[100px] bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />
      </div>

      {/* CSS INSIDE COMPONENT */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll {
          animation: scroll 28s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ---------------- LOGO SET ---------------- */

function LogoSet() {
  return (
    <>
      <Logo text="Google" sub="for Entrepreneurs" />
      <Logo text="LinkedIn" />
      <Logo text="reddit" />
      <Logo text="facebook" />
      <Logo text="Google" sub="for Entrepreneurs" />
      <Logo text="LinkedIn" />
      <Logo text="reddit" />
      <Logo text="facebook" />
    </>
  );
}

function Logo({ text, sub }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 opacity-80">
      <div className="w-9 h-9 md:w-11 md:h-11 bg-white/10 rounded-lg flex items-center justify-center">
        <span className="text-white text-base md:text-lg font-bold">
          {text[0]}
        </span>
      </div>

      <div className="leading-tight">
        <div className="text-white text-[16px] md:text-[20px] font-semibold">
          {text}
        </div>
        {sub && (
          <div className="text-white/50 text-[10px] md:text-[12px]">
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}
