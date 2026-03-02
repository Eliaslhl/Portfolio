import React from "react";
import Title from "../layouts/Title";
import { Elias_lahlouh_CV } from "../../assets/index";

const CV: React.FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = Elias_lahlouh_CV;
    link.download = "Elias_lahlouh_CV.jpg";
    link.click();
  };

  return (
    <div
      id="CV"
      className="flex flex-col items-center w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="Mon CV" />
      <img
        className="w-[500px] h-[500px] lgl:w-[500px] lgl:h-[100%] z-10"
        src={Elias_lahlouh_CV}
        alt="Elias_lahlouh_CV"
      />
      <button
        className="bg-[#202327] text-white py-2 px-4 rounded-lg mt-5 border border-custom-red hover:scale-105 transition-transform duration-300"
        style={{ borderColor: "rgb(255 1 79 / var(--tw-text-opacity))" }}
        onClick={handleDownload}
      >
        Télécharger
      </button>
    </div>
  );
};

export default CV;
