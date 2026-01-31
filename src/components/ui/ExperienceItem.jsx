import Image from "next/image";

const ExperienceItem = ({ logo, company, position, description, period, link }) => {
  return (
    <div className="group relative flex flex-col sm:flex-row items-start justify-between p-4 transition-all duration-300 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100">
      <div className="flex items-start gap-4 w-full">
        {/* Logo Container */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-slate-200 bg-white p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-sm">
            <Image src={logo} width={56} height={56} className="w-full h-full object-contain" alt={`${company} Logo`} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-slate-800 hover:text-sky-600 transition-colors duration-200 leading-tight">
              {position}
            </a>

            {/* Period - Visible on Desktop here */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 sm:text-right">{period}</span>
          </div>

          <span className="text-sm font-normal text-sky-500 mb-2">{company}</span>

          {/* Experience List */}
          <ul className="space-y-1.5">
            {description.map((desc, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 group-hover:bg-sky-400 transition-colors" />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
