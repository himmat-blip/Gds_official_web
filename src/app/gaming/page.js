"use client";

import Image from "next/image";
import Link from "next/link";

export default function GamingPortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const gameServices = [
    {
      num: "01",
      title: "1. Custom Game Development",
      items: [
        {
          label: "Bespoke Solutions",
          text: "We specialize in providing game development tailored to your specific vision and requirements."
        },
        {
          label: "Platform Expertise",
          text: "From mobile and PC to consoles and VR/AR, we develop games for various platforms, ensuring maximum reach and engagement and user-friendly interface."
        },
        {
          label: "Genre Diversity",
          text: "Whether it's action, adventure, strategy, RPG, simulation, or casual games, we have a team of experienced game developer to create captivating experiences across genres."
        }
      ]
    },
    {
      num: "02",
      title: "2. Game Design And Concept Art",
      items: [
        {
          label: "Creative Excellence",
          text: "Our talented team of developers and designers conceptualize and craft visually stunning game environments, characters, and assets."
        },
        {
          label: "Storyboarding and Prototyping",
          text: "We create detailed storyboards and prototypes to visualize game mechanics, ensuring seamless gameplay and user interaction."
        }
      ]
    },
    {
      num: "03",
      title: "3. Unity And Unreal Engine Development",
      items: [
        {
          label: "Industry-Leading Technologies",
          text: "We utilize cutting-edge game engines such as Unity and Unreal Engine to develop high-performance, scalable games."
        },
        {
          label: "Real-Time 3D Development",
          text: "Our expertise in real-time 3D rendering allows us to create immersive worlds and interactive experiences that captivate players."
        }
      ]
    },
    {
      num: "04",
      title: "4. Multiplayer And Online Gaming",
      items: [
        {
          label: "Social Connectivity",
          text: "We specialize in developing multiplayer and online games that foster community engagement and competitive gameplay."
        },
        {
          label: "Server Integration",
          text: "Our developers ensure robust server architecture and backend integration for smooth multiplayer experiences and real-time interactions."
        }
      ]
    },
    {
      num: "05",
      title: "5. Game Testing And Quality Assurance",
      items: [
        {
          label: "Rigorous Testing",
          text: "We conduct comprehensive QA testing to identify and resolve bugs, glitches, and performance issues, ensuring a polished and seamless gaming experience."
        }
      ]
    }
  ];

  const unityCards = [
    {
      title: "GAME DEVELOPMENT",
      badge: "border-amber-400 bg-amber-50 text-amber-800",
      desc: "Unity, primarily used for game development, enables the creation of cross-platform products that deliver a fantastic experience to your target audience. Secure a talented, dedicated team for your project today.",
      icon: (
        <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "VR/AR DEVELOPMENT",
      badge: "border-emerald-400 bg-emerald-50 text-emerald-800",
      desc: "We use Unity as the foundation for nearly all our virtual reality products, developing highly realistic and efficient training environments for healthcare, manufacturing, education, and various other industries.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="10" rx="3" />
          <circle cx="8" cy="12" r="2" />
          <circle cx="16" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "2D&3D ANIMATION",
      badge: "border-rose-400 bg-rose-50 text-rose-800",
      desc: "Our talented developers and artists will design stunning visual effects and create captivating characters for games or mobile apps. Leverage Unity's powerful tools to leave a lasting impression on your audience.",
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "METAVERSE GAMING",
      badge: "border-cyan-400 bg-cyan-50 text-cyan-800",
      desc: "By combining the power of blockchain technology with Unity development tools, we create decentralized 3D metaverse spaces tailored to your business needs.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const whyChoosePillars = [
    {
      badge: "Passion for Gaming:",
      text: "We are experienced gamers and passionate creators dedicated to pushing the boundaries of the gaming industry."
    },
    {
      badge: "Proven Track Record:",
      text: "With a portfolio of successful game titles across genres and platforms, we have the experience and expertise to deliver exceptional gaming apps."
    },
    {
      badge: "Collaborative Approach:",
      text: "We believe in close collaboration with our clients, involving them in every step of the development process to provide client satisfaction."
    }
  ];

  const valueHighlights = [
    "Monetization Opportunities",
    "Feedback Adaptability",
    "Boosts Game Shelf-Life",
    "Creative Control",
    "Unique and Personalized Gameplay Experiences"
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
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
      desc: "Multi-vendor B2B and B2C marketplace architectures."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section: GDS Gaming & Intro */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                PORTFOLIO &bull; GDS GAMING
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">Game Development</span>
                <span className="font-serif italic text-[#d97706] font-normal">Company</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  In the dynamic world of gaming, where innovation meets technology, Gdsoftwares stands as a beacon of creativity and excellence. We are a leading game development company dedicated to creating immersive, engaging, and memorable gaming experiences across various platforms.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  Whether you have a new groundbreaking idea or a studio looking to scale your game production, our team of dedicated developers, and designers is here to bring your vision to life.
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
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                  alt="Game Development, 3D Rendering and Interactive Gameplay"
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

      {/* 2. Energize Your Game Visions with Our High Performing Game Development Services */}
      <section className="py-20 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
            CREATIVE GAME ART &amp; ENGINEERING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6">
            Energize Your Game Visions with Our High Performing Game Development Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Whether it&apos;s hyper-casual games, arcade games, or battle games, our creative team of game artists and developers has the expertise to meet your diverse game development needs. We provide end-to-end services to create games that your target players will love.
          </p>
        </div>
      </section>

      {/* 3. Game Development Services We Provide (Exact 5 Categories with Bespoke items) */}
      <section id="services-breakdown" className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Game Development Services We Provide
            </h2>
            <p className="text-slate-600 text-base">
              End-to-end development services across design, engines, multiplayer server infrastructure, and quality assurance.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {gameServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#fafafa] p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:border-amber-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-xl bg-amber-50 text-[#d97706] font-mono font-bold text-sm flex items-center justify-center border border-amber-200/60">
                    {service.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200/60">
                  {service.items.map((it, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                      <div className="inline-block px-3 py-1 rounded-md bg-amber-50 text-[#d97706] font-semibold text-xs mb-3 border border-amber-200/50">
                        {it.label}:
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {it.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Unity App Development Company (Exact 4 Cards from Screenshot 2) */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              UNITY ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Unity App Development Company
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Create captivating 3D experiences using Unity, a leading ecosystem for building engaging, realistic, and scalable games and applications. We offer world-class custom Unity app development services to bring your most ambitious projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {unityCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-center justify-center mb-6 shadow-xs">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
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

      {/* 5. Why Choose Gd Softwares for Game Development Services? (Exact from Screenshot 1) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                EXPERIENCED CREATORS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-8 leading-tight">
                Why Choose Gd Softwares for Game Development Services?
              </h2>

              <div className="space-y-6">
                {whyChoosePillars.map((p, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#fafafa] border border-slate-200/80">
                    <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-[#d97706] font-bold text-xs mb-2">
                      {p.badge}
                    </span>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Value Proposition Badges (Infographic Highlights from Screenshot 1) */}
            <div className="lg:col-span-5 bg-amber-50/60 p-8 md:p-10 rounded-3xl border border-amber-200/70 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 pb-3 border-b border-amber-200/60">
                Core Game Delivery Advantages
              </h3>
              
              <div className="space-y-4">
                {valueHighlights.map((hl, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-amber-200/80 shadow-xs"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#d97706] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      &check;
                    </span>
                    <span className="text-slate-800 font-semibold text-sm">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Related Portfolio Section */}
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

      {/* 7. Pre-Footer Call to Action Banner */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-[#fafafa] border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              START YOUR GAME PRODUCTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to bring your game vision to life?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you have a new groundbreaking idea or a studio looking to scale your game production, our team of dedicated developers and designers is here to deliver exceptional gaming experiences.
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
