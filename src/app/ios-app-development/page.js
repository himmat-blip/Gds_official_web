"use client";

import Image from "next/image";
import Link from "next/link";

export default function IosDevelopmentPage() {
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
      title: "Customs iOS App Development",
      desc: "We have a team of experienced ios developers to create a customized ios app for your business needs. Implant the capacities of iOS experts in overseeing multi-string conditions and building progressed calculations for your state of the art custom iOS app development.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "iWatch App Development",
      desc: "Develop the best smartwatch app with unmatched functionality that fulfill every possible requirement according to your clients' needs. We include in-app purchasing quality and allow you to filter out your specific needs.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3l2 2m-5-8h6a2 2 0 012 2v1M9 19h6a2 2 0 002-2v-1" />
        </svg>
      )
    },
    {
      title: "Apple TV App Development",
      desc: "We develop the apple tv app that would be easily functionable to cater to your needs. Our group of specialists can create application custom fitted to your requirements, empowering you to exploit includes that are not open on conventional portable applications.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="15" rx="2" strokeWidth="2" />
          <polyline points="17 2 12 7 7 2" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "iOS Integration and Migration",
      desc: "GD Software acquires many years of industry experts giving integration and application migration administrations for iOS portable applications to remain ahead in the advanced world.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">iOS App Development</span>
                <span className="font-serif italic text-[#d97706] font-normal">Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  iOS apps made for iPhone and Ipad may rebuild and help you to grow your business. Our skilled Ios app developers will assist you at every step of ios app development, from solution creation to delivery and maintenance, whether you are seeking for iphone app development services or want to create an application that functions flawlessly on all apple devices.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  In creating an iOS app, our developers pay close attention to the user experience, design look and feel, business requirement analysis, and app functionality. Working with the best iOS app development company may have a significant impact on the overall functionality and user experience of your app.
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
                  alt="iOS App Development Company iPhone iPad Apple Watch"
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

      {/* 2. iOS App Development Services we Provide */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              APPLE ECOSYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              iOS App Development Services we Provide
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We design and engineer bespoke software across iPhone, iPad, Apple Watch, and Apple TV.
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

      {/* 3. Why Choose GD Software for iOS App Development? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#fafafa] p-10 md:p-14 rounded-3xl border border-slate-200/80 text-center">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              10+ YEARS EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6">
              Why Choose GD Software for iOS App Development?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              GD Software is the renowned iOS app development company. From concept development through post-release maintenance, whether your idea involves an iPhone, iPad, or another Apple product, our iOS app developers check all the boxes.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
              We were able to establish a bespoke process that provides the maximum level of efficiency for our iOS app development services thanks to our more than 10 years of experience. We put together the finest team, assess your needs, and provide a remedy. User acceptance testing is followed by the proper deployment strategy for the application. Moreover, we provide post-purchase services including general maintenance and regular updates.
            </p>
            <button
              onClick={handleScheduleCall}
              className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95 text-base cursor-pointer"
            >
              Hire iOS Developers
            </button>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action Banner */}
      <section className="py-24 text-center bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
              Build your next flagship iOS application
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Our skilled iOS app developers will assist you at every step, from solution creation to App Store delivery and post-release support.
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
