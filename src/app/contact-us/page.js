import Link from "next/link";

export const metadata = {
  title: "Contact Us | GD Softwares",
  description: "Get in touch with GD Softwares for custom software development, mobile apps, and dedicated talent."
};

export default function ContactUs() {
  const locations = [
    { code: "US", name: "America" },
    { code: "AU", name: "Australia" },
    { code: "IN", name: "India" },
    { code: "FR", name: "France" },
    { code: "SG", name: "Singapore" }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 pt-8 md:pt-10 pb-20 font-sans selection:bg-amber-100 selection:text-amber-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-slate-900">
            Contact <span className="italic text-[#d97706] font-normal font-serif">Us</span>
          </h1>
          
          <p className="text-slate-600 max-w-2xl text-lg mb-10 leading-relaxed">
            Ready to lead your business into the future? We&apos;re here to help you build great digital products. Reach out — we respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">Global Presence</span>
            <div className="flex flex-wrap gap-2.5">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 hover:border-amber-300 transition-colors cursor-pointer shadow-sm text-sm">
                  <span className="text-slate-900 font-bold">{loc.code}</span>
                  <span className="text-slate-500">{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-slate-900">Send Us a Message</h2>
            <p className="text-slate-600 mb-10 text-sm sm:text-base">Fill in the form and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name *</label>
                  <input type="text" placeholder="John Smith" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address *</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject *</label>
                  <input type="text" placeholder="Project inquiry, Support..." className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Your Message *</label>
                <textarea rows="4" placeholder="Tell us about your project or how we can help..." className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400 resize-none" required></textarea>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-base py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  Send Message <span>&rarr;</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 flex flex-col shadow-sm">
            <h4 className="text-xs font-bold text-[#d97706] tracking-widest uppercase mb-8">Contact Info</h4>
            
            <div className="space-y-7 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-[#d97706]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Address</span>
                  <span className="text-sm text-slate-700 leading-relaxed block">49 Sample Bridge RD<br/>Mechanicsburg, PA 17050</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-[#d97706]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Phone</span>
                  <span className="text-sm text-slate-700">+1 916-806-0052</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-[#d97706]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Email</span>
                  <span className="text-sm text-[#d97706] font-medium break-all">accounts@gdsoftwares.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex gap-2.5">
                <a href="https://www.linkedin.com/company/gdsoftwares/" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-700 transition-colors">LinkedIn</a>
                <a href="https://www.facebook.com/GdSoftwares/" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-700 transition-colors">Facebook</a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
               <h4 className="text-xs font-bold text-[#d97706] tracking-wider uppercase mb-4">Quick Links</h4>
               <ul className="space-y-3">
                  <li><Link href="/services" className="text-slate-600 hover:text-[#d97706] flex justify-between text-xs font-medium">View Our Services <span>&rarr;</span></Link></li>
                  <li><Link href="/portfolio" className="text-slate-600 hover:text-[#d97706] flex justify-between text-xs font-medium">See Our Portfolio <span>&rarr;</span></Link></li>
                  <li><Link href="/hire-resources" className="text-slate-600 hover:text-[#d97706] flex justify-between text-xs font-medium">Hire a Developer <span>&rarr;</span></Link></li>
                  <li><Link href="/quote" className="text-slate-600 hover:text-[#d97706] flex justify-between text-xs font-medium">Get a Quote <span>&rarr;</span></Link></li>
               </ul>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
