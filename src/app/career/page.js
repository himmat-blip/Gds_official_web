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
    <div className="bg-[#fafafa] text-slate-900 min-h-screen pt-8 md:pt-10 pb-20 selection:bg-amber-100 selection:text-amber-900">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* 1. Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15] text-slate-900">
            <span className="font-serif">Do the work you&apos;re </span>
            <span className="font-serif italic text-[#d97706]">proud of.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            Join a curious, collaborative team building digital products across healthcare, finance, education, mobility, commerce, and gaming.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-14 pt-8 border-t border-slate-200">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#d97706] mb-1">
                6
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                OPEN ROLES
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200 hidden sm:block" />

            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#d97706] mb-1">
                Remote
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                FRIENDLY
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200 hidden sm:block" />

            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#d97706] mb-1">
                8+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                YEARS IN BUSINESS
              </div>
            </div>
          </div>
        </div>

        {/* 2. Open Roles Section */}
        <div className="mb-20">
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d97706] mb-3">
              OPEN ROLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-3">
              Find your next challenge.
            </h2>
            <p className="text-slate-600 text-base max-w-2xl">
              Bring your craft, perspective, and ambition. We offer meaningful work, room to grow, and teammates who care about doing things well.
            </p>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className="group bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:-translate-y-0.5"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mb-2">
                    {role.department}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mb-4">
                    <span>{role.experience}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{role.type}</span>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900"
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
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#d97706] hover:bg-[#b45309] shadow-md transition-all active:scale-95"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. "Don't see your role?" Card */}
        <div className="rounded-3xl bg-white border border-amber-200/70 py-16 px-6 sm:px-12 text-center overflow-hidden shadow-lg relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              We are always interested in meeting thoughtful designers, developers, strategists, and technologists.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-base active:scale-95 group"
            >
              <span>Start a conversation</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
