
export default function OurStoriesSection() {
  return (
    <section className="w-full bg-black py-16 lg:py-[120px]">
      <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[120px]">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 mb-12 lg:mb-[64px] text-center lg:text-left">

          <div className="max-w-[520px]">
            <h2 className="text-white text-[26px] sm:text-[32px] md:text-[40px] font-semibold mb-4">
              Our Stories
            </h2>
            <p className="text-gray-400 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
              The new culture of money is making headlines. Check out our latest
              blog posts to find out more.
            </p>
          </div>

          {/* DESKTOP BUTTON */}
          <img
            src="/more_stories.png"
            alt="More stories"
            role="button"
            tabIndex={0}
            className="hidden lg:block h-[40px] w-auto cursor-pointer hover:opacity-90 transition"
          />
        </div>

        {/* ================= STORIES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[40px]">

          {/* CARD */}
          {[
            "/1.png",
            "/2.png",
            "/3.png"
          ].map((img, i) => (
            <div key={i}>
              <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-[20px] lg:rounded-[24px] overflow-hidden mb-5 lg:mb-6">
                <img
                  src={img}
                  alt={`Story ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white text-[16px] sm:text-[18px] font-semibold mb-2">
                Celsius will compensate consumers with a new token
              </h3>

              <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px]">
                Celsius, a defunct crypto lending company, will likely release a
                new token aimed at reimbursing creditors…
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE MORE STORIES BUTTON ================= */}
        <div className="flex justify-center mt-12 lg:hidden">
          <img
            src="/more_stories.png" // 🔁 you will add this image
            alt="More stories"
            role="button"
            tabIndex={0}
            className="h-[36px] w-auto cursor-pointer hover:opacity-90 transition"
          />
        </div>

      </div>
    </section>
  );
}
