"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Terminal,
  Shield,
  Server,
  Activity,
  Download,
  ExternalLink,
  CheckCircle,
  Code,
  GitBranch,
  Database,
  Network,
} from "lucide-react";

const timeline = [
  {
    year: "2025",
    items: [
      {
        title: "Sentinel-SSH v1.1.0",
        type: "project",
        description:
          "Production SSH intrusion detection system with log parsing, ban automation, and Prometheus metrics.",
        tags: ["Python", "systemd", "Prometheus"],
      },
      {
        title: "BnB Developers",
        type: "work",
        role: "Software Development Intern",
        description: "Backend development and API integrations.",
        duration: "Mar 2025 - Present",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Homelab Infrastructure",
        type: "project",
        description:
          "Self-hosted lab: Raspberry Pi cluster, SSH hardening, network monitoring, log aggregation.",
        tags: ["Docker", "Pi-hole", "SSH", "Prometheus", "Grafana"],
      },
      {
        title: "GDG AISSMS IOIT",
        type: "work",
        role: "AI/ML Lead",
        description: "Organized workshops, led ML projects, managed tech initiatives.",
        duration: "Sep 2024 - May 2025",
      },
      {
        title: "AI Adventures",
        type: "work",
        role: "Machine Learning Intern",
        description: "Data preprocessing, model training, deployment pipelines.",
        duration: "Jul 2024 - Aug 2024",
      },
      {
        title: "Ethical Hacking Training",
        type: "certification",
        issuer: "Internshala",
        description: "Network security, vulnerability assessment, penetration testing.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Linux System Administration",
        type: "certification",
        issuer: "IIT Bombay",
        description: "Command-line proficiency, shell scripting, system services.",
      },
      {
        title: "Web Development Bootcamp",
        type: "certification",
        issuer: "Udemy",
        description: "Full-stack development (React, Node.js, databases).",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "B.Tech AI & Data Science",
        type: "education",
        institution: "AISSMS IOIT, Pune",
        description: "Currently pursuing undergraduate degree in AI & Data Science.",
        status: "In Progress",
      },
      {
        title: "Google IT Automation with Python",
        type: "certification",
        issuer: "Google (Coursera)",
        description: "Python automation, Git, configuration management.",
      },
    ],
  },
];

