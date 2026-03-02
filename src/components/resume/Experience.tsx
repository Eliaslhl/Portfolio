import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Objective: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row mb-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023-Après diplôme
          </p>
          <h2 className="text-4xl font-bold">Objectifs scolaires</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BUT informatique"
            subTitle={"2023"}
            result="Validé"
            des={
              <>
                Passage en BUT 2 de BUT
                <br />
                <br />
                Diriger une équipe
                <br />
                <br />
                Maitriser les compétences acquises de cette année
              </>
            }
          />
          <ResumeCard
            title="BUT informatique"
            subTitle={"2023-2024"}
            result="En cours"
            des={
              <>
                Passage en BUT 3 de BUT
                <br />
                <br />
                Diriger une équipe
                <br />
                <br />
                Maitriser les compétences acquises de cette année
              </>
            }
          />
          <ResumeCard
            title="Poursuite d'études"
            subTitle={"2024-2025"}
            result="En cours"
            des={
              <>
                Obtention de mon diplome
                <br />
                <br />
                Approfondir mes connaissances dans le Web et le mobile en
                alternance
                <br />
                <br />
                Passage en BUT 1 en école d'ingénieur à l'ESIEE Paris
              </>
            }
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023-Après diplôme
          </p>
          <h2 className="text-4xl font-bold">Objectifs professionnels</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Professionnel"
            subTitle={"2023"}
            result="Validé"
            des={
              <>
                Maitriser les bases fondamentales du code
                <br />
                <br />
                Travailler en équipe
                <br />
                <br />
                Apprendre à communiquer professionnellement
              </>
            }
          />
          <ResumeCard
            title="Stage à Meilleurtaux"
            subTitle={"2023-2024"}
            result="Validé"
            des={
              <>
                Acquérir plus de maturité
                <br />
                <br />
                Apprendre à travailler dans une équipe professionnele
                <br />
                <br />
                Apprendre le développement mobile
              </>
            }
          />
          <ResumeCard
            title="Alternance Meilleurtaux"
            subTitle={"2024-2025"}
            result="En cours"
            des={
              <>
                Travailler en équipe dans les projets mobiles
                <br />
                <br />
                Acquérir de l'expérience professionnelle
                <br />
                <br />
                Renforcer mes compétences en développement mobile
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Objective;
