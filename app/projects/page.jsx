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

const projects = [
  {
    id: "sentinel-ssh",
    title: "Sentinel-SSH",
    category: "Security Tooling",
    status: "production",
    description:
      "SSH intrusion detection that actually makes sense. Real-time journald log parsing, brute-force detection with sliding windows, and automatic UFW blocking. No black boxes, no trust-me-bro configs.",
    tldr: "Watches SSH logs, detects attacks, blocks bad actors automatically.",
    stack: ["Python 3.8+", "systemd", "journald", "UFW", "Prometheus"],
    metrics: {
      linesOfCode: "~800",
      alerts: "847",
      uptime: "99.2%",
      blocked: "143 IPs",
    },
    features: [
      "Real-time journald log parsing",
      "Smart brute-force detection (sliding windows)",
      "Temporary UFW blocks (won't lock you out)",
      "Prometheus metrics built-in",
      "Over-documented (150+ line README)",
    ],
    threatModel: "Protects against SSH brute-force, credential stuffing, and automated scanners",
    github: "https://github.com/yashpotdar-py/sentinel-ssh",
    docs: "https://github.com/yashpotdar-py/sentinel-ssh#readme",
    icon: Shield,
  },
  {
    id: "homelab-infra",
    title: "Homelab Infrastructure",
    category: "Infrastructure",
    status: "tinkering",
    description:
      "Production services on budget hardware. 3× Raspberry Pi 4B cluster running DNS filtering (Pi-hole), SSH hardening, network monitoring, and full observability stack (Prometheus + Grafana).",
    tldr: "Budget homelab running real production services.",
    stack: ["Raspberry Pi 4B", "Debian 12", "Docker", "Pi-hole", "Grafana", "Prometheus"],
    metrics: {
      hardware: "3× Pi 4B (4GB)",
      cost: "<$100",
      services: "12 active",
      uptime: "99.1%",
    },
    features: [
      "Pi-hole for DNS filtering (blocks ads/trackers)",
      "SSH hardening on all hosts",
      "Network topology with RFC compliance",
      "Prometheus metrics collection",
      "Grafana visualization dashboards",
    ],
    threatModel: "Defense-in-depth: DNS filtering, hardened SSH, network segmentation",
    github: null,
    docs: null,
    icon: Server,
  },
  {
    id: "log-parser",
    title: "Log Parser",
    category: "Security Tooling",
    status: "tinkering",
    description:
      "Real-time journald log parsing with pattern matching engine. Extracts failed SSH attempts, suspicious activity patterns, and system events for alerting and analysis.",
    tldr: "Parses system logs in real-time, extracts security events.",
    stack: ["Python", "journald", "regex", "systemd"],
    metrics: {
      parsed: "~45k entries",
      patterns: "28 rules",
      alerts: "214",
    },
    features: [
      "Real-time journald integration",
      "Custom regex pattern engine",
      "Event classification (info/warn/critical)",
      "JSON output for downstream tools",
      "Low memory footprint (<50MB)",
    ],
    threatModel: "Early detection of suspicious activity patterns and anomalies",
    github: null,
    docs: null,
    icon: Terminal,
  },
  {
    id: "ssh-hardening",
    title: "SSH Hardening Scripts",
    category: "Security Tooling",
    status: "tinkering",
    description:
      "Reproducible SSH configuration automation. Disables root login, enforces key-based auth, sets rate limits, and audits configs for compliance with security baselines.",
    tldr: "Automates SSH security best practices.",
    stack: ["Bash", "OpenSSH", "systemd"],
    metrics: {
      checks: "24 rules",
      compliance: "CIS Benchmark",
    },
    features: [
      "Disable password auth (keys only)",
      "Block root login attempts",
      "Rate limiting with fail2ban integration",
      "Automated config auditing",
      "Idempotent (safe to re-run)",
    ],
    threatModel: "Reduces SSH attack surface and enforces security baselines",
    github: null,
    docs: null,
    icon: Shield,
  },
  {
    id: "network-monitor",
    title: "Network Monitoring",
    category: "Infrastructure",
    status: "tinkering",
    description:
      "Network traffic analysis and visualization. Tracks bandwidth usage, identifies suspicious patterns, and generates topology maps. Integrates with Prometheus for long-term metrics.",
    tldr: "Monitors network traffic and detects anomalies.",
    stack: ["Python", "tcpdump", "iptables", "Prometheus"],
    metrics: {
      monitored: "3 interfaces",
      bandwidth: "~12GB/day",
    },
    features: [
      "Real-time bandwidth tracking",
      "Protocol analysis (HTTP, SSH, DNS)",
      "Anomaly detection (unusual traffic)",
      "Visual topology mapping",
      "Integration with Grafana",
    ],
    threatModel: "Detects data exfiltration, lateral movement, and C2 traffic",
    github: null,
    docs: null,
    icon: Network,
  },
  {
    id: "raspberry-pi-cluster",
    title: "Raspberry Pi Cluster",
    category: "Infrastructure",
    status: "archived",
    description:
      "Experimental cluster setup exploring distributed computing on ARM architecture. Tested Kubernetes, Docker Swarm, and custom orchestration. Archived due to power/heat constraints.",
    tldr: "Learned distributed systems on budget hardware.",
    stack: ["Raspberry Pi 3B+", "Kubernetes", "Docker Swarm", "Ansible"],
    metrics: {
      nodes: "5 nodes",
      runtime: "8 months",
      lessons: "many",
    },
    features: [
      "Multi-node Kubernetes cluster",
      "Automated deployment with Ansible",
      "Shared storage (NFS)",
      "Load balancing experiments",
      "Monitoring with Prometheus",
    ],
    threatModel: "Learning project, not production-facing",
    github: null,
    docs: null,
    icon: Cpu,
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
            Small, focused tools and infrastructure experiments. Everything here is documented,
            auditable, and built to solve real problems—not to scale to billions.
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
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-interactive group"
              >
                <div className="grid lg:grid-cols-3 gap-8">
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
                    you fat-finger your password too many times. Whitelist logic exists, use it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">Homelab:</span> Runs hot during summer. Power
                    consumption is ~45W total, not exactly datacenter-grade efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">Log Parser:</span> Needs better error handling
                    for malformed log entries. Currently just skips them (not ideal).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-200">
                    <span className="font-semibold">General:</span> All projects are learning
                    experiments. They work, but they're not enterprise-grade. Use at your own risk.
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
            <h2 className="h3 mb-4">Want to Contribute or Collaborate?</h2>
            <p className="text-muted-300 mb-6 max-w-2xl mx-auto">
              Found a bug? Have an idea? Want to audit the security? Open an issue or PR. I respond
              to technical questions fast.
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
