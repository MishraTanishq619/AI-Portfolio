import { motion } from "framer-motion";
import {
	GitlabIcon as GitHub,
	Linkedin,
	Twitter,
	ChevronDown,
} from "lucide-react";
import Image from "next/image";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
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

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src="/aiavatar.png?height=1080&width=1920"
					alt="Background pattern"
					layout="fill"
					objectFit="cover"
					className="opacity-10"
				/>
			</div>
			<motion.div
				className="container mx-auto px-4 z-10"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
						<motion.h1
							className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
							variants={itemVariants}
						>
							Hi, I'm{" "}
							<span className="text-blue-600 dark:text-blue-400">
								Tanishq Mishra
							</span>
						</motion.h1>
						<motion.h2
							className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300"
							variants={itemVariants}
						>
							Full Stack Web Developer
						</motion.h2>
						<motion.p
							className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg"
							variants={itemVariants}
						>
							Passionate about creating innovative web solutions
							and turning ideas into reality through code.
						</motion.p>
						<motion.div
							className="flex justify-center md:justify-start space-x-4 mb-8"
							variants={itemVariants}
						>
							<motion.a
								href="https://github.com/MishraTanishq619"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<GitHub className="w-6 h-6" />
							</motion.a>
							<motion.a
								href="https://www.linkedin.com/in/tanishq-mishra-495541255/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Linkedin className="w-6 h-6" />
							</motion.a>
							<motion.a
								href="https://x.com/Mi_Tanishq_619"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Twitter className="w-6 h-6" />
							</motion.a>
						</motion.div>
						<motion.div variants={itemVariants}>
							<motion.a
								href="#contact"
								className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get in touch
							</motion.a>
						</motion.div>
					</div>
					<motion.div
						className="w-full md:w-1/2 flex justify-center md:justify-end"
						variants={itemVariants}
					>
						<div className="relative w-64 h-64 md:w-80 md:h-80">
							<Image
								src="/linkedinpic.jpeg?height=400&width=400"
								alt="Tanishq Mishra"
								layout="fill"
								objectFit="cover"
								className="rounded-full shadow-2xl"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<a
					href="#about"
					className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
				>
					<ChevronDown className="w-8 h-8 animate-bounce" />
				</a>
			</motion.div>
		</section>
	);
}
