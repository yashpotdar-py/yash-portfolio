"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  BsArrowUpRight,
  BsGithub,
  BsSearch,
  BsX,
  BsEye,
  BsHeart,
  BsStar,
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { FiExternalLink, FiCode, FiFilter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    category: "mlops",
    title: "Water Potability Detection using MLOps Pipeline",
    description:
      "A machine learning project to predict water potability based on quality parameters, featuring an end-to-end MLOps pipeline, a web interface, and scalable deployment with monitoring and CI/CD support.",
    stack: [
      { name: "python" },
      { name: "mlops" },
      { name: "ci/cd" },
      { name: "machine-learning" },
      { name: "docker" },
      { name: "fast-api" },
    ],
    image: "/assets/work/water-potability.jpeg",
    github: "https://github.com/yashpotdar-py/water-potability-detection",
    live: "https://yashpotdar-py.github.io/water-potability-detection/",
    featured: true,
    // metrics: { accuracy: "94%", users: "1.2k", stars: "45" }
  },
  {
    category: "cybersecurity",
    title: "RL-Based Intrusion Detection System",
    description:
      "Developed intelligent IDS using Deep Q-Network achieving 96% threat detection accuracy. Created scalable Python framework with adaptive learning algorithms improving detection rates by 25% over traditional methods.",
    stack: [
      { name: "python" },
      { name: "cybersecurity" },
      { name: "penetration-testing" },
      { name: "reinforcement-learning" },
      { name: "ethical-hacking" },
      { name: "intrusion-detection" },
      { name: "deep-q-network" },
    ],
    github: "https://github.com/yashpotdar-py/rl-ids",
    live: "https://github.com/yashpotdar-py/rl-ids",
    // metrics: { accuracy: "98%", users: "800", stars: "32" }
  },
  {
    category: "gen ai",
    title: "Autonomous AI Twitter Bot",
    description:
      "Developed an AI-powered Twitter bot that autonomously generates and posts unique, personality-driven tweets using Python, Google AI, and the Twitter API. Integrated advanced SBERT-based similarity checks to ensure content originality and implemented OAuth authentication for secure operations.",
    stack: [
      { name: "python" },
      { name: "BERT language model" },
      { name: "generative-ai" },
      { name: "OAuth" },
      { name: "twitter-api" },
      { name: "google-gemini" },
      { name: "SBERT" },
      { name: "logging" },
    ],
    image: "/assets/work/thumb5.png",
    github: "https://github.com/yashpotdar-py/twitter-bot",
    live: "https://x.com/PixelPancake69",
    featured: true,
    // metrics: { accuracy: "96%", users: "2.5k", stars: "78" }
  },
  {
    category: "gen ai",
    title: "Medicine Reminder App",
    description:
      "A medicine management app using Google Gemini API and LangChain for AI-driven medication scheduling and reminders. This project utilizes Langchain and Text-to-Speech technology to provide users with reminders and notifications for their medications.",
    stack: [
      { name: "python" },
      { name: "machine-learning" },
      { name: "generative-ai" },
      { name: "text-to-speech" },
      { name: "langchain" },
      { name: "google-gemini" },
      { name: "streamlit" },
      { name: "ocr-recognition" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/yashpotdar-py/medicine-reminder",
    live: "https://github.com/yashpotdar-py/medicine-reminder",
    // metrics: { accuracy: "92%", users: "650", stars: "28" }
  },
  {
    category: "machine learning",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project that uses a dataset of credit card transactions to detect fraudulent transactions. The project uses Flask to create a RESTful API that can be used to detect fraudulent transactions with high accuracy using ensemble methods.",
    stack: [
      { name: "python" },
      { name: "data science" },
      { name: "machine learning" },
      { name: "data visualisations" },
      { name: "flask-restful-api" },
      { name: "supervised-learning" },
      { name: "ensemble-methods" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/syntech-97/Fraud-Detection-Project",
    live: "https://github.com/syntech-97/Fraud-Detection-Project",
    // metrics: { accuracy: "97%", users: "900", stars: "41" }
  },
  {
    category: "deep learning",
    title: "Redactify - PII Detection & Redaction",
    description:
      "A CNN-based deep learning model to detect and redact PII (Personally Identifiable Information) from government documents with 96% accuracy. The project utilizes the YOLOv7 model to detect the images, PII and the Hugging Face model to redact it with a user-friendly Gradio interface.",
    stack: [
      { name: "python" },
      { name: "deep learning" },
      { name: "computer vision" },
      { name: "yolo-v7" },
      { name: "ocr-recognition" },
      { name: "gradio-ui" },
      { name: "hugging-face" },
      { name: "transformers-library" },
      { name: "natural-language-processing" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/yashpotdar-py/redactify",
    live: "https://github.com/yashpotdar-py/redactify",
    featured: true,
    // metrics: { accuracy: "96%", users: "1.8k", stars: "67" }
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const CategoryIcon = ({ category }) => {
    const icons = {
      mlops: "🔄",
      cybersecurity: "🛡️",
      "gen ai": "🤖",
      "machine learning": "🧠",
      "deep learning": "🎯",
      all: "✨",
    };
    return <span className="mr-2">{icons[category] || "📁"}</span>;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[100vh] py-12 xl:px-0 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Projects Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        {/* Gallery Header */}
        <div className="text-center mb-16">
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6"
          >
            <HiSparkles className="text-accent" />
            <span className="text-accent font-semibold">Featured Work</span>
          </motion.div> */}

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white via-accent to-white bg-clip-text mb-6"
          >
            Project Gallery
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-l text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Dive into my digital universe where innovation meets execution. Each
            project tells a story of challenges conquered and boundaries pushed.
          </motion.p>
        </div>

        {/* Enhanced Search and Filter Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
              <div className="flex items-center gap-4 px-4 py-3">
                <BsSearch className="text-accent text-xl" />
                <input
                  type="text"
                  placeholder="Search the digital realm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none text-lg"
                />
                <motion.div
                  className="flex items-center gap-2 text-white/40"
                  animate={{ opacity: searchTerm ? 1 : 0.4 }}
                >
                  {/* <span className="text-sm">⌘K</span> */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-accent text-primary shadow-lg shadow-accent/25"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10 hover:border-accent/30"
                }`}
              >
                <CategoryIcon category={category} />
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle
          <div className="flex justify-center mt-8 sm:hidden">
            <div className="flex bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
              {["grid", "list"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 capitalize ${
                    viewMode === mode
                      ? "bg-accent text-primary shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          layout
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              : "space-y-6 max-w-4xl mx-auto"
          }`}
        >
          <AnimatePresence>
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group cursor-pointer relative ${
                  viewMode === "grid" ? "aspect-[4/5]" : "flex gap-6 p-6"
                }`}
                onClick={() => setSelectedProject(proj)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-xl transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/10 ${
                    viewMode === "list" ? "flex-1" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {proj.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <BsStar className="text-xs" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "grid"
                        ? "h-2/3"
                        : "w-64 h-40 flex-shrink-0 rounded-2xl"
                    }`}
                  >
                    {proj.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚀</div>
                          <p className="text-white/60 font-semibold">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-accent/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                        <CategoryIcon category={proj.category} />
                        {proj.category}
                      </div>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-accent/50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(proj.github, "_blank");
                        }}
                      >
                        <FiCode className="text-white text-xl" />
                      </motion.div>

                      {proj.live !== proj.github && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-accent/50 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(proj.live, "_blank");
                          }}
                        >
                          <FiExternalLink className="text-white text-xl" />
                        </motion.div>
                      )}

                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-accent/80 backdrop-blur-sm rounded-full transition-colors"
                      >
                        <BsEye className="text-primary text-xl" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`${
                      viewMode === "grid"
                        ? "p-6 h-1/3 flex flex-col"
                        : "flex-1 p-6"
                    }`}
                  >
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-3 line-clamp-2">
                        {proj.title}
                      </h4>

                      <p
                        className={`text-white/70 mb-4 leading-relaxed ${
                          viewMode === "grid" ? "line-clamp-2" : "line-clamp-3"
                        }`}
                      >
                        {proj.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    {proj.metrics && (
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-green-400">
                          <span>✓</span>
                          <span>{proj.metrics.accuracy}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-400">
                          <BsEye />
                          <span>{proj.metrics.users}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <BsStar />
                          <span>{proj.metrics.stars}</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex gap-2 flex-wrap">
                      {proj.stack
                        .slice(0, viewMode === "grid" ? 3 : 5)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 rounded-full text-accent hover:bg-accent/20 transition-colors"
                          >
                            {tech.name}
                          </span>
                        ))}
                      {proj.stack.length > (viewMode === "grid" ? 3 : 5) && (
                        <span className="px-3 py-1 text-xs text-white/60 border border-white/20 rounded-full">
                          +{proj.stack.length - (viewMode === "grid" ? 3 : 5)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h4 className="text-3xl font-bold text-white mb-4">
                No projects found in this dimension
              </h4>
              <p className="text-white/60 text-lg">
                Try adjusting your search coordinates or explore different
                categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-6 px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-primary/95 to-primary/90 backdrop-blur-2xl rounded-3xl border border-white/20 max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl shadow-accent/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
              >
                <BsX className="text-white text-2xl" />
              </motion.button>

              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-video rounded-2xl overflow-hidden group"
                >
                  {selectedProject.image ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-6">🚀</div>
                        <p className="text-white/60 text-xl">Project Preview</p>
                      </div>
                    </div>
                  )}

                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-accent/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-bold">
                      <CategoryIcon category={selectedProject.category} />
                      {selectedProject.category}
                    </div>
                    {selectedProject.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2">
                        <BsStar />
                        Featured Project
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-white to-accent bg-clip-text mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  {selectedProject.metrics && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                        <div className="text-2xl font-bold text-green-400">
                          {selectedProject.metrics.accuracy}
                        </div>
                        <div className="text-white/60 text-sm">Accuracy</div>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                        <div className="text-2xl font-bold text-blue-400">
                          {selectedProject.metrics.users}
                        </div>
                        <div className="text-white/60 text-sm">Users</div>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                        <div className="text-2xl font-bold text-yellow-400">
                          {selectedProject.metrics.stars}
                        </div>
                        <div className="text-white/60 text-sm">Stars</div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Tech Arsenal
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      {selectedProject.stack.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full text-accent font-semibold hover:from-accent/30 hover:to-accent/20 transition-all duration-300 cursor-pointer"
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4 pt-4"
                  >
                    <Link
                      href={selectedProject.github}
                      target="_blank"
                      className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 group"
                    >
                      <BsGithub className="text-2xl group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">View Code</span>
                    </Link>

                    {selectedProject.live !== selectedProject.github && (
                      <Link
                        href={selectedProject.live}
                        target="_blank"
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-hover text-primary rounded-2xl transition-all duration-300 font-bold hover:shadow-lg hover:shadow-accent/25 group"
                      >
                        <BsArrowUpRight className="text-2xl group-hover:scale-110 transition-transform" />
                        <span>Experience Live</span>
                      </Link>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Results Count with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="text-center mt-8"
      >
        <p className="text-white/60 text-lg">
          Showcasing{" "}
          <span className="text-accent font-bold">
            {filteredProjects.length}
          </span>{" "}
          of <span className="text-white font-bold">{projects.length}</span>{" "}
          digital experiences
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
