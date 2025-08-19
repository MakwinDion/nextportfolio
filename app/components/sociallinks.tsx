'use client';

import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <>
      {/* Desktop only (fixed left side) */}
      <div className="hidden lg:flex fixed left-6 bottom-6 flex-col gap-[35px] z-50">
        <a href="#" className="hover:text-[#E4405F] transition-transform hover:scale-110 duration-300">
          <FaInstagram size={30} />
        </a>
        <a href="#" className="hover:text-[#0077B5] transition-transform hover:scale-110 duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="#" className="hover:text-[#6e5494] transition-transform hover:scale-110 duration-300">
          <FaGithub size={30} />
        </a>
        <a href="#" className="hover:text-[#ea4c89] transition-transform hover:scale-110 duration-300">
          <FaDribbble size={30} />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
