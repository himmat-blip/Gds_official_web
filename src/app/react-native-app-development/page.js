"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReactNativeDevelopmentPage() {
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
      title: "Custom React Native App Development",
      desc: "Influence the skill of our React Native Developers to get custom fitted answers for your business. Be it a simple interactive application with essential elements or a very good quality undertaking solutions; we do everything.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "React Native MVP Development",
      desc: "Our React Native MVP Development Services are designed to help our clients in their business needs. Our React Native App Developers are always ready to fulfill your requirements.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "React Native App Consulting",
      desc: "Our React Native App Consulting Services incorporate necessity investigation, attainability study, engineering and configuration arranging, and so on.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "React Native Support & Maintenance",
      desc: "We are always ready to support you during the complete react native app development process. Our team of dedicated developers provide you maintenance and 24*7 support.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const whyChoosePillars = [
    {
      title: "Budget-Friendly",
      desc: "Our React Native team evaluates the requirements of your firm and creates workable solutions. The technology platform that best suits the client's requirements and preferences will be recommended."
    },
    {
      title: "Transparency",
      desc: "We have total trust in Transparency. The customer has access to all codes and procedures and is always aware of them. Throughout the whole process of React Native app development, we keep our clients informed."
    },
    {
      title: "Adaptability",
      desc: "We provide flexibility in a variety of ways. Changes in the development cycle, working hours, enhancements, and 24-hour support and maintenance are all things we can adapt to."
    }
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
                SERVICES &bull; CROSS-PLATFORM MOBILE
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">React Native App</span>
                <span className="font-serif italic text-[#d97706] font-normal">Development Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  Open dramatic worth with our custom React Native App Development Services for Android and iOS, as our group of React Native Developers working with a point adjusted to convey the project at 2x speed without including the expense and matching the quality.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  At GDsoftware, we have experience using React Native technology to create commercial solutions that are packed with features. Our certified react native developers offer end-to-end services that enable our clients to fully utilize the React Native web framework, which is quick, effective, and highly scalable, thanks to their broad domain understanding. We have a reputable and knowledgeable React Native development team, and we are skilled at building cross-platform applications utilizing the React Native framework.
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
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80"
                  alt="React Native App Development Company iOS and Android"
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

      {/* 2. React Native App Development Services */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              React Native App Development Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Tailored custom solutions, MVP launchpad, architecture consulting, and continuous support.
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

      {/* 3. Why Choose GD Software for React Native App Development? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              WHY PARTNER WITH US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Why Choose GD Software for React Native App Development?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoosePillars.map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#fafafa] border border-slate-200/80 hover:border-amber-200 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d97706] font-bold text-sm flex items-center justify-center mb-6 font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action Banner */}
      <section className="py-24 text-center bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
              Ready to ship your React Native mobile app?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Deliver your project at 2x speed with certified React Native developers. Let&apos;s evaluate your project requirements.
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
