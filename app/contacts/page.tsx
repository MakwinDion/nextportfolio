"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import MouseFollower from "../components/mouse_follow"
import Navbar from "../components/navbar"
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa"

export default function Home() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-design",
    message: "",
  })

  // Select dropdown state
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const services = [
    { value: "web-design", label: "Web Design" },
    { value: "app-development", label: "App Development" },
    { value: "branding", label: "Branding" },
    { value: "ui-ux", label: "UI/UX Design" },
  ]

  // Animation refs
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const serviceRef = useRef(null)
  const messageRef = useRef(null)
  const buttonRef = useRef(null)
  const footerRef = useRef(null)

  // Animation in-view states
  const nameInView = useInView(nameRef, { once: true, amount: 0.5 })
  const emailInView = useInView(emailRef, { once: true, amount: 0.5 })
  const phoneInView = useInView(phoneRef, { once: true, amount: 0.5 })
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.5 })
  const messageInView = useInView(messageRef, { once: true, amount: 0.5 })
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.5 })
  const footerInView = useInView(footerRef, { once: true, amount: 0.3 })

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }))
    setIsSelectOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  // Social animation variants
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <MouseFollower />

      <Navbar />

      {/* Image Section */}
      <section className="pt-[91px] sm:pt-[91px] flex justify-center" data-aos="zoom-in">
        <Image
          src="/assets/112.png"
          alt="Portfolio Heading"
          width={250}
          height={179}
          className="w-[90%] sm:w-[45%]"
        />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-light mt-10 md:mt-16 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Have a Project in Mind? 💬 ⚡
          </motion.h2>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Name */}
            <motion.div
              ref={nameRef}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={nameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Makwin"
                className="w-full h-14 px-4 bg-transparent border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              ref={emailRef}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={emailInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="makwin48@gmail.com"
                className="w-full h-14 px-4 bg-transparent border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              ref={phoneRef}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={phoneInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="phone" className="block text-lg">
                Phone
              </label>
              <div className="flex">
                <div className="flex items-center justify-center bg-transparent border border-r-0 border-gray-700 rounded-l-md px-3 h-14">
                  <span className="flex items-center">
                    +91 <span className="ml-2">🇮🇳</span>
                  </span>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7829981170"
                  className="w-full h-14 px-4 bg-transparent border border-gray-700 rounded-none rounded-r-md text-white focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
            </motion.div>

            {/* Service select */}
            <motion.div
              ref={serviceRef}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="service" className="block text-lg">
                Choose Service
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                  className="w-full h-14 px-4 bg-transparent border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white flex items-center justify-between"
                >
                  <span>{services.find((service) => service.value === formData.service)?.label || "Web Design"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${isSelectOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSelectOpen && (
                  <ul className="absolute z-10 mt-1 w-full bg-black border border-gray-700 rounded-md max-h-60 overflow-auto">
                    {services.map(({ value, label }) => (
                      <li
                        key={value}
                        onClick={() => handleServiceChange(value)}
                        className={`cursor-pointer px-4 py-3 hover:bg-white-600 ${formData.service === value ? "bg-white-700" : ""}`}
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            ref={messageRef}
            className="mt-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={messageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            ref={buttonRef}
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-purple-700 hover:bg-purple-900 rounded-md font-semibold text-lg transition"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>

        {/* Google Map */}
        <section className="mt-16 h-[320px] md:h-[500px] w-full rounded-xl overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5699965023134!2d75.28696547493251!3d12.890765877821936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85a4958c04f2d%3A0xa1cae8e1d55f79df!2sCanara%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693907639112!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Canara Engineering College Location"
            className="border-0"
          />
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
      </section>
    </main>
  )
}
