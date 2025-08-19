"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const serviceRef = useRef(null)
  const messageRef = useRef(null)
  const buttonRef = useRef(null)

  const nameInView = useInView(nameRef, { once: true, amount: 0.5 })
  const emailInView = useInView(emailRef, { once: true, amount: 0.5 })
  const phoneInView = useInView(phoneRef, { once: true, amount: 0.5 })
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.5 })
  const messageInView = useInView(messageRef, { once: true, amount: 0.5 })
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.5 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Makwin"
            className="bg-transparent border-gray-700 rounded-md h-14 text-white"
          />
        </motion.div>

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
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="makwin48@gmail.com"
            className="bg-transparent border-gray-700 rounded-md h-14 text-white"
          />
        </motion.div>

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
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="7829981170"
              className="bg-transparent border-gray-700 rounded-none rounded-r-md h-14 text-white"
            />
          </div>
        </motion.div>

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
          <Select onValueChange={handleServiceChange}>
            <SelectTrigger className="bg-transparent border-gray-700 rounded-md h-14 text-white">
              <SelectValue placeholder="Web Design" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-design">Web Design</SelectItem>
              <SelectItem value="app-development">App Development</SelectItem>
              <SelectItem value="branding">Branding</SelectItem>
              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </div>

      <motion.div
        ref={messageRef}
        className="mt-6 md:mt-8 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={messageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="message" className="block text-lg">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your Message Here"
          className="bg-transparent border-gray-700 rounded-md min-h-[200px] md:min-h-[280px] text-white"
        />
      </motion.div>

      <motion.div
        ref={buttonRef}
        className="mt-6 md:mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          type="submit"
          className="bg-white text-black hover:bg-gray-200 rounded-full px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-medium"
        >
          Send Message
        </Button>
      </motion.div>
    </form>
  )
}
