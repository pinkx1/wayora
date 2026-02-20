import React from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Sahara Dawn',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1736358787078-2c9a8eee13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjByb2NrcyUyMHBhbm9yYW1pY3xlbnwxfHx8fDE3NzE1MTA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Desert'
  },
  {
    id: 2,
    name: 'Oasis Mirage',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3MTQyNTgyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Beach'
  },
  {
    id: 3,
    name: 'Crimson Dunes',
    price: '$60',
    image: 'https://images.unsplash.com/photo-1703856973890-9d28ae141595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lbCUyMHJpZGluZyUyMGRlc2VydCUyMHN1bnNldHxlbnwxfHx8fDE3NzE1MTA5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Culture'
  }
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Our Destination
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] max-w-xl leading-tight">
              Your Journey to the Perfect Destination Begins Here
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center gap-4">
             <button className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium">
               See All Destination
               <span className="bg-black text-white rounded-full p-1">
                 <ArrowUpRight className="w-3 h-3" />
               </span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-sm font-medium text-white/80">
                  <span>{dest.price}</span>
                  <span className="text-white/60">/ per person</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
