import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Laptop, Shirt, Pizza, Gift, Book,
  Smartphone, Home, Dumbbell
} from 'lucide-react';

const categories = [
  { 
    name: 'Fashion',
    icon: Shirt,
    color: 'bg-purple-500',
    slug: 'fashion',
    description: 'Latest trends in clothing and accessories'
  },
  { 
    name: 'Electronics',
    icon: Laptop,
    color: 'bg-blue-500',
    slug: 'electronics',
    description: 'Cutting-edge gadgets and devices'
  },
  { 
    name: 'Groceries',
    icon: ShoppingBag,
    color: 'bg-green-500',
    slug: 'groceries',
    description: 'Fresh and pantry essentials'
  },
  { 
    name: 'Food',
    icon: Pizza,
    color: 'bg-yellow-500',
    slug: 'food',
    description: 'Restaurant favorites delivered'
  },
  { 
    name: 'Gifts',
    icon: Gift,
    color: 'bg-red-500',
    slug: 'gifts',
    description: 'Perfect presents for everyone'
  },
  { 
    name: 'Books',
    icon: Book,
    color: 'bg-indigo-500',
    slug: 'books',
    description: 'Best-selling titles and more'
  },
  { 
    name: 'Mobile',
    icon: Smartphone,
    color: 'bg-pink-500',
    slug: 'mobile',
    description: 'Phones and accessories'
  },
  { 
    name: 'Home',
    icon: Home,
    color: 'bg-orange-500',
    slug: 'home',
    description: 'Everything for your space'
  },
  { 
    name: 'Sports',
    icon: Dumbbell,
    color: 'bg-teal-500',
    slug: 'sports',
    description: 'Equipment and activewear'
  },
];

export default function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop/${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-10 p-6">
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className={`${category.color} p-4 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <span className="text-base font-medium text-gray-900">{category.name}</span>
                  <p className="text-sm text-gray-500 text-center">{category.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}