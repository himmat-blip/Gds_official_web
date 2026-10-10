export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0099ff] to-[#0070f3] flex items-center justify-center shadow-md shadow-blue-500/20 font-black text-white text-xl">
        G
      </div>
      <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
        GD<span className="text-[#00d2ff]">Softwares</span>
      </span>
    </div>
  );
}
