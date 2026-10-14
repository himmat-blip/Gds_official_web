"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/dev-145' });
    } else {
      window.location.href = '/contact-us';
    }
  };

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Hire Resources", href: "/hire-resources" },
    { name: "Labs", href: "/labs" },
    { name: "Quotes", href: "/quote" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md z-50 sticky top-0 border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all">
      <div className="container mx-auto px-6 py-3.5 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant="original" />
        </Link>

        {/* Desktop Navigation - Direct Simple Links (No Dropdowns) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1.5 transition-colors ${
                  isActive
                    ? "text-[#d97706] font-semibold"
                    : "text-slate-700 hover:text-[#d97706]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button 
            onClick={handleScheduleCall} 
            className="inline-block bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-2.5 rounded-xl font-semibold text-sm tracking-wide shadow-[0_2px_10px_rgba(217,119,6,0.25)] hover:shadow-[0_4px_16px_rgba(217,119,6,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            Schedule a Call
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
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

      {/* Mobile Menu - Simple Direct Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 max-h-[85vh] overflow-y-auto space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 text-base font-medium rounded-lg px-2 transition-colors ${
                  isActive
                    ? "text-[#d97706] font-semibold bg-amber-50"
                    : "text-slate-800 hover:bg-slate-50 hover:text-[#d97706]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-3 pb-2">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScheduleCall(e);
              }}
              className="w-full text-center bg-[#d97706] hover:bg-[#b45309] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
