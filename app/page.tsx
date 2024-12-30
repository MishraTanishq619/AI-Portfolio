"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};

export default function Portfolio() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
			<AnimatePresence mode="wait">
				<motion.div
					key={darkMode ? "dark" : "light"}
					initial="initial"
					animate="in"
					exit="out"
					variants={pageVariants}
					transition={pageTransition}
					className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
				>
					<Header darkMode={darkMode} setDarkMode={setDarkMode} />
					<main>
						<Hero />
						<About />
						<Skills />
						<Experience />
						<Projects />
						<Contact />
					</main>
					<Footer />
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
