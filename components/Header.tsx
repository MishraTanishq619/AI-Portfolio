import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tanishq Mishra
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, i) => (
              <motion.li
                key={item}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.1 }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              whileHover={{ scale: 1.1 }}
            >
              <AnimatePresence mode='wait'>
                <motion.button
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </AnimatePresence>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

