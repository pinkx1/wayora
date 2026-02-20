import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What types of trips does Wayora offer?",
    answer: "We offer a wide range of trips including adventure tours, relaxing beach getaways, cultural immersions, and luxury escapes tailored to your preferences."
  },
  {
    question: "What is your cancellation or refund policy?",
    answer: "You can cancel up to 14 days before your trip for a full refund. Within 14 days, we offer travel credits or partial refunds depending on the specific booking terms."
  },
  {
    question: "Are Wayora's trips safe and well-guided?",
    answer: "Yes, safety is our top priority. All our guides are certified professionals, and we carefully vet all accommodations and transport partners."
  },
  {
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! We specialize in bespoke travel experiences. You can work with our travel planners to modify any existing itinerary to suit your needs."
  },
  {
    question: "How do I book a trip?",
    answer: "Booking is easy. Simply select your desired package, choose your dates, and proceed to payment. Our team will then reach out to finalize the details."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-8">
          FAQ
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content & Image */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-12 leading-tight">
              <span className="block whitespace-nowrap max-[640px]:whitespace-normal">All You Should Know Before</span>
              <span className="block whitespace-nowrap max-[640px]:whitespace-normal">Embarking on Your Desert Journey</span>
            </h2>
            
            <div className="rounded-3xl overflow-hidden h-[430px] max-[1024px]:h-[360px] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1689061410429-ce42733e0b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzYW5kJTIwZHVuZXMlMjBhZXJpYWx8ZW58MXx8fHwxNzcxNDQ0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Desert Landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:h-full lg:flex lg:flex-col">
             <div className="mt-[20px] mb-8 text-right">
                <div>
                   <h3 className="text-sm font-bold text-gray-900 mb-1">Didn't see your question?</h3>
                   <p className="text-xs text-gray-500 max-w-xs ml-auto leading-relaxed">
                     <span className="block whitespace-nowrap">Our team is here to help - just reach</span>
                     <span className="block">out and we'll reply shortly.</span>
                   </p>
                </div>
             </div>

             <div className="space-y-4 lg:mt-auto">
               {faqs.map((faq, index) => (
                 <div 
                   key={index} 
                   className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                 >
                   <button
                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
                     className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                   >
                     <span className="font-semibold text-gray-900">{faq.question}</span>
                     <span className="text-gray-900">
                       <ArrowDown className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                     </span>
                   </button>
                   <AnimatePresence>
                     {openIndex === index && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                         <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                           {faq.answer}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

