import Image from "next/image";

export default function Logo({ className = "", variant = "white" }) {
  const logoSrc = variant === "original" ? "/images/gd-logo.png" : "/images/gd-logo-white.png";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="GDSoftwares"
        width={200}
        height={45}
        className="h-8 md:h-9 w-auto object-contain hover:opacity-95 transition-opacity"
        priority
      />
    </div>
  );
}
