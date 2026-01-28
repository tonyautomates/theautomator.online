import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      <Header />
      
      
      {/* Push footer to bottom */}
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}