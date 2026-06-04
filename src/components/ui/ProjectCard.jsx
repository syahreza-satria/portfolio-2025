import Image from "next/image";
import { GithubIcon, LinkIcon } from "./icons";

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl, tags = [] }) => {
  return (
    // Container dark mode dengan efek hover glow tipis
    <div className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#74d4ff]/5 hover:border-[#74d4ff]/30 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        <Image src={imageUrl} alt={`${title} thumbnail`} fill priority className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
        {/* Gradient Overlay untuk transisi halus ke konten bawah */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 bg-neutral-900 z-10">
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight text-neutral-200 group-hover:text-[#74d4ff] transition-colors duration-300">{title}</h3>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-neutral-400 bg-neutral-950 border border-neutral-800 rounded-lg group-hover:border-[#74d4ff]/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{description}</div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-5 border-t border-neutral-800">
          {/* GitHub / Source Button */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:bg-neutral-800 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}

          {/* Live / Demo Button */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#74d4ff]/10 border border-[#74d4ff]/20 px-4 py-2.5 text-sm font-medium text-[#74d4ff] transition-all duration-300 hover:bg-[#74d4ff]/20 hover:border-[#74d4ff]/40 active:scale-95 shadow-sm"
            >
              <LinkIcon className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
