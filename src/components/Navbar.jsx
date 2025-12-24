
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Earn", "DeFi", "Features", "Blog"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-black relative z-50">
        <div className="max-w-[1728px] mx-auto flex items-center justify-between px-6 lg:px-20 py-6">

          {/* LOGO */}
          <div className="flex items-baseline gap-2 text-white">
            <span className="text-xl font-semibold">plena</span>
            <span className="text-xs tracking-widest opacity-60">
              FINANCE
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <img
            src="/getappbutton.png"
            alt="Get App"
            className="hidden md:block h-[44px] cursor-pointer"
          />

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="block md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col overflow-visible">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 pt-8 pb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold">plena</span>
              <span className="text-xs tracking-widest opacity-60">
                FINANCE
              </span>
            </div>

           {/* ✅ CLOSE BUTTON */}
<button
  onClick={() => setOpen(false)}
  className="
    absolute
    top-6
    right-6
    z-[10000]
    text-white
  "
>
  <X size={28} />
</button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 flex flex-col items-center justify-center gap-7 text-2xl">
            {navItems.map((item) => (
              <span key={item} className="cursor-pointer">
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 pb-10">
            <img
              src="/download-app-button.png"
              alt="Download App"
              className="w-full max-w-[320px] mx-auto cursor-pointer"
            />
            <p className="mt-3 text-center text-xs opacity-60">
              *Available for iOS & Android
            </p>
          </div>
        </div>
      )}
    </>
  );
}
