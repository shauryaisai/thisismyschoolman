import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen text-slate-900 font-medium relative overflow-x-hidden bg-slate-50">
      <div
        className="fixed inset-0 pointer-events-none z-[-1] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      <header className="bg-school-navy text-school-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 pb-2 w-full">
            <img src="/school-logo.png" alt="Shashi Public School Logo" className="w-20 h-20 object-cover rounded-full border-2 border-school-gold shadow-md" />
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold">Shashi Public Sr. Secondary School</h1>
              <p className="text-sm font-bold text-school-gold">Inspiring Excellence, Shaping Futures</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-bold">
            <Link to="/" className="hover:text-school-gold transition-colors [&.active]:text-school-gold">Home</Link>
            <Link to="/about" className="hover:text-school-gold transition-colors [&.active]:text-school-gold">About Us</Link>
            <Link to="/academics" className="hover:text-school-gold transition-colors [&.active]:text-school-gold">Academics</Link>
            <Link to="/admissions" className="px-4 py-1.5 -my-1.5 rounded-full text-white font-extrabold animate-rgb-bg transition-transform hover:scale-110 shadow-md">Admissions</Link>
            <Link to="/gallery" className="hover:text-school-gold transition-colors [&.active]:text-school-gold">Gallery</Link>
            <Link to="/contact" className="hover:text-school-gold transition-colors [&.active]:text-school-gold">Contact Us</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-school-navy text-school-white pt-12 pb-6 border-t-[6px] border-school-gold mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex flex-col items-start gap-3 mb-4">
              <img src="/school-logo.png" alt="Shashi Public School Logo" className="w-24 h-24 rounded-full object-cover border-2 border-school-gold shadow-md" />
              <h2 className="text-xl font-bold">Shashi Public School</h2>
            </div>
            <p className="text-sm mb-4 opacity-90 leading-relaxed font-semibold">
              A commitment to academic excellence and holistic development.
            </p>
            <div>
              <h3 className="text-lg font-bold text-school-gold mb-3">Stay Connected</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com/shashipublicschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/shashipublicschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/shashipublicschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-school-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-school-gold hover:translate-x-2 transition-all duration-200 inline-block">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-school-gold hover:translate-x-2 transition-all duration-200 inline-block">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-school-gold hover:translate-x-2 transition-all duration-200 inline-block">Admissions</Link></li>
              <li><Link to="/gallery" className="hover:text-school-gold hover:translate-x-2 transition-all duration-200 inline-block">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-school-gold hover:translate-x-2 transition-all duration-200 inline-block">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-school-gold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2">
                <span className="shrink-0">📍</span>
                <span>A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">📞</span>
                <span>011-2258 1138, +91 98100 77384</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">✉️</span>
                <span>info@shashipublicschool.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center text-xs opacity-70 border-t border-school-white/20 pt-6">
          &copy; {new Date().getFullYear()} Shashi Public Sr. Secondary School. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
