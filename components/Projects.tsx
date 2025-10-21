import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
	{
		title: "My Story App",
		description:
			"An open-source application with styled scrollbar and Docker implementation.",
		image: "/mystory.png?height=200&width=300",
		tech: ["NextJs", "Docker", "Docker Compose"],
		github: "https://github.com/MishraTanishq619/mystory",
		demo: "https://mystorybuild.vercel.app/",
	},
	{
		title: "Zcrum (Jira-Clone)",
		description:
			"This project is a full-stack Jira clone built using modern web development tools and libraries.",
		image: "/zcrum.png?height=200&width=300",
		tech: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"Shadcn UI",
			"NeonDB",
			"Prisma ORM",
			"Clerk Authentication",
			"Vercel Deployment",
		],
		github: "https://github.com/MishraTanishq619/jira-clone",
		demo: "https://jira-clone-mishra-tanishq.vercel.app/",
	},
	{
		title: "Event Registration & Management",
		description:
			"A comprehensive full-stack website for event registration and management.",
		image: "/techno2024.png?height=200&width=300",
		tech: [
			"NextJs",
			"TailwindCSS",
			"NodeJs",
			"ExpressJs",
			"PostgreSQL",
			"PrismaDB",
		],
		github: "https://github.com/MishraTanishq619/technorollix2024",
		demo: "https://demo-not-availlable.com",
	},
	{
		title: "Video Streaming Platform",
		description:
			"A frontend web application for video streaming using Next.js and various modern technologies.",
		image: "/yt-clone.png?height=200&width=300",
		tech: ["NextJs", "TailwindCSS", "Typescript", "ShadcnUI", "RapidAPI"],
		github: "https://github.com/MishraTanishq619/Youtube_Clone",
		demo: "https://youtube-clone-mishratanishq619.netlify.app/",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-6">
				<motion.h2
					className="text-4xl font-bold text-center mb-16 dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Featured Projects
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{projects.map((project) => (
						<motion.div
							key={project.title}
							className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
							variants={itemVariants}
						>
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-300 hover:scale-110"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-3 dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center">
									<motion.a
										href={project.github}
										className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Github className="w-5 h-5" />
										<span>Code</span>
									</motion.a>
									<motion.a
										href={project.demo}
										className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<ExternalLink className="w-5 h-5" />
										<span>Demo</span>
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
