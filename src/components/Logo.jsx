import Image from "next/image";

export default function Logo({ className = "h-10" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/images/company_logo.png" 
        alt="GDSoftwares Logo" 
        width={200} 
        height={50} 
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
