"use client";

import GearItem from "@/components/ui/GearItem";
import Header from "@/components/ui/Header";
import { gears } from "@/data";

export default function projectPage() {
  return (
    <main className="max-w-2xl mx-auto py-24 px-4 md:px-0 md:pt-28 md:pb-4 xl:py-8 space-y-8 text-neutral-200">
      <Header />
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-100">Gears</h2>
        <p className="text-neutral-400">The tools that I use to get my work done ASAP.</p>
      </div>

      <hr className="border-neutral-800" />

      <div className="grid grid-cols-2 gap-3 md:gap-6 pt-2">
        {gears.map((gear) => (
          <GearItem key={gear.id} {...gear} />
        ))}
      </div>
    </main>
  );
}
