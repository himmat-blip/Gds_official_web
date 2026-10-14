"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const stats = [
    {
      number: "8+",
      label: "YEARS IN INDUSTRY",
      icon: (
        <svg className="w-6 h-6 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-4 0h8M6 4h12v4a6 6 0 01-12 0V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6H3a2 2 0 00-2 2v1a4 4 0 004 4h1m12-7h3a2 2 0 012 2v1a4 4 0 01-4 4h-1" />
        </svg>
      )
    },
    {
      number: "200+",
      label: "PROJECTS DELIVERED",
      icon: (
        <svg className="w-6 h-6 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "50+",
      label: "GLOBAL CLIENTS",
      icon: (
        <svg className="w-6 h-6 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "99%",
      label: "CLIENT RETENTION",
      icon: (
        <svg className="w-6 h-6 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const coreServices = [
    {
      title: "QA (Manual & Automation)",
      description: "Quality assurance, manual testing, Selenium automation and regression test suites.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      title: "Desktop Application",
      description: "Client/server architecture and high-performance Windows business applications.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20h6" />
        </svg>
      )
    },
    {
      title: "Training",
      description: "Hands-on technology training and corporate upskilling by experienced specialists.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6l-6.3 4.4 2.3-7.2-6-4.4h7.6z" />
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "Native iOS & Android apps and cross-platform Flutter/React Native solutions built for scale.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "High-performance websites and SaaS platforms built with modern cloud and component frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Blockchain Development",
      description: "Decentralized architecture, smart contracts, custom tokens, and secure Web3 ecosystems.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent software solutions with predictive modeling, LLMs, and workflow automation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "ServiceNow & Enterprise",
      description: "Digital transformation, custom enterprise applications, and IT service automation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      badgeIcon: (
        <svg className="w-5 h-5 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      )
    },
    {
      name: "Fintech",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="4" />
        </svg>
      )
    },
    {
      name: "EdTech",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    },
    {
      name: "Marketplace",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Transport",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 22,9 18,22 6,22 2,9" />
        </svg>
      )
    },
    {
      name: "Gaming",
      icon: (
        <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const philosophies = [
    {
      title: "We're Creative",
      desc: "If you're already a front-end developer, well, pretend you're also wearing a pirate hat.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "We're Passionate",
      desc: "What's important is having passion for accomplishing. Being passionate about productivity.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a8 8 0 010 11.314z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "We're Professional",
      desc: "You want to communicate both your brand's purpose and your value, focuses on the user's needs.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Luis",
      quote: "Very efficient, flexible and hard working company, we are always happy to send them new projects.",
      role: "Verified Client",
      initial: "L",
      stars: 5
    },
    {
      name: "Maxim",
      quote: "Responsibly approaches to performance of tasks in view, as well and all his team. He always do all the work clearly and quickly. Excellent specialist in the field of blockchain.",
      role: "Blockchain Partner",
      initial: "M",
      stars: 5
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Analysis",
      desc: "Requirement Gathering & System Study"
    },
    {
      num: "02",
      title: "Design",
      desc: "Design Wire-frame & Layout Design"
    },
    {
      num: "03",
      title: "Development",
      desc: "Product development & Testing"
    },
    {
      num: "04",
      title: "Support",
      desc: "Implementation & Support"
    }
  ];

  return (
    <main className="min-h-screen font-sans bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900 relative">
      
      {/* 1. Hero Section with IT office background on right-hand side */}
      <section className="relative min-h-[580px] lg:min-h-[620px] flex flex-col justify-center bg-white overflow-hidden border-b border-slate-100 pt-6 pb-10 md:pt-10 md:pb-12">
        
        {/* Right-hand side background IT Office collaboration image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[60%] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-it-office-bg.jpg"
            alt="Modern IT software engineers collaborating in office"
            fill
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="object-cover object-right"
            priority
          />
          {/* Seamless gradient overlays so text on left is crystal clear and image blends into white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-60" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Left Column Content */}
          <div className="max-w-2xl lg:max-w-xl py-4 lg:py-8">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.12]">
              <span className="font-serif block">Level Up Your</span>
              <span className="font-serif block">Business with</span>
              <span className="font-serif block text-slate-900 relative inline-block">
                Software
                <span className="block w-20 h-1.5 bg-[#d97706] rounded-full mt-2" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-base md:text-lg mb-8 leading-relaxed max-w-xl font-normal">
              Custom software, mobile apps, and blockchain solutions engineered for growth. 8+ years delivering excellence across healthcare, fintech, and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3.5 px-7 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.28)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.38)] transition-all active:scale-95 text-base cursor-pointer"
              >
                <span>Start a Project</span>
                <span>&rarr;</span>
              </button>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 border border-[#d97706] text-[#d97706] hover:bg-amber-50/70 bg-white/90 backdrop-blur-xs font-semibold py-3.5 px-7 rounded-xl transition-all text-base shadow-xs"
              >
                <span>View Services</span>
                <span>&darr;</span>
              </a>
            </div>

          </div>

          {/* Bottom Floating Stats Bar matching user screenshot */}
          <div className="mt-8 lg:mt-12 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3.5 lg:p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold font-serif text-slate-900 leading-tight">
                      {s.number}
                    </div>
                    <div className="text-[10px] lg:text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Who We Are & Why Choose GDSoftwares Section */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image: Modern Loft Office */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="GD Softwares Modern Office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="text-3xl font-serif font-bold text-[#d97706] mb-1">USA Outsourcing</div>
                <div className="text-slate-600 text-xs leading-relaxed">
                  Trusted custom software development partner for global enterprises and startups.
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:pl-6">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                WELCOME TO GDSOFTWARES
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-900 leading-tight">
                Who <span className="italic text-[#d97706] font-normal font-serif">We Are</span>
              </h2>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  We are an outsource software development company in USA. GD Softwares has the expertise in developing custom software applications to meet customers&apos; needs.
                </p>
                <p>
                  Our web, app &amp; software development services include customized, responsive websites that are optimized for search engines and user experience. We create native and hybrid mobile apps for iOS and Android devices that are user-friendly, secure, and efficient. We also offer e-commerce website development and website maintenance services.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  <strong>Vision:</strong> Our software development tools and products implement Object-Oriented design &amp; programming. Further, we use the most modern development tools and technologies available on the market today, staying on pace with fast-evolving digital solutions.
                </p>
              </div>

              {/* Core Offerings List from Old Site */}
              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                  Core Specializations:
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    Software Development
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    Blockchain Development
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    Mobile App Development
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    QA (Manual & Automation)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    Desktop Applications
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                    Training & Consulting
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose GDSoftwares Deep Content Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                WHY YOU CHOOSE GDSOFTWARES?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-6">
                One of the Best Software <span className="italic text-[#d97706] font-normal font-serif">Development Companies</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  We are a Software development company having a team of highly qualified professionals. We have been in the industry for the last 8 years and have delivered many projects successfully and still continuing.
                </p>
                <p>
                  Our Internet and Custom Application Development extends to Internet Business/Corporate System Development, Database Application Development, Client/Server Application Development, Windows Application Development, Android Application Development, iPhone Application Development, Quality Assurance and Testing etc.
                </p>
                <p>
                  We prioritize communication with our clients, ensuring that we understand their unique requirements and preferences throughout the development process. We place a strong emphasis on project management, ensuring that our projects are completed on time and within budget.
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-2 font-serif">8+ Years Experience</h4>
                <p className="text-sm text-slate-600">Delivering reliable, scalable digital solutions for clients globally since inception.</p>
              </div>
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-2 font-serif">Client Priority</h4>
                <p className="text-sm text-slate-600">Transparent communication, dedicated project managers, and regular milestones.</p>
              </div>
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-2 font-serif">Modern Stacks</h4>
                <p className="text-sm text-slate-600">From AI, Cloud, and Blockchain to React, Flutter, Python, and ServiceNow.</p>
              </div>
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-2 font-serif">Proven QA Testing</h4>
                <p className="text-sm text-slate-600">Manual and automated regression suites to guarantee bug-free deployments.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 5. Our Core Services Section */}
      <section id="services" className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-2 block">
                WHAT WE BUILD
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900">
                Our Core <span className="italic text-[#d97706] font-normal font-serif">Services</span>
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

          {/* Services Grid (8 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-[#fafafa] rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                      {service.badgeIcon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-t border-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Industries We Serve Section */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          
          <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-16">
            Built for Your Sector
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50/80 flex items-center justify-center border border-amber-100 group-hover:bg-[#d97706] group-hover:text-white transition-all">
                  <span className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                    {industry.icon}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-[#d97706] transition-colors">
                  {industry.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6.5. GDS Labs Innovation Spotlight Section */}
      <section className="py-24 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-100/30 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
                R&amp;D &bull; GDS LABS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                AI Voice Agents &amp; <span className="italic text-[#d97706] font-normal font-serif">Enterprise Automation</span>
              </h2>
            </div>
            <Link 
              href="/labs" 
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              Explore GDS Labs &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Lab Card 1: Voice Agents */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] border border-amber-200/60 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706] block mb-2">Real-Time Telephony</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">AI Voice Agents</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ultra-low latency (&lt;500ms) human-like voice agents handling inbound customer support, lead qualification, and live CRM calendar bookings.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Twilio &bull; LiveKit &bull; Nova-2</span>
                <Link href="/labs" className="text-[#d97706] font-semibold hover:underline">View Lab &rarr;</Link>
              </div>
            </div>

            {/* Lab Card 2: n8n Automation */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] border border-amber-200/60 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706] block mb-2">Self-Hosted Pipelines</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">n8n Enterprise Automation</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Autonomous event-driven workflows connecting complex SaaS ecosystems, databases, and AI models with zero SaaS task subscription fees.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Docker &bull; Redis &bull; Stripe Hub</span>
                <Link href="/labs" className="text-[#d97706] font-semibold hover:underline">View Lab &rarr;</Link>
              </div>
            </div>

            {/* Lab Card 3: Hybrid RAG & Copilots */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] border border-amber-200/60 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d97706] block mb-2">Hybrid Semantic Search</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">Enterprise AI Chatbots</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Context-aware internal copilots powered by hybrid vector search that answer questions with verifiable citations from company docs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>LangChain &bull; Qdrant &bull; Claude</span>
                <Link href="/labs" className="text-[#d97706] font-semibold hover:underline">View Lab &rarr;</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Our Philosophy Section (From Old Website) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Our <span className="italic text-[#d97706] font-normal font-serif">Philosophy</span>
            </h2>
            <p className="text-slate-600 text-base">
              The foundational values that inspire our engineering, culture, and client relationships every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((phil, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#fafafa] border border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-6 shadow-sm">
                    {phil.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">
                    {phil.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {phil.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#d97706] font-semibold">
                  <span>Pillar 0{idx + 1}</span>
                  <span>GDSoftwares Core</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Let Them Speak for us! (Testimonials from Old Website) */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Let Them Speak <span className="italic text-[#d97706] font-normal font-serif">For Us!</span>
            </h2>
            <p className="text-slate-600 text-base">
              Real feedback from international partners and companies who trust GDSoftwares with their mission-critical software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6 text-amber-500">
                    {[...Array(t.stars)].map((_, s) => (
                      <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-[#d97706] font-serif font-bold text-lg flex items-center justify-center shrink-0 border border-amber-200">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                    <span className="text-xs text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Development Process Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: 4 Workflow Steps */}
            <div>
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                EXPERIENCED DELIVERY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-12">
                Our Development <span className="italic text-[#d97706] font-normal font-serif">Process</span>
              </h2>

              <div className="space-y-6">
                {workflowSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-6 pb-6 border-b border-slate-200/70 last:border-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#d97706] font-bold border border-amber-200/60 flex items-center justify-center font-serif text-lg shrink-0 shadow-sm">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Coding Screen & Developer Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                  alt="Software Development in Progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Pre-Footer Call to Action */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
            WE CAN TRANSFORM YOUR DIGITAL NEEDS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight text-slate-900">
            Ready to Build Something <br/>
            <span className="italic text-[#d97706] font-normal font-serif">Exceptional?</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Tell us about your project requirements. We&apos;ll respond with a clear architectural roadmap and honest estimate within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleCall} 
              className="inline-flex justify-center items-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-4 px-9 rounded-xl shadow-[0_4px_16px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_22px_rgba(217,119,6,0.4)] transition-all text-base active:scale-95 cursor-pointer"
            >
              Schedule a Call
            </button>
            <Link 
              href="/quote" 
              className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-50 font-semibold py-4 px-9 rounded-xl transition-all text-base shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
