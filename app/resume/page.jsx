"use client";

import {
  SiPython,
  SiJupyter,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiKeras,
  SiArduino,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiKalilinux,
  SiHackaday,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiCloud66,
  SiNvidia,
  SiFlask,
} from "react-icons/si";
import { RiRobot3Line } from "react-icons/ri";
import { AiOutlineCamera } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  FaCloud,
  FaLanguage,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiSparkles, HiAcademicCap } from "react-icons/hi";
import {
  BsCalendar,
  BsGeoAlt,
  BsPhone,
  BsEnvelope,
  BsStar,
  BsTrophy,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  cardHoverVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";
// about data
const aboutData = {
  title: "About Me",
  description:
    "I am Yash Potdar, a passionate learner with a diverse set of interests and a strong foundation in AI/ML and a strong interest in Cybersecurity. Currently a student, I am committed to gaining hands-on experience through various projects, internships and freelance opportunities. My goal is to continually grow and apply my skills in meaningful ways, while embracing challenges that push me to innovate and excel.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yash Potdar",
      icon: <BsStar />,
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7028-712-645",
      icon: <BsPhone />,
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Months",
      icon: <BsTrophy />,
    },
    {
      fieldName: "Location",
      fieldValue: "Pune, MH, India",
      icon: <BsGeoAlt />,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
      icon: <HiSparkles />,
    },
    {
      fieldName: "Email",
      fieldValue: "yashyogeshpotdar7@gmail.com",
      icon: <BsEnvelope />,
    },
    {
      fieldName: "Degree",
      fieldValue: "B.Tech AI & Data Science",
      icon: <HiAcademicCap />,
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi, Japanese",
      icon: <FaLanguage />,
    },
  ],
};

// experience data
const experienceData = {
  title: "Experience",
  description:
    "My experience encompasses a diverse range of roles that have shaped my skills in real-world applications. From internships to leadership roles in student clubs like Google Developer's Group, I have worked in dynamic environments, applying my technical expertise in machine learning and beyond.",
  items: [
    {
      company: "BnB Developers",
      position: "Software Development Intern",
      duration: "March 2025 - Present",
      type: "Internship",
      status: "Current",
    },
    {
      company: "Google Developers Group, AISSMS IOIT",
      position: "AI/ML Lead",
      duration: "Sep 2024 - May 2025",
      type: "Leadership",
      status: "Completed",
    },
    {
      company: "AI Student Association, AISSMS IOIT",
      position: "Technical Secretary",
      duration: "Sep 2024 - May 2025",
      type: "Leadership",
      status: "Completed",
    },
    {
      company: "AI Adventures",
      position: "Machine Learning Intern",
      duration: "Jul 2024 - Aug 2024",
      type: "Internship",
      status: "Completed",
    },
    {
      company: "AI Student Association, AISSMS IOIT",
      position: "Technical Executive",
      duration: "Sep 2023 - Sep 2024",
      type: "Leadership",
      status: "Completed",
    },
  ],
};

// education data
const educationData = {
  title: "Education",
  description:
    "My educational journey reflects a strong foundation in technology and engineering. Currently pursuing a B.Tech in Artificial Intelligence & Data Science, I've maintained academic excellence while actively engaging in technical pursuits.",
  items: [
    {
      institution: "AISSMS Institute of Information Technology, Pune",
      degree: "Artificial Intelligence & Data Science",
      degreeType: "Bachelor of Technology",
      duration: "2022 - Present",
      status: "Current",
      level: "Undergraduate",
    },
    {
      institution: "Sri Chaitanya College of Education, Pune",
      degree: "HSC 12th Grade",
      degreeType: "Science (PCM)",
      duration: "2020 - 2022",
      status: "Completed",
      level: "Higher Secondary",
    },
    {
      institution: "Sri Sri Ravishankar Vidya Mandir, Pune",
      degree: "CBSE 10th Grade",
      degreeType: "School",
      duration: "2008 - 2020",
      status: "Completed",
      level: "Secondary",
    },
  ],
};

