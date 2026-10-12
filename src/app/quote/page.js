export const metadata = {
  title: "GDSoftwares | Get a Quote",
  description: "Are you looking for software development, request a quote from GDSoftwares."
};

export default function Quote() {
  return (
    <main className="min-h-screen bg-[#060814] text-white pt-24 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Header Section */}
        <div className="mb-16 mt-8">
          <div className="inline-flex items-center gap-2 bg-[#0c1324] border border-[#162138] rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00d2ff]"></div>
            <span className="text-[#00d2ff] text-xs font-bold tracking-wider uppercase">Free Consultation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Get a <span className="italic text-[#6dc5d1]">Free Quote</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl text-lg mb-12">
            Tell us about your project — web, mobile, blockchain, AI, or QA. We'll respond with a clear plan and honest pricing within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-8">
            <form className="space-y-8">
              
              {/* Section 1: Personal Information */}
              <div className="bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#13172e] text-[#6dc5d1] flex items-center justify-center font-bold border border-[#1d2242]">1</div>
                  <h3 className="text-xl font-bold font-serif">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company Name *</label>
                    <input type="text" placeholder="Acme Inc." className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address *</label>
                    <input type="email" placeholder="john@acme.com" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Country *</label>
                    <select defaultValue="" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:border-[#4b55a8] transition-colors appearance-none" required>
                      <option value="" disabled>Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Skype ID (optional)</label>
                    <input type="text" placeholder="live:yourskypeid" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Information */}
              <div className="bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#13172e] text-[#6dc5d1] flex items-center justify-center font-bold border border-[#1d2242]">2</div>
                  <h3 className="text-xl font-bold font-serif">Project Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service Required *</label>
                    <select defaultValue="" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:border-[#4b55a8] transition-colors appearance-none" required>
                      <option value="" disabled>Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="blockchain">Blockchain / Web3</option>
                      <option value="design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Budget Range *</label>
                    <select defaultValue="" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:border-[#4b55a8] transition-colors appearance-none" required>
                      <option value="" disabled>Select budget</option>
                      <option value="small">Under $5k</option>
                      <option value="medium">$5k - $15k</option>
                      <option value="large">$15k - $50k</option>
                      <option value="enterprise">$50k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Timeline *</label>
                    <select defaultValue="" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:border-[#4b55a8] transition-colors appearance-none" required>
                      <option value="" disabled>Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3">1-3 Months</option>
                      <option value="3-6">3-6 Months</option>
                      <option value="6plus">6+ Months</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Website URL (optional)</label>
                    <input type="url" placeholder="https://yourwebsite.com" className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Section 3: Your Requirements */}
              <div className="bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#13172e] text-[#6dc5d1] flex items-center justify-center font-bold border border-[#1d2242]">3</div>
                  <h3 className="text-xl font-bold font-serif">Your Requirements</h3>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Project Description *</label>
                  <textarea rows="5" placeholder="Describe your project — what problem are you solving, who are your users, what features do you need..." className="w-full bg-transparent border border-[#232645] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4b55a8] transition-colors placeholder:text-gray-600 resize-none" required></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(0,180,216,0.35)] hover:shadow-[0_0_25px_rgba(0,180,216,0.55)] active:scale-95 flex items-center justify-center gap-2">
                  Submit Quote Request <span>&rarr;</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Sidebar Area */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Why Choose Us */}
            <div className="bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8">
              <h4 className="text-xs font-bold text-[#6dc5d1] tracking-widest uppercase mb-6">Why Choose Us</h4>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-sm text-gray-300">Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <span className="text-sm text-gray-300">8+ years of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span className="text-sm text-gray-300">No hidden fees — 100% transparent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="text-sm text-gray-300">Flexible engagement models</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                  <span className="text-sm text-gray-300">99% client retention rate</span>
                </li>
              </ul>
            </div>

            {/* Contact Directly */}
            <div className="bg-[#0a0c1a] border border-[#191b33] rounded-3xl p-8">
              <h4 className="text-xs font-bold text-[#6dc5d1] tracking-widest uppercase mb-6">Contact Directly</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#3b82f6] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase block mb-1">Email</span>
                    <span className="text-sm text-gray-300 break-all">accounts@gdsoftwares.com</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#3b82f6] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase block mb-1">Phone</span>
                    <span className="text-sm text-gray-300">+1 916-806-0052</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#f472b6] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase block mb-1">Address</span>
                    <span className="text-sm text-gray-300 leading-relaxed block">49 Sample Bridge RD<br/>Mechanicsburg, PA 17050</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
