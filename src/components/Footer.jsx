import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#070b14] text-white pt-20 pb-10 border-t border-slate-800/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 pr-4">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-sm">
              Outsource software development company based in the USA. Custom solutions, delivered on time.
            </p>
            <div className="text-slate-400 space-y-3 text-sm">
              <p>49 Sample Bridge RD, Mechanicsburg, PA 17050</p>
              <p>
                <a href="mailto:accounts@gdsoftwares.com" className="text-[#00d2ff] hover:text-cyan-300 transition-colors font-medium">
                  accounts@gdsoftwares.com
                </a>
              </p>
              <p>+1 916-806-0052</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">SERVICES</h3>
            <ul className="space-y-3.5 text-slate-400 text-sm">
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Flutter Dev</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">React JS</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">QA & Testing</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">ServiceNow</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">COMPANY</h3>
            <ul className="space-y-3.5 text-slate-400 text-sm">
              <li><Link href="/about-us" className="hover:text-[#00d2ff] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#00d2ff] transition-colors">Portfolio</Link></li>
              <li><Link href="/hire-resources" className="hover:text-[#00d2ff] transition-colors">Hire Resources</Link></li>
              <li><Link href="/blogs" className="hover:text-[#00d2ff] transition-colors">Blog</Link></li>
              <li><Link href="/career" className="hover:text-[#00d2ff] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">INDUSTRIES</h3>
            <ul className="space-y-3.5 text-slate-400 text-sm">
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Healthcare</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">EdTech</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Fintech</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Marketplace</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Transport</Link></li>
              <li><Link href="/services" className="hover:text-[#00d2ff] transition-colors">Gaming</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} GD Softwares. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <a href="https://www.linkedin.com/company/gdsoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d2ff] transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/GdSoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d2ff] transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
