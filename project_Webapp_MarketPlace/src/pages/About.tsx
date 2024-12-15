import React from 'react';
import { Truck, Shield, Clock, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your items delivered quickly and efficiently to your doorstep.',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence knowing your data and transactions are protected.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our customer support team is always here to help you.',
    },
    {
      icon: Heart,
      title: 'Quality Products',
      description: 'Curated selection of high-quality products from trusted merchants.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PickSwift</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're on a mission to make shopping and delivery seamless, connecting customers
            with the best local merchants and ensuring quick, reliable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, PickSwift emerged from a simple idea: making local shopping
                and delivery as easy as possible. We noticed the gap between local businesses
                and their potential customers, and we decided to bridge it.
              </p>
              <p>
                Today, we're proud to connect thousands of merchants with customers in their
                area, facilitating quick and reliable deliveries while supporting local
                economies.
              </p>
              <p>
                Our platform continues to grow and evolve, but our mission remains the same:
                providing the best possible shopping and delivery experience for both
                merchants and customers.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}