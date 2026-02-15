"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Terminal,
  Activity,
  GitBranch,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Github,
  Box,
  Cpu,
  Network,
  Server,
} from "lucide-react";

// Cybersecurity projects (highlighted)
const cybersecProjects = [
  {
    id: "sentinel-ssh",
    title: "Sentinel-SSH",
    category: "Security Tooling",
    status: "production",
    description:
      "SSH intrusion detection system I built to learn security development. Real-time journald log parsing, brute-force detection, and automatic UFW blocking. My first production security tool.",
    tldr: "Watches SSH logs, detects attacks, blocks bad actors automatically.",
    stack: ["Python 3.8+", "systemd", "journald", "UFW", "Prometheus"],
    metrics: {
      linesOfCode: "~800",
      version: "v1.1.0",
      uptime: "99.2%",
      status: "In production",
    },
    features: [
      "Real-time journald log parsing",
      "Smart brute-force detection (sliding windows)",
      "Temporary UFW blocks (auto-expire to prevent lockout)",
      "Prometheus metrics integration",
      "Documented extensively (learning by writing)",
    ],
    threatModel: "Protects against SSH brute-force, credential stuffing, and automated scanners",
    github: "https://github.com/yashpotdar-py/sentinel-ssh",
    docs: "https://github.com/yashpotdar-py/sentinel-ssh#readme",
    icon: Shield,
  },
  {
    id: "rl-ids",
    title: "RL-IDS: Reinforcement Learning Intrusion Detection",
    category: "AI/ML Security",
    status: "production",
    description:
      "Adaptive intrusion detection system using Deep Q-Network that achieved 93% detection confidence with sub-100ms latency. Built a modular Python framework with FastAPI, PyTorch, and Scapy for live packet capture and real-time inference.",
    tldr: "AI-powered IDS with reinforcement learning for adaptive threat detection.",
    stack: ["Python", "PyTorch", "FastAPI", "Scapy", "Deep Q-Network"],
    metrics: {
      accuracy: "93%",
      latency: "<100ms",
      improvement: "+25% vs rule-based",
    },
    features: [
      "Deep Q-Network for adaptive learning",
      "Live packet capture and analysis",
      "Real-time inference engine",
      "Outperforms traditional rule-based systems",
      "Modular architecture with FastAPI",
    ],
    threatModel: "Machine learning approach to detect novel attack patterns and zero-day exploits",
    github: "https://github.com/yashpotdar-py/rl-ids",
    docs: "https://yashpotdar-py.github.io/rl-ids/",
    icon: Shield,
  },
  {
    id: "redactify",
    title: "Redactify - PII Detection & Redaction",
    category: "AI/ML Security",
    status: "production",
    description:
      "CNN-based deep learning model to detect and redact PII (Personally Identifiable Information) from government documents with 96% accuracy. Uses YOLOv7 for detection and Hugging Face transformers for redaction.",
    tldr: "Automated PII detection and redaction using computer vision and NLP.",
    stack: ["Python", "YOLOv7", "Hugging Face", "Gradio", "OCR", "Transformers"],
    metrics: {
      accuracy: "96%",
      model: "YOLOv7",
      interface: "Gradio UI",
    },
    features: [
      "YOLOv7 for image-based PII detection",
      "OCR for text extraction",
      "Hugging Face transformers for NLP redaction",
      "User-friendly Gradio interface",
      "Government document compliance",
    ],
    threatModel: "Protects sensitive personally identifiable information from unauthorized disclosure",
    github: "https://github.com/yashpotdar-py/redactify",
    docs: "https://github.com/yashpotdar-py/redactify",
    icon: Shield,
  },
];

// AI/ML projects (less highlighted)
const aimlProjects = [
  {
    id: "water-potability",
    title: "Water Potability Detection",
    category: "MLOps",
    status: "production",
    description:
      "End-to-end MLOps pipeline for predicting water potability based on quality parameters. Features CI/CD automation, Docker containerization, FastAPI deployment, and monitoring infrastructure.",
    tldr: "Machine learning with production MLOps pipeline.",
    stack: ["Python", "Docker", "FastAPI", "CI/CD", "MLOps", "Monitoring"],
    metrics: {
      accuracy: "94%",
      deployment: "Dockerized",
      pipeline: "Full CI/CD",
    },
    features: [
      "Complete MLOps pipeline (train → deploy → monitor)",
      "FastAPI web interface",
      "Docker containerization",
      "CI/CD automation",
      "Model monitoring and versioning",
    ],
    threatModel: "Data validation and model integrity checks to prevent poisoning attacks",
    github: "https://github.com/yashpotdar-py/water-potability-detection",
    docs: "https://yashpotdar-py.github.io/water-potability-detection/",
    icon: Activity,
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    status: "production",
    description:
      "Machine learning system for detecting fraudulent credit card transactions using ensemble methods. Built Flask RESTful API for real-time fraud detection with high accuracy.",
    tldr: "ML-based fraud detection with ensemble methods.",
    stack: ["Python", "Flask", "Ensemble Methods", "Data Science", "REST API"],
    metrics: {
      accuracy: "97%",
      method: "Ensemble learning",
      api: "Flask REST",
    },
    features: [
      "Supervised learning with ensemble methods",
      "Flask RESTful API for predictions",
      "Real-time fraud detection",
      "Data visualization dashboard",
      "High accuracy on imbalanced datasets",
    ],
    threatModel: "Detects fraudulent transaction patterns and anomalies in real-time",
    github: "https://github.com/syntech-97/Fraud-Detection-Project",
    docs: "https://github.com/syntech-97/Fraud-Detection-Project",
    icon: AlertTriangle,
  },
];

