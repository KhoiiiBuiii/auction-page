import Navbar from "@/frontend/src/app/components/navbar" ;
import HeroSection from '../Homepage/HeroSection';
import AuctionList from '../Homepage/AuctionList';
import Newsletter from '../Homepage/Newsletter';
import Footer from "@/frontend/src/app/components/footer" ;

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AuctionList />
      <Newsletter />
      <Footer />
    </div>
  );
}