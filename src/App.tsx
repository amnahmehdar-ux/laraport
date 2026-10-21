import { LanguageProvider } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink text-bone">
        <LanguageToggle />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
