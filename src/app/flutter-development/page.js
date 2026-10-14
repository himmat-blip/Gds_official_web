"use client";

import Image from "next/image";
import Link from "next/link";

export default function FlutterDevelopmentPage() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const flutterServices = [
    {
      title: "Flutter Consulting Services",
      desc: "Starting your project with the right path is necessary to stand out in the market. We provide consultants related to flutter app development that can help you with current setup and optimize your business plan to grow.",
      badge: "border-amber-400 bg-amber-50 text-[#d97706]",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Cross Platform App Development",
      desc: "Our Flutter app developers create amazing online mobile apps experience with great speed and a pleasant UX. The apps are scalable, secure, and are best fit for both Android and iOS.",
      badge: "border-emerald-400 bg-emerald-50 text-emerald-700",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4" />
        </svg>
      )
    },
    {
      title: "Cutting-edge Native Apps Development",
      desc: "Native apps maintain flexibility while providing advantages on a par with native apps. Our developers have both knowledge and expertise which can easily connect native abilities of local devices for an app's look and feel.",
      badge: "border-rose-400 bg-rose-50 text-rose-700",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Support & Maintenance",
      desc: "We provide multiple techniques for support and maintenance services. Our flutter app development services are designed to ensure application uptime while increasing the quality of the app as well as reducing the bugs.",
      badge: "border-cyan-400 bg-cyan-50 text-cyan-700",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const benefitsList = [
    { title: "Cost reductions.", desc: "One codebase reduces engineering overhead and dual team requirements." },
    { title: "Quicker Go-to-Market.", desc: "Rapid prototyping and simultaneous deployment to iOS App Store and Google Play." },
    { title: "Improved efficiency.", desc: "Hot reload feature enables real-time UI tweaks and bug fixes without re-compiling." },
    { title: "Web assistance.", desc: "Seamless cross-compilation across mobile, desktop, and responsive web targets." },
    { title: "Compatibility for past versions.", desc: "Consistent UI rendering even on older operating systems and device hardware." },
    { title: "Quick Loading.", desc: "Native ARM machine code compilation ensures silky smooth 60–120 FPS performance." }
  ];

  const relatedServices = [
    {
      title: "Mobile App Development",
      link: "/mobile-app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      desc: "Native iOS & Android development built to the highest market standards."
    },
    {
      title: "React JS Development",
      link: "/react-js-development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
      desc: "Modern dynamic web apps and SaaS dashboards with component-based architecture."
    },
    {
      title: "QA & Automation Testing",
      link: "/qa-automation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      desc: "End-to-end automated regression and load testing to ensure bug-free releases."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section: Flutter App Development Company */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Warm amber light glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">Flutter App Development</span>
                <span className="font-serif italic text-[#d97706] font-normal">Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  GD Software is an established Flutter app development company specializing in featured rich web &amp; app development services. Flutter, an open-source software development kit, compatible with both iOS and Android platforms, enables us to build dynamic, user-friendly apps for mobile, web, and desktop using a single codebase.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  Our exhaustive, step-by-step approach guarantees the plan of business-prepared websites and applications that work with fast launches and updates. This readiness permits our clients to quickly face growing business sector requests. Utilizing a cross-platform mobile app development technique, our devoted flutter app developers use the strong capacities of flutter to make excellent local points of interaction across stages effectively.
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

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                  alt="Flutter App Development Company cross-platform mobile apps"
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

      {/* 2. Our Flutter App Development Services (Exact 4 Cards from Screenshot 3) */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Our Flutter App Development Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We provide full-spectrum Flutter engineering from architecture design to multi-platform deployment and 24/7 maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flutterServices.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-center justify-center mb-6 shadow-xs">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose GD Software as a Flutter App Development Company? (Exact from Screenshot 2) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                BUSINESS BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Why Choose GD Software as a Flutter App Development Company?
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                GD Software helps businesses to develop top-quality cross-platform flutter apps to enhance automation and process management. Hire our team of Flutter app developers to create mobile apps. Your business gains benefits by partnering with flutter development company
              </p>

              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6">
                <span className="text-sm font-semibold text-[#b45309] block mb-1">
                  Ready to accelerate your app roadmap?
                </span>
                <p className="text-slate-700 text-xs sm:text-sm">
                  Partner with dedicated Flutter specialists to deliver native-feel iOS and Android applications with one unified codebase.
                </p>
              </div>

              <button
                onClick={handleScheduleCall}
                className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95 text-base cursor-pointer"
              >
                Hire Flutter Developers
              </button>
            </div>

            {/* Right Benefits Grid (The 6 exact bullet points from Screenshot 2) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefitsList.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafafa] border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-[#d97706] flex items-center justify-center font-bold text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Related Engineering Services */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-2 block">
                COMPREHENSIVE SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">
                Explore Related Services
              </h2>
            </div>
            <Link 
              href="/services" 
              className="text-[#d97706] hover:text-[#b45309] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors group"
            >
              View All Services 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((item, idx) => (
              <Link 
                key={idx}
                href={item.link}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors font-serif">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706]">
                    View Service Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Pre-Footer Call to Action Banner */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-[#fafafa] border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              START YOUR FLUTTER PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to build high-performance cross-platform apps?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Hire our team of Flutter app developers to create mobile apps. Your business gains benefits by partnering with an established flutter development company.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button 
                onClick={handleScheduleCall} 
                className="inline-flex justify-center items-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-4 px-10 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_22px_rgba(217,119,6,0.4)] transition-all text-base active:scale-95 cursor-pointer"
              >
                Schedule a Call
              </button>
              <Link
                href="/contact-us"
                className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white font-semibold py-4 px-10 rounded-xl transition-all text-base shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
