
export default function Stats() {
  return (
    <section className="relative w-full bg-black mt-12">
      <div
        className="
          max-w-[1200px]
          mx-auto
          grid grid-cols-1 sm:grid-cols-3
          text-center
          gap-10
          py-8
          px-6 lg:px-20
        "
      >
        <div>
          <h3 className="text-2xl font-bold text-white">140K+</h3>
          <p className="text-gray-400 text-sm mt-1">Users</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">200K+</h3>
          <p className="text-gray-400 text-sm mt-1">Strong Community</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">20M+</h3>
          <p className="text-gray-400 text-sm mt-1">Transactions</p>
        </div>
      </div>
    </section>
  );
}
