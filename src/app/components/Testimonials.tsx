import React from 'react';
import { Star, ArrowLeft, ArrowRight, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Habittrip made my mornings feel manageable again.",
    name: "Maya Zong",
    role: "Traveler",
    avatar: "https://images.unsplash.com/photo-1590421554129-19a2dff37230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBiZWFjaCUyMHN1bnJpc2V8ZW58MXx8fHwxNzcxNTEwOTU3fDA&ixlib=rb-4.1.0&q=80&w=150",
    bgColor: "bg-gray-50"
  },
  {
    id: 2,
    text: "I used to ignore reminders from other apps, but these feel calm and well-timed. It's like the app knows when I'm actually able to do something.",
    name: "Ethan Miller",
    role: "Traveler",
    avatar: "https://images.unsplash.com/photo-1564783538911-cd6bb5d6bed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVyJTIwYmFja3BhY2tlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUxMDk1Nnww&ixlib=rb-4.1.0&q=80&w=150",
    bgColor: "bg-[#fdf2f2]"
  },
  {
    id: 3,
    text: "It's the first habit app that doesn't overwhelm me.",
    name: "Hannah Lee",
    role: "Traveler",
    avatar: "https://images.unsplash.com/photo-1758272959019-654aab64b1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoaWtpbmclMjB0b2dldGhlciUyMGZvcmVzdHxlbnwxfHx8fDE3NzE1MTA5NTd8MA&ixlib=rb-4.1.0&q=80&w=150",
    bgColor: "bg-[#f0f9ff]"
  },
  {
    id: 4,
    text: "The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty or overwhelmed.",
    name: "Daniel Perez",
    role: "Traveler",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-[#f8fafc]"
  },
  {
    id: 5,
    text: "Focus blocks changed the way I work. I get more done in two hours now than what used to take half a day.",
    name: "Laura Kim",
    role: "Traveler",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-white border border-gray-100"
  },
  {
    id: 6,
    text: "I actually stick to my routines now. Small steps finally add up.",
    name: "Priya Shah",
    role: "Traveler",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bgColor: "bg-[#f5f3ff]"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Traveler story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              How People Use VistaTrip in<br />Their Daily Routine
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="font-bold">4.6/5</span>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-gray-400">(Trusted by 15K+ users)</span>
            </div>
        </div>

        {/* Image Collage Carousel (Simplified as static grid for now, or could use library) */}
        <div className="flex justify-center gap-4 mb-20 overflow-hidden h-[400px]">
           <div className="w-[200px] mt-20 rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1672073235822-0518dc92106d?w=400" className="w-full h-full object-cover" />
           </div>
           <div className="w-[200px] rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1757481904836-0b8bf24cb73e?w=400" className="w-full h-full object-cover" />
           </div>
           <div className="w-[300px] rounded-2xl overflow-hidden shrink-0 -mt-10 mb-10 border-4 border-white shadow-xl z-10">
              <img src="https://images.unsplash.com/photo-1564783538911-cd6bb5d6bed2?w=600" className="w-full h-full object-cover" />
           </div>
           <div className="w-[200px] mt-10 rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?w=400" className="w-full h-full object-cover" />
           </div>
           <div className="w-[200px] mt-32 rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1680204412403-73110934f5aa?w=400" className="w-full h-full object-cover" />
           </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className={`p-6 rounded-3xl ${item.bgColor} relative`}>
              <p className="text-gray-800 font-medium mb-6 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                </div>
              </div>
              <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Fade/Show More */}
        <div className="mt-8 text-center">
             <div className="w-full h-24 bg-gradient-to-t from-white to-transparent -mt-24 relative z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
