import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const promotions = [
  {
    id: 1,
    title: 'Free Delivery on First Order',
    description: 'Use code WELCOME at checkout',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000',
    color: 'from-purple-600/90 via-fuchsia-600/90 to-pink-600/90',
    pattern: 'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]',
  },
  {
    id: 2,
    title: '20% Off Electronics',
    description: 'Limited time offer',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=2000',
    color: 'from-blue-600/90 via-indigo-600/90 to-violet-600/90',
    pattern: 'bg-[radial-gradient(circle_at_center_left,rgba(255,255,255,0.1)_0%,transparent_50%)]',
  },
  {
    id: 3,
    title: 'New Merchants Added',
    description: 'Discover local favorites',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    color: 'from-emerald-600/90 via-teal-600/90 to-cyan-600/90',
    pattern: 'bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]',
  },
];

export default function PromotionalBanner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ 
        delay: 5000,
        disableOnInteraction: false
      }}
      pagination={{ 
        clickable: true,
        bulletClass: 'swiper-pagination-bullet !bg-white !opacity-70',
        bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100'
      }}
      className="h-[500px] group"
    >
      {promotions.map((promo) => (
        <SwiperSlide key={promo.id}>
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} ${promo.pattern} backdrop-blur-sm`} />
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-lg relative">
                  <div className="absolute -left-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <h2 className="text-5xl font-bold text-white mb-6 transform translate-y-4 opacity-0 animate-slideUp relative">
                    {promo.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-8 transform translate-y-4 opacity-0 animate-slideUp animation-delay-200 relative">
                    {promo.description}
                  </p>
                  <button className="relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all transform translate-y-4 opacity-0 animate-slideUp animation-delay-400 hover:shadow-lg hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}