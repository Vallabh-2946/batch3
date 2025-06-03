
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import KCETPredictor from '@/components/KCETPredictor';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturesSection />
      <KCETPredictor />
      <Footer />
    </div>
  );
};

export default Index;
