import React, { useState } from 'react';
import { Star, Heart, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data
  const product = {
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    description: 'High-quality wireless earbuds with active noise cancellation and premium sound quality. Perfect for music lovers and professionals alike.',
    rating: 4.8,
    reviews: 2457,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
    ],
    features: [
      'Active Noise Cancellation',
      'Up to 24 hours battery life',
      'Wireless charging case',
      'Premium sound quality',
      'Water resistant',
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  currentImageIndex === index ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <button className="ml-4 p-2 text-gray-400 hover:text-red-500">
              <Heart className="h-6 w-6" />
            </button>
          </div>

          <p className="text-2xl font-bold text-gray-900 mb-6">${product.price}</p>

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-50"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-0"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 mb-4">
            Add to Cart
          </button>

          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="h-5 w-5 mr-2" />
              Free shipping on orders over $50
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="h-5 w-5 mr-2" />
              Secure payment and satisfaction guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}