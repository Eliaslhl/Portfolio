import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { skillsData } from "../../data/data";

const SkillsData = () => {
  return (
    <section
      id="skillsData"
      className="w-full py-20 border-b border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="Compétences"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mt-16">
        {skillsData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default SkillsData;