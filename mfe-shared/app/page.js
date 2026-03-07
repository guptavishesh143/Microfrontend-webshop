"use client";
import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('host/LandingPage').catch(e => { return () => <div>Error loading host/LandingPage</div>; }), {
  ssr: false,
});
const PLP = dynamic(() => import('decide/PLP').catch(e => { return () => <div>Error loading decide/PLP</div>; }), {
  ssr: false,
});
const OrderSummary = dynamic(() => import('checkout/OrderSummary').catch(e => { return () => <div>Error loading checkout/OrderSummary</div>; }), {
  ssr: false,
});
const BlogsPage = dynamic(() => import('blogs/Blogs').catch(e => { return () => <div>Error loading blogs/Blogs</div>; }), {
  ssr: false,
});

const BRANDS = ['Lee', 'Wrangler', 'Dockers', 'ToysRUs', 'GStar'];

export default function ShellRouter() {
  const [currentBrand, setCurrentBrand] = useState('Lee');
  const [currentRoute, setCurrentRoute] = useState('host');

  // Simple brand styling mapping
  const brandStyles = {
    Lee: 'bg-blue-900 border-blue-500',
    Wrangler: 'bg-red-800 border-red-500',
    Dockers: 'bg-stone-800 border-stone-500',
    ToysRUs: 'bg-cyan-700 border-yellow-500',
    GStar: 'bg-gray-900 border-yellow-600',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Brand Selector Bar */}
      <div className="bg-gray-100 p-2 flex justify-center gap-4 text-sm font-semibold border-b border-gray-300">
        <span className="text-gray-500">Active Brand:</span>
        {BRANDS.map(brand => (
          <button
            key={brand}
            onClick={() => setCurrentBrand(brand)}
            className={`px-3 py-1 rounded-full ${currentBrand === brand ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Primary Shell Navigation */}
      <nav className={`${brandStyles[currentBrand]} p-4 text-white flex items-center gap-6 shadow-md transition-colors duration-300`}>
        <div className="font-bold text-2xl mr-4 tracking-tight border-r border-white/30 pr-4">
          mfe-shared <span className="text-sm font-normal opacity-70">({currentBrand})</span>
        </div>
        <button onClick={() => setCurrentRoute('host')} className={`hover:underline transition-all ${currentRoute === 'host' ? 'font-bold underline' : 'opacity-80'}`}>Landing (Host Page 1)</button>
        <button onClick={() => setCurrentRoute('decide')} className={`hover:underline transition-all ${currentRoute === 'decide' ? 'font-bold underline' : 'opacity-80'}`}>PLP (Decide Page 2)</button>
        <button onClick={() => setCurrentRoute('checkout')} className={`hover:underline transition-all ${currentRoute === 'checkout' ? 'font-bold underline' : 'opacity-80'}`}>Orders (Checkout Page 3)</button>
        <button onClick={() => setCurrentRoute('blogs')} className={`hover:underline transition-all ${currentRoute === 'blogs' ? 'font-bold underline' : 'opacity-80'}`}>Blogs</button>
      </nav>

      {/* Federated Remote Container */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
          <div className="bg-gray-100 p-3 border-b border-gray-200 text-xs text-gray-500 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Federated Remote Rendered Context
          </div>
          <Suspense fallback={<div className="p-12 text-center text-gray-400 animate-pulse">Loading Microfrontend component...</div>}>
            {/* The brand context could theoretically be passed as props here if the remotes supported it */}
            {currentRoute === 'host' && <LandingPage brandContext={currentBrand} />}
            {currentRoute === 'decide' && <PLP brandContext={currentBrand} />}
            {currentRoute === 'checkout' && <OrderSummary brandContext={currentBrand} />}
            {currentRoute === 'blogs' && <BlogsPage brandContext={currentBrand} />}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
