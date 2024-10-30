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

const projects = [
  {
    num: "01",
    category: "machine learning",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore mollitia, iure qui repellendus nulla.",
    stack: [
      { name: "python" },
      { name: "data science" },
      { name: "machine learning" },
      { name: "data visualisations" },
    ],
  },
  {
    num: "02",
    category: "machine learning",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore mollitia, iure qui repellendus nulla.",
    stack: [
      { name: "python" },
      { name: "data science" },
      { name: "machine learning" },
      { name: "data visualisations" },
    ],
  },
  {
    num: "03",
    category: "machine learning",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore mollitia, iure qui repellendus nulla.",
    stack: [
      { name: "python" },
      { name: "data science" },
      { name: "machine learning" },
      { name: "data visualisations" },
    ],
  },
  {
    num: "04",
    category: "machine learning",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore mollitia, iure qui repellendus nulla.",
    stack: [
      { name: "python" },
      { name: "data science" },
      { name: "machine learning" },
      { name: "data visualisations" },
    ],
  },
];

const Projects = () => {
  return <div>projects page</div>;
};

export default Projects;
