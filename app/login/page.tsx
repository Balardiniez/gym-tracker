'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1B1F2B] flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md space-y-8 bg-[#242938] p-8 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col items-center">
          <GiWeightLiftingUp className="text-5xl text-[#30E0A1]" />
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white">
            Welcome to Gym Tracker
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md bg-red-500/10 border border-red-500/20 p-4"
            >
              <p className="text-sm text-red-400">{error}</p>
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-lg border-0 bg-[#2C3241] p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#30E0A1] sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-lg border-0 bg-[#2C3241] p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#30E0A1] sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-lg bg-[#30E0A1] px-3 py-3 text-sm font-semibold text-[#1B1F2B] hover:bg-[#2bc890] focus:outline-none focus:ring-2 focus:ring-[#30E0A1] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}