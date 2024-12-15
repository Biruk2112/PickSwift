import React, { useState } from 'react';
import { Search, Mic, MapPin } from 'lucide-react';

export default function SearchBar() {
  const [isListening, setIsListening] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
      };

      recognition.start();
    } else {
      alert('Voice search is not supported in your browser.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative">
        <div className="flex items-center bg-white rounded-full shadow-lg">
          <div className="flex-1 flex items-center">
            <Search className="h-5 w-5 text-gray-400 ml-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 placeholder-gray-400"
              style={{ caretColor: 'auto' }}
            />
          </div>
          
          <div className="flex items-center border-l border-gray-200">
            <MapPin className="h-5 w-5 text-gray-400 ml-4 pointer-events-none" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 placeholder-gray-400"
              style={{ caretColor: 'auto' }}
            />
          </div>

          <button
            onClick={handleVoiceSearch}
            className={`p-3 ${
              isListening ? 'text-purple-600' : 'text-gray-400'
            } hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
          >
            <Mic className="h-5 w-5" />
          </button>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-r-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}