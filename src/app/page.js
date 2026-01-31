"use client";

import { LinkIcon } from "@/components/ui/icons";
import { profile, projects, education, experience, gears } from "@/data";
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import EducationItem from "@/components/ui/EducationItem";
import SkillItem from "@/components/ui/SkillItem";
import Header from "@/components/ui/Header";
import ProjectList from "@/components/ui/ProjectList";
import ExperienceItem from "@/components/ui/ExperienceItem";

export default function Home() {
  const sortedProject = [...projects].sort((a, b) => b.id - a.id);
  const sortedExperience = [...experience].sort((a, b) => b.id - a.id);
  const sortedEducation = [...education].sort((a, b) => b.id - a.id);
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-0 py-24 md:pt-28 md:pb-4 xl:py-8 space-y-6 text-gray-800">
      <section className="space-y-4 md:space-y-6 text-gray-800">
        <Header />
        <p className="text-sm md:text-base">24 year old frontend programmer, UI/UX Designer & Content Creator based in Bandung 🇮🇩 grinding my skills and create content under the name Syahreza Satria.</p>

        <div className="flex items-center gap-2">
          <a href={profile.cv} target="_blank" className=" border px-3 py-1 md:py-2 md:px-4 rounded-full hover:bg-gray-200 transition duration-300 flex items-center gap-1 bg-gray-100">
            ✨
            <ShinyText text="View CV!" disabled={false} speed={5} className="custom-class bg-black" />
            <LinkIcon />
          </a>
          <a href={profile.portfolio} target="_blank" className="">
            <GradientText colors={["#0ea5e9", "#a5b4fc", "#ec4899", "#10b981", "#40ffaa"]} animationSpeed={10} showBorder={true} className="custom-class bg-white px-3 py-1 md:py-2 md:px-4 flex items-center">
              View Portfolio
              <span className="text-gray-300">
                <LinkIcon />
              </span>
            </GradientText>
          </a>
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="font-bold text-xl">Tools and Software</h2>
        <SkillItem />
      </section>

      <hr className="border-gray-100" />

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="font-bold text-xl">Projects</h2>
        <div className="grid grid-cols sm:grid-cols-1 gap-2 items-start">
          {sortedProject.slice(0, 3).map((project) => (
            <ProjectList key={project.id} {...project} />
          ))}
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Experience Section */}
      <section className="space-y-4">
        <h2 className="font-bold text-xl">Experience</h2>
        <div className="flex flex-col gap-0">
          {sortedExperience.map((exp) => (
            <ExperienceItem key={exp.id} {...exp} />
          ))}
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Education Section */}
      <section className="space-y-4">
        <h2 className="font-bold text-xl">My Education</h2>
        <div className="flex flex-col gap-0">
          {sortedEducation.map((edu) => (
            <EducationItem key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </main>
  );
}
