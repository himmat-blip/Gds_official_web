import Link from "next/link";

export const metadata = {
  title: "Hire Dedicated Developers | GD Softwares",
  description:
    "Hire dedicated developers and IT talent with 8+ years of industry experience across Web, Mobile, Cloud, AI, and QA.",
};

export default function HireResourcesPage() {
  const steps = [
    {
      num: "01",
      title: "Select the Skill",
      desc: "Browse our talent catalog and choose the technology expertise you need.",
    },
    {
      num: "02",
      title: "Share Project Details",
      desc: "Tell us about your project scope, timeline, and specific requirements.",
    },
    {
      num: "03",
      title: "Receive Free Quote",
      desc: "Get a transparent, detailed quote within 24 hours — no hidden fees.",
    },
    {
      num: "04",
      title: "Contract & Payment",
      desc: "Simple, straightforward contracts with flexible payment terms.",
    },
    {
      num: "05",
      title: "You're Good to Go!",
      desc: "Your dedicated developer starts immediately, integrated into your workflow.",
    },
  ];

  const talents = [
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      desc: "AWS, Azure, GCP engineers who set up CI/CD pipelines, containerization, and infrastructure as code.",
      tags: ["AWS", "Azure", "Docker", "Kubernetes"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      desc: "Analysts and engineers who turn raw data into actionable business insights and dashboards.",
      tags: ["Python", "SQL", "Power BI", "Tableau"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      id: "project-programme",
      title: "Project & Programme",
      desc: "Certified PMs who keep your projects on time, in scope, and within budget using agile methodologies.",
      tags: ["Agile", "Scrum", "Jira", "Kanban"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      ),
    },
    {
      id: "ui-ux",
      title: "Front End & UI/UX",
      desc: "Designers and developers who create intuitive, pixel-perfect interfaces that delight users.",
      tags: ["React", "Figma", "TypeScript", "CSS"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: "dotnet",
      title: ".NET Developer",
      desc: "Experienced .NET engineers for enterprise web applications, APIs, and microservices architecture.",
      tags: [".NET", "C#", "ASP.NET", "Azure"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "business-consulting",
      title: "Business Consulting",
      desc: "Technology consultants who align your software strategy with business objectives and growth goals.",
      tags: ["Strategy", "Analysis", "Roadmapping", "ROI"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 12 12 22 2 12" />
        </svg>
      ),
    },
    {
      id: "mean-mern",
      title: "MEAN / MERN Stack",
      desc: "Full-stack JavaScript engineers proficient in MongoDB, Express, React/Angular, and Node.js.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      desc: "Android and iOS developers who build performant, polished native and cross-platform apps.",
      tags: ["Flutter", "React Native", "Swift", "Kotlin"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: "testing-qa",
      title: "Testing & QA",
      desc: "Manual and automation testers ensuring your software is bug-free, reliable, and production-ready.",
      tags: ["Selenium", "Jest", "Postman", "JIRA"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "laravel",
      title: "Laravel Developer",
      desc: "PHP/Laravel specialists for backend APIs, CMS solutions, e-commerce platforms, and SaaS products.",
      tags: ["Laravel", "PHP", "MySQL", "REST API"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: "wearable",
      title: "Wearable App Dev",
      desc: "Specialists in smartwatch, fitness tracker, and IoT wearable app development.",
      tags: ["Wear OS", "watchOS", "BLE", "HealthKit"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <polyline points="12 9 12 12 13.5 13.5" />
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.34a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
      ),
    },
    {
      id: "other-it",
      title: "Other IT Roles",
      desc: "Can't find what you're looking for? Tell us your requirement and we'll source the right talent.",
      tags: ["Custom", "On Request", "Any Stack", "Any Domain"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  const advantages = [
    {
      title: "8+ Years Experience",
      desc: "Deep domain knowledge across corporate systems, databases, gaming, blockchain, and mobile platforms.",
      icon: (
        <svg className="w-7 h-7 text-[#00d2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Flexible Engagement",
      desc: "Part-time, full-time, or project-based. Scale your team up or down based on your needs.",
      icon: (
        <svg className="w-7 h-7 text-[#00d2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 12 12 22 2 12" />
        </svg>
      ),
    },
    {
      title: "Free Quote in 24hrs",
      desc: "Transparent pricing with no hidden fees. Get a detailed quote within 24 hours of your request.",
      icon: (
        <svg className="w-7 h-7 text-[#00d2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#060b13] text-white selection:bg-[#00d2ff] selection:text-black">
      {/* Background ambient radial lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-24 overflow-x-hidden">
        {/* Section 1: Hero Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center mb-16 sm:mb-20 md:mb-28">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0c1626]/80 backdrop-blur-md text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#00d2ff] mb-4 sm:mb-6 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse" />
              DEDICATED DEVELOPERS
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              <span className="font-serif">Hire Dedicated </span>
              <br className="hidden sm:block" />
              <span className="font-serif italic text-[#00d2ff]">Developers</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
              5 quick steps to get skilled coders for your next project. Our team of 8+ year veterans integrates seamlessly into your workflow.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto text-center justify-center bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white px-7 py-3.5 sm:py-3 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(0,180,216,0.55)] shadow-[0_0_15px_rgba(0,180,216,0.35)] transition-all text-sm tracking-wide active:scale-95"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto text-center justify-center bg-[#0c1424] border border-slate-700/80 hover:border-slate-500 text-white px-7 py-3.5 sm:py-3 rounded-xl font-semibold transition-all text-sm tracking-wide active:scale-95"
              >
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Quick Steps Glass Card */}
          <div className="lg:col-span-5 bg-[#0c1322]/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 backdrop-blur-md shadow-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#00d2ff] uppercase mb-5 sm:mb-6">
              5 QUICK STEPS
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-3.5 sm:gap-4 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#070b14] border border-cyan-500/30 text-[#00d2ff] flex items-center justify-center font-bold text-xs shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,210,255,0.25)] transition-all">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-[15px] mb-0.5 sm:mb-1 group-hover:text-[#00d2ff] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-[13px] md:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Available Talent / Hire by Skill Set */}
        <div className="mb-16 sm:mb-20 md:mb-28">
          <div className="mb-8 sm:mb-12 md:mb-14">
            <span className="text-xs font-bold tracking-widest text-[#00d2ff] uppercase block mb-2 sm:mb-3">
              AVAILABLE TALENT
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              <span className="font-serif">Hire by </span>
              <span className="font-serif italic text-[#00d2ff]">Skill Set</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              All resources come with 8+ years of industry experience and flexible engagement models.
            </p>
          </div>

          {/* 4-Column Talent Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {talents.map((talent) => (
              <div
                key={talent.id}
                className="group bg-[#0c1322] border border-slate-800/90 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 active:scale-[0.99]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#070b14] border border-cyan-500/30 text-[#00d2ff] flex items-center justify-center mb-4 sm:mb-5 shadow-sm group-hover:shadow-[0_0_12px_rgba(0,210,255,0.25)] transition-all">
                    {talent.icon}
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-[#00d2ff] transition-colors">
                    {talent.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {talent.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                    {talent.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium bg-[#070b14] border border-slate-800/90 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/quote?role=${talent.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2ff] hover:text-white transition-colors group/link"
                  >
                    <span>Hire {talent.title.replace(" Developer", "").replace(" Development", "")}</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Why Choose Us (The GD Softwares Advantage) */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center">
          <div className="mb-8 sm:mb-12 md:mb-14">
            <span className="text-xs font-bold tracking-widest text-[#00d2ff] uppercase block mb-2 sm:mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              <span className="font-serif">The GD Softwares </span>
              <span className="font-serif italic text-[#00d2ff]">Advantage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 text-center">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#0c1322] border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,210,255,0.1)] transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#070b14] border border-cyan-500/30 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                  {adv.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {adv.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Bottom CTA Banner */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-slate-800/90 py-10 sm:py-16 px-5 sm:px-8 md:px-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              <span className="font-serif">Ready to </span>
              <span className="font-serif italic text-[#00d2ff]">Hire Now?</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Tell us your requirements and we'll match you with the right talent within 24 hours.
            </p>
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,180,216,0.55)] shadow-[0_0_20px_rgba(0,180,216,0.35)] transition-all text-sm sm:text-base active:scale-95"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
