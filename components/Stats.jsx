"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaStar } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const stats = [
  {
    number: "35+",
    label: "Projects Completed",
    icon: <FaRocket />,
    color: "from-blue-500 to-purple-600",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: <FaStar />,
    color: "from-yellow-500 to-orange-600",
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <HiLightningBolt />,
    color: "from-green-500 to-emerald-600",
  },
  {
    number: "800+",
    label: "Code Commits",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-600",
  },
];

const StatsComponent = () => (
  <div className="py-20 relative">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
    <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <HiLightningBolt className="text-accent" />
            <span className="text-accent font-semibold">My Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Numbers That{" "}
            <span className="text-transparent bg-gradient-to-r from-accent to-accent-hover bg-clip-text">
              Tell My Story
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-xl opacity-50" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group text-center relative"
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-accent/30 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <motion.div
                    className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors duration-300"
                    whileInView={{
                      scale: [1, 1.1, 1],
                      transition: { delay: index * 0.2 + 0.5, duration: 0.6 },
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="text-white/70 font-medium text-sm lg:text-base">
                    {stat.label}
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-accent/60 rounded-full animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent-hover/60 rounded-full animate-ping delay-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  </div>
);

export default StatsComponent;
