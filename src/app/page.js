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
    <main className="max-w-2xl mx-auto px-4 md:px-0 py-24 md:pt-28 md:pb-4 xl:py-8 space-y-8">
      <section className="space-y-4 md:space-y-6">
        <Header />
        <p className="text-base md:text-lg">24 year old frontend programmer, UI/UX Designer & Content Creator based in Bandung 🇮🇩 grinding my skills and create content under the name Syahreza Satria.</p>
      </section>

      <hr className="border-neutral-800" />

      {/* Skills Section */}
      <section className="space-y-5">
        <h2 className="font-bold text-xl md:text-2xl tracking-tight text-neutral-100 px-2 sm:px-4">Tools and Software</h2>
        <SkillItem />
      </section>

      <hr className="border-neutral-800" />

      <section className="space-y-5">
        <h2 className="font-bold text-xl md:text-2xl tracking-tight text-neutral-100 px-2 sm:px-4">Projects</h2>
        <div className="grid grid-cols-1 gap-3 items-start">
          {sortedProject.slice(0, 3).map((project) => (
            <ProjectList key={project.id} {...project} />
          ))}
        </div>
      </section>

      <hr className="border-neutral-800" />

      {/* Experience Section */}
      <section className="space-y-5">
        <h2 className="font-bold text-xl md:text-2xl tracking-tight text-neutral-100 px-2 sm:px-4">Experience</h2>
        <div className="flex flex-col gap-0">
          {sortedExperience.map((exp) => (
            <ExperienceItem key={exp.id} {...exp} />
          ))}
        </div>
      </section>

      <hr className="border-neutral-800" />

      {/* Education Section */}
      <section className="space-y-5">
        <h2 className="font-bold text-xl md:text-2xl tracking-tight text-neutral-100 px-2 sm:px-4">My Education</h2>
        <div className="flex flex-col gap-0">
          {sortedEducation.map((edu) => (
            <EducationItem key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </main>
  );
}
