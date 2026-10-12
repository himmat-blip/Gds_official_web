import Image from "next/image";

export default function Logo({ className = "", variant = "theme" }) {
  const getLogoSrc = () => {
    switch (variant) {
      case "cyan-text":
        return "/images/logo-theme-opt2.png";
      case "white":
        return "/images/gd-logo-white.png";
      case "original":
        return "/images/gd-logo.png";
      case "theme":
      default:
        return "/images/gd-logo-theme.png";
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={getLogoSrc()}
        alt="GDSoftwares Logo"
        width={200}
        height={45}
        className="h-8 md:h-9 w-auto object-contain hover:opacity-95 transition-opacity"
        priority
      />
    </div>
  );
}
