'use client';

import { useState, useEffect } from 'react';
import MouseFollower from './components/mouse_follow';
import Navbar from './components/navbar';
import SocialLinks from './components/sociallinks';
import HeroSection from './hero/page';
import Loading from './components/loading';



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-black text-white font-poppins relative">
      <Navbar />
      <HeroSection />
      <SocialLinks />
      <MouseFollower />
       {/* Add the About section here */}
    </main>
  );
}
