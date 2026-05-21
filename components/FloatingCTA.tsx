"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4"
    >
      <a
        href="tel:+46704128391"
        className="flex items-center justify-center gap-3 w-full bg-bronze text-white font-body font-600 text-base py-4 rounded-lg shadow-lg min-h-[56px]"
      >
        <Phone size={20} />
        Ring Regmyr &amp; Jansson
      </a>
    </motion.div>
  );
}
