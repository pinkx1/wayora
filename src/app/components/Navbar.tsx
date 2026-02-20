import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const brandIconStrokeWidth = 1.8;

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Destination', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <Mountain
                className="w-12 h-12 md:w-14 md:h-14 text-white"
                strokeWidth={brandIconStrokeWidth}
              />
              <span className="text-lg md:text-2xl font-semibold tracking-tight lowercase">
                wayora
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base lg:text-lg font-medium text-white/95 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-[4px]">
            <button className="h-14 px-9 rounded-full border border-[#7ea4da] bg-transparent text-white text-base font-medium tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/10 transition-colors">
              Book schedule
            </button>
            <button
              aria-label="Open booking"
              className="h-14 w-14 rounded-full border border-[#7ea4da] bg-[#09142f] text-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-[#0e1d42] transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-white/10"
          >
            <div className="px-4 pt-3 pb-7 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-md text-lg font-medium text-white/95 hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-colors">
                  Book schedule
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
