"use client";

import Image from "next/image";
import Link from "next/link";

export default function HealthcarePortfolio() {
  const handleScheduleCall = (e) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
    } else {
      window.location.href = "/contact-us";
    }
  };

  const comprehensiveHospitalList = [
    { num: "01", title: "Robust Data Engines" },
    { num: "02", title: "Internet of Medical Things (IoMT)" },
    { num: "03", title: "Remote Patient Care Solutions" },
    { num: "04", title: "Fitness and Health Awareness Apps" },
    { num: "05", title: "Electronic Health Records" },
  ];

  const customItServicesList = [
    "Assessment Of Existing Medical Workflows At Hospitals And Clinics",
    "Design Of Architectural Framework, Followed By The Software Platform",
    "Inclusion Of Pre-Determined Features For Day-To-Day Operations",
    "Deployment At Client Organization",
    "Comprehensive Training For The Staff To Use The Solutions",
  ];

  const hospitalManagementList = [
    "Development Of A Custom Hospital Management Software Platform",
    "Real-Time Data On Everyday Workflows",
    "Dashboard To Track And Monitor Financial Aspects Like Accounts Receivable, Reimbursements, Etc.",
    "Feature For Oversight Of Inventory And Track Usage",
    "Function To Track Employee Time Sheets, Overtime, And Other Parameters Of Employee Performance",
  ];

  const mobileDevicesList = [
    "Design Of User-Friendly Interface",
    "Application Development For Both Android And IOS Platforms",
    "Comprehensive Application Testing To Ensure Functionality And Data Security",
    "Compliance With HIPAA Regulations",
    "Timely Support And Regular Update",
  ];

  const relatedPortfolio = [
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
      
      {/* 1. Hero Section: HEALTHCARE IT SOLUTIONS AND SERVICES */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#faf8f5] via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Subtle Warm Amber ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-100/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.12]">
                <span className="font-serif block">Healthcare IT Solutions</span>
                <span className="font-serif italic text-[#d97706] font-normal">And Services</span>
              </h1>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  Gdsoftwares supports the idea that technology can improve the care you offer. Our healthcare IT solutions streamline operations, improve decision-making, and foster innovation.
                </p>
                <p className="text-slate-500 text-sm md:text-base">
                  Collaborate with us to leverage advanced technology and a fresh, patient-focused strategy. Embrace a more data-driven healthcare approach with us now!
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
                  href="#custom-solutions"
                  className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/90 hover:bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
                >
                  Explore Solutions &darr;
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare Specialists and Digital Care"
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

      {/* 2. PIONEERING HEALTHCARE SOFTWARE SOLUTIONS & COMPREHENSIVE HOSPITAL INFORMATION SYSTEMS */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
            
            {/* Left Description */}
            <div className="lg:col-span-6">
              <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                INNOVATIVE CARE SYSTEMS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                Pioneering Healthcare Software Solutions
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                Gdsoftwares stands out as a top player in healthcare IT solutions, staying abreast of the latest industry trends. Our vast experience &amp; technical know-how enable us to provide tools that boost your services and streamline your operations.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Hospital information systems, remote patient care solutions, fitness apps - count on us to guide you through the digital transformation journey.
              </p>
            </div>

            {/* Right: Comprehensive Hospital Information Systems List */}
            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900 mb-6 pb-4 border-b border-slate-100">
                Comprehensive Hospital Information Systems
              </h3>
              
              <div className="space-y-4">
                {comprehensiveHospitalList.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-[#fafafa] hover:bg-white hover:border-amber-300 transition-all shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] font-bold text-sm flex items-center justify-center shrink-0 border border-amber-200/60 font-mono">
                      {item.num}
                    </div>
                    <span className="text-slate-800 font-semibold text-base">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT SOLUTIONS (3 Big Feature Cards) */}
      <section id="custom-solutions" className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              TAILORED ENGINEERING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Custom Healthcare Software Development Solutions
            </h2>
            <p className="text-slate-600 text-base">
              Secure, standards-compliant digital healthcare software engineered to enhance clinical workflows and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Healthcare Web Application Development */}
            <div className="bg-[#fafafa] p-8 md:p-10 rounded-3xl border border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] flex items-center justify-center mb-6 border border-amber-200/60">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                  Healthcare Web Application Development
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Gdsoftwares focuses on making safe and custom healthcare websites following rules and standards. Our goal is to guarantee, meeting the best results for our customers.
                </p>
              </div>
            </div>

            {/* Card 2: Healthcare Mobile App Development */}
            <div className="bg-[#fafafa] p-8 md:p-10 rounded-3xl border border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] flex items-center justify-center mb-6 border border-amber-200/60">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                  Healthcare Mobile App Development
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  At Gdsoftwares, we utilize tools like Xamarin and the C# mobile framework &amp; REST APIs. They help in creating custom healthcare mobile apps that improve workflow &amp; enhance efficiency. Our main focus is on protecting data privacy and security. We use two-factor authentication to secure data management assessment, and treatment planning.
                </p>
              </div>
            </div>

            {/* Card 3: Custom Healthcare Application Development */}
            <div className="bg-[#fafafa] p-8 md:p-10 rounded-3xl border border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#d97706] flex items-center justify-center mb-6 border border-amber-200/60">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                  Custom Healthcare Application Development
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Gdsoftwares&apos; healthcare app development solutions come with many advantages. These include managing medical records, monitoring health remotely, scheduling appointments, and more. The software is super flexible, scalable, and user-friendly. It&apos;s also easy to integrate into existing systems. Our skilled developers focus on security and reliability to deliver trustworthy custom healthcare apps for our clients.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. HEALTHCARE IT SOLUTIONS DEVELOPMENT SERVICES (3 In-Depth Detailed Columns) */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              CAPABILITIES &amp; FRAMEWORKS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">
              Healthcare IT Solutions Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Systematic development workflows covering medical audits, hospital management, and mobile platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Custom Healthcare IT Solutions Development Services */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-2 font-mono">
                  SERVICE MODULE 01
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Custom Healthcare IT Solutions Development Services
                </h3>
                
                <ol className="space-y-4">
                  {customItServicesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-50 text-[#d97706] font-bold text-xs flex items-center justify-center shrink-0 border border-amber-200/60 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Column 2: Development Of Healthcare Technology And Systems For Hospital Management */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-2 font-mono">
                  SERVICE MODULE 02
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Development Of Healthcare Technology And Systems For Hospital Management
                </h3>
                
                <ol className="space-y-4">
                  {hospitalManagementList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-50 text-[#d97706] font-bold text-xs flex items-center justify-center shrink-0 border border-amber-200/60 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Column 3: Healthcare IT Solution For Mobile Devices */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-2 font-mono">
                  SERVICE MODULE 03
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Healthcare IT Solution For Mobile Devices
                </h3>
                
                <ol className="space-y-4">
                  {mobileDevicesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-50 text-[#d97706] font-bold text-xs flex items-center justify-center shrink-0 border border-amber-200/60 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Related Portfolio Section (From Old Site Bottom) */}
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
              COLLABORATE WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-slate-900">
              Ready to modernize your healthcare systems?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Collaborate with us to leverage advanced technology and a fresh, patient-focused strategy. Embrace a more data-driven healthcare approach with us now!
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
