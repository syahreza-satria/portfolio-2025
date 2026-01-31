import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectList = ({ imageUrl, title, description, tags, liveUrl }) => {
  return (
    <div className="group relative rounded-xl transition-all duration-300 ease-out hover:bg-slate-50/80 hover:shadow-sm">
      {/* Wrapper Link - Membuat seluruh area dapat diklik */}
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Kolom Gambar dengan Zoom Effect */}
          <div className="w-full sm:w-48 lg:w-60 shrink-0 overflow-hidden rounded-lg border border-slate-200 shadow-sm">
            <div className="overflow-hidden">
              <Image src={imageUrl} alt={title} width={600} height={400} className="w-full aspect-video object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>
          </div>

          {/* Kolom Konten */}
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-800 text-lg sm:text-xl group-hover:text-sky-600 transition-colors duration-300 flex items-center gap-1">
                {title}
                <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-sky-600" size={18} />
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-4 line-clamp-2">{description}</p>

            {/* Tags dengan gaya yang lebih bersih */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase bg-slate-100 text-slate-500 rounded border border-slate-200 group-hover:bg-white group-hover:border-sky-100 group-hover:text-sky-500 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectList;
