import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | GD Softwares - Software with Purpose",
  description:
    "We are a USA-based software development company helping organizations turn complex ideas into clear, useful, and beautifully engineered digital products.",
};

export default function AboutUsPage() {
  const whyChooseUs = [
    {
      num: "01",
      title: "Technical depth",
      desc: "Deep engineering expertise across modern stacks, cloud infrastructure, and emerging technology.",
    },
    {
      num: "02",
      title: "Business alignment",
      desc: "We build software that directly moves your business forward, matching your workflows and strategic business goals.",
    },
    {
      num: "03",
      title: "Analysis & support",
      desc: "Careful discovery comes first, while our support continues through implementation, launch, and future improvements.",
    },
    {
      num: "04",
      title: "Best practices",
      desc: "Open standards, thoughtful architecture, transparent delivery, and quality engineering are built into the way we work.",
    },
  ];

  return (
    <div className="bg-[#060b13] text-white min-h-screen pt-32 pb-24 selection:bg-cyan-500 selection:text-black">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 1. Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-[#00d2ff] uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
            ABOUT GDSOFTWARES
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15]">
            <span className="font-serif text-white">Software with purpose.</span>
            <br />
            <span className="font-serif italic text-[#00d2ff]">Partnership by design.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are a USA-based software development company helping organizations turn complex ideas into clear, useful, and beautifully engineered digital products.
          </p>
        </div>

        {/* 2. Visual Banner & Narrative Section */}
        <div className="mb-28 md:mb-36">
          {/* Image Banner */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800/90 shadow-2xl mb-16 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=80"
              alt="GD Softwares engineering and design team collaboration"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.82]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060b13]/60 via-transparent to-[#060b13]/60" />
          </div>

          {/* Narrative Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              <span className="font-serif">Custom software, grounded in your </span>
              <span className="font-serif italic text-[#00d2ff]">real needs.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                We develop custom applications around our clients' workflows, customers, and ambitions. Our engineers use object-oriented design, modern development practices, and proven technologies to create products that are maintainable as well as innovative.
              </p>
              <p>
                Technology moves quickly. We stay on pace without chasing trends—selecting the right tools to create secure, scalable solutions for the web, mobile, cloud, blockchain, QA, and AI.
              </p>
            </div>

            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] transition-all text-base active:scale-95 group"
              >
                <span>Meet your technology partner</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Why Choose Us Section */}
        <div className="mb-28 md:mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-[#00d2ff] uppercase tracking-wider mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="font-serif">Small enough to care. </span>
              <br />
              <span className="font-serif italic text-[#00d2ff]">Experienced enough to scale.</span>
            </h2>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.num}
                className="group relative bg-[#0c1322] border border-slate-800/90 rounded-2xl p-8 lg:p-10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[#00d2ff]/40 group-hover:text-[#00d2ff] transition-colors mb-6">
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d2ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-slate-800/90 py-16 px-6 md:px-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="font-serif">Ready to build </span>
              <span className="font-serif italic text-[#00d2ff]">something great?</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Let's discuss how GD Softwares can engineer the perfect digital solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,180,216,0.45)] transition-all text-base active:scale-95"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-[#070b14] border border-slate-700/80 hover:border-cyan-500/60 text-slate-300 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all text-base active:scale-95"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
