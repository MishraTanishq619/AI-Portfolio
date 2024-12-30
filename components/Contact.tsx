import { motion } from "framer-motion";
import {
	Phone,
	Mail,
	GitlabIcon as GitHub,
	Linkedin,
	Twitter,
} from "lucide-react";

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

export default function Contact() {
	return (
		<section id="contact" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-4xl font-bold mb-12 text-center dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Get In Touch
				</motion.h2>
				<motion.div
					className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="md:flex">
						<div className="md:w-1/2 p-8 bg-blue-600 text-white">
							<motion.h3
								className="text-2xl font-semibold mb-4"
								variants={itemVariants}
							>
								Contact Information
							</motion.h3>
							<motion.p className="mb-6" variants={itemVariants}>
								Feel free to reach out to me for any inquiries
								or opportunities.
							</motion.p>
							<motion.div
								className="space-y-4"
								variants={itemVariants}
							>
								<div className="flex items-center">
									<Phone className="w-6 h-6 mr-4" />
									<span>+91 9399788618</span>
								</div>
								<div className="flex items-center">
									<Mail className="w-6 h-6 mr-4" />
									<span>mishratanishq619@gmail.com</span>
								</div>
							</motion.div>
							<motion.div
								className="flex space-x-4 mt-8"
								variants={itemVariants}
							>
								<motion.a
									href="https://github.com/MishraTanishq619"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<GitHub className="w-6 h-6" />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/tanishq-mishra-495541255/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<Linkedin className="w-6 h-6" />
								</motion.a>
								<motion.a
									href="https://x.com/Mi_Tanishq_619"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<Twitter className="w-6 h-6" />
								</motion.a>
							</motion.div>
						</div>
						<div className="md:w-1/2 p-8">
							<motion.form
								className="space-y-6"
								variants={itemVariants}
							>
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									></textarea>
								</div>
								<motion.button
									type="submit"
									className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => e.preventDefault()}
								>
									Send Message (Not Working)
								</motion.button>
							</motion.form>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
