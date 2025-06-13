import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Languages from '@/components/Languages';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import Video from '@/components/Video';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Scroll when location.hash changes (covers navigation from other pages and direct hash changes)
    if (location.hash) {
      scrollToHash(location.hash);
    }
    // No need for explicit event listeners for hashchange or routeChangeComplete
    // as useLocation() hook will cause re-render when hash changes.
  }, [location.hash]); // Re-run effect if location.hash changes

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Languages />
      <Testimonials />
      <Video />
      <CallToAction />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Index;
