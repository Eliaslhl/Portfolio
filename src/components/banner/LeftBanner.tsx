import React from "react";
import Media from "./Media";

const LeftBanner: React.FC = () => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize">Elias LAHLOUH</span>
        </h1>
        <h2 className="text-4xl font-bold text-white"></h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Etudiant à l'ESIEE Paris. Actuellement en E3FI informatique et
          applications, je souhaite m'orienter vers le monde professionnel de
          l'informatique, que ce soit dans le développement d'applications
          mobiles ou le développement web.
        </p>
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
