"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

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
  },
  {
    category: "cybersecurity",
    title: "Vulnerability Assessment Tool",
    description:
      "A comprehensive cybersecurity tool for vulnerability assessment and penetration testing. Built with Python and integrated with various security frameworks for automated scanning and reporting of security vulnerabilities in web applications.",
    stack: [
      { name: "python" },
      { name: "cybersecurity" },
      { name: "penetration-testing" },
      { name: "vulnerability-assessment" },
      { name: "ethical-hacking" },
      { name: "security-frameworks" },
      { name: "automated-scanning" },
    ],
    // image: "/assets/work/thumb4.png",
    github: "https://github.com/yashpotdar-py/rl-ids",
    live: "https://github.com/yashpotdar-py/rl-ids",
  },
  {
    category: "gen ai",
    title: "Autonomous AI Twitter Bot",
    description:
      "Developed an AI-powered Twitter bot that autonomously generates and posts unique, personality-driven tweets using Python, Google AI, and the Twitter API. Integrated advanced SBERT-based similarity checks to ensure content originality and implemented OAuth authentication for secure operations. Designed a fully customizable personality profile and robust JSON-based storage system for persistent data and seamless usability.",
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
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setCurrentIndex(currentIndex);
    // update project state based on current current slide index
    setProject(projects[currentIndex]);
  };

  // Function to format number with leading zero
  const formatProjectNumber = (index) => {
    return String(index + 1).padStart(2, "0");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex items-center gap-4">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {/* outline num - automatically generated */}
                  {formatProjectNumber(currentIndex)}
                </div>
                {/* project category */}
                <p className="text-accent italic text-4xl">
                  - {project.category} project
                </p>
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Github Link */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Live Project */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full  xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full rounded border-2 border-accent-hover">
                        <Image
                          src={project.image}
                          alt="no image found"
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transistion-all rounded"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
