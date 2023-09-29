import Header from "./components/Header";
import HeroSection from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import StudyForm from "./components/StudyForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <HeroSection />
        <DestinationCard />
        <StudyForm />
        <Footer />
      </div>
    </main>
  );
}
