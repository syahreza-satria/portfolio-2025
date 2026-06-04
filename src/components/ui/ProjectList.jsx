import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectList = ({ imageUrl, title, description, tags, liveUrl }) => {
  return (
    // Mengubah hover state menjadi dark theme dengan border tipis
    <div className="group relative rounded-[2rem] transition-all duration-300 ease-out border border-transparent hover:bg-neutral-900/50 hover:border-neutral-800 hover:shadow-2xl">
      {/* Wrapper Link - Tetap Utuh */}
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
          {/* Kolom Gambar dengan Zoom Effect (Disesuaikan border & efek transparansinya) */}
          <div className="w-full sm:w-48 lg:w-60 shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <div className="overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                // Menambahkan efek opacity agar lebih dramatis saat di-hover
                className="w-full aspect-video object-cover transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Kolom Konten */}
          <div className="flex flex-1 flex-col h-full pt-1 sm:pt-0">
            <div className="flex justify-between items-start">
              {/* Judul dan Icon dengan aksen warna #74d4ff */}
              <h3 className="font-bold text-neutral-200 text-lg sm:text-xl group-hover:text-[#74d4ff] transition-colors duration-300 flex items-center gap-1.5">
                {title}
                <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#74d4ff]" size={20} />
              </h3>
            </div>

            {/* Deskripsi */}
            <p className="text-neutral-400 text-sm leading-relaxed mt-2 mb-4 line-clamp-2">{description}</p>

            {/* Tags (Diubah menjadi style 'Pill' gelap) */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[11px] font-medium tracking-wide bg-neutral-900 text-neutral-400 rounded-lg border border-neutral-800 group-hover:border-[#74d4ff]/30 group-hover:text-[#74d4ff] transition-colors duration-300"
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
