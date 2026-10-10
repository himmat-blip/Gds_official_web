import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native iOS & Android apps and cross-platform solutions built for scale and quality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Blockchain Development",
      description: "Smart contracts, DeFi platforms, and Web3 integrations built for security.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      )
    },
    {
      title: "Custom Software",
      description: "End-to-end enterprise software tailored to your exact workflow and stack.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
      )
    },
    {
      title: "QA & Automation",
      description: "Manual testing, Selenium automation, and CI/CD pipeline integration.",
      image: "https://images.unsplash.com/photo-1516322073796-0153366479eb?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    },
    {
      title: "Web Development",
      description: "High-performance web apps using React, Angular, and Next.js.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Ultra-intelligent solutions with accurate and reliable ML-driven outcomes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      )
    }
  ];

  return (
    <main className="min-h-screen font-sans bg-[#030712]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden pt-16">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-cyan-400 text-xs font-semibold tracking-wider">USA-BASED SOFTWARE COMPANY</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white font-serif">
                Level Up Your <br/>
                <span className="font-script text-gray-200 font-normal">Business</span> <br/>
                with Software
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                Custom software, mobile apps, and blockchain solutions engineered for growth. 8+ years delivering excellence across healthcare, fintech, and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link 
                  href="/contact-us" 
                  className="inline-flex justify-center items-center bg-[#5ed8e7] text-[#060814] font-semibold py-3.5 px-8 rounded-xl hover:bg-cyan-400 transition-colors"
                >
                  Start a Project
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex justify-center items-center border border-gray-600 text-white font-semibold py-3.5 px-8 rounded-xl hover:border-white transition-colors"
                >
                  View Services &darr;
                </Link>
              </div>

              {/* Stats moved into Hero */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                <div>
                  <h2 className="text-3xl font-bold text-[#5ed8e7] mb-1 font-serif">8+</h2>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">YEARS IN INDUSTRY</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#5ed8e7] mb-1 font-serif">200+</h2>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">PROJECTS DELIVERED</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#5ed8e7] mb-1 font-serif">50+</h2>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">GLOBAL CLIENTS</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#5ed8e7] mb-1 font-serif">99%</h2>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">CLIENT RETENTION</p>
                </div>
              </div>
            </div>

            {/* Right Content - Overlapping Images Composition */}
            <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center mt-12 lg:mt-0">
              
              {/* Top Right Large Image */}
              <div className="absolute top-0 right-0 w-[80%] h-[320px] rounded-2xl overflow-hidden border border-[#1e2954] shadow-2xl z-10 bg-[#111936]">
                <div className="absolute inset-0 opacity-70 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                
                {/* Floating Tags on Large Image */}
                <div className="absolute top-6 left-6 tech-bubble text-white text-xs font-semibold px-4 py-1.5 rounded-md border border-cyan-500/30">React</div>
                <div className="absolute top-6 right-6 tech-bubble text-white text-xs font-semibold px-4 py-1.5 rounded-md border border-cyan-500/30">Flutter</div>
              </div>

              {/* Bottom Left Smaller Image */}
              <div className="absolute bottom-8 left-8 w-[50%] h-[240px] rounded-2xl overflow-hidden border border-[#1e2954] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 bg-[#111936]">
                <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              </div>

              {/* Bottom Right Small Badge Image/Tag */}
              <div className="absolute bottom-16 right-12 tech-bubble text-white text-xs font-semibold px-4 py-1.5 rounded-md border border-cyan-500/30 z-20">Web3</div>

              {/* GD Circular Badge */}
              <div className="absolute top-[220px] left-0 w-28 h-28 rounded-full bg-gradient-to-br from-[#060814] to-[#111936] border border-cyan-500/50 shadow-[0_0_30px_rgba(0,210,255,0.2)] flex items-center justify-center z-30">
                <div className="absolute inset-2 rounded-full border border-[#1e2954]"></div>
                <span className="text-3xl font-bold text-white tracking-wider font-serif">GD</span>
              </div>
              
              {/* Decorative Subtle Circles behind everything */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-cyan-900/10 rounded-full z-0 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-24 bg-[#060814] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image Placeholder */}
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full aspect-[4/3] bg-[#111936] rounded-2xl overflow-hidden border border-[#1e2954] relative">
                {/* Simulated Image Content */}
                <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060814]/60 to-transparent"></div>
              </div>
              
              {/* Overlapping Badge */}
              <div className="absolute -bottom-8 right-8 bg-[#0b1129] border border-[#1e2954] p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center min-w-[160px]">
                <span className="text-4xl font-bold text-[#5ed8e7] font-serif mb-1">200+</span>
                <span className="text-xs text-gray-400 tracking-wider">Projects Delivered</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#5ed8e7] text-sm font-bold tracking-widest uppercase mb-4">WHO WE ARE</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                8 Years of Building <span className="font-script text-cyan-400 font-normal">Digital Excellence</span>
              </h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                GD Softwares is a USA-based outsource software development company with a team of highly qualified professionals. We cover the full spectrum — from corporate systems and databases to blockchain, mobile apps, and AI-powered solutions.<br/><br/>
                We don't just deliver code. We build partnerships, delivering transparent timelines, honest pricing, and results that scale.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0c1a] border border-[#1e2954] p-6 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-3xl font-bold text-[#5ed8e7] font-serif mb-2">8+</h4>
                  <p className="text-xs text-gray-400">Years in Industry</p>
                </div>
                <div className="bg-[#0a0c1a] border border-[#1e2954] p-6 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-3xl font-bold text-[#5ed8e7] font-serif mb-2">200+</h4>
                  <p className="text-xs text-gray-400">Projects Delivered</p>
                </div>
                <div className="bg-[#0a0c1a] border border-[#1e2954] p-6 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-3xl font-bold text-[#5ed8e7] font-serif mb-2">50+</h4>
                  <p className="text-xs text-gray-400">Global Clients</p>
                </div>
                <div className="bg-[#0a0c1a] border border-[#1e2954] p-6 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-3xl font-bold text-[#5ed8e7] font-serif mb-2">99%</h4>
                  <p className="text-xs text-gray-400">Client Retention</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Our Services Section */}
      <section className="py-24 bg-[#030712] text-white relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#5ed8e7] text-sm font-bold tracking-widest uppercase mb-3">WHAT WE BUILD</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif">Our Core <span className="font-script text-cyan-400 font-normal">Services</span></h3>
            </div>
            <Link 
              href="/services" 
              className="inline-flex justify-center items-center border border-gray-700 text-gray-300 font-medium py-2.5 px-6 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
            >
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#0b1129] border border-[#1e2954] rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-colors flex flex-col h-full">
                {/* Image Top Half */}
                <div className="h-40 w-full relative bg-[#111936] overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0b1129] via-[#0b1129]/40 to-transparent z-10"></div>
                   <div 
                     className="absolute inset-0 opacity-60 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                     style={{ backgroundImage: `url('${service.image}')` }}
                   ></div>
                   
                   {/* Icon Badge overlapping image and content */}
                   <div className="absolute bottom-4 left-6 z-20 w-10 h-10 rounded-lg bg-[#0b1129] border border-cyan-500/30 flex items-center justify-center shadow-lg">
                     {service.icon}
                   </div>
                </div>
                
                {/* Content Bottom Half */}
                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Section */}
      <section className="py-24 bg-[#060814] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-[#9d4edd] text-sm font-bold tracking-widest uppercase mb-4">INDUSTRIES WE SERVE</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif mb-16">Built for Your Sector</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Healthcare", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> },
              { name: "Fintech", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
              { name: "EdTech", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Marketplace", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> },
              { name: "Transport", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg> },
              { name: "Gaming", icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> }
            ].map((industry, i) => (
              <div key={i} className="bg-[#0b1129] border border-[#1e2954] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#060814] flex items-center justify-center border border-[#1e2954] group-hover:bg-cyan-500/10 transition-colors">
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work Section */}
      <section className="py-24 bg-[#030712] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content (Steps) */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                A Process Built <span className="font-script text-[#9d4edd] font-normal">for Clarity</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                We've refined our delivery model across 200+ projects to eliminate surprises and maximize velocity from day one.
              </p>

              <div className="space-y-10 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-10 bottom-10 w-px bg-[#1e2954]"></div>
                
                {[
                  { num: "01", title: "Analysis", desc: "Deep-dive discovery to map requirements, risks, and technical constraints." },
                  { num: "02", title: "Design", desc: "Architecture blueprints, UX prototypes, and technology stack selection." },
                  { num: "03", title: "Development", desc: "Agile sprints with continuous integration, code reviews, and demos." },
                  { num: "04", title: "Support", desc: "Post-launch monitoring, optimization, and long-term maintenance." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-[#0b1129] border border-[#1e2954] flex items-center justify-center text-cyan-400 font-bold shrink-0">
                      {step.num}
                    </div>
                    <div className="pt-2.5">
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-[#111936] rounded-2xl overflow-hidden border border-[#1e2954] relative">
                <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 to-transparent"></div>
              </div>
              
              <div className="absolute top-8 left-8 bg-[#0b1129] border border-[#1e2954] p-4 px-6 rounded-xl shadow-2xl flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#5ed8e7] font-serif mb-1">8+</span>
                <span className="text-xs text-gray-400">Years Experience</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[#060814] z-0"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/60 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Ready to Build Something <br/>
            <span className="font-script text-cyan-400 font-normal">Exceptional?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Tell us about your project. We'll respond with a clear plan and honest timeline within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/quote" 
              className="inline-flex justify-center items-center bg-gradient-to-r from-[#5ed8e7] to-[#9d4edd] text-white font-semibold py-4 px-10 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(94,216,231,0.3)] text-lg"
            >
              Get a Free Quote
            </Link>
            <a 
              href="tel:+19168060052" 
              className="inline-flex justify-center items-center border border-gray-600 text-white font-semibold py-4 px-10 rounded-xl hover:border-white transition-colors text-lg"
            >
              +1 916-806-0052
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
