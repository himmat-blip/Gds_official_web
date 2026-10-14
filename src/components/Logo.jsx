import Image from "next/image";

export default function Logo({ className = "", variant = "theme" }) {
  const getLogoSrc = () => {
    switch (variant) {
      case "white":
        return "/images/gd-logo-white.png";
      case "cyan":
        return "/images/gd-logo-theme.png";
      case "original":
      case "gold":
      case "theme":
      default:
        return "/images/gd-logo.png";
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
