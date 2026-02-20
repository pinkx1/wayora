import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <Stats />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
