import React, { useState } from "react";
import HardSkills from "./Skills";
import Career from "./Education";
import SoftSkill from "./Achievement";
import Objective from "./Experience";

const Resume: React.FC = () => {
  const [hardSkill, sethardSkill] = useState<boolean>(true);
  const [softSkill, setsoftSkill] = useState<boolean>(false);
  const [career, setcareer] = useState<boolean>(false);
  const [objective, setobjective] = useState<boolean>(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => {
              setcareer(false);
              sethardSkill(true);
              setsoftSkill(false);
              setobjective(false);
            }}
            className={`${
              hardSkill ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Hard Skills
          </li>
          <li
            onClick={() => {
              setcareer(false);
              sethardSkill(false);
              setsoftSkill(true);
              setobjective(false);
            }}
            className={`${
              softSkill ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Soft Skills
          </li>
          <li
            onClick={() => {
              setcareer(true);
              sethardSkill(false);
              setsoftSkill(false);
              setobjective(false);
            }}
            className={`${
              career ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Parcours
          </li>
          <li
            onClick={() => {
              setcareer(false);
              sethardSkill(false);
              setsoftSkill(false);
              setobjective(true);
            }}
            className={`${
              objective ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Objectifs
          </li>
        </ul>
      </div>
      <div className="mt-10">
        {hardSkill && <HardSkills />}
        {softSkill && <SoftSkill />}
        {career && <Career />}
        {objective && <Objective />}
      </div>
    </section>
  );
};

export default Resume;
