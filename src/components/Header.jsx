"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Hire Resources", href: "/hire-resources" },
    { name: "Labs", href: "/labs" },
    { name: "Quotes", href: "/quote" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-[#070b14] z-50 sticky top-0 border-b border-slate-800/80 backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9 text-[15px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-[#00d2ff] font-medium"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#00d2ff] rounded-full shadow-[0_0_8px_#00d2ff]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            href="/contact-us" 
            className="inline-block bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,180,216,0.35)] text-sm tracking-wide active:scale-95"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/60"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14] border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base ${
                  isActive ? "text-[#00d2ff] font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white py-2.5 rounded-xl font-semibold text-sm shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
