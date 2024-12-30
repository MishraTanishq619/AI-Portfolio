import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-200 dark:bg-gray-800 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Tanishq Mishra. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}

