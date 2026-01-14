import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Career = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        {/* part One */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Parcours scolaire</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lycée Pierre de Coubertin, Meaux"
            subTitle="Chau. de Paris, 77100 Meaux"
            result="Validé"
            des={
              <>
                Bac STI2D SIN (sciences et technologies de l'industrie et du
                développement durable)
                <br />
                <br />
                Obtention du Bac avec Mention Assez Bien.
                <br />
                <br />
                <u>
                  <a
                    href="https://www.coubertin-meaux.fr/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    Lycée Pierre De Coubertin
                  </a>
                </u>
              </>
            }
          />
          <ResumeCard
            title="IUT Champs-Sur-Marne"
            subTitle="2 Rue Albert Einstein, 77420 Champs-sur-Marne"
            result="Validé"
            des={
              <>
                Bachelor Universitaire de Technologie (BUT) Informatique
                <br />
                <br />
                En cours de formation en Informatique à l'IUT de
                Champs-Sur-Marne.
                <br />
                <br />
                <u>
                  <a
                    href="https://iut.univ-gustave-eiffel.fr/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    Université Gustave Eiffel
                  </a>
                </u>
              </>
            }
          />
          <ResumeCard
            title="ESIEE Paris"
            subTitle="Cité Descartes, 2 Bd Blaise Pascal, 93160 Noisy-le-Grand"
            result="En cours"
            des={
              <>
                Ingénierie 3D et technologie des médias
                <br />
                <br />
                Formation d'ingénieur "Informatique et applications"
                <br />
                <br />
                <u>
                  <a
                    href="https://www.esiee.fr/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    ESIEE Paris
                  </a>
                </u>
              </>
            }
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Expérience Professionel
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Stage à Meilleurtaux"
            subTitle="36 Rue de Saint-Pétersbourg, 75008 Paris"
            result="Validé"
            des={
              <>
                Développement d'une application mobile : du concept à la mise en
                production
                <br />
                <br />
                Stage de 12 semaines au sein de Meilleurtaux, en tant que
                développeur d'applications mobiles iOS/Android.
                <br />
                <br />
                <u>
                  <a
                    href="https://www.meilleurtaux.com/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    Site Meilleurtaux
                  </a>
                </u>
              </>
            }
          />
          <ResumeCard
            title="Alternance Meilleurtaux"
            subTitle="36 Rue de Saint-Pétersbourg, 75008 Paris"
            result="Validé"
            des={
              <>
                Développement d'une application mobile : du concept à la mise en
                production
                <br />
                <br />
                Alternance de 12 mois au sein de Meilleurtaux, en tant que
                développeur d'applications mobiles iOS/Android.
                <br />
                <br />
                <u>
                  <a
                    href="https://www.meilleurtaux.com/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    Site Meilleurtaux
                  </a>
                </u>
              </>
            }
          />
          <ResumeCard
            title="Alternance RATP Smart Systems"
            subTitle="Gare de Lyon, 75012 Paris - 11 Rue Courat 75020 Paris"
            result="En cours"
            des={
              <>
                Développement d'applications web sur les sites BonjourRATP et
                Mappy.
                <br />
                <br />
                Alternance de 36 mois au sein de RATP Smart Systems, en tant que
                développeur front-end.
                <br />
                <br />
                <u>
                  <a
                    href="https://www.bonjour-ratp.fr/"
                    style={{ color: "rgb(255 1 79 / var(--tw-text-opacity))" }}
                  >
                    Bonjour RATP
                  </a>
                </u>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Career;
