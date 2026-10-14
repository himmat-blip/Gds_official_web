"use client";

import Image from "next/image";
import Link from "next/link";

export default function MobileAppDevelopmentPage() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const services = [
    {
      title: "iOS Mobile App Development",
      desc: "We help you with customized iOS mobile app development with excellent digital user experiences, features and effortlessly publish them on the app store, and help to drive business growth.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Android Mobile App Development",
      desc: "To build custom android apps for your business significant skills and experience are required. With our expertise in the sector, we provide top-notch app development. Android apps are easy to use, intuitive, and reasonably priced may help you effortlessly increase your consumer base.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v3m6-3v3m-7 15v3m8-3v3" />
        </svg>
      )
    },
    {
      title: "Native App Development",
      desc: "If you want lots of users to your application, you must choose the native mobile app. We provide native applications that work well on both Android and iOS devices and operate rapidly and responsively.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "App Maintenance and Support",
      desc: "In order to keep your app operating without a glitch, we offer continuous maintenance and support services. We keep an eye out for problems with your mobile app development and act promptly to fix them.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const features = [
    "Compatible with multiple platforms",
    "Cost effective",
    "User-friendly Interface",
    "Quick Loading Speed",
    "Multilingual Support"
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                SERVICES &bull; MOBILE ENGINEERING
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">Mobile App</span>
                <span className="font-serif italic text-[#d97706] font-normal">Development Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  Are you looking for a mobile app development company in your country? If yes, we are here to help you with mobile app development services to start a business.
                </p>
                <p>
                  GD Software is a renowned mobile app development company. We focus on creating high-quality apps that are designed to be scalable from the beginning utilizing the most cutting-edge technology and industry standards.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  We have years of experience in mobile app development and helping business firms innovate to stay ahead of the competition, adopt new business models, and develop systems with the aim of the future. With strategy-led innovation, we&apos;ll help you with automating laborious processes, improving software supply chains, engaging customers with better experiences, complying with new legislation, and much more.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex justify-center items-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.28)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.38)] transition-all active:scale-95 text-base cursor-pointer"
                >
                  Schedule a Call
                </button>
                <a
                  href="#services-breakdown"
                  className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/90 hover:bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
                >
                  Explore Services &darr;
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
                  alt="Mobile App Development Services iOS Android Native"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mobile App Development Services */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Mobile App Development Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              From concept development through post-release maintenance, we build high-performing native and cross-platform apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-center justify-center mb-6 shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose GD Software for Mobile App Development Services? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Why Choose GD Software for Mobile App Development Services?
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                As a leading mobile app development company, GD Software helps you stand out in the market with its mobile app development services. Hire our dedicated team of mobile app developers to get the benefits of our services.
              </p>
              <button
                onClick={handleScheduleCall}
                className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95 text-base cursor-pointer"
              >
                Hire Mobile App Developers
              </button>
            </div>

            <div className="lg:col-span-6 bg-[#fafafa] p-8 md:p-10 rounded-3xl border border-slate-200/80">
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 pb-3 border-b border-slate-200">
                Featured-Rich Mobile Apps Delivery:
              </h3>
              <div className="space-y-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#d97706] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      &check;
                    </span>
                    <span className="text-slate-800 font-semibold text-sm md:text-base">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Pre-Footer CTA */}
      <section className="py-24 text-center bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
              Ready to launch your mobile app?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Hire our team of mobile app developers to turn your idea into a feature-rich, high-speed mobile application.
            </p>
            <button 
              onClick={handleScheduleCall} 
              className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-4 px-10 rounded-xl shadow-md transition-all text-base active:scale-95 cursor-pointer"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
