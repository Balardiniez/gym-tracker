'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export function NavigationCard({ 
  title, 
  href, 
  icon 
}: { 
  title: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="p-6 rounded-xl bg-[#242938] hover:bg-[#2C3241] transition-colors duration-200 flex flex-col items-center justify-center gap-4 cursor-pointer min-h-[200px] text-white"
      >
        <div className="text-4xl">{icon}</div>
        <h3 className="text-xl font-medium text-center">{title}</h3>
      </motion.div>
    </Link>
  );
}