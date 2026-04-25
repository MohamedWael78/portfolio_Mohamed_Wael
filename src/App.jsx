import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { DynamicBackground } from "@/components/DynamicBackground";
import { Services } from "@/sections/Services";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30 selection:text-primary z-0">
          <DynamicBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Services />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
