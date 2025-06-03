import { motion } from "framer-motion";
import Image from "next/image";

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

export default function About() {
	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="flex flex-col md:flex-row items-center gap-8"
				>
					<motion.div
						variants={itemVariants}
						className="w-full md:w-1/3 flex justify-center"
					>
						<Image
							src="/myAvataration.png?height=300&width=300"
							alt="Tanishq Mishra"
							width={300}
							height={300}
							className="rounded-full shadow-lg"
						/>
					</motion.div>
					<div className="w-full md:w-2/3">
						<motion.h2
							className="text-3xl font-bold mb-8 text-center md:text-left"
							variants={itemVariants}
						>
							About Me
						</motion.h2>
						<motion.div
							className="space-y-4"
							variants={itemVariants}
						>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Hello! I&apos;m Tanishq Mishra, a passionate
								software developer with a keen interest in
								building innovative web applications. I love
								exploring new technologies and continuously
								improving my skills.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Final-year B.Tech Computer Science student with
								a strong passion for full-stack development and
								building user-centric web platforms.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Experienced in leading development teams,
								conducting requirement analysis, and designing
								scalable systems with robust role-based access
								control.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Regular contributor to open-source initiatives
								and collaborative coding events such as
								Hacktoberfest and GSSOC.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Strong understanding of software development
								principles, system design, and modern deployment
								practices.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Highly self-motivated and committed to
								continuous learning through personal projects,
								open-source contributions, and community
								programs.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Actively pursuing remote opportunities to
								contribute to impactful products and gain
								experience through global programs like GSoC,
								MLH Fellowship, and hackathons.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
