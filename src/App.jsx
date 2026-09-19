import "./App.css";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Method from "./components/Method";
import Results from "./components/Results";
import Tutor from "./components/Tutor";
import FAQ from "./components/FAQ";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function App() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Results />
        <Tutor />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
