import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiTwitter } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/elias-lahlouh-1332a1243/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://github.com/Eliaslhl" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FElahlouh77">
              <SiTwitter /></a>
            </span>
          </div>
        </div>
        <div>
        </div>
      </div>
  )
}

export default Media