
export default function FeaturesSection() {
  return (
    <section className="w-full bg-black flex justify-center py-20 lg:py-[120px]">
      <div className="w-full max-w-[1328px] px-5 sm:px-6">

        {/* HEADING */}
        <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[56px] mb-12 lg:mb-[80px]">
          Features Like Never
          <br />
          Seen Before
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* LEFT BIG CARD */}
          <div className="lg:row-span-2 bg-[rgba(32,32,32,0.6)] rounded-[24px] p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex justify-center mb-6 lg:mb-0">
              <img
                src="/bitcoin-to-dollar-exchnage 1.png"
                alt="Swap"
                className="w-[200px] lg:w-[240px]"
              />
            </div>

            <div>
              <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-2">
                Swap Crypto
                <br />
                with ease
              </h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">
                Swap smarter, not harder with Plena Finance – fast, safe, and
                competitive crypto swaps.
              </p>
            </div>
          </div>

          {/* LENDING */}
          <div className="bg-[rgba(32,32,32,0.6)] rounded-[20px] p-6 relative">
            <img
              src="/lending.png"
              alt="Lending"
              className="absolute top-4 right-4 w-[56px] lg:w-[72px]"
            />
            <div className="pt-[64px] lg:pt-[72px]">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Lending
                <br />
                Protocol
              </h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">
                Earn interest with top protocols in the industry with just a tap!
              </p>
            </div>
          </div>

          {/* STAKE */}
          <div className="bg-[rgba(32,32,32,0.6)] rounded-[20px] p-6 relative">
            <img
              src="/stake.png"
              alt="Stake"
              className="absolute top-4 right-4 w-[56px] lg:w-[72px]"
            />
            <div className="pt-[64px] lg:pt-[72px]">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Stake your
                <br />
                assets
              </h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">
                Earn interest with top protocols in the industry with just a tap!
              </p>
            </div>
          </div>

          {/* LIQUIDITY */}
          <div className="sm:col-span-2 bg-[rgba(32,32,32,0.6)] rounded-[24px] p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="max-w-[360px]">
              <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-2">
                Liquidity Pools
              </h3>
              <p className="text-gray-400 text-[14px] leading-[22px]">
                Enjoy the best exchange rates across all decentralized exchanges
                in one place!
              </p>
            </div>
            <img
              src="/mining-cart 1.png"
              alt="Liquidity"
              className="w-[160px] lg:w-[200px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
