import { resumeButtonVariants } from '@/lib/variants';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const greetings = useMemo(() => {
    return ['Wewe','Hello', 'ⴰⵣⵓⵍ', 'Bonjour', 'Salam'];
  }, []);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [greetings]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className='flex flex-col gap-4 justify-center items-center text-center tracking-wide leading-relaxed'>
      <div className='flex items-center justify-center space-x-2 md:space-x-4 text-5xl lg:text-6xl 2xl:text-7xl font-bold'>
        <AnimatePresence mode='wait'>
          <motion.h1
            layout
            key={currentGreetingIndex}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.2,
              },
            }}>
            {greetings[currentGreetingIndex]}{' '}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.span
            layout
            key={currentGreetingIndex}
            initial={{
              opacity: 0,
              y: -10,
              rotate: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [10.5, -10.5, 10.5, -10.5, 0],
              transition: {
                duration: 0.5,
                delay: 0.7,
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className='xl:text-5xl 2xl:text-6xl select-none'>
            👋
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className='text-sm font-light lg:text-base 2xl:text-lg max-w-2xl'>
        A self-taught web developer, crafting digital wonders basis with code.
        Building dreams one pixel at a time, all while chasing the elusive bug
        that dared to challenge my brilliance.
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
        className='text-sm font-light lg:text-base 2xl:text-lg max-w-xs lg:max-w-xl'>
        in other words, i&apos;m a problems solver (except my own 😣).
      </motion.p>
      <motion.button
        initial='hidden'
        animate='visible'
        whileHover='hover'
        whileTap='tap'
        variants={resumeButtonVariants}
        className='text-xs px-4 py-2 md:text-sm 2xl:text-base border rounded-md border-slate-900 bg-slate-900 text-slate-100 
          dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/5 shadow-slate-900/50 shadow-lg'>
        <Link href='/CV-AALOUWAN-ENG.pdf' target='_blank'>
          Resume
        </Link>
      </motion.button>
    </main>
  );
}
