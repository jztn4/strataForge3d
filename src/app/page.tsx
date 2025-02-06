// import Hero from "./components/hero";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* <Hero /> */}
      <Header />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
