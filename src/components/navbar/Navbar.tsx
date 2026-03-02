import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiTwitter } from "react-icons/si";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[60px] h-[60px] rounded-full sm:ml-0 md:w-[60px] md:h-[60px] md:ml-[30px]"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {/* Menu mobile - toujours monté, animé avec translateX */}
        <div
          style={{ marginRight: -20 }}
          className={`w-[80%] h-screen absolute top-0 right-0 bg-gray-900 p-4 transform transition-transform duration-300 ease-in-out ${
            showMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <img
                className="w-32"
                src={logo}
                alt="logo"
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </div>
            <ul className="flex flex-col gap-7 mt-3">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  style={{ fontSize: 16 }}
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 mt-10">
              <div className="flex justify-center items-center gap-4">
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
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
