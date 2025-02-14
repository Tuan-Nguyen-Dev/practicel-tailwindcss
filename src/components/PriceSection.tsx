import { Check } from "lucide-react";

const plans = [
  {
    title: "Free Plan",
    price: "Free",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    borderColor: "border-gray-200",
  },
  {
    title: "Standard Plan",
    price: "$9 / mo",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    borderColor: "border-gray-200",
  },
  {
    title: "Premium Plan",
    price: "$12 / mo",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    borderColor: "border-red-500",
  },
];

const PriceSection = () => {
  return (
    <section className="bg-gray-50 md:p-20">
      <div className="text-center mb-16">
        <h2 className="text-heading-text text-4xl mb-4 font-bold">
          Choose Your Plan
        </h2>
        <p className="text-primary-text">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-8 max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded-2xl border-2 ${plan.borderColor} flex flex-col h-full items-center hover:border-red-500 transition duration-300 hover:scale-105`}
          >
            <img
              src="/assets/images/box.png"
              alt="box plan"
              className="w-32 mb-8"
            />
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>

            <ul className="space-y-4 mb-8 text-center">
              {plan.features?.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={18} className="text-green-700" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <button
              className={`font-bold px-10 py-2 border rounded-full hover:cursor-pointer mt-auto ${
                plan.title === "Premium Plan"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "text-primary"
              }`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceSection;
