const Subscribe = () => {
  return (
    <section className="md:mt-20 bg-white rounded-xl shadow-lg p-5">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {/* left content */}
        <div className="md:mb-10 p-3">
          <h3 className="text-heading-text font-bold text-xl md:text-3xl w-3/4 md:mb-5">
            Subscribe Now for Get Special Features!
          </h3>
          <p className="text-heading-text">
            Let's subscribe with us and find the fun.
          </p>
        </div>

        {/* right content */}
        <button className="bg-primary text-white px-16 py-4 rounded-lg cursor-pointer shadow-lg shadow-red-300 hover:shadow-red-500 transition">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
