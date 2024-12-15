import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import PromotionalBanner from '../components/PromotionalBanner';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <main>
      <Hero />
      <PromotionalBanner />
      <Categories />
      <HowItWorks />
      <ProductGrid />
    </main>
  );
}