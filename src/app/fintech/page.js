"use client";

import Image from "next/image";
import Link from "next/link";

export default function FinTechPortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const fintechServices = [
    {
      num: "01",
      title: "Strategic Consulting",
      desc: "Our skilled consultants work hand in hand with you. We want to understand your specific needs, challenges, and goals. By thoroughly analyzing your current workflows, we find areas that can be improved or innovated. We use our industry knowledge & best practices to suggest the best technologies and solutions just for your business. This helps us create a clear roadmap for implementation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "PoC and MVP Development",
      desc: "We begin our development journey with a close look at your product idea. We focus on what the market needs & the feasibility of your concept. After that, we move to create a Proof of Concept (PoC). This step helps us show the main features of your product clearly. If everything goes smoothly, we proceed to build a Minimum Viable Product (MVP). This will work, making it possible for us to test it in the market. During this time, we collect feedback from users. It's essential! We continuously make adjustments, turning your original idea into something ready for success in the market.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Custom Fintech Software Development",
      desc: "We create custom software specifically designed for the unique needs of your financial services company. Our team leverages the latest technologies, including AI, ML, and Web3, to develop secure, scalable, and innovative solutions. Whether you need a trading platform, a payment solution, or a digital banking app, we are dedicated to providing top-notch, tailored software that truly empowers your business. We're here to help you succeed in today's fast-paced financial landscape.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      num: "04",
      title: "AI-powered Fintech Solutions",
      desc: "Our skilled team, made up of AI developers & software engineers, creates tailored fintech solutions. We work to solve specific business problems and grab chances in the finance world. By using the latest technologies, like ML, deep learning, predictive analytics, NLP, plus data analytics, we craft solid AI-driven solutions. These tools help improve processes, support decision-making based on data, and boost customer experiences.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "System Modernization",
      desc: "We have a broad range of services. This includes rearchitecting solutions, cloud migration, plus AI & ML integration. Also, we modernize legacy codebases and tech stacks. When you upgrade your software with new features, it really helps. You can see lower operational costs. You'll notice better system reliability too. Plus, customer satisfaction can go up. Our goal is to future-proof your operations. We want to make sure you scalable, efficient, & competitive.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      num: "06",
      title: "UI/UX Design",
      desc: "We blend creative artistry with solid technical skills. This helps us create interfaces that are not only intuitive but also very attractive & functional, specifically designed for what you need. We focus on crafting experiences that center around the user, along with custom designs that truly represent your brand identity. These designs will connect with your audience effectively. Our services focus on boosting productivity and maintaining visual harmony. We pay close attention to accessibility standards. This means your software will not only look impressive but also work smoothly without any hitches.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      num: "07",
      title: "QA and Testing",
      desc: "Our team of experts uses careful testing methods. We want to make sure your fintech software works perfectly. By doing detailed checks on functions & performance, we can find and fix any problems before it launches. This way, we ensure users have a smooth experience, and the software runs well. Minimizing risks is very important to us. We aim to boost user satisfaction & improve the overall performance of your fintech solution. It's all about making everything work the best it can.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "08",
      title: "Finance AI Agent Development",
      desc: "We utilize advanced tools like Taskweaver, Autogen Studio, and CrewAI to develop customized AI agents specifically for fintech companies. Beyond just building these agents, we integrate them seamlessly into your existing systems to address various operational challenges. Our AI agents are designed to automate tasks, analyze complex reports, and extract valuable insights. This enhances efficiency, supports better strategic planning, and enables smarter decision-making across your financial services landscape.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      num: "09",
      title: "Web 3 Integration",
      desc: "We focus on boosting your fintech solutions using the amazing power of Web3. If you want to set up cryptocurrency payments, build a Decentralized Finance (DeFi) platform, or dive into the world of Non-fungible Tokens (NFTs), we can help. Our Web3 integration services lay down the groundwork for decentralized finance. This means your fintech solutions will remain cutting-edge & flexible in the fast-changing world of digital finance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      num: "10",
      title: "Support and Maintenance",
      desc: "We offer complete support and maintenance services to make sure your fintech software runs smoothly, securely, and stays up to date after deployment.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
      title: "GDS Marketplace",
      category: "Marketplace",
      link: "/marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80",
      desc: "Multi-vendor B2B and B2C marketplace architectures."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section: ABOUT GDS FINTECH */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                PORTFOLIO &bull; GDS FINTECH
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">About GDS</span>
                <span className="font-serif italic text-[#d97706] font-normal">Fintech</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  At our company, we focus on providing top-notch solutions. We aim to change the financial services industry for the better. Our talented fintech software developers. They truly listen to what each business needs. By understanding these unique requirements, they can design innovative products that hit the mark.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  We make use of the technologies. Industry best practices guide us too. It&apos;s all about creating efficient &amp; automated solutions. These secure fintech options help to simplify financial processes. Plus, they improve user experiences, which is super important! Overall, we are committed to leading the way in fintech with our groundbreaking ideas and skills.
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
                  href="#services-list"
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
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                  alt="Fintech Growth, Analytics and Modern Financial Architecture"
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

      {/* 2. Our Fintech Software Development Services (Exact 10 Services from Screenshots) */}
      <section id="services-list" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              FULL-CYCLE SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Our Fintech Software Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive end-to-end financial technology capabilities, from strategic consulting to AI agents and Web3 integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fintechServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] flex items-center justify-center border border-amber-200/60 shadow-xs">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider">
                      SERVICE {service.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>GDS FinTech Solutions</span>
                  <span className="text-[#d97706] font-medium font-mono">0{idx + 1} / 10</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Related Portfolio Section */}
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

      {/* 4. Pre-Footer Call to Action Banner */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              COLLABORATE WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to innovate in digital finance?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Overall, we are committed to leading the way in fintech with our groundbreaking ideas and skills. Connect with our fintech developers today.
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
