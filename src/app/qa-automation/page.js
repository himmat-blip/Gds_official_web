"use client";

import Image from "next/image";
import Link from "next/link";

export default function QaAutomationPage() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const coreServices = [
    {
      title: "Integrating Continuously",
      desc: "When the scope and breadth of your program keep growing, you should be constantly checking the delivery's precision and effectiveness. The gd software selenium testing services team uses continuous integration to prevent you from seeing the annoying message 'build is broken.'",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Perfect Framework Construction",
      desc: "Being organized inside a certain framework is frequently helpful in order to take benefits like enhanced code readability, reduced script maintenance costs, and code reuse in addition to the many advantages, our selenium automated testing services team creates and specifies the suitable framework for all of your selenium webdriver testing projects.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Services for Customized Reporting",
      desc: "Your business needs to be handled with more care. We at gd software, create and provide specialized html test reports with help of in-depth analysis of all test findings. we help you make decisions that will enhance how your goods are used.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const otherServices = [
    "Construct, test, and install automation",
    "24/7 maintenance and support",
    "Analysis of performance and trends",
    "Format and tools for automation",
    "Framework for supporting test case convergence for spanning GUI, web, and services",
    "Test scripting and business-driven development"
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
                SERVICES &bull; QUALITY ASSURANCE
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">QA Automation /</span>
                <span className="font-serif italic text-[#d97706] font-normal">Selenium Testing</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  Selenium is an open source automated testing tool that is free and useful for accessing web applications on many operating systems. We provide manual automation testing with QA engineers.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  When development efforts increase, there is a chance that the supply of software may become jammed due to the dangers of spreading faulty software. You may reduce business risks, enhance user experience, and guarantee the success of your web applications by using continuous testing based on Selenium at every level of your development lifecycle. We have a team of experienced QA professionals that support you and review your application personally at every stage of development.
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="QA Automation and Selenium Testing Engineering"
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

      {/* 2. Our QA Automation Services */}
      <section id="services-breakdown" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              TEST AUTOMATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Our QA Automation Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Test Automation can solve the challenges of continuous development cycles while maintaining highest software quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {coreServices.map((item, idx) => (
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

          {/* Full Testing Capabilities List */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8 pb-4 border-b border-slate-100">
              Some of the other services we provide:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherServices.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-4 rounded-xl bg-[#fafafa] border border-slate-200/70">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-[#d97706] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 font-medium text-sm md:text-base">
                    {srv}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Pre-Footer Call to Action Banner */}
      <section className="py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#fafafa] border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
              Ensure bug-free, continuous software releases
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Our QA automation services engage your business by guaranteeing accuracy through quick, consistent, automated test suites.
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
