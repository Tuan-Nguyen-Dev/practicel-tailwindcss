const Brand = () => {
  const brandLogos = [
    "/assets/images/netflix.png",
    "/assets/images/reddit.png",
    "/assets/images/amazon.png",
    "/assets/images/discord.png",
    "/assets/images/spotify.png",
    "/assets/images/reddit.png",
    "/assets/images/spotify.png",
  ];
  return (
    <section className="md:mt-20 flex flex-wrap justify-center items-center gap-12 mb-5">
      {brandLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="brand-logo"
          className="h-12 hover:cursor-pointer"
        />
      ))}
    </section>
  );
};

export default Brand;
