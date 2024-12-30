import { motion } from "framer-motion";

const skills = [
	{
		name: "Frontend",
		technologies: [
			"Javascript",
			"Typescript",
			"ReactJs",
			"Recoil",
			"NextJs",
			"ShadcnUI",
			"AceternityUI",
			"NextUI",
		],
		proficiency: 80,
	},
	{
		name: "Backend",
		technologies: [
			"NodeJs",
			"ExpressJs",
			"Typescript",
			"Socket.io",
			"NextAuth",
		],
		proficiency: 85,
	},
	{
		name: "DevOps",
		technologies: [
			"Docker",
			"Docker Compose",
			"AWS",
			"GH-Actions (CICD)",
			"Git",
			"GitHub",
		],
		proficiency: 70,
	},
	{
		name: "Database",
		technologies: ["mySQL", "MongoDB", "PostgreSQL", "PrismaDB"],
		proficiency: 85,
	},
	{
		name: "Tools",
		technologies: ["Ngrok", "Nginx"],
		proficiency: 70,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
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

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Technical Skills
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{skills.map((skill) => (
						<motion.div
							key={skill.name}
							className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
							variants={itemVariants}
						>
							<h3 className="text-xl font-semibold mb-4">
								{skill.name}
							</h3>
							<div className="mb-4">
								<div className="flex justify-between mb-1">
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										Proficiency
									</span>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										{skill.proficiency}%
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
									<motion.div
										className="bg-blue-600 h-2.5 rounded-full"
										initial={{ width: 0 }}
										whileInView={{
											width: `${skill.proficiency}%`,
										}}
										transition={{
											duration: 1,
											ease: "easeOut",
										}}
										viewport={{ once: true }}
									></motion.div>
								</div>
							</div>
							<ul className="list-disc list-inside">
								{skill.technologies.map((tech) => (
									<li
										key={tech}
										className="text-sm text-gray-600 dark:text-gray-300"
									>
										{tech}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
