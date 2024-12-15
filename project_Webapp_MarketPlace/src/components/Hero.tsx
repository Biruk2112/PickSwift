import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fast Delivery at Your Doorstep
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Shop from thousands of products and get them delivered in minutes
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}