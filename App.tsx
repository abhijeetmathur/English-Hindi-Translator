import React from 'react';
import Translator from './components/Translator';
import Footer from './components/Footer';
import { Headphones, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center py-8 px-4">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <Globe2 className="h-8 w-8 text-purple-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Anuvadak</h1>
        </div>
        <p className="text-gray-600 max-w-md mx-auto">English ↔ Hindi Translator with voice capabilities</p>
      </header>
      
      <main className="w-full max-w-3xl mx-auto flex-grow">
        <Translator />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;