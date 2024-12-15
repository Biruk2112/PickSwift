import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Sliders } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';

// Mock data for different categories
const categoryProducts = {
  fashion: [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 59.99,
      rating: 4.8,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=500',
    },
  ],
  electronics: [
    {
      id: 3,
      name: 'Wireless Earbuds Pro',
      price: 129.99,
      rating: 4.8,
      reviews: 2457,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 4,
      name: 'Smart Watch Series X',
      price: 299.99,
      rating: 4.9,
      reviews: 1823,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500',
    },
  ],
  // Add more categories as needed
};

export default function Shop() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category && categoryProducts[category]) {
      setProducts(categoryProducts[category]);
      setSelectedCategory(category);
    } else {
      // If no category is selected or category doesn't exist, show all products
      setProducts(Object.values(categoryProducts).flat());
      setSelectedCategory('all');
    }
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Sliders className="h-5 w-5 text-gray-500" />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Categories</h3>
            <div className="space-y-3">
              {['All', ...Object.keys(categoryProducts)].map((cat) => (
                <label key={cat} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={cat.toLowerCase()}
                    checked={selectedCategory === cat.toLowerCase()}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}