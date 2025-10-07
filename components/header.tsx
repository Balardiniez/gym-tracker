'use client';

import { motion } from 'framer-motion';
import { GiWeightLiftingUp } from 'react-icons/gi';

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-[#242938] text-white p-4 flex items-center justify-center shadow-lg"
    >
      <div className="flex items-center gap-2 text-xl font-semibold">
        <GiWeightLiftingUp className="text-2xl text-[#30E0A1]" />
        <span>Gym Tracker</span>
      </div>
    </motion.header>
  );
}