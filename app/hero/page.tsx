'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-[30px] sm:px-[50px] lg:px-[112px] pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-10 gap-10">
      
      {/* Text Content */}
      <motion.div
        className="w-full lg:max-w-xl text-center lg:text-left lg:pl-[165px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[20px] sm:text-3xl font-bold font-poppins whitespace-nowrap mb-[30px] sm:mb-[55px]">
          👋Hello, I'm Makwin
        </h1>

        <p className="text-[15px] sm:text-[22px] md:text-[30px] leading-snug font-normal mb-4 sm:mb-6 font-poppins">
          I specialize in UI/UX design and frontend development — bringing ideas to life with smooth interfaces and fast performance.
        </p>

        <p className="text-[14px] sm:text-sm text-white/80 mb-6 sm:mb-8 font-poppins">
          🧠 Built for users, designed for impact. 🌟
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 sm:pt-10">
          <Link href="/portfolio">
            <button className="bg-white text-black px-[15px] py-[10px] sm:px-[15px] sm:py-[15px] rounded-full font-medium hover:bg-gray-200 transition font-poppins text-[15px] sm:text-[20px]">
              View My Work →
            </button>
          </Link>
          <Link href="/contacts">
            <button className="border border-white px-[15px] py-[10px] sm:px-[15px] sm:py-[15px] rounded-full font-medium hover:bg-white hover:text-black transition font-poppins text-[15px] sm:text-[20px]">
              Contact me →
            </button>
          </Link>
        </div>

        {/* Mobile social icons (horizontal) */}
        <div className="flex lg:hidden justify-center gap-[35px] mt-[72px]">
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4405F] transition-transform hover:scale-110 duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] transition-transform hover:scale-110 duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6e5494] transition-transform hover:scale-110 duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://dribbble.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ea4c89] transition-transform hover:scale-110 duration-300"
          >
            <FaDribbble size={30} />
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="w-full flex justify-center lg:justify-end lg:w-[500px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/geranimo-9yvADFNcXOc-unsplash-resized.jpg"
          alt="leopard"
          width={500}
          height={300}
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
