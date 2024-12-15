import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How does PickSwift work?',
      answer: 'PickSwift connects you with local merchants and delivers their products directly to your door. Simply browse products, add them to your cart, and checkout. We will handle the rest!',
    },
    {
      question: 'What are the delivery times?',
      answer: 'Delivery times vary depending on your location and the merchant. Most deliveries arrive within 30-60 minutes during business hours.',
    },
    {
      question: 'How can I become a merchant?',
      answer: 'To become a merchant, click on "Become a Merchant" in the navigation menu and complete the registration process. We will review your application and get back to you within 48 hours.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and digital wallets including Apple Pay and Google Pay.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'If you are not satisfied with your order, you can request a refund within 24 hours of delivery. Each case is reviewed individually to ensure the best outcome.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is confirmed, you will receive a tracking link via email and SMS. You can also track your order in real-time through your account dashboard.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about PickSwift
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-purple-600 hover:text-purple-500 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}