import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ExperienceItem = ({ logo, company, position, description, period, link, tag = [] }) => {
  return (
    <div className="group relative flex gap-4 md:gap-6 pb-12 last:pb-0">
      <div className="relative flex flex-col items-center mt-5 md:mt-0 shrink-0 w-4">
        <div className="absolute z-20 w-3.5 h-3.5 rounded-full bg-zinc-300 ring-[4px] ring-white group-hover:bg-sky-500 group-hover:ring-sky-50 transition-all duration-500 shadow-sm" />

        <div className="absolute top-3.5 bottom-[-3rem] w-[2px] bg-zinc-200 group-hover:bg-sky-200 transition-colors duration-500 group-last:hidden" />
      </div>

      <div className="relative flex flex-col sm:flex-row flex-1 gap-5 w-full sm:p-2 rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />

        <div className="relative shrink-0 z-10 sm:pt-1">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-zinc-200/60 bg-white p-2.5 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-sky-200 group-hover:shadow-[0_4px_20px_rgba(14,165,233,0.15)]">
            <Image src={logo} width={64} height={64} className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={`${company} Logo`} />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-5 z-10 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg md:text-xl font-bold text-zinc-900 group-hover:text-sky-600 transition-colors duration-300">
                {position}
                <ArrowUpRight className="w-5 h-5 text-zinc-300 opacity-0 -translate-x-3 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-sky-500" />
              </a>

              <div className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:bg-sky-50 group-hover:border-sky-100 group-hover:text-sky-600 transition-colors duration-300">
                {period}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-semibold text-zinc-500 group-hover:text-sky-500 transition-colors duration-300">{company}</span>
            </div>
          </div>

          <ul className="space-y-0 mt-1">
            {description.map((desc, index) => (
              <li key={index} className="flex items-start gap-3.5 text-sm md:text-sm text-zinc-600 leading-relaxed group/item">
                <div className="relative mt-2.5 h-1.5 w-1.5 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-zinc-300 group-hover:bg-sky-400 transition-colors duration-300" />
                  <span className="absolute inset-0 rounded-full bg-sky-400 opacity-0 group-hover:animate-ping transition-all duration-300" style={{ animationDuration: "3s" }} />
                </div>
                <span className="transition-colors duration-300 group-hover/item:text-zinc-900">{desc}</span>
              </li>
            ))}
          </ul>

          {tag && tag.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tag.map((item, index) => (
                <div
                  key={index}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200/60 text-[11px] md:text-xs font-medium text-zinc-500 transition-all duration-300 group-hover:bg-white group-hover:border-sky-200 group-hover:text-sky-600 group-hover:shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
