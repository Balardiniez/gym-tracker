'use client';

import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

export function SignOutButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg bg-[#242938] text-white hover:bg-[#2C3241] transition-colors duration-200"
      onClick={() => signOut()}
    >
      <BiLogOut />
      <span>Sign out</span>
    </motion.button>
  );
}