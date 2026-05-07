import StickyNav from './components/nav/StickyNav';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import PainPromise from './components/sections/PainPromise';
import Ornament from './components/ui/Ornament';
import HowItWorks from './components/sections/HowItWorks';
import InsideWorkbook from './components/sections/InsideWorkbook';
import WeekByWeek from './components/sections/WeekByWeek';
import DifferentiatorBlock from './components/sections/DifferentiatorBlock';
import IPadShowcase from './components/sections/IPadShowcase';
import PrinciplesQuotes from './components/sections/PrinciplesQuotes';
import FoundersNote from './components/sections/FoundersNote';
import LifestyleBreak from './components/sections/LifestyleBreak';
import FAQ from './components/sections/FAQ';
import EmailCapture from './components/sections/EmailCapture';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <TrustBar />
        <PainPromise />
        <Ornament />
        <HowItWorks />
        <Ornament />
        <InsideWorkbook />
        <WeekByWeek />
        <DifferentiatorBlock />
        <IPadShowcase />
        <PrinciplesQuotes />
        <FoundersNote />
        <LifestyleBreak />
        <FAQ />
        <EmailCapture />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
