"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import PortfolioItem from "../components/portfolio-item"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import MouseFollower from "../components/mouse_follow"
import Navbar from "../components/navbar"
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "UI/UX", "Websites", "Web Apps", "Graphic Design"]

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

  const portfolioItems = [
    {
      id: 1,
      title: "Makwin Logo Design",
      category: "Graphic Design",
      image: "/assets/portfolio_images/2.png?height=300&width=300",
      alt: "Makwin Logo Design",
      githubUrl: "https://github.com/username/mahavin-logo",
      demoUrl: "https://example.com/mahavin-logo",
    },
    {
      id: 2,
      title: "Woodstock Music Classes",
      category: "Graphic Design",
      image: "/assets/portfolio_images/classical Music classes.png?height=400&width=400",
      alt: "Music Classes Poster",
      githubUrl: "https://github.com/username/woodstock-music",
      demoUrl: "https://example.com/woodstock-music",
    },
    {
      id: 3,
      title: "Login UI Design",
      category: "Web Apps",
      image: "/assets/portfolio_images/login.png?height=400&width=400",
      alt: "Login UI",
      githubUrl: "https://github.com/username/login-ui",
      demoUrl: "https://example.com/login-ui",
    },
    {
      id: 4,
      title: "Triumph Motorcycle Website",
      category: "Websites",
      image: "/assets/portfolio_images/Group 7.jpg?height=400&width=400",
      alt: "Motorcycle Website",
      githubUrl: "https://github.com/username/triumph-website",
      demoUrl: "https://example.com/triumph-website",
    },
    {
      id: 5,
      title: "BuildArch Website - Dark",
      category: "UI/UX",
      image: "/assets/portfolio_images/Group 9.png?height=400&width=400",
      alt: "Dark Theme BuildArch",
      githubUrl: "https://github.com/username/buildarch-dark",
      demoUrl: "https://example.com/buildarch-dark",
    },
    {
      id: 6,
      title: "Personal Template",
      category: "Graphic Design",
      image: "/assets/portfolio_images/Design Stunning Mobile uiux.png?height=400&width=400",
      alt: "Mobile UI Design",
      githubUrl: "https://github.com/username/template",
      demoUrl: "https://example.com/template",
    },
    {
      id: 7,
      title: "Personal Website",
      category: "Websites",
      image: "/assets/portfolio_images/Home Screen.png?height=400&width=400",
      alt: "Portfolio Site",
      githubUrl: "https://github.com/username/personal-site",
      demoUrl: "https://example.com/personal-site",
    },
    {
      id: 8,
      title: "Real-time News Web App",
      category: "Web Apps",
      image: "/assets/portfolio_images/laptop.jp?height=400&width=400",
      alt: "News Web App",
      githubUrl: "https://github.com/username/news-app",
      demoUrl: "https://example.com/news-app",
    },
  ]

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <MouseFollower />
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section
          className="pt-[91px] sm:pt-[91px] flex justify-center"
          data-aos="zoom-in"
        >
          <Image
            src="/assets/Group 10.png"
            alt="Portfolio Heading"
            width={250}
            height={179}
            className="w-[90%] sm:w-[45%]"
          />
        </section>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-45 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`px-4 py-2 text-lg transition-all ${
                activeCategory === category
                  ? "font-bold border-b-2 border-white"
                  : "hover:text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <PortfolioItem
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  alt={item.alt}
                  githubUrl={item.githubUrl}
                  demoUrl={item.demoUrl}
                />
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12" data-aos="fade-in">
              <p className="text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* View More Button */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center mt-12" data-aos="zoom-in">
            <button className="border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors">
              click here to view more
            </button>
          </div>
        )}
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
    </div>
  )
}
