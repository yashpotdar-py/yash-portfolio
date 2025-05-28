"use client";

import {
  BsArrowDownRight,
  BsStars,
  BsShield,
  BsCode,
  BsGraphUp,
  BsCheckCircle,
} from "react-icons/bs";
import {
  FaRobot,
  FaLock,
  FaReact,
  FaChartLine,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiKalilinux,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "01",
    category: "Artificial Intelligence",
    title: "AI/ML Solutions & Development",
    description:
      "Transform your business with cutting-edge AI and machine learning solutions. From custom neural networks to GenAI applications, I create intelligent systems that drive real results.",
    features: [
      "Custom Machine Learning Models",
      "GenAI & LangChain Integration",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Model Deployment & Optimization",
    ],
    technologies: [
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiPython />, name: "Python" },
      { icon: <FaRobot />, name: "LangChain" },
      { icon: <RiRobot2Line />, name: "OpenAI" },
    ],
    icon: <FaRobot />,
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-500/10",
    href: "/contact",
    price: "Starting from ₹2,000",
    deliverable: "2-4 weeks",
  },
  {
    id: "02",
    category: "Cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Protect your digital assets with comprehensive security solutions. Expert penetration testing and vulnerability assessments to keep your business safe.",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Auditing",
      "Ethical Hacking Services",
      "Security Consulting",
    ],
    technologies: [
      { icon: <SiKalilinux />, name: "Kali Linux" },
      { icon: <FaLock />, name: "Security Tools" },
      { icon: <BsShield />, name: "Burp Suite" },
      { icon: <SiPython />, name: "Python Scripts" },
    ],
    icon: <FaLock />,
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-500/10",
    href: "/contact",
    price: "Starting from ₹1,500",
    deliverable: "1-3 weeks",
  },
  {
    id: "03",
    category: "Web Development",
    title: "Full Stack Web Development",
    description:
      "Build modern, scalable web applications that captivate users and drive business growth. From concept to deployment, I create digital experiences that matter.",
    features: [
      "Responsive Web Design",
      "React & Next.js Development",
      "Backend API Development",
      "Database Integration",
      "Performance Optimization",
    ],
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiPython />, name: "Flask" },
      { icon: <BsCode />, name: "JavaScript" },
    ],
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    href: "/contact",
    price: "Starting from ₹1,200",
    deliverable: "2-6 weeks",
  },
  {
    id: "04",
    category: "Data Science",
    title: "Data Science & Analytics",
    description:
      "Turn your data into strategic advantages. Advanced analytics, predictive modeling, and beautiful visualizations that inform critical business decisions.",
    features: [
      "Data Analysis & Visualization",
      "Predictive Modeling",
      "Business Intelligence",
      "Statistical Analysis",
      "Custom Dashboards",
    ],
    technologies: [
      { icon: <FaChartLine />, name: "Analytics" },
      { icon: <SiPython />, name: "Python" },
      { icon: <BsGraphUp />, name: "Visualization" },
      { icon: <SiTensorflow />, name: "ML Models" },
    ],
    icon: <FaChartLine />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    href: "/contact",
    price: "Starting from ₹800",
    deliverable: "3-5 weeks",
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-24 space-y-8"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-white via-accent to-white bg-clip-text leading-tight"
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming innovative ideas into reality through cutting-edge
            technology, expert craftsmanship, and strategic thinking.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-8 text-white/60 text-base"
          >
            <div className="flex items-center gap-2">
              <BsCheckCircle className="text-accent" />
              <span>Expert Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCheckCircle className="text-accent" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCheckCircle className="text-accent" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardHoverVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 xl:p-10 hover:border-accent/30 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 ${service.bgColor} rounded-2xl text-3xl text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-accent font-medium text-sm uppercase tracking-wider block mb-2">
                        {service.category}
                      </span>
                      <div className="text-5xl font-black text-white/10 group-hover:text-accent/20 transition-colors duration-500">
                        {service.id}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="w-16 h-16 bg-accent/10 hover:bg-accent rounded-2xl flex items-center justify-center text-accent hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  >
                    <FaArrowRight className="text-xl" />
                  </Link>
                </div>

                {/* Title & Description */}
                <div className="mb-8 space-y-4">
                  <h2 className="text-2xl xl:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                    <HiLightningBolt className="text-accent text-lg" />
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                    <BsStars className="text-accent text-lg" />
                    Tech Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 text-white/90 hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="font-medium text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="space-y-1">
                    <div className="text-accent font-bold text-xl">
                      {service.price}
                    </div>
                    <div className="text-white/60 text-sm">
                      Delivery: {service.deliverable}
                    </div>
                  </div>
                  <Link
                    href={service.href}
                    className="group/btn flex items-center gap-2 bg-gradient-to-r from-accent to-accent-hover text-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Get Started</span>
                    <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 xl:p-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Build Something{" "}
                  <span className="text-transparent bg-gradient-to-r from-accent to-accent-hover bg-clip-text">
                    Amazing?
                  </span>
                </h3>
                <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
                  Let's transform your vision into reality with cutting-edge
                  solutions that drive real results. Your success is my mission.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Start Your Project</span>
                  <BsArrowDownRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </Link>

                <div className="text-white/60 text-sm">
                  Free consultation • No commitment
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
