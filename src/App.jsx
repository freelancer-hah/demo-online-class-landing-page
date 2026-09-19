import "./App.css";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Method from "./components/Method";
import Curriculum from "./components/Curriculum";
import ScoreSimulator from "./components/ScoreSimulator";
import Results from "./components/Results";
import Tutor from "./components/Tutor";
import TrialBookingWidget from "./components/TrialBookingWidget";
import FAQ from "./components/FAQ";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Curriculum />
        <ScoreSimulator />
        <Results />
        <Tutor />
        <TrialBookingWidget />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  );
}
