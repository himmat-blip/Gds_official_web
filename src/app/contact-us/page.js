import Image from "next/image";

export const metadata = {
  title: "GDSoftwares | Contact US",
  description: "GDSoftwares | Ask a query from us "
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
    <main className="min-h-screen bg-[#060814] text-white pt-24 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Header Section */}
        <div className="mb-16 mt-8">
          <div className="inline-flex items-center gap-2 bg-[#0c1324] border border-[#162138] rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00d2ff]"></div>
            <span className="text-[#00d2ff] text-xs font-bold tracking-wider uppercase">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Contact <span className="italic text-[#6dc5d1]">Us</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl text-lg mb-12">
            Ready to lead your business into the future? We're here to help you build great digital products. Reach out — we respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="text-xs text-gray-500 font-bold tracking-widest uppercase">Global Presence</span>
            <div className="flex flex-wrap gap-3">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#0b0d1e] border border-[#1f2240] rounded-full px-5 py-2 hover:bg-[#151936] transition-colors cursor-pointer">
                  <span className="text-white font-bold">{loc.code}</span>
                  <span className="text-gray-400">{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2 bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-3xl font-serif font-bold mb-3">Send Us a Message</h2>
            <p className="text-gray-400 mb-10">Fill in the form and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name *</label>
                  <input type="text" placeholder="John Smith" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address *</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Subject *</label>
                  <input type="text" placeholder="Project inquiry, Support..." className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Message *</label>
                <textarea rows="4" placeholder="Tell us about your project or how we can help..." className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600 resize-none" required></textarea>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-[#2ab5e1] via-[#5c4ae1] to-[#8c1fe1] text-white font-bold text-lg py-5 px-8 rounded-xl transition-all shadow-lg hover:shadow-purple-500/20 hover:scale-[1.01] flex items-center justify-center gap-2">
                  Send Message <span>&rarr;</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8 md:p-10 flex flex-col">
            <h4 className="text-sm font-bold text-[#6dc5d1] tracking-widest uppercase mb-8">Contact Info</h4>
            
            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#13172e] border border-[#1d2242] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#f472b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block mb-1">Address</span>
                  <span className="text-sm text-gray-300 leading-relaxed block">49 Sample Bridge RD<br/>Mechanicsburg, PA 17050</span>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#13172e] border border-[#1d2242] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block mb-1">Phone</span>
                  <span className="text-sm text-gray-300">+1 916-806-0052</span>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#13172e] border border-[#1d2242] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block mb-1">Email</span>
                  <span className="text-sm text-gray-300 break-all">accounts@gdsoftwares.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#191b33]">
              <h4 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="px-5 py-2 rounded-full border border-[#1f2240] hover:bg-[#151936] text-sm text-gray-300 transition-colors">LinkedIn</a>
                <a href="#" className="px-5 py-2 rounded-full border border-[#1f2240] hover:bg-[#151936] text-sm text-gray-300 transition-colors">Facebook</a>
              </div>
            </div>
            
            <div className="mt-8">
               <h4 className="text-xs font-bold text-[#6dc5d1] tracking-wider uppercase mb-4">Quick Links</h4>
               <ul className="space-y-4">
                  <li><a href="/services" className="text-gray-400 hover:text-white flex justify-between text-sm">View Our Services <span className="text-[#3b82f6]">&rarr;</span></a></li>
                  <li className="border-t border-[#191b33] pt-4"><a href="/portfolio" className="text-gray-400 hover:text-white flex justify-between text-sm">See Our Portfolio <span className="text-[#3b82f6]">&rarr;</span></a></li>
                  <li className="border-t border-[#191b33] pt-4"><a href="/hire" className="text-gray-400 hover:text-white flex justify-between text-sm">Hire a Developer <span className="text-[#3b82f6]">&rarr;</span></a></li>
                  <li className="border-t border-[#191b33] pt-4"><a href="/quote" className="text-gray-400 hover:text-white flex justify-between text-sm">Get a Quote <span className="text-[#3b82f6]">&rarr;</span></a></li>
               </ul>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
