import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import CallToAction from "../components/home/CallToAction";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <CallToAction />
      <Footer />
    </>
  );
}

export default HomePage;