import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-xs">
              Outsource software development company based in the USA. Custom solutions, delivered on time.
            </p>
            <div className="text-gray-400 space-y-3 text-sm">
              <p>49 Sample Bridge RD, Mechanicsburg, PA 17050</p>
              <p><a href="mailto:accounts@gdsoftwares.com" className="text-[#5ed8e7] hover:text-cyan-300 transition-colors">accounts@gdsoftwares.com</a></p>
              <p>+1 916-806-0052</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:w-2/3 flex flex-wrap md:flex-nowrap justify-between gap-8">
            
            {/* Services */}
            <div>
              <h3 className="text-sm font-bold mb-6 tracking-widest text-white uppercase">SERVICES</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/flutter-development" className="hover:text-cyan-400 transition-colors">Flutter Dev</Link></li>
                <li><Link href="/mobile-app-development" className="hover:text-cyan-400 transition-colors">Mobile Apps</Link></li>
                <li><Link href="/react-js-development" className="hover:text-cyan-400 transition-colors">React JS</Link></li>
                <li><Link href="/qa-automation" className="hover:text-cyan-400 transition-colors">QA & Testing</Link></li>
                <li><Link href="/ai-solutions" className="hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
                <li><Link href="/servicenow" className="hover:text-cyan-400 transition-colors">ServiceNow</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold mb-6 tracking-widest text-white uppercase">COMPANY</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/hire-resources" className="hover:text-cyan-400 transition-colors">Hire Resources</Link></li>
                <li><Link href="/blogs" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link href="/career" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-sm font-bold mb-6 tracking-widest text-white uppercase">INDUSTRIES</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/healthcare" className="hover:text-cyan-400 transition-colors">Healthcare</Link></li>
                <li><Link href="/edtech" className="hover:text-cyan-400 transition-colors">EdTech</Link></li>
                <li><Link href="/fintech" className="hover:text-cyan-400 transition-colors">Fintech</Link></li>
                <li><Link href="/marketplace" className="hover:text-cyan-400 transition-colors">Marketplace</Link></li>
                <li><Link href="/transport" className="hover:text-cyan-400 transition-colors">Transport</Link></li>
                <li><Link href="/gaming" className="hover:text-cyan-400 transition-colors">Gaming</Link></li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GD Softwares. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="https://www.linkedin.com/company/gdsoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/GdSoftwares/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
