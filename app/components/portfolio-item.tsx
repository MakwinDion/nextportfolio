"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface PortfolioItemProps {
  title: string
  category: string
  image: string
  alt: string
  githubUrl: string
  demoUrl: string
}

export default function PortfolioItem({ title, category, image, alt, githubUrl, demoUrl }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{category}</p>

          <div className="flex space-x-4 mt-2">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
