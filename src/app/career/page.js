import Link from "next/link";

export const metadata = {
  title: "Careers at GD Softwares | Open Positions",
  description:
    "Join a curious, collaborative team building digital products across healthcare, finance, education, mobility, commerce, and gaming.",
};

export default function CareerPage() {
  const roles = [
    {
      id: "ios-dev",
      department: "Mobile",
      title: "iOS Developer",
      experience: "Experience level: 3–5 years",
      type: "Full-Time · Remote",
      tags: ["Swift", "SwiftUI", "iOS SDK", "REST APIs"],
    },
    {
      id: "php-dev",
      department: "Backend",
      title: "PHP Developer",
      experience: "Experience level: 2–3 years",
      type: "Full-Time · Remote",
      tags: ["Laravel", "MySQL", "PHP 8+", "API Design"],
    },
    {
      id: "unity-dev",
      department: "Gaming",
      title: "Unity 3D / Game Developer",
      experience: "Experience level: 4+ years",
      type: "Full-Time · Remote",
      tags: ["Unity", "C#", "3D Math", "Multiplayer"],
    },
    {
      id: "devops-engineer",
      department: "Cloud",
      title: "DevOps Engineer",
      experience: "Experience level: 2+ years",
      type: "Full-Time · Remote",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: "qa-engineer",
      department: "QA",
      title: "Automation QA Engineer",
      experience: "Experience level: 3+ years",
      type: "Full-Time · Remote",
      tags: ["Selenium", "Cypress", "Python/JS", "Jest"],
    },
    {
      id: "react-native-dev",
      department: "Frontend",
      title: "React Native / Frontend Developer",
      experience: "Experience level: 3+ years",
      type: "Full-Time · Remote",
      tags: ["React Native", "TypeScript", "Redux", "Tailwind"],
    },
  ];

  return (
    <div className="bg-[#060b13] text-white min-h-screen pt-32 pb-24 selection:bg-cyan-500 selection:text-black">
      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 1. Hero Section */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-[#00d2ff] uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
            CAREERS AT GDSOFTWARES
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15]">
            <span className="font-serif text-white">Do the work you're </span>
            <span className="font-serif italic text-[#00d2ff]">proud of.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            Join a curious, collaborative team building digital products across healthcare, finance, education, mobility, commerce, and gaming.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-14 pt-8 border-t border-slate-800/80">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#00d2ff] mb-1">
                6
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                OPEN ROLES
              </div>
            </div>

            <div className="h-12 w-px bg-slate-800 hidden sm:block" />

            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#00d2ff] mb-1">
                Remote
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                FRIENDLY
              </div>
            </div>

            <div className="h-12 w-px bg-slate-800 hidden sm:block" />

            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#00d2ff] mb-1">
                8+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                YEARS IN BUSINESS
              </div>
            </div>
          </div>
        </div>

        {/* 2. Open Roles Section */}
        <div className="mb-20">
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00d2ff] mb-3">
              OPEN ROLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-3">
              Find your next challenge.
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Bring your craft, perspective, and ambition. We offer meaningful work, room to grow, and teammates who care about doing things well.
            </p>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className="group bg-[#0c1322] border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.12)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider mb-2">
                    {role.department}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#00d2ff] transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm mb-4">
                    <span>{role.experience}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{role.type}</span>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#070b14] border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex-shrink-0">
                  <Link
                    href={`/contact-us?role=${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-[#00d2ff] bg-[#070b14] border border-cyan-500/30 hover:bg-gradient-to-r hover:from-[#00b4d8] hover:to-[#6366f1] hover:text-white hover:border-transparent transition-all shadow-sm active:scale-95"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. "Don't see your role?" Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-slate-800/90 py-16 px-6 sm:px-12 text-center overflow-hidden shadow-2xl relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Don't see your role?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              We are always interested in meeting thoughtful designers, developers, strategists, and technologists.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-cyan-300 font-semibold text-lg transition-colors group"
            >
              <span>Start a conversation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
