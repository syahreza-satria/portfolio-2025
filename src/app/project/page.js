"use client";

import Header from "@/components/ui/Header";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data";

export default function projectPage() {
  const sortedProject = [...projects].sort((a, b) => b.id - a.id);

  return (
    <main className="max-w-2xl mx-auto px-4 md:px-0 py-24 lg:py-8 space-y-6 text-gray-800">
      <Header />
      <section className="space-y-4">
        <div className="space-y-0">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="text-gray-500">Projects that i've been working out</p>
        </div>
        <hr className="border-gray-100" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {sortedProject.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
