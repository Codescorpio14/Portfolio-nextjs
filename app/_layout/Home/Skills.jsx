import { SkillCard } from "@/app/_components";
import { skillData } from "@/app/_data";

const Skills = () => {
  return (
    <div className="bg-neutral-900 text-sky-50 px-8 py-4">
      <h1 className="text-3xl md:text-4xl uppercase font-semibold lg:text-left">
        Skills
      </h1>
      <div className="py-8 px-4 grid md:grid-cols-2 gap-4">
        {skillData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
