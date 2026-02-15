"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Terminal,
  Activity,
  Shield,
  Box,
  GitBranch,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto space-y-20 xl:space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 border border-terminal-500/30 rounded-terminal"
              >
                <span className="w-2 h-2 rounded-full bg-terminal-500 animate-pulse" />
                <span className="font-mono text-sm text-terminal-500">
                  system.status: operational
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="h1 mb-4">
                  <span className="text-muted-200">I'm</span>{" "}
                  <span className="text-gradient">Yash Potdar</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-300 font-display">
                  AI/ML Student • Aspiring Cybersecurity Specialist
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="terminal-window"
              >
                <div className="terminal-header">
                  <div className="flex items-center gap-2">
                    <div className="terminal-dot bg-danger-500" />
                    <div className="terminal-dot bg-amber-500" />
                    <div className="terminal-dot bg-terminal-500" />
                  </div>
                  <span className="font-mono text-xs text-muted-300">tl;dr.sh</span>
                </div>
                <div className="terminal-content space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-terminal-500">➜</span>
                    <span className="text-muted-200">
                      I build security tools to understand how systems work
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-terminal-500">➜</span>
                    <span className="text-muted-200">
                      I break things in my homelab to learn from failures
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-terminal-500">➜</span>
                    <span className="text-muted-200">
                      I code in Python & Bash, learning by doing
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/30 rounded-terminal"
              >
                <GitBranch className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-muted-200">
                  <span className="font-semibold text-amber-500">Student transitioning:</span>{" "}
                  AI/ML degree → cybersecurity career path
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://github.com/yashpotdar-py/sentinel-ssh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Shield className="w-5 h-5" />
                  <span>View Sentinel-SSH</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  <Terminal className="w-5 h-5" />
                  <span>Explore Lab</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot bg-danger-500" />
                  <div className="terminal-dot bg-amber-500" />
                  <div className="terminal-dot bg-terminal-500" />
                </div>
                <span className="font-mono text-xs text-muted-300">system-status.log</span>
              </div>
              <div className="terminal-content space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-base-500">
                  <span className="font-mono text-sm text-muted-300">metric</span>
                  <span className="font-mono text-sm text-muted-300">value</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-terminal-500" />
                    <span className="font-mono text-sm text-muted-200">uptime</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">99.2%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-terminal-500" />
                    <span className="font-mono text-sm text-muted-200">projects</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">6</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-terminal-500" />
                    <span className="font-mono text-sm text-muted-200">security tools</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">3</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-terminal-500" />
                    <span className="font-mono text-sm text-muted-200">known issues</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">4</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Terminal className="w-8 h-8 text-terminal-500" />
              <h2 className="h2">
                <span className="text-gradient">Lab & Projects</span>
              </h2>
            </div>
            <p className="text-xl text-muted-300 max-w-3xl">
              AI/ML and security projects I've built while learning cybersecurity. From traditional security tools to machine learning-based threat detection—all real, working implementations with code and documentation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="status-badge status-production">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-500" />
                production
              </div>
              <div className="status-badge status-tinkering">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                tinkering
              </div>
              <div className="status-badge status-archived">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-500" />
                archived
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                <Terminal className="w-5 h-5" />
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/resume" className="btn-secondary">
                <Activity className="w-5 h-5" />
                <span>View Resume</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <div className="card text-center">
            <h2 className="h3 mb-4">Want to Learn Together?</h2>
            <p className="text-muted-300 mb-6 max-w-2xl mx-auto">
              Found a bug? Have feedback? Want to collaborate on security projects? I'm always looking to learn from other people building security tools. Open an issue or reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/yashpotdar-py"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;
