'use client';
import Navbar from "@/components/navbar";
import About from "@/overview/about";
import Hero from "@/overview/hero";
import Contact from "@/overview/contact";
import Projects from "@/overview/projects";
import { useScrollTo } from "@/hooks/usescrollto";
import Footer from "@/components/footer";


export default function Home() {
  const scrollTo = useScrollTo();
  
  
  const handleExploreClick = () => {
    scrollTo('about', { offset: 80 });
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Navbar />
        
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
