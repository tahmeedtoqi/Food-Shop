import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import PopularItems from '../components/home/PopularItems';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <PopularItems />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;