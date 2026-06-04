"use client";

import { motion, useScroll } from "motion/react";
import { profile } from "@/data";
import DecryptedText from "../DecryptedText";
import TextType from "../TextType";
import Image from "next/image";
import SpotlightCard from "../SpotlightCard";

const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <SpotlightCard
      className="custom-spotlight-card relative flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 bg-[#0a0a0a] p-6 sm:p-8 rounded-[2rem] border border-neutral-800/80 shadow-2xl hover:border-neutral-700/80 transition-colors duration-300"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#74d4ff",
          zIndex: 99999,
        }}
      />

      {/* Avatar Container: Menggunakan border solid abu-abu gelap sesuai gambar */}
      <div className="shrink-0">
        <Image src={profile.avatar} width={105} height={105} alt={profile.name} priority className="rounded-full object-cover border-[3px] border-neutral-800" />
      </div>

      {/* Text Container: Menyatukan badge, nama, dan role */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5 w-full">
        {/* Badge "Open For Work": Dibuat lebih gelap dan solid seperti referensi */}
        <div className="flex items-center gap-2.5 bg-emerald-950/50 border border-emerald-900/60 px-3 py-1 rounded-full w-fit">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          <p className="text-emerald-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Open For Work</p>
        </div>

        {/* Name */}
        <DecryptedText
          text={"SYAHREZA SATRIA ALFATH"}
          parentClassName="text-2xl md:text-3xl font-bold tracking-tight text-white"
          encryptedClassName="text-2xl md:text-3xl font-bold text-neutral-600"
          animateOn="hover"
          revealDirection="start"
          sequential
          speed={50}
          maxIterations={10}
        />

        {/* TextType / Roles */}
        <div className="h-6 flex items-center justify-center sm:justify-start">
          <TextType
            text={["Frontend Developer", "UI/UX Designer", "Content Creator", "Photographer", "Graphic Designer", "Gamer"]}
            typingSpeed={100}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white text-sm md:text-base font-normal"
            textColors={["#ffffff"]}
          />
        </div>
      </div>
    </SpotlightCard>
  );
};

export default Header;
