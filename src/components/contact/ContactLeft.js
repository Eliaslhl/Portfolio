import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { SiGithub, SiTwitter } from "react-icons/si";
import { MdMarkEmailRead } from 'react-icons/md';
import { IoPhonePortraitOutline } from "react-icons/io5";
import ThreeDModel from './ThreeDModel '; 
import { lycoris } from '../../assets'; 

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <div className="w-full h-64 rounded-lg mb-2">
        <ThreeDModel path={lycoris} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Elias LAHLOUH</h3>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <IoIosSchool />
          <span className="text-lightText">Etudiant en BUT Informatique</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <IoPhonePortraitOutline />
          Phone: <span className="text-lightText">06 69 74 13 60</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <MdMarkEmailRead />
          Email: <span className="text-lightText">eliaslahlouh@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/elias-lahlouh-1332a1243/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/Eliaslhl" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FElahlouh77">
              <SiTwitter />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
