import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiTwitter } from "react-icons/si";

const Media: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/elias-lahlouh-1332a1243/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/Eliaslhl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a
            href="https://x.com/Elahlouh77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiTwitter />
            </span>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Media;
