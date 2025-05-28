"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/yashyogeshpotdar/",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-400",
    hoverColor: "hover:shadow-blue-500/30",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/yashpotdar-py",
    label: "GitHub",
    color: "from-gray-600 to-gray-400",
    hoverColor: "hover:shadow-gray-500/30",
  },
  {
    icon: <SiUpwork />,
    href: "https://www.upwork.com/freelancers/~01277c4d278595bf41",
    label: "Upwork",
    color: "from-green-600 to-green-400",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/917028712645",
    label: "WhatsApp",
    color: "from-emerald-600 to-emerald-400",
    hoverColor: "hover:shadow-emerald-500/30",
  },
];

const SocialsComponent = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socialLinks.map((social, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200,
        }}
        className="relative group"
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
        />

        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative ${iconStyles} group-hover:bg-gradient-to-r group-hover:${social.color} group-hover:text-white group-hover:border-transparent transition-all duration-300 ${social.hoverColor} backdrop-blur-sm`}
          aria-label={social.label}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.3 }}
          >
            {social.icon}
          </motion.div>

          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10">
            {social.label}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/90" />
          </div>
        </a>
      </motion.div>
    ))}
  </div>
);

export default SocialsComponent;
