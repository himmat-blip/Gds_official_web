"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const servicesTimeout = useRef(null);
  const portfolioTimeout = useRef(null);

  const serviceItems = [
    { name: "Flutter Dev", href: "/services#flutter", desc: "Cross-platform iOS & Android mobile apps" },
    { name: "Mobile Apps", href: "/services#mobile", desc: "Native Swift, Kotlin & React Native solutions" },
    { name: "React JS", href: "/services#react", desc: "Modern dynamic web apps & dashboards" },
    { name: "QA & Testing", href: "/services#qa", desc: "Manual, automated & regression testing" },
    { name: "AI Solutions", href: "/services#ai", desc: "Custom ML models, LLMs & intelligent automation" },
    { name: "ServiceNow", href: "/services#servicenow", desc: "Enterprise workflow & IT service management" },
    { name: "View All Services", href: "/services", desc: "Explore our full suite of software capabilities" },
  ];

  const portfolioItems = [
    { name: "All Projects", href: "/portfolio", desc: "Browse our delivered software work" },
    { name: "Mobile Applications", href: "/portfolio#mobile", desc: "Enterprise and consumer mobile apps" },
    { name: "Web Platforms", href: "/portfolio#web", desc: "SaaS products & cloud web applications" },
    { name: "Enterprise Software", href: "/portfolio#enterprise", desc: "Custom CRM, ERP & backend architectures" },
  ];

  // Helper to check active state including child paths
  const isServicesActive = pathname.startsWith("/services");
  const isPortfolioActive = pathname.startsWith("/portfolio");

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPortfolioDropdownOpen(false);
  }, [pathname]);

  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/dev-145' });
    } else {
      window.location.href = '/contact-us';
    }
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md z-50 sticky top-0 border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all">
      <div className="container mx-auto px-6 py-3.5 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant="original" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          
          {/* Home */}
          <Link
            href="/"
            className={`relative py-1.5 transition-colors ${
              pathname === "/"
                ? "text-[#d97706] font-semibold"
                : "text-slate-700 hover:text-[#d97706]"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
            )}
          </Link>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout.current);
              setServicesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout.current = setTimeout(() => {
                setServicesDropdownOpen(false);
              }, 150);
            }}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1.5 py-1.5 transition-colors ${
                isServicesActive
                  ? "text-[#d97706] font-semibold"
                  : "text-slate-700 hover:text-[#d97706]"
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#d97706]" : "text-slate-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              {isServicesActive && (
                <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
              )}
            </Link>

            {/* Services Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-fade-in">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2 border-b border-slate-100 mb-1">
                  Our Engineering Services
                </div>
                <div className="space-y-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50/70 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-[#d97706] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Portfolio with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(portfolioTimeout.current);
              setPortfolioDropdownOpen(true);
            }}
            onMouseLeave={() => {
              portfolioTimeout.current = setTimeout(() => {
                setPortfolioDropdownOpen(false);
              }, 150);
            }}
          >
            <Link
              href="/portfolio"
              className={`inline-flex items-center gap-1.5 py-1.5 transition-colors ${
                isPortfolioActive
                  ? "text-[#d97706] font-semibold"
                  : "text-slate-700 hover:text-[#d97706]"
              }`}
            >
              Portfolio
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  portfolioDropdownOpen ? "rotate-180 text-[#d97706]" : "text-slate-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              {isPortfolioActive && (
                <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
              )}
            </Link>

            {/* Portfolio Dropdown Menu */}
            {portfolioDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-fade-in">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2 border-b border-slate-100 mb-1">
                  Selected Works
                </div>
                <div className="space-y-1">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setPortfolioDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50/70 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-[#d97706] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hire Resources */}
          <Link
            href="/hire-resources"
            className={`relative py-1.5 transition-colors ${
              pathname === "/hire-resources"
                ? "text-[#d97706] font-semibold"
                : "text-slate-700 hover:text-[#d97706]"
            }`}
          >
            Hire Resources
            {pathname === "/hire-resources" && (
              <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
            )}
          </Link>

          {/* Quotes */}
          <Link
            href="/quote"
            className={`relative py-1.5 transition-colors ${
              pathname === "/quote"
                ? "text-[#d97706] font-semibold"
                : "text-slate-700 hover:text-[#d97706]"
            }`}
          >
            Quotes
            {pathname === "/quote" && (
              <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
            )}
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact-us"
            className={`relative py-1.5 transition-colors ${
              pathname === "/contact-us"
                ? "text-[#d97706] font-semibold"
                : "text-slate-700 hover:text-[#d97706]"
            }`}
          >
            Contact Us
            {pathname === "/contact-us" && (
              <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full" />
            )}
          </Link>
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

      {/* Mobile Menu with Nested Menus and Scroll Support */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 max-h-[85vh] overflow-y-auto space-y-2 animate-fade-in shadow-xl">
          
          {/* Mobile: Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-base font-medium rounded-lg px-2 ${
              pathname === "/" ? "text-[#d97706] font-semibold bg-amber-50" : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Mobile: Services Nested Menu */}
          <div className="border-b border-slate-100 pb-1">
            <div className="flex items-center justify-between py-2 px-2">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  isServicesActive ? "text-[#d97706] font-semibold" : "text-slate-800"
                }`}
              >
                Services
              </Link>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1.5 text-slate-500 hover:text-[#d97706]"
                aria-label="Toggle services list"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[#d97706]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="pl-4 pr-2 pb-2 space-y-1.5 bg-slate-50/70 rounded-xl my-1 p-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm text-slate-700 hover:text-[#d97706] transition-colors"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Portfolio Nested Menu */}
          <div className="border-b border-slate-100 pb-1">
            <div className="flex items-center justify-between py-2 px-2">
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  isPortfolioActive ? "text-[#d97706] font-semibold" : "text-slate-800"
                }`}
              >
                Portfolio
              </Link>
              <button
                onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                className="p-1.5 text-slate-500 hover:text-[#d97706]"
                aria-label="Toggle portfolio list"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobilePortfolioOpen ? "rotate-180 text-[#d97706]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {mobilePortfolioOpen && (
              <div className="pl-4 pr-2 pb-2 space-y-1.5 bg-slate-50/70 rounded-xl my-1 p-2">
                {portfolioItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm text-slate-700 hover:text-[#d97706] transition-colors"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Hire Resources */}
          <Link
            href="/hire-resources"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-base font-medium rounded-lg px-2 ${
              pathname === "/hire-resources" ? "text-[#d97706] font-semibold bg-amber-50" : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Hire Resources
          </Link>

          {/* Mobile: Quotes */}
          <Link
            href="/quote"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-base font-medium rounded-lg px-2 ${
              pathname === "/quote" ? "text-[#d97706] font-semibold bg-amber-50" : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Quotes
          </Link>

          {/* Mobile: Contact Us */}
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-base font-medium rounded-lg px-2 ${
              pathname === "/contact-us" ? "text-[#d97706] font-semibold bg-amber-50" : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Contact Us
          </Link>

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
