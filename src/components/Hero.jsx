
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import Stats from "./Stats";

export default function Hero() {
  return (
    <div className="relative w-full bg-deep-dark text-white">
      <AnnouncementBar />
      <Navbar />

      {/* HERO (full viewport) */}
      <div className="h-screen">
        <HeroContent />
      </div>

      {/* STATS (always visible below) */}
      <Stats />
    </div>
  );
}

