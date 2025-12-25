
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         overflow-hidden                        
//         rounded-t-[52px]                       
//       "
//       style={{
//         background: "transparent",             
//       }}
//     >
//       <div
//         className="
//           w-full max-w-[1727px] 
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           overflow-hidden
//           rounded-t-[52px]                     /* visible round container */
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",     /* footer fills inside only */
//           backdropFilter: "blur(6px)",
//         }}
//       >

//         {/* ================= TOP ROW ================= */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">

//           {/* ================= LEFT ================= */}
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 hover:text-white transition cursor-pointer">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* ================= RIGHT LINKS ================= */}
//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         <div className="my-10 h-px w-full bg-white/10" />

//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein (the “Website”) is for informational purposes only...
//         </p>
//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer 
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]                 /* Top corners visible */
//         overflow-hidden                  /* Ensures rounded cut shows background */
//         relative z-10
//       "
//       style={{
//         background: "transparent",        /* Background will show previous section */
//       }}
//     >
//       {/* MAIN FOOTER CONTAINER */}
//       <div
//         className="
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",  /* Actual footer card background */
//           backdropFilter: "blur(6px)",
//         }}
//       >

//         {/* ================= TOP FOOTER ROW ================= */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">

//           {/* LEFT SIDE */}
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" alt="Plena" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px] tracking-wide">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 cursor-pointer hover:text-white transition">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE LINKS */}
//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         {/* DIVIDER */}
//         <div className="my-10 h-px w-full bg-white/10" />

//         {/* DISCLAIMER */}
//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein (the “Website”) is for informational purposes only.
//           Please do not construe any such information or material on this Website as legal, tax,
//           investment, financial, or other advice... 
//         </p>

//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]           /* Visible rounded top corners */
//         overflow-hidden
//         relative z-10
//       "
//       style={{
//         background: "#13131c",     /* <== Corner background color */
//       }}
//     >
//       <div
//         className="
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",   /* Inner card color */
//           backdropFilter: "blur(6px)",
//         }}
//       >

//         {/* ================= TOP ROW ================= */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">

//           {/* LEFT CONTENT */}
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" alt="Plena" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 cursor-pointer hover:text-white transition">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-10 h-px bg-white/10" />

//         {/* Disclaimer */}
//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein (the “Website”) is for informational purposes only...
//         </p>

//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]
//         overflow-hidden
//         relative z-10
//       "
//       style={{
//         background: "linear-gradient(180deg,#050509,#0d0d14 60%,#14141d 100%)",
//       }}
//     >
//       <div
//         className="
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",
//           backdropFilter: "blur(6px)",
//         }}
//       >

//         {/* ================= TOP ROW ================= */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">

//           {/* LEFT */}
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" alt="Plena" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 cursor-pointer hover:text-white transition">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-10 h-px bg-white/10" />

//         {/* Disclaimer */}
//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein (the “Website”) is for informational purposes only...
//         </p>

//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]
//         overflow-hidden
//         relative z-10
//       "
//       style={{
//         background: "linear-gradient(180deg,#0d0d14 0%, #13131c 60%, #14141d 100%)",
//       }}
//     >
//       <div
//         className="
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",
//           backdropFilter: "blur(6px)",
//         }}
//       >
//         {/* TOP ROW */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 hover:text-white transition cursor-pointer">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         <div className="my-10 h-px bg-white/10" />

//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein...
//         </p>
//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]
//         overflow-hidden
//         relative z-10
//       "
//       style={{
//         background: "#14141d",   // <--- matching CTA background bottom
//       }}
//     >
//       <div
//         className="
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",
//           backdropFilter: "blur(6px)",
//         }}
//       >
//         {/* --- Top Row --- */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span key={item} className="flex items-center gap-1 cursor-pointer hover:text-white transition">
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>
//         </div>

//         <div className="my-10 h-px bg-white/10" />

//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein...
//         </p>

//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-full flex justify-center 
//         rounded-t-[52px]
//         overflow-hidden
//         relative z-10
//       "
//       style={{
//         background: "#14141d",   // matches CryptoPortfolioCTA bottom color
//       }}
//     >

//       {/* 🔥 Background fill layer to fix corner gap */}
//       <div className="absolute inset-0 bg-[#14141d]" />

//       {/* Main Inner Footer */}
//       <div
//         className="
//           relative
//           w-full max-w-[1727px]
//           px-6 sm:px-10 md:px-14 lg:px-20 
//           py-14 sm:py-16 md:py-20
//           rounded-t-[52px]
//           overflow-hidden
//         "
//         style={{
//           background: "rgba(21,21,21,0.8)",
//           backdropFilter: "blur(6px)",
//         }}
//       >

//         {/* --- Top Row --- */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">
          
//           <div className="max-w-[520px] space-y-6">
//             <img src="/logo.png" className="w-[60px] h-[60px]" />

//             <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
//               {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
//                 <span 
//                   key={item} 
//                   className="flex items-center gap-1 cursor-pointer hover:text-white transition"
//                 >
//                   {item} <span className="text-purple-400">↗</span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Terms of use</p>
//               <p className="hover:text-white cursor-pointer">Privacy notice</p>
//               <p className="hover:text-white cursor-pointer">Security notice</p>
//               <p className="hover:text-white cursor-pointer">Contact us</p>
//             </div>
//             <div className="space-y-3">
//               <p className="hover:text-white cursor-pointer">Press</p>
//               <p className="hover:text-white cursor-pointer">Blog</p>
//               <p className="hover:text-white cursor-pointer">FAQs</p>
//               <p className="hover:text-white cursor-pointer">Support</p>
//             </div>
//           </div>

//         </div>

//         <div className="my-10 h-px bg-white/10" />

//         <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
//           Plena and the articles contained herein...
//         </p>

//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer
      className="
        w-full flex justify-center 
        overflow-hidden
        relative z-10
      "
      style={{
        background: "#14141d",   // matches CTA bottom
      }}
    >

      {/* Background layer (optional) */}
      <div className="absolute inset-0 bg-[#14141d]" />

      {/* Main Inner Footer */}
      <div
        className="
          relative
          w-full max-w-[1727px]
          px-6 sm:px-10 md:px-14 lg:px-20 
          py-14 sm:py-16 md:py-20
          overflow-hidden   /* Rounded removed */
        "
        style={{
          background: "rgba(21,21,21,0.8)",
          backdropFilter: "blur(6px)",
        }}
      >

        {/* --- Top Row --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          <div className="max-w-[520px] space-y-6">
            <img src="/logo.png" className="w-[60px] h-[60px]" />

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 text-[14px] sm:text-[15px]">
              {["Instagram","Twitter","Facebook","LinkedIn","TikTok","YouTube","Medium"].map(item => (
                <span 
                  key={item} 
                  className="flex items-center gap-1 cursor-pointer hover:text-white transition"
                >
                  {item} <span className="text-purple-400">↗</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-20 sm:gap-x-28 gap-y-5 text-white/70 text-[14px] sm:text-[15px]">
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

        <div className="my-10 h-px bg-white/10" />

        <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed max-w-[1500px]">
          Plena and the articles contained herein...
        </p>

      </div>
    </footer>
  );
}
