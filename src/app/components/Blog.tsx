import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "What to Pack for a Desert Tour",
    date: "Oct 2, 2025",
    image: "https://images.unsplash.com/photo-1680204412403-73110934f5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBhaXIlMjBiYWxsb29ucyUyMGNhcHBhZG9jaWF8ZW58MXx8fHwxNzcxNTEwOTU2fDA&ixlib=rb-4.1.0&q=80&w=600"
  },
  {
    id: 2,
    title: "Hidden Gems in Italy's Coast",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1752888444795-1775afa62e65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGlmZnNpZGUlMjB2aWV3JTIwaXRhbHl8ZW58MXx8fHwxNzcxNTEwOTU3fDA&ixlib=rb-4.1.0&q=80&w=600"
  },
  {
    id: 3,
    title: "How to Find the Perfect Resort",
    date: "Dec 12, 2025",
    image: "https://images.unsplash.com/photo-1605129484543-eb532a6f381d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZXMlMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NzE1MTA5NTd8MA&ixlib=rb-4.1.0&q=80&w=600"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Blogs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] max-w-xl">
              Adventures from<br />Around the World
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0">
             <button className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium">
               All Blogs
               <span className="bg-black text-white rounded-full p-1">
                 <ArrowUpRight className="w-3 h-3" />
               </span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <div className="text-gray-300 text-xs mb-2 font-medium">{blog.date}</div>
                 <h3 className="text-white text-xl font-bold leading-tight group-hover:underline decoration-white/50 underline-offset-4">
                   {blog.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
