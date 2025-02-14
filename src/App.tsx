import Brand from "./components/Brand";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GlobalNetwork from "./components/GlobalNetwork";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PriceSection from "./components/PriceSection";
import Statistics from "./components/Statistics";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="section-container">
      <Nav />
      <HeroSection />
      <Statistics />
      <Features />
      <PriceSection />
      <GlobalNetwork />
      <Brand />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
