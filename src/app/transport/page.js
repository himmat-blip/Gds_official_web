"use client";

import Image from "next/image";
import Link from "next/link";

export default function TransportPortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const availableFeatures = [
    {
      title: "Experienced Team",
      desc: "We are small team with large experience",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Latest Technology",
      desc: "We select trending technology with greater community support",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Analysis & Support",
      desc: "With in depth project analysis our support extends till implementation",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Best Practices",
      desc: "Adoption of open source technology and Industry best practices",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const relatedPortfolio = [
    {
      title: "GDS Healthcare",
      category: "Healthcare",
      link: "/healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      desc: "Hospital information systems, EHR & remote patient care."
    },
    {
      title: "GDS EdTech",
      category: "EdTech",
      link: "/edtech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      desc: "Interactive e-learning platforms, LMS & virtual classrooms."
    },
    {
      title: "GDS Fintech",
      category: "Fintech",
      link: "/fintech",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      desc: "AI financial agents, algorithmic wealth tech & Web3."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero / Header Section: GDS Transport */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                PORTFOLIO &bull; GDS TRANSPORT
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">About GDS</span>
                <span className="font-serif italic text-[#d97706] font-normal">Transport</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  We are an outsource software development company in India. GD Softwares has the expertise in developing custom software applications to meet customers&apos; needs. We employ the best skills and knowledge to supply our clients with the state-of-the-art technology solutions.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  Our software development tools and products implement Object-Oriented design &amp; programming. Further, we use the most modern development tools and technologies available on the market today. We are staying on pace with the fast evolving software development capabilities and uses of multimedia and the Internet.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex justify-center items-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-8 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.28)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.38)] transition-all active:scale-95 text-base cursor-pointer"
                >
                  Schedule a Call
                </button>
                <Link
                  href="/contact-us"
                  className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/90 hover:bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
                >
                  Contact Us &rarr;
                </Link>
              </div>
            </div>

            {/* Right Hero Visual (Mockup of Logistics & Transport software) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Transporters auto transport logistics fleet management"
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

      {/* 2. Gold Banner: We can transform your digital needs Contact Us */}
      <section className="bg-gradient-to-r from-[#d97706] to-[#b45309] text-white py-6 shadow-md">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
            We can transform your digital needs
          </span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-[#b45309] hover:bg-amber-50 font-bold px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
          >
            Contact Us
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* 3. Available Features (Exact 4 Cards from Screenshot 1) */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              GDS CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Available Features
            </h2>
            <p className="text-slate-600 text-base">
              State-of-the-art technology solutions tailored to your transport and logistics operations.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {availableFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-[#fafafa] border border-slate-200/70 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* 4. Related Portfolio Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-2 block">
                CASE STUDIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">
                Related Portfolio
              </h2>
            </div>
            <Link 
              href="/portfolio" 
              className="text-[#d97706] hover:text-[#b45309] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors group"
            >
              View Full Portfolio 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPortfolio.map((item, idx) => (
              <Link 
                key={idx}
                href={item.link}
                className="group bg-[#fafafa] rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-amber-300/50 text-xs font-semibold text-[#d97706] shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors font-serif">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d97706]">
                    Explore Sector &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Pre-Footer Call to Action Banner */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              ELEVATE YOUR FLEET &amp; LOGISTICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              We can transform your digital needs
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              GD Softwares has the expertise in developing custom software applications to meet your needs. We employ the best skills and knowledge to supply our clients with state-of-the-art technology solutions.
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
