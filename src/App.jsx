import BetterThanBanks from "./components/BetterThanBanks";
import Hero from "./components/Hero";
import ControlAssets from "./components/ControlAssets";
import InvestCrypto from "./components/InvestCrypto";
import FasteSwap from "./components/FasteSwap";
import CryptoAppSection from "./components/CryptoAppSection";
import FeaturesSection from "./components/FeaturesSection";
import BackedBySection from "./components/BackedBySection";
import ReviewsAndTeam from "./components/ReviewsAndTeam";
import OurStoriesSection from "./components/OurStoriesSection";
import FAQSection from "./components/FAQSection";
import PlenaInTheNews from "./components/PlenaInTheNews";
import CryptoPortfolioCTA from "./components/CryptoPortfolioCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BetterThanBanks />
      <ControlAssets />
      <InvestCrypto />
      <FasteSwap />
      <CryptoAppSection />
      <FeaturesSection />
      <BackedBySection />
      <ReviewsAndTeam />
      <OurStoriesSection />
      <FAQSection />
      <PlenaInTheNews />
      <CryptoPortfolioCTA />
      <Footer />
    </>
  );
}
