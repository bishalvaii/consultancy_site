import Header from "./components/Header";
import HeroSection from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import StudyForm from "./components/StudyForm";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <HeroSection />
        <DestinationCard />
        <StudyForm />
      </div>
    </main>
  );
}
