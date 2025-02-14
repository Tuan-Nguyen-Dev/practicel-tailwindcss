const Statistics = () => {
  const statisticsData = [
    { id: 1, value: "90+", label: "Users", image: "/assets/images/user.png" },
    {
      id: 2,
      value: "30+",
      label: "Location",
      image: "/assets/images/location.png",
    },
    {
      id: 3,
      value: "120+",
      label: "Services",
      image: "/assets/images/storage.png",
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 md:mt-20">
      <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {statisticsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 px-12 py-6 md:py-0"
          >
            <div className="bg-[#FFECEC] rounded-full p-2 shrink-0">
              <img src={item.image} alt={item.label} />
            </div>
            <div>
              <h3 className="text-2xl font-black">{item.value}</h3>
              <span className="text-primary-text">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
