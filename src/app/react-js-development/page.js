"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReactJsDevelopmentPage() {
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
      title: "Reactjs Web Development",
      desc: "We specialize in developing innovative and interactive Reactjs web applications for small, medium and large organizations. Our team of dedicated professionals experts in developing outstanding reactjs web applications.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Reactjs UI Development Services",
      desc: "Create engaging UI designs with reactjs. Convert your ReactJS application into a digital experience with our outstanding and highly interactive UI/UX design solutions that compel users to spend more time on the application, resulting in better conversions for your business.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Reactjs Plugin Development",
      desc: "Influence the adaptability of the ReactJS front-end library to make custom modules, expansions, and gadgets for your web and mobile applications to include rich and deal clients the highest level of convenience.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Reactjs Integration Services",
      desc: "Increase the value of a current application or site by incorporating the ReactJS development services. Incorporate with specific elements of the application without influencing the current code and usefulness.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Reactjs Maintenance and Support",
      desc: "We offer ReactJS development services stretched out past the last organization. Our specialists give start to finish upkeep to guarantee bother free working ahead.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const perks = [
    { num: "01", title: "JavaScript & ReactJS framework specialist.", desc: "Expert React architecture with modern hooks, TypeScript, and state management." },
    { num: "02", title: "End-to-end ReactJS development.", desc: "From Figma wireframes to full API integration, testing, and production cloud launch." },
    { num: "03", title: "Scalable solutions that offer future growth.", desc: "Clean modular codebase designed to support millions of active users smoothly." },
    { num: "04", title: "Speed and Efficiency", desc: "Performance-optimized virtual DOM rendering for sub-second page interaction." },
    { num: "05", title: "Support and Maintenance", desc: "Continuous monitoring, version upgrades, security patches, and 24/7 technical support." }
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
                <span className="font-serif block">Reactjs Development</span>
                <span className="font-serif italic text-[#d97706] font-normal">Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  GDsoftware is known for offering top-notch ReactJS development services. We are the leading ReactJS Development Company. We enjoy greatly in implementing new technology into client business applications and placing a strong focus on the development of extremely innovative web and mobile apps that serve client needs.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  Our React JS application developers are highly skilled and experienced has helped some of the top businesses in creating complete and performance-optimized solutions for their needs. We will work with you to meet your requirements by creating an amazing user experience web and mobile apps. We work according to what is best for your business.
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
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80"
                  alt="Reactjs Development Company dynamic web applications"
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

      {/* 2. Reactjs Development Services We Provide */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              FULL-CYCLE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Reactjs Development Services We Provide
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              From web app engineering to interactive UI/UX and plugin extensions, we harness the power of ReactJS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 3. Why Choose GD Software for Reactjs Development? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Why Choose GD Software for Reactjs Development?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                If you want to hire a reactjs developer, you are at the right place. We at GD Software deliver robust reactjs development to our clients.
              </p>
              <button
                onClick={handleScheduleCall}
                className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95 text-base cursor-pointer"
              >
                Hire ReactJS Developers
              </button>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {perks.map((p, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafafa] border border-slate-200/80">
                  <span className="w-9 h-9 rounded-xl bg-amber-50 text-[#d97706] font-mono font-bold text-xs flex items-center justify-center border border-amber-200 shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-slate-900 mb-1">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action Banner */}
      <section className="py-24 text-center bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
              Transform your digital platform with ReactJS
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Our React JS application developers are highly skilled and experienced to build complete and performance-optimized solutions for your business.
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
