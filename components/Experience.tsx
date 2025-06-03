import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
	{
		title: "Software Project Lead",
		company: "Technorollix 2025",
		date: "02/2024 - 03/2024",
		responsibilities: [
			"A full-featured registration system designed to streamline participant onboarding for our college’s flagship technical and management fest.",
			"Technologies used: Next.js for frontend, Next.js API routes for backend, MongoDB as database, Nginx for reverse-proxy. Deployed on an EC2 t3.large instance.",
			"Built a user management system with features like user registration, team building with invitations, and JWT-based authentication.",
			"Integrated Nodemailer to handle email workflows including OTP delivery, password reset, welcome emails, and team invitation requests.",
			"Conducted requirement analysis and led system design, ensuring scalability and role-based access across the platform.",
			"Developed a user management system with features including registration, JWT-based authentication, and team building via invite links.",
			"Implemented the admin portal with role-specific permissions for admins (event conveners) and managers (individual event heads).",
			"Managed reverse proxy setup via Nginx and deployed the application on an AWS EC2 (t3.large) instance.",
			"Played a key role in backend logic, data modeling, and secure authentication workflows.",
		],
	},
	{
		title: "Full-Stack Intern",
		company: "Aurika Tech (Startup)",
		date: "06/2024 - 09/2024",
		responsibilities: [
			"Supported the development of a specialized e-commerce platform empowering jewelry sellers to manage products, pricing, and orders efficiently.",
			"The platform integrated ONDC’s API gateway and protocols to enable standardized operations and broader marketplace interoperability.",
			"TechStack: Nginx for reverse-proxy; Js-Node for web-requests, gateway-requests and notifications; Ts-Node for IGM and bugzilla services; React for frontend; Flask for protocol-layer service; Docker+Compose for containerization; Portainer for container logs and management; EC2 for hosting; S3 for blob storage.",
			"Improved and optimized core APIs to enhance backend functionality.",
			"Made significant frontend changes to improve user experience and interface design.",
			"Implemented a new feature for inputting gold rates from admins and using them for product’s pricing.",
			"Optimized Docker files, resulting in faster build and deployment times.",
			"Designed and deployed a side application to streamline subscription transitions from pre-production to production environments.",
		],
	},
	{
		title: "Contributor",
		company: "GirlScript Summer Of Code (GSSOC 2024)",
		date: "05/2024 - 06/2024",
		responsibilities: [
			"Worked on many different open-source projects, discussed issues, and made 10+ PRs.",
			"Implemented DevOps, Dockerfiles, and Docker-Compose files for both production and development servers in many project repositories.",
			"Resolved a wide range of frontend bugs across multiple projects, significantly enhancing interface stability and overall user experience.",
			"Collaborated on multiple codebases to implement new frontend features and refine existing ones, ensuring responsive design and improved user interactions.",
		],
	},
	{
		title: "Front End Lead",
		company: "Technorollix 2024",
		date: "02/2024 - 03/2024",
		responsibilities: [
			"A comprehensive event registration platform built for our college’s annual technical and management fest.",
			"Worked in ReactJs, NextJs, TailwindCSS, Framer-Motion and some other Libraries. Troubleshooting, tested and remedied issues before software deployment.",
			"Developed site content and graphics by coordinating with copywriters and graphic artists. Provided standardized technical solutions for bug issues.",
			"Resolved cross-browser compatibility issues for a consistent look across different platforms.",
		],
	},
	{
		title: "Front End Intern",
		company: "Prodigy InfoTech",
		date: "11/2023 - 12/2023",
		responsibilities: [
			"The firm provides hands-on training to interns through five beginner-level projects over the course of a month.",
			"Participated in an intensive one-month training focused on completing five beginner-level projects to strengthen core development fundamentals.",
			"Developed web applications using NextJs, TailwindCSS, Typescript.",
			"Applied responsive design principles to create mobile-friendly interfaces across various screen sizes and devices.",
		],
	},
	{
		title: "Contributor",
		company: "Hacktoberfest 2023 & 2024",
		date: "10/2023 - 11/2023 & 10/2024 - 11/2024",
		responsibilities: [
			"Worked with NextJs(ReactJs) using Javascript, And with Django and Flask using Python.",
			"Actively participated in Hacktoberfest, an annual global event promoting open-source collaboration. Demonstrated proficiency in version control systems such as Git and GitHub while managing contributions and pull requests.",
			"Actively identified and resolved bugs and styling inconsistencies across multiple repositories to ensure smoother functionality and visual consistency.",
		],
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
									<h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
										{exp.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-2">
										{exp.company}
									</p>
									<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
										<Calendar className="w-4 h-4 mr-2" />
										{exp.date}
									</div>
								</div>
								<div className="md:w-2/3 relative">
									<div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800 hidden md:block"></div>
									<div
										className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 hidden md:block"
										style={{
											transform: "translateX(-50%)",
										}}
									></div>
									<ul className="list-disc list-inside space-y-2 ml-4 md:ml-8">
										{exp.responsibilities.map((resp, i) => (
											<li
												key={i}
												className="text-gray-700 dark:text-gray-300"
											>
												{resp}
											</li>
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
	);
}
