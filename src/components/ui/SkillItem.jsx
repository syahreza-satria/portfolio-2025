import { skillsCreative, skillsDev } from "@/data";
import Marquee from "react-fast-marquee";

const SkillItem = () => {
  return (
    <div className="space-y-3 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
      <Marquee pauseOnHover={true} speed={75} className="py-1" direction="left">
        {skillsDev.map((skill, index) => (
          <span key={index} className="bg-slate-100 text-slate-700 font-medium px-4 py-1.5 rounded-full text-sm mx-2">
            {skill}
          </span>
        ))}
      </Marquee>
      <Marquee pauseOnHover={true} speed={35} className="py-1" direction="right">
        {skillsCreative.map((skill, index) => (
          <span key={index} className="bg-slate-100 text-slate-700 font-medium px-4 py-1.5 rounded-full text-sm mx-2">
            {skill}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillItem;
