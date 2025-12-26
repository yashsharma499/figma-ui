
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
            className="hidden lg:block h-[40px] cursor-pointer hover:opacity-90 transition"
          />
        </div>

        {/* ================= STORIES ================= */}

        {/* Desktop grid view */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[40px]">
          {[ "/1.png", "/2.png", "/3.png" ].map((img, i) => (
            <StoryCard key={i} img={img} />
          ))}
        </div>

        {/* Mobile horizontal scroll view */}
        <div className="sm:hidden overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide px-1">
          {[ "/1.png", "/2.png", "/3.png" ].map((img, i) => (
            <div key={i} className="min-w-[260px] snap-center">
              <StoryCard img={img} />
            </div>
          ))}
        </div>

        {/* ================= MOBILE MORE STORIES BUTTON ================= */}
        <div className="flex justify-center mt-12 lg:hidden">
          <img
            src="/more_stories.png"
            alt="More stories"
            className="h-[36px] cursor-pointer hover:opacity-90 transition"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= STORY CARD COMPONENT ================= */
function StoryCard({ img }) {
  return (
    <div>
      <div className="w-full h-[220px] rounded-[20px] overflow-hidden mb-4">
        <img src={img} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-white text-[16px] sm:text-[18px] font-semibold mb-2">
        Celsius will compensate consumers with a new token
      </h3>

      <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[20px]">
        Celsius, a defunct crypto lending company, will likely release a new token
        aimed at reimbursing creditors…
      </p>
    </div>
  );
}
