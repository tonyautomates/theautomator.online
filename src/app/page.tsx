import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Remove flex-1, just let it be natural height */}
      <main>
        <Hero />
      </main>
      
      {/* Push footer to bottom */}
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}