import React, { useState } from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { skillsData } from "../../data/data";

const SkillsData = () => {
  const [filter, setFilter] = useState("1ère année");

  const filteredSkills = skillsData[filter] || [];

  return (
    <section id="skillsData" className="w-full py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Compétences" />
      </div>
      <div className="flex justify-start mb-4">
        <select
          className="bg-[#202327] text-white py-2 px-5 rounded-lg mt-5 border border-custom-red hover:scale-105 transition-transform duration-300 appearance-none"
          style={{
            borderColor: "rgb(255 1 79 / var(--tw-text-opacity))",
            backgroundPosition: "right center",
            backgroundSize: "1.5em",
          }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="1ère année" className="mb-2">
            1ère année
          </option>
          <option value="2ème année" className="mb-2">
            2ème année
          </option>
          <option value="3ème année" className="mb-2">
            3ème année
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mt-16">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((item) => <Card item={item} key={item.id} />)
        ) : (
          <div className="col-span-1 text-center">
            <p>Aucune compétence disponible pour cette année.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsData;