// Homelab/learning lab (least highlighted)
const homelabProjects = [
  {
    id: "homelab-infra",
    title: "Homelab Infrastructure",
    category: "Learning Lab",
    status: "tinkering",
    description:
      "Personal lab for learning infrastructure and security. Running on Raspberry Pi hardware with Pi-hole DNS filtering, SSH monitoring, and basic observability. Still learning and breaking things regularly.",
    tldr: "Budget homelab for hands-on security learning.",
    stack: ["Raspberry Pi", "Debian", "Pi-hole", "Prometheus", "Grafana", "Docker"],
    metrics: {
      hardware: "Raspberry Pi 4B",
      cost: "<$100",
      purpose: "Learning",
      status: "Active experiments",
    },
    features: [
      "Pi-hole for DNS-level ad/tracker blocking",
      "SSH hardening and monitoring practice",
      "Prometheus + Grafana for observability learning",
      "Network topology experiments (sometimes RFC-violating)",
      "Safe environment to break things",
    ],
    threatModel: "Learning lab - experiments with security configurations and monitoring",
    github: null,
    docs: null,
    icon: Server,
  },
];

const ProjectsPage = () => {
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
            <Terminal className="w-8 h-8 text-terminal-500" />
            <h1 className="h1">
              <span className="text-gradient">Lab & Projects</span>
            </h1>
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
        </motion.section>

        {/* Projects Grid */}
        {/* Cybersecurity Projects - highlighted */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="h2 text-terminal-500 mb-4">Cybersecurity Projects</h2>
          {cybersecProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-interactive group border-2 border-terminal-500 shadow-lg bg-base-950"
              >
                {/* ...existing code for project card... */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* ...existing code for left and right columns... */}
                  {/* Left: Header & Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-terminal-500 flex-shrink-0" />
                        <div>
                          <h2 className="h3 mb-1">{project.title}</h2>
                          <p className="text-sm text-muted-300 font-mono">{project.category}</p>
                        </div>
                      </div>
                      <span
                        className={`status-badge ${
                          project.status === "production"
                            ? "status-production"
                            : project.status === "tinkering"
                            ? "status-tinkering"
                            : "status-archived"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "production"
                              ? "bg-terminal-500"
                              : project.status === "tinkering"
                              ? "bg-amber-500"
                              : "bg-muted-500"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-200 leading-relaxed">{project.description}</p>
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">tl;dr</span>
                      </div>
                      <div className="terminal-content">
                        <div className="flex items-start gap-3">
                          <span className="text-terminal-500">➜</span>
                          <span className="text-muted-200">{project.tldr}</span>
                        </div>
                      </div>
                    </div>
                    {/* Features */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-200">
                            <CheckCircle className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Actions */}
                    {(project.github || project.docs) && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-base-500">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <Github className="w-4 h-4" />
                            View Repo
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                        {project.docs && (
                          <Link
                            href={project.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Read Docs
                          </Link>
                        )}
                        {!project.github && !project.docs && (
                          <span className="btn-ghost opacity-50 cursor-not-allowed">
                            <Clock className="w-4 h-4" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Right: Metrics & Stack */}
                  <div className="space-y-4">
                    {/* Metrics */}
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">metrics</span>
                      </div>
                      <div className="terminal-content space-y-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-sm">
                            <span className="text-muted-300">{key}</span>
                            <span className="text-terminal-500 font-mono">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stack */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Stack:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Threat Model */}
                    <div className="card bg-base-900">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-amber-500 mb-1">
                            Threat Model
                          </h4>
                          <p className="text-xs text-muted-300">{project.threatModel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* AI/ML Projects - less highlighted */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 mt-12"
        >
          <h2 className="h2 text-muted-300 mb-4">AI/ML Projects</h2>
          {aimlProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-interactive group border border-base-700 bg-base-900"
              >
                {/* ...existing code for project card... */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* ...existing code for left and right columns... */}
                  {/* Left: Header & Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-terminal-500 flex-shrink-0" />
                        <div>
                          <h2 className="h3 mb-1">{project.title}</h2>
                          <p className="text-sm text-muted-300 font-mono">{project.category}</p>
                        </div>
                      </div>
                      <span
                        className={`status-badge ${
                          project.status === "production"
                            ? "status-production"
                            : project.status === "tinkering"
                            ? "status-tinkering"
                            : "status-archived"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "production"
                              ? "bg-terminal-500"
                              : project.status === "tinkering"
                              ? "bg-amber-500"
                              : "bg-muted-500"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-200 leading-relaxed">{project.description}</p>
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">tl;dr</span>
                      </div>
                      <div className="terminal-content">
                        <div className="flex items-start gap-3">
                          <span className="text-terminal-500">➜</span>
                          <span className="text-muted-200">{project.tldr}</span>
                        </div>
                      </div>
                    </div>
                    {/* Features */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-200">
                            <CheckCircle className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Actions */}
                    {(project.github || project.docs) && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-base-500">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <Github className="w-4 h-4" />
                            View Repo
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                        {project.docs && (
                          <Link
                            href={project.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Read Docs
                          </Link>
                        )}
                        {!project.github && !project.docs && (
                          <span className="btn-ghost opacity-50 cursor-not-allowed">
                            <Clock className="w-4 h-4" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Right: Metrics & Stack */}
                  <div className="space-y-4">
                    {/* Metrics */}
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">metrics</span>
                      </div>
                      <div className="terminal-content space-y-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-sm">
                            <span className="text-muted-300">{key}</span>
                            <span className="text-terminal-500 font-mono">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stack */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Stack:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Threat Model */}
                    <div className="card bg-base-900">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-amber-500 mb-1">
                            Threat Model
                          </h4>
                          <p className="text-xs text-muted-300">{project.threatModel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Homelab/Learning Lab - least highlighted */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 mt-12"
        >
          <h2 className="h2 text-muted-500 mb-4">Learning Lab</h2>
          {homelabProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-interactive group border border-base-800 bg-base-950 opacity-80"
              >
                {/* ...existing code for project card... */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* ...existing code for left and right columns... */}
                  {/* Left: Header & Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-terminal-500 flex-shrink-0" />
                        <div>
                          <h2 className="h3 mb-1">{project.title}</h2>
                          <p className="text-sm text-muted-300 font-mono">{project.category}</p>
                        </div>
                      </div>
                      <span
                        className={`status-badge ${
                          project.status === "production"
                            ? "status-production"
                            : project.status === "tinkering"
                            ? "status-tinkering"
                            : "status-archived"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "production"
                              ? "bg-terminal-500"
                              : project.status === "tinkering"
                              ? "bg-amber-500"
                              : "bg-muted-500"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-200 leading-relaxed">{project.description}</p>
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">tl;dr</span>
                      </div>
                      <div className="terminal-content">
                        <div className="flex items-start gap-3">
                          <span className="text-terminal-500">➜</span>
                          <span className="text-muted-200">{project.tldr}</span>
                        </div>
                      </div>
                    </div>
                    {/* Features */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-200">
                            <CheckCircle className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Actions */}
                    {(project.github || project.docs) && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-base-500">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <Github className="w-4 h-4" />
                            View Repo
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                        {project.docs && (
                          <Link
                            href={project.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Read Docs
                          </Link>
                        )}
                        {!project.github && !project.docs && (
                          <span className="btn-ghost opacity-50 cursor-not-allowed">
                            <Clock className="w-4 h-4" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Right: Metrics & Stack */}
                  <div className="space-y-4">
                    {/* Metrics */}
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <div className="terminal-dot bg-danger-500" />
                          <div className="terminal-dot bg-amber-500" />
                          <div className="terminal-dot bg-terminal-500" />
                        </div>
                        <span className="font-mono text-xs text-muted-300">metrics</span>
                      </div>
                      <div className="terminal-content space-y-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-sm">
                            <span className="text-muted-300">{key}</span>
                            <span className="text-terminal-500 font-mono">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stack */}
                    <div>
                      <h3 className="h5 mb-3 text-terminal-500">Stack:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Threat Model */}
                    <div className="card bg-base-900">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-amber-500 mb-1">
                            Threat Model
                          </h4>
                          <p className="text-xs text-muted-300">{project.threatModel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Known Issues Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Known Issues & Limitations</h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot bg-danger-500" />
                <div className="terminal-dot bg-amber-500" />
                <div className="terminal-dot bg-terminal-500" />
              </div>
              <span className="font-mono text-xs text-muted-300">issues.log</span>
            </div>
            <div className="terminal-content space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">Sentinel-SSH:</span> May block your own IP if
                    you mistype your password multiple times. Whitelist logic exists, use it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">RL-IDS:</span> Reinforcement learning model needs continuous retraining on new attack patterns. 93% accuracy is good but not perfect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">Homelab:</span> Still learning and experimenting. Things break regularly, which is exactly the point of having a lab.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">Reality check:</span> These are learning projects built by a student. They work for my use cases and have been tested, but they're not battle-tested enterprise solutions. Use at your own risk and don't blame me if things go sideways.
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

export default ProjectsPage;
