"use client";

import Header from "@/components/ui/Header";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data";

export default function projectPage() {
  const sortedProject = [...projects].sort((a, b) => b.id - a.id);

  return (
    <main className="max-w-2xl px-4 md:px-0 mx-auto py-24 md:pt-28 md:pb-4 xl:py-8 space-y-8 text-neutral-200">
      <Header />
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-100">Projects</h2>
          <p className="text-neutral-400">Projects that I've been working on</p>
        </div>

        <hr className="border-neutral-800" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start pt-2">
          {sortedProject.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
