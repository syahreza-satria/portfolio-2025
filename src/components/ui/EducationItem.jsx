import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EducationItem = ({ logo, university, degree, gpa, period, link }) => {
  return (
    <div className="group relative flex items-start gap-4 sm:gap-5 p-4 sm:p-5 transition-all duration-500 ease-out rounded-[1.5rem] md:rounded-[2rem] border border-transparent hover:bg-white hover:border-sky-100/80 hover:shadow-[0_8px_30px_rgba(14,165,233,0.06)] hover:-translate-y-1 overflow-hidden">
      {/* Subtle Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Logo Container - Proporsional untuk max-w-2xl */}
      <div className="relative shrink-0 sm:pt-0.5 z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-zinc-200/60 bg-white p-2 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-sky-200 group-hover:shadow-[0_4px_20px_rgba(14,165,233,0.15)]">
          <Image src={logo} width={56} height={56} className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={`${university} Logo`} />
        </div>
      </div>

      {/* Content Area - Menggunakan min-w-0 agar teks panjang bisa wrap/truncate dengan benar */}
      <div className="flex flex-col flex-1 min-w-0 z-10">
        {/* Header Bar: Nama Univ & Periode Desktop */}
        <div className="flex justify-between items-start gap-3">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-start sm:items-center gap-1.5 text-base sm:text-lg font-bold text-zinc-900 group-hover:text-sky-600 transition-colors duration-300">
            <span className="leading-tight line-clamp-2">{university}</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 opacity-0 -translate-x-2 translate-y-2 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-sky-500 shrink-0 mt-0.5 sm:mt-0" />
          </a>

          {/* Period Time - Desktop (Aman di layout max-w-2xl) */}
          <div className="hidden sm:inline-flex shrink-0 items-center px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-500 group-hover:bg-sky-50 group-hover:border-sky-100 group-hover:text-sky-600 transition-colors duration-300 mt-0.5">
            {period}
          </div>
        </div>

        {/* Sub-header: Degree, GPA, dan Periode Mobile */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-1">
          <span className="text-sm font-medium text-zinc-600 leading-snug">{degree}</span>

          <div className="flex flex-wrap items-center gap-2">
            {/* GPA Badge */}
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-50 border border-zinc-200/60 text-[10px] sm:text-[11px] font-semibold text-zinc-500 group-hover:bg-white group-hover:border-sky-200 group-hover:text-sky-600 transition-all duration-300 shadow-sm">
              GPA {gpa}
            </span>

            {/* Period Time - Mobile (Masuk ke dalam flex-wrap agar tidak menabrak teks) */}
            <span className="sm:hidden inline-flex items-center px-2 py-1 rounded-lg bg-zinc-50 border border-zinc-200/60 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 group-hover:bg-sky-50 group-hover:border-sky-100 group-hover:text-sky-500 transition-colors duration-300 shadow-sm">
              {period}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