const stack = {
  os: ["Ubuntu Server 22.04", "Kali Linux", "Raspberry Pi OS"],
  languages: ["Python 3.11", "Bash", "JavaScript"],
  infrastructure: [
    "Docker",
    "systemd",
    "SSH",
    "ufw",
    "cron",
    "nginx",
  ],
  monitoring: ["Prometheus", "Grafana", "journalctl", "dmesg"],
  security: [
    "fail2ban",
    "iptables",
    "OpenSSH hardening",
    "Pi-hole DNS filtering",
  ],
  development: ["Git", "VS Code", "vim", "tmux"],
};

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto space-y-12">
        {/* Page Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-terminal-500" />
            <h1 className="h1">
              <span className="text-gradient">Systems Timeline</span>
            </h1>
          </div>
          <p className="text-xl text-muted-300 max-w-3xl mb-6">
            AI/ML student transitioning into cybersecurity. Tracking my journey through projects, certifications, and hands-on learning in homelabs and security tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#" className="btn-secondary pointer-events-none opacity-50">
              <Download className="w-5 h-5" />
              Download PDF (Coming Soon)
            </Link>
            <Link
              href="https://github.com/yashpotdar-py"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View GitHub
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* Quick Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Learning Focus</h3>
              </div>
              <p className="text-muted-200 text-sm">
                Cybersecurity & Ethical Hacking
                <br />
                <span className="text-muted-300">
                  Building security tools, CTFs, homelab experiments
                </span>
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Status</h3>
              </div>
              <p className="text-muted-200 text-sm">
                Student & Intern
                <br />
                <span className="text-muted-300">Learning through hands-on projects</span>
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Education</h3>
              </div>
              <p className="text-muted-200 text-sm">
                B.Tech AI & Data Science
                <br />
                <span className="text-muted-300">AISSMS IOIT, Pune (2022-Present)</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title">Timeline</h2>

          <div className="space-y-12">
            {timeline.map((yearBlock, yearIndex) => (
              <motion.div
                key={yearBlock.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.1, duration: 0.6 }}
              >
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="terminal-window inline-block">
                    <div className="terminal-content px-4 py-2">
                      <span className="font-mono text-xl font-bold text-terminal-500">
                        {yearBlock.year}
                      </span>
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-terminal-500/50 to-transparent" />
                </div>

                {/* Items */}
                <div className="space-y-4 pl-4 md:pl-8 border-l-2 border-base-500">
                  {yearBlock.items.map((item, itemIndex) => {
                    // Icon based on type
                    const getIcon = () => {
                      switch (item.type) {
                        case "project":
                          return <GitBranch className="w-5 h-5" />;
                        case "work":
                          return <Server className="w-5 h-5" />;
                        case "certification":
                          return <CheckCircle className="w-5 h-5" />;
                        case "education":
                          return <Terminal className="w-5 h-5" />;
                        default:
                          return <Code className="w-5 h-5" />;
                      }
                    };

                    // Status badge
                    const getStatus = () => {
                      if (item.status === "In Progress") {
                        return (
                          <span className="status-badge badge-tinkering">In Progress</span>
                        );
                      }
                      if (item.duration?.includes("Present")) {
                        return <span className="status-badge badge-production">Current</span>;
                      }
                      return null;
                    };

                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="card-interactive group -ml-3"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-base-900 border border-terminal-500/30 flex items-center justify-center text-terminal-500 group-hover:border-terminal-500/50 transition-colors">
                            {getIcon()}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div>
                                <h3 className="h4 mb-1">{item.title}</h3>
                                {item.role && (
                                  <p className="text-sm text-terminal-500 font-mono">
                                    {item.role}
                                  </p>
                                )}
                                {item.institution && (
                                  <p className="text-sm text-muted-300">{item.institution}</p>
                                )}
                                {item.issuer && (
                                  <p className="text-sm text-muted-300">
                                    Issued by {item.issuer}
                                  </p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatus()}
                              </div>
                            </div>

                            <p className="text-sm text-muted-200 mb-3">{item.description}</p>

                            {item.duration && (
                              <p className="text-xs text-muted-300 font-mono mb-2">
                                {item.duration}
                              </p>
                            )}

                            {item.tags && (
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 text-xs font-mono bg-base-900 text-terminal-500 rounded border border-terminal-500/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stack of Record */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Stack of Record</h2>
          <p className="text-muted-300 mb-8">
            The tools I actually use for homelab work, security projects, and system administration.
            Not a skill showcase—just what's in production.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Operating Systems */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Operating Systems</h3>
              </div>
              <ul className="space-y-2">
                {stack.os.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Languages</h3>
              </div>
              <ul className="space-y-2">
                {stack.languages.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Infrastructure</h3>
              </div>
              <ul className="space-y-2">
                {stack.infrastructure.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monitoring */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Monitoring</h3>
              </div>
              <ul className="space-y-2">
                {stack.monitoring.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Security</h3>
              </div>
              <ul className="space-y-2">
                {stack.security.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-5 h-5 text-terminal-500" />
                <h3 className="h5">Development</h3>
              </div>
              <ul className="space-y-2">
                {stack.development.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-200 font-mono"
                  >
                    <span className="text-terminal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Learning Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot bg-danger-500" />
                <div className="terminal-dot bg-amber-500" />
                <div className="terminal-dot bg-terminal-500" />
              </div>
              <span className="font-mono text-xs text-muted-300">learning-approach.sh</span>
            </div>
            <div className="terminal-content space-y-4">
              <div>
                <p className="font-mono text-terminal-500 mb-2">
                  $ cat learning-philosophy.txt
                </p>
                <div className="text-muted-200 text-sm space-y-2 pl-4">
                  <p>
                    <span className="text-terminal-500">[1]</span> Break things intentionally. Then
                    document how you fixed them.
                  </p>
                  <p>
                    <span className="text-terminal-500">[2]</span> If you can't explain it simply,
                    you don't understand it yet.
                  </p>
                  <p>
                    <span className="text-terminal-500">[3]</span> Homelabs are for learning, not
                    perfection. Production is a different story.
                  </p>
                  <p>
                    <span className="text-terminal-500">[4]</span> Read the logs. Always read the
                    logs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card text-center">
            <h2 className="h2 mb-4">
              <span className="text-gradient">Want to Know More?</span>
            </h2>
            <p className="text-muted-300 text-lg mb-8 max-w-2xl mx-auto">
              Check out my projects for detailed write-ups, or reach out if you want to discuss
              infrastructure, security tooling, or homelab setups.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
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

export default ResumePage;
