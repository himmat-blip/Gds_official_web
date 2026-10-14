export const metadata = {
  title: "Get a Free Quote | GD Softwares",
  description: "Request a custom quote for software development, mobile apps, web applications, or dedicated talent from GD Softwares."
};

export default function Quote() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 pt-8 md:pt-10 pb-20 font-sans selection:bg-amber-100 selection:text-amber-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-slate-900">
            Get a <span className="italic text-[#d97706] font-normal font-serif">Free Quote</span>
          </h1>
          
          <p className="text-slate-600 max-w-2xl text-lg mb-12 leading-relaxed">
            Tell us about your project — web, mobile, blockchain, AI, or QA. We&apos;ll respond with a clear plan and honest pricing within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-8">
            <form className="space-y-8">
              
              {/* Section 1: Personal Information */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center font-bold border border-amber-200 text-sm">1</div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company Name *</label>
                    <input type="text" placeholder="Acme Inc." className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address *</label>
                    <input type="email" placeholder="john@acme.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number *</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Country *</label>
                    <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors" required>
                      <option value="" disabled>Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Skype ID (optional)</label>
                    <input type="text" placeholder="live:yourskypeid" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Information */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center font-bold border border-amber-200 text-sm">2</div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">Project Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Service Required *</label>
                    <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors" required>
                      <option value="" disabled>Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="qa">QA (Manual & Automation)</option>
                      <option value="ai">AI Solutions</option>
                      <option value="desktop">Desktop Application</option>
                      <option value="training">Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Budget Range *</label>
                    <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors" required>
                      <option value="" disabled>Select budget</option>
                      <option value="small">Under $5k</option>
                      <option value="medium">$5k - $15k</option>
                      <option value="large">$15k - $50k</option>
                      <option value="enterprise">$50k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Timeline *</label>
                    <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-700 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors" required>
                      <option value="" disabled>Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3">1-3 Months</option>
                      <option value="3-6">3-6 Months</option>
                      <option value="6plus">6+ Months</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Website URL (optional)</label>
                    <input type="url" placeholder="https://yourwebsite.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Section 3: Your Requirements */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center font-bold border border-amber-200 text-sm">3</div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">Your Requirements</h3>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Description *</label>
                  <textarea rows="5" placeholder="Describe your project — what problem are you solving, who are your users, what features do you need..." className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors placeholder:text-slate-400 resize-none" required></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-base py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  Submit Quote Request <span>&rarr;</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Sidebar Area */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Why Choose Us */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h4 className="text-xs font-bold text-[#d97706] tracking-widest uppercase mb-6">Why Choose Us</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] font-bold">✓</span>
                  <span className="text-sm text-slate-700">Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] font-bold">✓</span>
                  <span className="text-sm text-slate-700">8+ years of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] font-bold">✓</span>
                  <span className="text-sm text-slate-700">No hidden fees — 100% transparent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] font-bold">✓</span>
                  <span className="text-sm text-slate-700">Flexible engagement models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] font-bold">✓</span>
                  <span className="text-sm text-slate-700">99% client retention rate</span>
                </li>
              </ul>
            </div>

            {/* Contact Directly */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h4 className="text-xs font-bold text-[#d97706] tracking-widest uppercase mb-6">Contact Directly</h4>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center shrink-0">
                    ✉
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Email</span>
                    <a href="mailto:accounts@gdsoftwares.com" className="text-sm text-[#d97706] font-medium hover:underline break-all">accounts@gdsoftwares.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center shrink-0">
                    ☎
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Phone</span>
                    <a href="tel:+19168060052" className="text-sm text-slate-700 hover:text-[#d97706]">+1 916-806-0052</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d97706] flex items-center justify-center shrink-0">
                    📍
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-0.5">Address</span>
                    <span className="text-sm text-slate-700 leading-relaxed block">49 Sample Bridge RD<br/>Mechanicsburg, PA 17050</span>
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
