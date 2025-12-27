
export default function FeaturesSection() {
  return (
    <section className="hidden sm:flex w-full bg-black justify-center py-14 lg:py-[120px]">
      <div className="w-full max-w-[1328px] px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-10 lg:mb-[80px]">
          Features Like Never
          <br /> Seen Before
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Swap Crypto (BIG) */}
          <div className="lg:row-span-2 bg-[#1c1c1c]/70 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex justify-center mt-2">
              <img 
                src="/bitcoin-to-dollar-exchnage 1.png" 
                className="w-[326px] h-[326px] object-contain"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-white text-[22px] font-semibold leading-tight mb-3">
                Swap Crypto<br/>with ease
              </h3>
              <p className="text-gray-400 text-sm leading-[22px]">
                Swap smarter, not harder with Plena Finance – fast,
                safe and competitive crypto swaps.
              </p>
            </div>
          </div>

         {/* Lending Protocol */}
<div className="relative bg-[#1c1c1c]/70 rounded-[32px] p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)] overflow-visible">
  <img 
    src="/lending.png" 
    className="absolute -top-10 right-6 w-[174px] h-[174px] object-contain"  // moved up
  />
  <div className="pt-[160px]"> 
    <h3 className="text-white text-[20px] font-semibold leading-tight mb-2">
      Lending Protocol
    </h3>
    <p className="text-gray-400 text-sm leading-[22px]">
      Earn Interest with Top Protocols in the Industry with Just a Tap!
    </p>
  </div>
</div>

<div className="relative bg-[#1c1c1c]/70 rounded-[32px] p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)] overflow-visible">
  <img 
    src="/stake.png" 
    className="absolute -top-10 right-6 w-[174px] h-[174px] object-contain"  
  />
  <div className="pt-[160px]"> 
    <h3 className="text-white text-[20px] font-semibold leading-tight mb-2">
      Stake your assets
    </h3>
    <p className="text-gray-400 text-sm leading-[22px]">
      Earn Interest with Top Protocols in the Industry with Just a Tap!
    </p>
  </div>
</div>
          {/* Liquidity Pools */}
          <div className="sm:col-span-2 bg-[#1c1c1c]/70 rounded-[32px] p-8 lg:p-10 flex items-center justify-between gap-6 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="max-w-[380px]">
              <h3 className="text-white text-[22px] font-semibold leading-tight mb-3">
                Liquidity Pools
              </h3>
              <p className="text-gray-400 text-sm leading-[22px]">
                Enjoy the best exchange rates across all decentralized exchanges in one place!
              </p>
            </div>

            <img 
              src="/mining-cart 1.png" 
              className="w-[238px] h-[238px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
