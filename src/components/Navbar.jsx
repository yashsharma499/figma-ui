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
          {/* LOGO - REPLACED WITH IMAGE */}
          <div className="flex items-center">
            <img 
              src="/piena_navbar.png" 
              alt="Plena Finance" 
              className="h-8 md:h-10 cursor-pointer"
            />
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

          {/* DESKTOP CTA - KEEPING ORIGINAL IMAGE */}
          <img 
            src="/getappbutton.png" 
            alt="Get App" 
            className="hidden md:block h-[44px] cursor-pointer hover:opacity-90 transition-opacity" 
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
            {/* MOBILE LOGO - REPLACED WITH IMAGE */}
            <div className="flex items-center">
              <img 
                src="/plena-logo.png" 
                alt="Plena Finance" 
                className="h-10 cursor-pointer"
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-[10000] text-white"
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

          {/* CTA - KEEPING ORIGINAL IMAGE */}
          <div className="px-6 pb-10">
            <img 
              src="/download-app-button.png" 
              alt="Download App" 
              className="w-full max-w-[320px] mx-auto cursor-pointer hover:opacity-90 transition-opacity" 
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