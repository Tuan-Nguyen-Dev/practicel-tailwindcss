const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 md:mt-[100px]">
      {/* left content */}
      <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
        <h1 className="font-bold lg:text-5xl text-4xl text-heading-text leading-tight">
          Want anything to be <br className="hidden md:block" /> easy with
          LadlesVPN.
        </h1>
        <p className="text-[#4F5665] md:text-lg leading-relaxed max-w-[555px]">
          Provide a network for all your needs with ease and fun using LadlesVPN
          discover interesting features from us.
        </p>
        <button className="bg-primary text-white px-16 py-4 rounded-lg cursor-pointer shadow-lg shadow-red-300 hover:shadow-red-500 transition">
          Get Started
        </button>
      </div>

      {/* right content */}
      <div className="md:w-1/2">
        <img
          src="/assets/images/banner.png"
          alt="hero section"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
