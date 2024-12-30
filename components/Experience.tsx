import { motion } from 'framer-motion'
import { Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack Intern',
    company: 'Aurika Tech (Startup)',
    date: '06/2024 - 09/2024',
    responsibilities: [
      'Improved and optimized core APIs to enhance backend functionality.',
      'Made significant frontend changes to improve user experience and interface design.',
      'Implemented a new feature for inputting gold rates from admins and using them for product\'s pricing.',
      'Optimized Dockerfiles, resulting in faster build and deployment times.',
      'Designed and deployed a side application to streamline subscription transitions from pre-production to production environments.',
    ],
  },
  {
    title: 'Contributor',
    company: 'GirlScript Summer Of Code (GSSOC 2024)',
    date: '05/2024 - 06/2024',
    responsibilities: [
      'Worked on Many different Open Source projects, discussed issues and made 10+ PRs.',
      'Implemented DevOps, Dockerfiles, Docker-Compose files for both production and development server in many of the project repositories.',
      'Doing some Front End related works like Styling some components, etc.',
    ],
  },
  {
    title: 'Front End Lead',
    company: 'Technorollix 2024',
    date: '02/2024 - 03/2024',
    responsibilities: [
      'Worked in NextJs, TailwindCSS, Framer Motion and some other Libraries. Troubleshooting, tested and remedied issues before software deployment.',
      'Developed site content and graphics by coordinating with copywriters and graphic artists. Provided standardized technical solutions for bug issues.',
      'Resolved cross-browser compatibility issues for a consistent look across different platforms.',
    ],
  },
  {
    title: 'Front End Intern',
    company: 'Prodigy InfoTech',
    date: '11/2023 - 12/2023',
    responsibilities: [
      'Made 5 Beginner-Intermediate level Projects.',
      'Developed web applications using NextJs, TailwindCSS, Typescript.',
      'Implemented responsive design principles to ensure websites are mobile friendly.',
    ],
  },
  {
    title: 'Contributor',
    company: 'Hacktoberfest 2023 & 2024',
    date: '10/2023 - 11/2023 & 10/2024 - 11/2024',
    responsibilities: [
      'Worked with NextJs (ReactJs) using Javascript, And with Django and Flask using Python.',
      'Actively participated in Hacktoberfest, an annual global event promoting open-source collaboration. Demonstrated proficiency in version control systems such as Git and GitHub while managing contributions and pull requests.',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="mb-12 relative pl-8 md:pl-0"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.date}
                  </div>
                </div>
                <div className="md:w-2/3 relative">
                  <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800 hidden md:block"></div>
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
                  <ul className="list-disc list-inside space-y-2 ml-4 md:ml-8">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 md:left-1/3 top-0 h-full w-px bg-blue-200 dark:bg-blue-800"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

