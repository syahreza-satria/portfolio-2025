import Image from "next/image";
import { GithubIcon, LinkIcon } from "./icons";

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl, tags = [] }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={imageUrl} alt={`${title} thumbnail`} fill priority className="object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* Gradient Overlay (Visible on Hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">{title}</h3>

          {/* Tags (Optional - add 'tags' prop as array like ['React', 'Next.js']) */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-100 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description with Smooth Expand */}
          <div className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{description}</div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-700 active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-50 px-4 py-2.5 text-sm font-medium text-sky-600 transition-all hover:bg-sky-100 hover:text-sky-700 active:scale-95"
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
