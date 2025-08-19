"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import MouseFollower from "../components/mouse_follow";
import Navbar from "../components/navbar";
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

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
    <main className="text-white">
      <Navbar />
      <MouseFollower />

      {/* About Me Section */}
      <section className="container mx-auto px-4 pt-[91px] sm:pt-[91px]">
        <div className="relative mb-8 sm:mb-[142px] flex justify-center" data-aos="fade-up">
          <Image
            src="/assets/Group 71.png"
            alt="ABOUT ME"
            width={250}
            height={179}
            className="w-[90%] sm:w-[45%]"
          />
        </div>

        <div className="text-center mb-10 sm:mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-[25px] sm:text-[45px] font-bold mb-4 sm:mb-8">Who Am I?🕶️👨‍💻</h3>
          <p className="text-[20px] sm:text-[35px] leading-normal sm:leading-[68px] font-medium max-w-3xl mx-auto mb-10 sm:mb-[120px]">
            Hey, I&apos;m Makwin — the guy who turns clean UI/UX into powerful websites
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center px-2 sm:px-[10px]">
          <div data-aos="fade-right" data-aos-delay="300">
            <Image
              src="/assets/myimage2.jpg"
              alt="Makwin's profile picture"
              width={598}
              height={622}
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="400">
            <p className="text-[16px] sm:text-[20px] leading-relaxed sm:leading-[50px] font-normal">
              With a love for both design and development, I help brands and businesses create digital experiences that
              are smooth, modern, and performance-driven.
            </p>
            <p className="text-[16px] sm:text-[20px] leading-relaxed sm:leading-[50px] font-normal">
              I believe great design isn&apos;t just how it looks, but how it feels. Every pixel should have purpose.
            </p>
            <p className="text-[16px] sm:text-[20px] leading-relaxed sm:leading-[50px] font-normal">
              I don&apos;t just design — I build it. I care about performance, structure, and bringing the UI to life.
            </p>
            <p className="text-[16px] sm:text-[20px] leading-relaxed sm:leading-[50px] font-normal">
              Every project is a journey we take together. I listen, adapt, and iterate to bring your vision to reality.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-8">
        <h2
          className="text-[20px] sm:text-[45px] font-bold mb-8 sm:mb-16 text-center mt-12 sm:mt-[160px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Experience 💼
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <div
            className="group border-b border-white-800 pb-6 sm:pb-8 hover:bg-[#1a1a1a] hover:scale-[1.01] transition-all duration-300 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
              <h3 className="text-[20px] sm:text-[30px] font-medium">Software Engineer Trainee</h3>
              <span className="px-3 py-1 border border-white-700 text-sm group-hover:bg-white group-hover:text-black transition duration-300 w-fit">
                2025-present
              </span>
            </div>
            <p className="text-[16px] sm:text-[20px]">Yucca Scalian Group </p>
          </div>
          <div
            className="group border-b border-white-800 pb-6 sm:pb-8 hover:bg-[#1a1a1a] hover:scale-[1.01] transition-all duration-300 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
              <h3 className="text-[20px] sm:text-[30px] font-medium">UI/UX Designer & Frontend Developer (Intern)</h3>
              <span className="px-3 py-1 border border-white-700 text-sm group-hover:bg-white group-hover:text-black transition duration-300 w-fit">
                2025
              </span>
            </div>
            <p className="text-[16px] sm:text-[20px]">Abhimo Tech Solutions</p>
          </div>

          <div
            className="group border-b border-white-800 pb-6 sm:pb-8 hover:bg-[#1a1a1a] hover:scale-[1.01] transition-all duration-300 px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
              <h3 className="text-[20px] sm:text-[30px] font-medium">Freelance UI/UX Designer & Web Developer</h3>
              <span className="px-3 py-1 border border-white-700 text-sm group-hover:bg-white group-hover:text-black transition duration-300 w-fit">
                2024–present
              </span>
            </div>
            <p className="text-[16px] sm:text-[20px]">Upwork</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-[20px] sm:text-4xl font-bold mb-8 sm:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
          Client Testimonials ⭐
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div
            className="bg-[#1e1e1e] p-6 sm:p-8 rounded-lg min-h-[200px] sm:min-h-[280px] transition-all duration-350 hover:bg-white hover:text-black"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 sm:mr-4">
                <Image src="/placeholder.svg?height=56&width=56" alt="Client" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-lg">Liran Davidovich</h4>
                <p className="text-xs sm:text-sm opacity-70">Upwork Client</p>
              </div>
            </div>
            <p className="text-[16px] sm:text-base leading-relaxed">
              Makwin did an excellent job on this project. He was professional, communicated clearly, and delivered
              quality work on time.
            </p>
          </div>

          <div
            className="bg-[#1e1e1e] p-6 sm:p-8 rounded-lg min-h-[200px] sm:min-h-[280px] transition-all duration-350 hover:bg-white hover:text-black"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 sm:mr-4">
                <Image src="/placeholder.svg?height=56&width=56" alt="Client" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold text-[20px] sm:text-lg">Mathew Francis</h4>
                <p className="text-xs sm:text-sm opacity-70"> Client</p>
              </div>
            </div>
            <p className="text-[16px] sm:text-base leading-relaxed">
              Highly recommended! Makwin is very professional and has a deep understanding of web design. He delivered
              great results.
            </p>
          </div>
        </div>
      </section>

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
    </main>
  );
}