
export default function Stats() {
  return (
    <section className="relative w-full z-20 mt-12 sm:mt-14 lg:mt-0">
      <div className="max-w-[900px] mx-auto px-4">
        <div
          className="
            grid grid-cols-3
            text-center
            gap-2 sm:gap-10
            py-6
            px-4
          "
        >
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">140K+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Users</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">200K+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Strong Community</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">20M+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
