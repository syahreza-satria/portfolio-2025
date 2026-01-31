import Image from "next/image";

const EducationItem = ({ logo, university, degree, gpa, period, link }) => {
  return (
    <div className="group relative flex items-center justify-between p-4 transition-all duration-300 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100">
      <div className="flex items-center gap-5">
        {/* Logo Container */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-slate-200 bg-white p-1 transition-all duration-300 group-hover:ring-2 group-hover:ring-sky-500/20 group-hover:border-sky-500/50">
            <Image src={logo} width={56} height={56} className="w-full h-full object-contain" alt={`${university} Logo`} />
          </div>
        </div>

        {/* Info Content */}
        <div className="flex flex-col">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-slate-800 hover:text-sky-600 transition-colors duration-200">
            {university}
          </a>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
            <span className="text-sm font-medium text-slate-600">{degree}</span>

            {/* GPA Badge - Dibuat lebih menonjol sebagai pencapaian */}
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-sky-50 text-[10px] font-bold text-sky-600 border border-sky-100 w-fit">GPA {gpa}</span>
          </div>
        </div>
      </div>

      {/* Period Time */}
      <div className="hidden sm:block text-right">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md group-hover:bg-sky-50 group-hover:text-sky-500 transition-all duration-300">{period}</span>
      </div>

      {/* Mobile-only period (smaller) */}
      <span className="sm:hidden absolute top-4 right-4 text-[10px] font-bold text-slate-400">{period}</span>
    </div>
  );
};

export default EducationItem;
