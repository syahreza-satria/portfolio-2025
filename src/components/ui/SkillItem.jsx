import { skillsCreative, skillsDev } from "@/data";
import Marquee from "react-fast-marquee";

const SkillItem = () => {
  return (
    <div className="space-y-4 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
      {/* Dev Skills Marquee */}
      <Marquee pauseOnHover={true} speed={40} className="py-2" direction="left">
        {skillsDev.map((skill, index) => (
          <span
            key={index}
            className="bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-[#74d4ff] hover:border-[#74d4ff]/40 hover:bg-neutral-900 transition-all duration-300 font-medium px-5 py-2 rounded-full text-sm mx-2.5 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(116,212,255,0.1)]"
          >
            {skill}
          </span>
        ))}
      </Marquee>

      {/* Creative Skills Marquee */}
      <Marquee pauseOnHover={true} speed={30} className="py-2" direction="right">
        {skillsCreative.map((skill, index) => (
          <span
            key={index}
            className="bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-[#74d4ff] hover:border-[#74d4ff]/40 hover:bg-neutral-900 transition-all duration-300 font-medium px-5 py-2 rounded-full text-sm mx-2.5 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(116,212,255,0.1)]"
          >
            {skill}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillItem;