// licenses & certifications data
const licenseCertData = {
  title: "Licenses & Certifications",
  description:
    "My technical journey is enriched with a diverse array of certifications and licenses that demonstrate my dedication to continuous learning. From specialized courses in machine learning and cybersecurity to comprehensive web development programs.",
  items: [
    {
      institution: "BCG (Forage)",
      course: "GenAI Job Simulation",
      courseType: "Virtual Experience",
      duration: "Nov 2024",
      category: "AI/ML",
      verified: true,
    },
    {
      institution: "Goldman Sachs (Forage)",
      course: "Software Engineering Virtual Experience",
      courseType: "Virtual Experience",
      duration: "Nov 2024",
      category: "Software Engineering",
      verified: true,
    },
    {
      institution: "AI Adventures, Pune",
      course: "Machine Learning & Data Science with Python",
      courseType: "Offline Training",
      duration: "Jul - Aug 2024",
      category: "AI/ML",
      verified: true,
    },
    {
      institution: "Internshala Trainings",
      course: "Ethical Hacking Training",
      courseType: "Online Course",
      duration: "May 2024",
      category: "Cybersecurity",
      verified: true,
    },
    {
      institution: "Udemy",
      course: "The Complete 2023 Web Development Bootcamp",
      courseType: "Online Course",
      duration: "Aug 2023",
      category: "Web Development",
      verified: true,
    },
    {
      institution: "IIT Bombay",
      course: "Linux System Administration",
      courseType: "Offline Training",
      duration: "Jun 2023",
      category: "System Administration",
      verified: true,
    },
    {
      institution: "Google (Coursera)",
      course: "Google IT Automation with Python Professional Certificate",
      courseType: "Professional Certificate",
      duration: "Dec 2022",
      category: "Programming",
      verified: true,
    },
  ],
};

