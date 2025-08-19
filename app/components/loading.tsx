// components/Loading.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      {/* Logo */}
      <div className="w-[250px] sm:w-[350px] md:w-[450px] mb-6">
        <Image
          src="/assets/2-removebg-preview.png"
          alt="Makwin Dion Logo"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-[120px] sm:w-[150px] h-[2px] bg-white/20 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
