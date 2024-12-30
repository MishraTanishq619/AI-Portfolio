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
							<p>
								I am a 3rd Year Student, pursuing B.Tech in CSE.
								I am interested in Full Stack Web Development
								and learning them by myself. I hope to make my
								career as a Remote Web Engineer.
							</p>
							<p>
								I am looking forward to GSOC, MLH fellowship and
								other Hackathons and Open Source Programs in my
								interests.
							</p>
							<p>
								Currently, I have a CGPA of 8.5 in my B.Tech CSE
								program (2022-2026).
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
