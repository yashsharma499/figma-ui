
export default function FeaturesSection() {
  return (
    <section 
      className="w-full bg-black flex justify-center 
                 py-8 sm:py-10 lg:py-[120px]"  // mobile small margin restored
    >
      <div className="w-full max-w-[1328px] px-5 sm:px-6">

        <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[56px] 
                       mb-8 sm:mb-10 lg:mb-[80px]">
          Features Like Never
          <br />
          Seen Before
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* LEFT Card */}
          <div className="lg:row-span-2 bg-[rgba(32,32,32,0.6)] rounded-[32px] p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex justify-center mt-4">
              <img src="/bitcoin-to-dollar-exchnage 1.png" className="w-[180px] sm:w-[200px] lg:w-[240px]" />
            </div>
            <div className="mt-6">
              <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-2">
                Swap Crypto<br/>with ease
              </h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">Swap smarter, not harder with Plena Finance.</p>
            </div>
          </div>

          {/* Others remain unchanged */}
          <div className="relative bg-[rgba(32,32,32,0.6)] rounded-[32px] p-6">
            <img src="/lending.png" className="absolute top-4 right-4 w-[52px] sm:w-[60px] lg:w-[72px]" />
            <div className="pt-[64px]">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">Lending<br/>Protocol</h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">Earn Interest Easily!</p>
            </div>
          </div>

          <div className="relative bg-[rgba(32,32,32,0.6)] rounded-[32px] p-6">
            <img src="/stake.png" className="absolute top-4 right-4 w-[52px] sm:w-[60px] lg:w-[72px]" />
            <div className="pt-[64px]">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">Stake your<br/>assets</h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">Earn rewards securely!</p>
            </div>
          </div>

          <div className="sm:col-span-2 bg-[rgba(32,32,32,0.6)] rounded-[32px] p-6 lg:p-8 flex items-center justify-between gap-6">
            <div className="max-w-[360px]">
              <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-2">Liquidity Pools</h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">Best rates across all DEXs!</p>
            </div>
            <img src="/mining-cart 1.png" className="w-[140px] sm:w-[160px] lg:w-[200px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
