"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const GearItem = ({ brand, model, image, description, link }) => {
  return (
    // Container Dark Mode dengan hover efek terangkat dan border menyala
    <div className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#74d4ff]/5 hover:border-[#74d4ff]/30 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-950">
        <Image
          src={image}
          alt={`${brand} ${model}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          // Efek zoom-in yang sangat halus
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Gradient Shadow di dalam gambar agar menyatu dengan konten teks di bawahnya */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 z-10 bg-neutral-900 border-t border-neutral-800/50">
        <div className="flex-1 space-y-2.5">
          <div>
            {/* Brand menggunakan warna aksen agar terlihat lebih premium */}
            <h3 className="text-[10px] sm:text-xs font-bold text-[#74d4ff]/80 uppercase tracking-widest mb-1">{brand}</h3>
            {/* Title / Model */}
            <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-200 group-hover:text-[#74d4ff] transition-colors duration-300">{model}</h4>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-base text-neutral-400 line-clamp-3 leading-relaxed">{description}</p>
        </div>

        {/* Action Link */}
        <div className="mt-4 pt-4 border-t border-neutral-800/80">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-500 transition-colors duration-300 hover:text-[#74d4ff]">
            <span>Lihat Produk</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GearItem;