// skills data
const skillsData = {
  title: "Skills",
  description:
    "I bring a well-rounded skill set, combining technical expertise with strong analytical thinking. My key skills include AI/ML techniques, problem-solving, and proficiency in various programming languages.",
  categories: [
    {
      name: "AI/ML & Data Science",
      skills: [
        {
          icon: <RiRobot3Line />,
          name: "AI/ML",
          level: "Advanced",
          color: "from-blue-500 to-purple-600",
        },
        {
          icon: <GiArtificialIntelligence />,
          name: "GenAI and LangChain",
          level: "Intermediate",
          color: "from-green-500 to-blue-600",
        },
        {
          icon: <SiTensorflow />,
          name: "TensorFlow",
          level: "Intermediate",
          color: "from-orange-500 to-red-600",
        },
        {
          icon: <SiPytorch />,
          name: "PyTorch",
          level: "Intermediate",
          color: "from-red-500 to-pink-600",
        },
        {
          icon: <SiKeras />,
          name: "Keras",
          level: "Intermediate",
          color: "from-red-600 to-orange-600",
        },
        {
          icon: <SiScikitlearn />,
          name: "Scikit-Learn",
          level: "Intermediate",
          color: "from-blue-600 to-indigo-600",
        },
        {
          icon: <SiJupyter />,
          name: "Data Science",
          level: "Intermediate",
          color: "from-orange-600 to-yellow-600",
        },
        {
          icon: <FaLanguage />,
          name: "NLP",
          level: "Intermediate",
          color: "from-purple-600 to-pink-600",
        },
        {
          icon: <AiOutlineCamera />,
          name: "Computer Vision",
          level: "Intermediate",
          color: "from-indigo-600 to-purple-600",
        },
      ],
    },
    {
      name: "Programming & Development",
      skills: [
        {
          icon: <SiPython />,
          name: "Python",
          level: "Advanced",
          color: "from-yellow-500 to-green-600",
        },
        {
          icon: <SiJavascript />,
          name: "JavaScript",
          level: "Intermediate",
          color: "from-yellow-600 to-orange-600",
        },
        {
          icon: <SiReact />,
          name: "React",
          level: "Intermediate",
          color: "from-blue-600 to-cyan-600",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
          level: "Intermediate",
          color: "from-gray-600 to-black",
        },
        {
          icon: <SiFlask />,
          name: "Flask",
          level: "Advanced",
          color: "from-gray-700 to-gray-900",
        },
        {
          icon: <SiHtml5 />,
          name: "HTML",
          level: "Advanced",
          color: "from-orange-600 to-red-600",
        },
        {
          icon: <SiCss3 />,
          name: "CSS",
          level: "Advanced",
          color: "from-blue-600 to-purple-600",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
          level: "Intermediate",
          color: "from-cyan-600 to-blue-600",
        },
      ],
    },
    {
      name: "Systems & Security",
      skills: [
        {
          icon: <SiLinux />,
          name: "Linux",
          level: "Advanced",
          color: "from-yellow-600 to-orange-600",
        },
        {
          icon: <SiKalilinux />,
          name: "Kali Linux",
          level: "Intermediate",
          color: "from-blue-700 to-indigo-700",
        },
        {
          icon: <SiHackaday />,
          name: "Ethical Hacking",
          level: "Intermediate",
          color: "from-red-600 to-pink-600",
        },
        {
          icon: <SiGithub />,
          name: "Git/GitHub",
          level: "Advanced",
          color: "from-gray-700 to-black",
        },
        {
          icon: <FaCloud />,
          name: "Cloud Computing",
          level: "Beginner",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: <SiNvidia />,
          name: "CUDA/cuDNN",
          level: "Intermediate",
          color: "from-green-600 to-emerald-600",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          level: "Intermediate",
          color: "from-green-600 to-teal-600",
        },
      ],
    },
  ],
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCertificateClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      toast.warn("This certification does not have an associated link!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const sectionIcons = {
    about: <BsStar />,
    experience: <BsTrophy />,
    education: <HiAcademicCap />,
    skills: <HiSparkles />,
    certifications: <FaExternalLinkAlt />,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-3 border-accent/20 border-t-accent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

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
            More About Me
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my journey, skills, and achievements in
            technology and innovation.
          </motion.p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {["about", "experience", "education", "skills", "certifications"].map(
            (section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                  activeSection === section
                    ? "bg-accent text-primary shadow-lg"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="flex items-center gap-2">
                  {sectionIcons[section]}
                  {section === "certifications" ? "Certifications" : section}
                </span>
              </motion.button>
            )
          )}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* About Section */}
            {activeSection === "about" && (
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {aboutData.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {aboutData.description}
                  </p>
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutData.info.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 rounded-xl text-accent text-xl">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-accent font-medium text-sm uppercase tracking-wide">
                            {item.fieldName}
                          </p>
                          <p className="text-white mt-1 break-words">
                            {item.fieldValue}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === "experience" && (
              <div className="space-y-16">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {experienceData.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {experienceData.description}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  {experienceData.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === "Current"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {item.status}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === "Leadership"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-orange-500/20 text-orange-400"
                            }`}
                          >
                            {item.type}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.position}
                          </h3>
                          <p className="text-accent font-medium mb-3">
                            {item.company}
                          </p>
                          <p className="text-white/60 flex items-center gap-2">
                            <BsCalendar className="text-sm" />
                            {item.duration}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeSection === "education" && (
              <div className="space-y-16">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {educationData.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {educationData.description}
                  </p>
                </div>
                <div className="space-y-8">
                  {educationData.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="grid lg:grid-cols-4 gap-8 items-center">
                        <div className="lg:col-span-1 space-y-4">
                          <div className="flex flex-wrap gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                item.status === "Current"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {item.status}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-white/60 flex items-center gap-2 text-sm">
                            <BsCalendar />
                            {item.duration}
                          </p>
                        </div>
                        <div className="lg:col-span-3 space-y-3">
                          <h3 className="text-2xl font-bold text-white">
                            {item.degree}
                          </h3>
                          <p className="text-accent font-medium">
                            {item.degreeType}
                          </p>
                          <p className="text-white/80">{item.institution}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === "skills" && (
              <div className="space-y-20">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {skillsData.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {skillsData.description}
                  </p>
                </div>

                {skillsData.categories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                    className="space-y-12"
                  >
                    <h3 className="text-2xl font-bold text-accent text-center">
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={cardHoverVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.5,
                          }}
                          className="group relative"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                          />
                          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="text-4xl text-white group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-semibold text-white">
                                  {skill.name}
                                </h4>
                                <p
                                  className={`text-sm font-medium ${
                                    skill.level === "Advanced"
                                      ? "text-green-400"
                                      : skill.level === "Intermediate"
                                      ? "text-yellow-400"
                                      : "text-blue-400"
                                  }`}
                                >
                                  {skill.level}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Certifications Section */}
            {activeSection === "certifications" && (
              <div className="space-y-16">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {licenseCertData.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {licenseCertData.description}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  {licenseCertData.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onClick={() => handleCertificateClick(item.link)}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300 cursor-pointer group"
                    >
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-wrap gap-3">
                            {item.verified && (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                                Verified
                              </span>
                            )}
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                item.category === "AI/ML"
                                  ? "bg-purple-500/20 text-purple-400"
                                  : item.category === "Cybersecurity"
                                  ? "bg-red-500/20 text-red-400"
                                  : item.category === "Web Development"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-orange-500/20 text-orange-400"
                              }`}
                            >
                              {item.category}
                            </span>
                          </div>
                          <FaExternalLinkAlt className="text-white/60 group-hover:text-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {item.course}
                          </h3>
                          <p className="text-accent font-medium">
                            {item.institution}
                          </p>
                          <div className="flex justify-between items-center text-sm">
                            <p className="text-white/60">{item.courseType}</p>
                            <p className="text-white/60 flex items-center gap-2">
                              <BsCalendar />
                              {item.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Resume;
