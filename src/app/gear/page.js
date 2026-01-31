"use client";

import GearItem from "@/components/ui/GearItem";
import Header from "@/components/ui/Header";
import { gears } from "@/data";

export default function projectPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-0 py-24 lg:py-8 space-y-6 text-gray-800">
      <Header />
      <div className="space-y-0">
        <h2 className="text-xl font-bold">Gears</h2>
        <p className="text-gray-500">The tools that I used to get my work done ASAP.</p>
      </div>
      <hr className="border-gray-100" />
      <div className="grid grid-cols-2 gap-2 md:gap-8">
        {gears.map((gear) => (
          <GearItem key={gear.id} {...gear} />
        ))}
      </div>
    </main>
  );
}
