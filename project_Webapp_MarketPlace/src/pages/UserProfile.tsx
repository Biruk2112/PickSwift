import React from 'react';
import { User, MapPin, CreditCard, Package, Heart, Settings } from 'lucide-react';

export default function UserProfile() {
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      total: '$45.99',
      status: 'Delivered',
      items: [
        {
          name: 'Wireless Earbuds Pro',
          quantity: 1,
          price: '$45.99',
        },
      ],
    },
    {
      id: '2',
      date: '2024-03-10',
      total: '$89.98',
      status: 'Processing',
      items: [
        {
          name: 'Smart Watch Series X',
          quantity: 1,
          price: '$89.98',
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>
            </div>

            <nav className="space-y-2">
              <a
                href="#profile"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg bg-purple-50"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </a>
              <a
                href="#addresses"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <MapPin className="h-5 w-5" />
                <span>Addresses</span>
              </a>
              <a
                href="#payment"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <CreditCard className="h-5 w-5" />
                <span>Payment Methods</span>
              </a>
              <a
                href="#orders"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <Package className="h-5 w-5" />
                <span>Orders</span>
              </a>
              <a
                href="#wishlist"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </a>
              <a
                href="#settings"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {orders.map((order) => (
                <div key={order.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text .price}">{item.price}</p>
                    </div>
                  ))}
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-sm font-medium text-gray-900">{order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="John"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+1 (555) 123-4567"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}