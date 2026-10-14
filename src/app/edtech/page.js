"use client";

import Image from "next/image";
import Link from "next/link";

export default function EdTechPortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const benefits = [
    {
      num: "1",
      title: "More Immersive Education",
      desc: "Edtech software ensures a more immersive educational experience with rich learning resources."
    },
    {
      num: "2",
      title: "Highly Customized Solutions",
      desc: "We provide highly customized edtech software development solutions for all students, accommodating various learning styles and capabilities."
    },
    {
      num: "3",
      title: "Easier Access",
      desc: "Edtech software development solutions provide easier access to supplementary educational resources."
    },
    {
      num: "4",
      title: "Implementation In All Areas",
      desc: "As technology has revolutionized every sector, digital advancements now benefit students by better preparing them for the current job market."
    },
    {
      num: "5",
      title: "Collaboration",
      desc: "Moreover, students will experience increased collaboration beyond the classroom."
    },
    {
      num: "6",
      title: "More Resources",
      desc: "A wider choice of materials is available with easier access, enhancing the overall learning experience."
    }
  ];

  const solutionsList = [
    "Web and mobile e-learning solutions development",
    "Enterprise learning management system development",
    "Attendance tracking software solutions",
    "Learning systems Integration"
  ];

  const whyChooseReasons = [
    {
      num: "01",
      title: "Quality Of Services We Offer",
      desc: "At Gdsoftwares, we work exclusively with experienced and knowledgeable professionals. We provide the highest quality education software development services and never compromise on the solutions we offer. Consequently, our clients consider us the most trustworthy and reliable edtech software development service provider."
    },
    {
      num: "02",
      title: "Ensured Customer Satisfaction",
      desc: "We recognize how important customer satisfaction is, particularly in the realm of technology solutions. It's crucial for your business's success & growth Because of this, our team works hard. Dedicatedly, we strive to deliver high-quality, innovative, and feature-rich edtech software. Our experts utilize the latest technologies to make sure you receive the solutions you need."
    },
    {
      num: "03",
      title: "Enhanced Security",
      desc: "We cover a wide range of technology stacks to provide highly optimized and secure edtech software. Our developers implement standard security solutions in all projects to protect your system from piracy and other security threats."
    },
    {
      num: "04",
      title: "Years Of Experience",
      desc: "Gdsoftwares has been in the industry for many years now. Over time we have built a strong reputation for quality & reliability. We've worked with multiple businesses in education. This experience has helped us become one of the most trusted names in education software development."
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
      title: "GDS Fintech",
      category: "Fintech",
      link: "/fintech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
      desc: "Digital banking, crypto wallets & automated fraud detection."
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
      
      {/* 1. Hero Section: GDS Edtech & EDTECH SOFTWARE DEVELOPMENT */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                PORTFOLIO &bull; GDS EDTECH
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">EdTech Software</span>
                <span className="font-serif italic text-[#d97706] font-normal">Development</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  If you&apos;re looking for edtech software for your classroom or school, Gdsoftwares can help. We create custom education-tech solutions. This way, learning &amp; training can be fun and interactive.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  Our great technology platform is designed for both school management &amp; students. It offers a special way to learn effectively.
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
                  href="#benefits"
                  className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/90 hover:bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
                >
                  Explore Benefits &darr;
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Interactive Classroom and E-Learning Platform"
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

      {/* 2. Benefits of the Edtech (6 Exact Cards from Screenshot 2) */}
      <section id="benefits" className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              ADVANTAGES &amp; VALUE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Benefits of the Edtech
            </h2>
            <p className="text-slate-600 text-base">
              Benefits of edtech software development for better learning? Here are some important ones to consider:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] font-bold text-sm flex items-center justify-center border border-amber-200/60 mb-5 font-mono">
                    0{item.num}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">
                    {item.num}. {item.title}
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

      {/* 3. Edtech software development Solutions that we provide (Screenshot 3) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                WHAT WE PROVIDE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Edtech software development Solutions that we provide
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                <p>
                  Gdsoftwares has a professional, experienced, and dedicated team of developers and designers who specialize in their respective fields. Our team can handle various edtech software development projects.
                </p>
                <p className="font-medium text-slate-800">
                  Interested in the types of edtech software development solutions we offer? Take a look at the list below:
                </p>
              </div>

              {/* 4 Solutions List */}
              <div className="space-y-3 mb-8">
                {solutionsList.map((sol, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 bg-[#fafafa] hover:bg-white hover:border-amber-300 transition-all shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-[#d97706] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-slate-800 font-semibold text-sm md:text-base">
                      {sol}
                    </span>
                  </div>
                ))}
              </div>

              {/* IoT & AI Highlight Paragraph */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-slate-700 text-sm leading-relaxed">
                Our edtech software development services also provide efficient integration of the Internet of Things (IoT) in education. These IoT integrations play a vital role in the future of education, enabling data-driven learning methods and AI. Consequently, educational institutions can offer students personalized and enhanced learning experiences.
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
                  alt="Student using e-learning software"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Why choose Gdsoftwares as an education software development (Screenshot 4) */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              PROVEN EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Why choose Gdsoftwares as an education software development
            </h2>
            <p className="text-slate-600 text-base">
              If you&apos;re wondering why you should choose Gdsoftwares for education software development services, here are some compelling reasons:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseReasons.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider mb-2">
                    REASON {item.num}
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Related Portfolio Section */}
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

      {/* 6. Pre-Footer Call to Action Banner */}
      <section className="py-24 relative overflow-hidden text-center text-slate-900 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-12 md:p-16 shadow-md">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to build innovative EdTech software?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              If you&apos;re looking for edtech software for your classroom or school, Gdsoftwares can help. We create custom education-tech solutions that make learning fun, interactive, and effective.
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
