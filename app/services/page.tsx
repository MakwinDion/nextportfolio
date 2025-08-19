"use client";

import Image from "next/image";
import Link from "next/link";
import MouseFollower from "../components/mouse_follow";
import Navbar from "../components/navbar";
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ServiceCard Component
function ServiceCard({ title, link, points, icon }) {
  return (
    <div
      className="bg-black text-white border border-white p-4 sm:p-6 md:p-8 relative transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <div className="p-1.5 sm:p-2 border border-white inline-block">{icon}</div>
        <Link
          href={link}
          className="border border-white px-2 py-0.5 sm:px-4 sm:py-1 text-xs sm:text-sm hover:bg-white hover:text-black transition-colors"
        >
          View Work
        </Link>
      </div>
      <h4 className="text-lg md:text-xl font-bold text-left mb-3 md:mb-4 border-b border-white/50 pb-2">{title}</h4>
      <ul className="text-left space-y-1 md:space-y-2 text-sm md:text-base">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span> {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Page
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top level UI */}
      <Navbar />
      <MouseFollower />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Heading */}
        <section className="text-center mb-12 md:mb-20">
          <div className="mb-8 md:mb-12" data-aos="fade-down" data-aos-duration="800">
           <Image
  src="/assets/Frame 38.png"
  alt="SERVICES"
  width={700}
  height={120}
  className="mx-auto w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px]"
  priority
/>

          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 mb-10 md:mb-20" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light">
              Stuff I'm Good At <span className="ml-2">🛠️</span>
            </h3>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mx-auto">
            {/* 4 Cards */}
            <ServiceCard
              title="UI/UX DESIGN"
              link="/portfolio/ui-ux"
              points={[
                "Clean, modern interface design",
                "Focused on user experience",
                "Wireframes & interactive prototypes",
                "Built using Figma & Adobe XD",
              ]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                  <line x1="7" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.5" />
                  <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="1.5" />
                  <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" />
                </svg>
              }
            />

            <ServiceCard
              title="FRONT END DEVELOPMENT"
              link="/portfolio/frontend"
              points={[
                "Responsive web design",
                "Next.js & Tailwind CSS focused",
                "Pixel-perfect implementation",
                "Cross-browser compatibility",
              ]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path d="M9 21L15 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M4 8L2 12L4 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8L22 12L20 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <ServiceCard
              title="PYTHON PROGRAMMING"
              link="/portfolio/python"
              points={[
                "Automation scripts & tools",
                "Backend logic & APIs",
                "Data handling & processing",
                "Fast, efficient code structure",
              ]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path
                    d="M12 3C9.5 3 7.5 4.5 7.5 6.5V9H10V10H5C3.5 10 2 11.5 2 13C2 14.5 3 16.5 5 16.5H7V14C7 12.5 8.5 11 10 11H14C15.5 11 17 9.5 17 8V6.5C17 4.5 15 3 12 3Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 21C14.5 21 16.5 19.5 16.5 17.5V15H14V14H19C20.5 14 22 12.5 22 11C22 9.5 21 7.5 19 7.5H17V10C17 11.5 15.5 13 14 13H10C8.5 13 7 14.5 7 16V17.5C7 19.5 9 21 12 21Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="8.5" cy="7.5" r="0.5" fill="white" />
                  <circle cx="15.5" cy="16.5" r="0.5" fill="white" />
                </svg>
              }
            />

            <ServiceCard
              title="GRAPHIC DESIGN"
              link="/portfolio/graphic-design"
              points={[
                "Logo, posters & branding",
                "Creative and aesthetic visuals",
                "Print & digital designs",
                "Adobe Photoshop & Illustrator",
              ]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="white" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="text-center mt-16 sm:mt-24 md:mt-32 mb-12 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 md:mb-16" data-aos="fade-up" data-aos-duration="800">Why Choose Me 💡</h3>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-10 px-4">
            <p className="text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">🚀 Fast Delivery, Clear Communication.</p>
            <p className="text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">💌 Detail-oriented with clean, scalable code</p>
            <p className="text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">🤝 Flexible with client needs & feedback</p>
            <p className="text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">✨ Passionate about design that works</p>
          </div>

          {/* Social Icons Section */}
          <section className="mt-16 sm:mt-20 md:mt-[120px] mb-12 sm:mb-16 md:mb-[80px]">
            <div className="flex justify-center gap-5 sm:gap-[25px] md:gap-[35px]" data-aos="fade-up" data-aos-duration="800">
              <a
                href="https://instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F] transition-transform hover:scale-110 duration-300"
              >
                <FaInstagram size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://linkedin.com/in/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077B5] transition-transform hover:scale-110 duration-300"
              >
                <FaLinkedin size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://github.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6e5494] transition-transform hover:scale-110 duration-300"
              >
                <FaGithub size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://dribbble.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ea4c89] transition-transform hover:scale-110 duration-300"
              >
                <FaDribbble size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}