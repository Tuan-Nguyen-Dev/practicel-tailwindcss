import { Check } from "lucide-react";
const Features = () => {
  const featuresList = [
    "Powerfull online protection.",
    "Internet without borders",
    "Supercharged VPN",
    "No specific time limits",
  ];
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:mt-[100px]">
      {/* right content */}
      <div className="">
        <img
          src="/assets/images/features.png"
          alt="hero section"
          className="w-full"
        />
      </div>
      {/* left content */}

      <div className="space-y-5 mb-8 md:mb-0">
        <h4 className="font-bold lg:text-3xl text-xl text-heading-text leading-tight">
          We Provide Many
          <br className="hidden md:block" />
          Features You Can Use
        </h4>
        <p className="text-[#4F5665] md:text-lg leading-relaxed max-w-[555px]">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="space-y-4">
          {featuresList.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-primary-text"
            >
              <Check
                className="text-white bg-green-600 rounded-full p-1"
                size={20}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
