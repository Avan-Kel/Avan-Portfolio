'use client';
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import { useScrollTo } from "@/hooks/usescrollto";
import Footer from "@/components/footer";


export default function Home() {
  const scrollTo = useScrollTo();
  
  const handleSectionChange = (section: string) => {
    scrollTo(section, { offset: 80 });
  };
  
  const handleExploreClick = () => {
    scrollTo('about', { offset: 80 });
  };
  
 

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Navbar onSectionChange={handleSectionChange} />
        
        <main>
          <div id="home">
            <Hero onExploreClick={handleExploreClick} />
          </div>
          
          <About />
          
          <Projects />
          
          <Contact />
        </main>
        
        <Footer />
    </div>
  );
}
