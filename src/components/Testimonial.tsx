import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Viezkh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    review:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    image: "/assets/images/user1.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    review:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: "/assets/images/user3.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    review:
      "I like it because I like to travel far and still can connect with high speed.",
    image: "/assets/images/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    review:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: "/assets/images/user3.png",
  },
];

const Testimonial = () => {
  return (
    <section className="md:mt-10">
      <div className="text-center md:mb-10 p-3">
        <h3 className="text-heading-text font-bold text-xl md:text-3xl md:w-1/3 mx-auto">
          Trusted by Thousands of Happy Customers
        </h3>
        <p className="text-heading-text">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          type: window.innerWidth < 768 ? "progressbar" : "bullets",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative px-6"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[230px] border border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold">{item.rating}</span>
                  <span className="text-yellow-500">⭐</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600">"{item.review}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
