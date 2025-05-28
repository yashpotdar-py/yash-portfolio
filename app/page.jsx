"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiArrowRight, FiEye } from "react-icons/fi";
import {
  FaRocket,
  FaArrowRight,
  FaRobot,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiKalilinux,
  SiUpwork,
} from "react-icons/si";
import Link from "next/link";
import StatsComponent from "@/components/Stats";
import PhotoComponent from "@/components/Photo";
import SocialsComponent from "@/components/Socials";
import {
  cardHoverVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";

const technologies = [
  {
    icon: <SiPython />,
    name: "Python Developer",
    color: "from-yellow-500 to-green-600",
  },
  {
    icon: <SiReact />,
    name: "React Developer",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js Developer",
    color: "from-gray-600 to-black",
  },
  {
    icon: <SiKalilinux />,
    name: "Ethical Hacker",
    color: "from-blue-700 to-indigo-700",
  },
  {
    icon: <FaRobot />,
    name: "AI/ML Engineer",
    color: "from-purple-500 to-pink-600",
  },
];

const services = [
  {
    icon: <FaRobot />,
    title: "AI/ML Solutions",
    description: "Custom machine learning models and GenAI applications",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: <FaLock />,
    title: "Cybersecurity",
    description: "Penetration testing and security auditing",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: <SiReact />,
    title: "Full Stack Dev",
    description: "Modern web applications with React & Next.js",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaChartLine />,
    title: "Data Science",
    description: "Data analysis and predictive modeling",
    color: "from-green-500 to-emerald-600",
  },
];

const Home = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center w-full">
            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-10 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-2"
              >
                <HiSparkles className="text-accent" />
                <span className="text-accent font-semibold">
                  Available for Projects
                </span>
              </motion.div>

              {/* Main Heading with Animated Text */}
              <div className="space-y-3">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight"
                >
                  <span className="block text-white mb-1">Hello, I'm</span>
                  <span className="block text-transparent bg-gradient-to-r from-accent via-accent-hover to-accent bg-clip-text">
                    Yash Potdar
                  </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg md:text-xl text-white/80 font-medium min-h-[2.5rem]"
                >
                  <motion.span
                    key={currentTech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-3"
                  >
                    <span
                      className={`p-2 bg-gradient-to-r ${technologies[currentTech].color} rounded-2xl text-white text-lg shadow-md`}
                    >
                      {technologies[currentTech].icon}
                    </span>
                    {technologies[currentTech].name}
                  </motion.span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                A passionate B.Tech student specializing in{" "}
                <span className="text-accent font-semibold">
                  Artificial Intelligence
                </span>
                ,{" "}
                <span className="text-accent font-semibold">Cybersecurity</span>
                , and{" "}
                <span className="text-accent font-semibold">
                  Full-Stack Development
                </span>
                . I create innovative solutions that bridge cutting-edge
                technology with real-world impact.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-hover text-primary px-6 py-3 rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                  >
                    <span>Let's Work Together</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    className="group inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-accent/50 text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 backdrop-blur-sm"
                    onClick={() =>
                      window.open(
                        "/assets/resume/Yash_Potdar_Resume.pdf",
                        "_blank"
                      )
                    }
                  >
                    <span>Download CV</span>
                    <FiDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex justify-center lg:justify-start pt-2"
              >
                <SocialsComponent
                  containerStyles="flex gap-4"
                  iconStyles="w-11 h-11 border border-white/20 rounded-full flex justify-center items-center text-white/70 text-xl hover:bg-accent hover:text-primary hover:border-accent hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Photo Section */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative flex items-center justify-center min-h-[400px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl scale-110" />

                {/* Photo Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <PhotoComponent />
                </motion.div>

                {/* Floating Tech Icons */}
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}
                    animate={{
                      y: [0, -14, 0],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    style={{
                      top: `${18 + index * 13}%`,
                      right: index % 2 === 0 ? "-7%" : "auto",
                      left: index % 2 === 1 ? "-7%" : "auto",
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6"
            >
              <HiLightningBolt className="text-accent" />
              <span className="text-accent font-semibold">What I Do</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Services That{" "}
              <span className="text-transparent bg-gradient-to-r from-accent to-accent-hover bg-clip-text">
                Drive Results
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 h-full">
                  <div
                    className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl text-white text-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-white/5 border border-white/20 hover:border-accent/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore All Services</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-3xl p-12 lg:p-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build Something{" "}
                  <span className="text-transparent bg-gradient-to-r from-accent to-accent-hover bg-clip-text">
                    Extraordinary?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Let's transform your vision into reality with cutting-edge
                  solutions that drive real results. Your success is my mission.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                  >
                    <span>Start Your Project</span>
                    <FaRocket className="group-hover:translate-y-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-3 bg-white/5 border border-white/20 hover:border-accent/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    <FiEye className="group-hover:scale-110 transition-transform" />
                    <span>View Portfolio</span>
                  </Link>
                </motion.div>
              </div>

              <div className="text-white/60 text-sm">
                Free consultation • No commitment • 24h response time
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Component */}
      <StatsComponent />
    </motion.section>
  );
};

export default Home;
