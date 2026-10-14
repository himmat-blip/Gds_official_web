import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] text-slate-800 pt-20 pb-12 border-t border-slate-200 transition-colors">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 pr-4">
            <Link href="/" className="inline-block mb-6">
              <Logo variant="original" />
            </Link>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-sm">
              Outsource software development company based in the USA. Custom solutions, delivered on time.
            </p>
            <div className="text-slate-600 space-y-2.5 text-sm">
              <p>49 Sample Bridge RD, Mechanicsburg, PA 17050</p>
              <p>
                <a href="mailto:accounts@gdsoftwares.com" className="text-[#d97706] hover:text-[#b45309] font-medium transition-colors">
                  accounts@gdsoftwares.com
                </a>
              </p>
              <p>+1916-806-0052</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">SERVICES</h3>
            <ul className="space-y-3.5 text-slate-600 text-sm">
              <li><Link href="/services#flutter" className="hover:text-[#d97706] transition-colors">Flutter Dev</Link></li>
              <li><Link href="/services#mobile" className="hover:text-[#d97706] transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#react" className="hover:text-[#d97706] transition-colors">React JS</Link></li>
              <li><Link href="/services#qa" className="hover:text-[#d97706] transition-colors">QA & Testing</Link></li>
              <li><Link href="/services#ai" className="hover:text-[#d97706] transition-colors">AI Solutions</Link></li>
              <li><Link href="/services#servicenow" className="hover:text-[#d97706] transition-colors">ServiceNow</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">COMPANY</h3>
            <ul className="space-y-3.5 text-slate-600 text-sm">
              <li><Link href="/about-us" className="hover:text-[#d97706] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#d97706] transition-colors">Portfolio</Link></li>
              <li><Link href="/labs" className="hover:text-[#d97706] transition-colors">GDS Labs</Link></li>
              <li><Link href="/hire-resources" className="hover:text-[#d97706] transition-colors">Hire Resources</Link></li>
              <li><Link href="/blogs" className="hover:text-[#d97706] transition-colors">Blog</Link></li>
              <li><Link href="/career" className="hover:text-[#d97706] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">INDUSTRIES</h3>
            <ul className="space-y-3.5 text-slate-600 text-sm">
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">Healthcare</Link></li>
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">EdTech</Link></li>
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">Fintech</Link></li>
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">Marketplace</Link></li>
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">Transport</Link></li>
              <li><Link href="/services" className="hover:text-[#d97706] transition-colors">Gaming</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} GD Softwares. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/gdsoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/GdSoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d97706] transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
