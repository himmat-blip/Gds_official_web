import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-full bg-[#030712] z-50 relative border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-16 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
          <Link href="/hire-resources" className="hover:text-cyan-400 transition-colors">Hire Resources</Link>
          <Link href="/quote" className="hover:text-cyan-400 transition-colors">Quotes</Link>
          <Link href="/contact-us" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            href="/schedule-a-call" 
            className="bg-gradient-to-r from-[#5ed8e7] to-[#9d4edd] text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(94,216,231,0.3)] text-sm"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
