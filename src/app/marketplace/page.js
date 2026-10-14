"use client";

import Image from "next/image";
import Link from "next/link";

export default function MarketplacePortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const marketplaceModels = [
    {
      title: "B2B MARKETPLACE",
      badgeColor: "border-amber-400 bg-amber-50 text-amber-800",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10h20" />
        </svg>
      ),
      desc: "Launch a B2B marketplace website like Alibaba, Amazon Business, or Handshake. We're experts in crafting exciting B2B platforms. Our marketplace development services enable companies to make procurement easier, connect with reliable suppliers, and develop successful partnerships."
    },
    {
      title: "B2C MARKETPLACE",
      badgeColor: "border-emerald-400 bg-emerald-50 text-emerald-800",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      desc: "We can assist you in building a multi-vendor B2C marketplace, similar to Amazon, Etsy, or Instacart. Our development solutions for B2C marketplaces significantly improve the online shopping experience. Users will find it simple to access a large variety of products. Also, our interfaces are designed to be very friendly and easy to use."
    },
    {
      title: "P2P MARKETPLACE",
      badgeColor: "border-rose-400 bg-rose-50 text-rose-800",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      desc: "Interested in developing a platform such as Airbnb, Lyft, Upwork, Craigslist, TaskRabbit, or eBay? We excel at designing peer-to-peer (P2P) marketplaces. These enable users to buy, sell, & trade directly among themselves."
    },
    {
      title: "B2G MARKETPLACE",
      badgeColor: "border-cyan-400 bg-cyan-50 text-cyan-800",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      desc: "Our B2G marketplace development solutions fit the needs of the public sector. We focus on compliance & accountability. Plus we ensure seamless transactions. We can assist you in starting a platform similar to FedBid or GSA Advantage. This means you're set for a smooth flow of goods & services!"
    }
  ];

  const whyChooseReasons = [
    {
      num: "01",
      title: "User-Centric Design",
      desc: "As a top marketplace app development company, our experts focus on crafting intuitive and engaging interfaces that enhance user experience. We ensure that your online marketplace is easy to navigate for both buyers and sellers."
    },
    {
      num: "02",
      title: "Dedicated Account Management",
      desc: "Our account managers are dedicated to giving you personalized assistance throughout all stages of development. By utilizing agile project management, we provide timely & efficient delivery of marketplace app development solutions that meet your specific business aims."
    },
    {
      num: "03",
      title: "Mobile-First Approach",
      desc: "Our experts adopt a mobile-first approach to address the growing number of mobile users. We ensure that our marketplace solutions are responsive, intuitive, and accessible across all devices."
    },
    {
      num: "04",
      title: "Global Delivery Model",
      desc: "We deliver innovative and cost-effective solutions to clients worldwide through our global network of development centers and alliances with technology leaders like Microsoft, AWS and WordPress VIP. With advanced communication tools, we enable remotely distributed teams to deliver quality solutions seamlessly no matter where you are."
    },
    {
      num: "05",
      title: "Accelerated Time-To-Market",
      desc: "We have strategies that help your marketplace get to the market faster. Using rapid prototyping, agile development, & lean startup principles, we can iterate quickly. This means we test and validate your ideas faster too. As a result, you'll be able to launch your products sooner than your competitors."
    },
    {
      num: "06",
      title: "Proven Expertise",
      desc: "Look, our team knows their stuff! With proven results in constructing online marketplaces across various niches, we trust in modern tech. By harnessing cutting-edge frameworks such as React, Node.js, PHP, and Python—plus a sprinkle of AI—we build solutions that are both secure & efficient. Tailored to your requirements, our work reflects your goals perfectly."
    },
    {
      num: "07",
      title: "Customized & White-Labeled Solutions",
      desc: "Whether delivering customized or white-labeled marketplace services, we take a consultative approach and conduct an in-depth discovery process. This helps us identify your key pain points, opportunities, and business goals, enabling us to craft tailored solutions optimized for your success."
    },
    {
      num: "08",
      title: "Quality Assurance",
      desc: "We focus heavily on quality assurance. We use various testing methods & tools. This includes unit testing, regression testing, plus user acceptance testing (commonly known as UAT). Such practices make sure your marketplace has been checked thoroughly. It also helps us optimize for key aspects like performance, scalability, and security."
    },
    {
      num: "09",
      title: "Competitive Pricing",
      desc: "Our marketplace app development company offers competitive pricing models, clearly outlining all costs and fees upfront. By leveraging strategic offshore contributions, we reduce marketplace development costs and deliver exceptional value for your investment."
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
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
      desc: "Digital banking, crypto wallets & automated fraud detection."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section: Want To Create A Marketplace Like Amazon, Uber Or Airbnb? */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                PORTFOLIO &bull; GDS MARKETPLACE
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.15]">
                <span className="font-serif block">Want To Create A Marketplace Like</span>
                <span className="font-serif italic text-[#d97706] font-normal">Amazon, Uber Or Airbnb?</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  We are a leading provider of online marketplace development services for businesses across various industries. Whether you are looking to launch a niche e-commerce platform like Etsy, a peer-to-peer marketplace like Airbnb, or a global online marketplace akin to Amazon, we have the expertise and solutions to help you successfully enter the e-commerce revolution.
                </p>
                <p className="font-medium text-slate-800">
                  We create a marketplace for a range of business models.
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
                  href="#models"
                  className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/90 hover:bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
                >
                  Explore Models &darr;
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80"
                  alt="Online Marketplace and E-Commerce Ecosystem"
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

      {/* 2. Business Models Section: B2B, B2C, P2P, B2G (Exact 4 Cards from Screenshot 4) */}
      <section id="models" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              MARKETPLACE ARCHITECTURES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Marketplaces For Every Business Model
            </h2>
            <p className="text-slate-600 text-base">
              Tailored development for multi-vendor retail, wholesale procurement, peer-to-peer exchanges, and government tenders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaceModels.map((model, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-center justify-center mb-6 shadow-xs">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose gdsoftware's as Your Marketplace App Development Company? (Exact 9 Reasons from Screenshots 3, 2, 1) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              PROVEN VALUE PROPOSITION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Why Choose gdsoftware&apos;s as Your Marketplace App Development Company?
            </h2>
            <p className="text-slate-600 text-base">
              From user-centric UI to accelerated launch schedules and transparent pricing, here is why global brands partner with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseReasons.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fafafa] p-8 md:p-9 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider mb-2">
                    PILLAR {item.num}
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                  <span>GDSoftwares Marketplace</span>
                  <span className="text-[#d97706] font-medium font-mono">{item.num} / 09</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Related Portfolio Section */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
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
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-[#fafafa] border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              COLLABORATE WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to launch your marketplace?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether delivering customized or white-labeled marketplace services, we take a consultative approach and conduct an in-depth discovery process to build solutions optimized for your success.
            </p>
            
            <button 
              onClick={handleScheduleCall} 
              className="inline-flex justify-center items-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-4 px-10 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_22px_rgba(217,119,6,0.4)] transition-all text-base active:scale-95 cursor-pointer"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
