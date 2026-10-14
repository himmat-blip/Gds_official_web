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
    <div className="bg-[#fafafa] text-slate-900 min-h-screen pt-8 md:pt-10 pb-20 selection:bg-amber-100 selection:text-amber-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 1. Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15] text-slate-900">
            <span className="font-serif">Software with purpose.</span>
            <br />
            <span className="font-serif italic text-[#d97706]">Partnership by design.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are a USA-based software development company helping organizations turn complex ideas into clear, useful, and beautifully engineered digital products.
          </p>
        </div>

        {/* 2. Visual Banner & Narrative Section */}
        <div className="mb-28 md:mb-36">
          {/* Image Banner */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-16 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=80"
              alt="GD Softwares engineering and design team collaboration"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Narrative Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              <span className="font-serif">Custom software, grounded in your </span>
              <span className="font-serif italic text-[#d97706]">real needs.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                We develop custom applications around our clients&apos; workflows, customers, and ambitions. Our engineers use object-oriented design, modern development practices, and proven technologies to create products that are maintainable as well as innovative.
              </p>
              <p>
                Technology moves quickly. We stay on pace without chasing trends—selecting the right tools to create secure, scalable solutions for the web, mobile, cloud, QA, and AI.
              </p>
            </div>

            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-base active:scale-95 group"
              >
                <span>Meet your technology partner</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Why Choose Us Section */}
        <div className="mb-28 md:mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-[#d97706] uppercase tracking-wider mb-6 shadow-sm">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              <span className="font-serif">Small enough to care. </span>
              <br />
              <span className="font-serif italic text-[#d97706]">Experienced enough to scale.</span>
            </h2>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.num}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-amber-200 group-hover:text-[#d97706] transition-colors mb-6">
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#d97706] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA Banner */}
        <div className="relative rounded-3xl bg-white border border-amber-200/70 py-16 px-6 md:px-12 text-center overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="font-serif">Ready to build </span>
              <span className="font-serif italic text-[#d97706]">something great?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how GD Softwares can engineer the perfect digital solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-base active:scale-95"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-white border border-slate-300 hover:border-slate-800 text-slate-800 px-8 py-3.5 rounded-xl font-semibold transition-all text-base active:scale-95 shadow-sm"
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
