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
        {/* Hero Section with Terminal Status Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              {/* Status badge */}
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

              {/* Name and Title */}
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

              {/* TL;DR Section */}
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

              {/* Transition Note */}
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

              {/* CTAs */}
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

            {/* Right: Live Systems Panel */}
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
                    <span className="text-sm text-muted-200">uptime</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">99.2%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-terminal-500" />
                    <span className="text-sm text-muted-200">services monitored</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">12</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-terminal-500" />
                    <span className="text-sm text-muted-200">alerts triggered</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">847</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-terminal-500" />
                    <span className="text-sm text-muted-200">log entries parsed</span>
                  </div>
                  <span className="font-mono text-sm text-terminal-500">~45k</span>
                </div>

                <div className="pt-3 mt-3 border-t border-base-500">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-300 font-mono">last build</span>
                    <span className="text-terminal-500 font-mono">2026-02-14 18:42:03 UTC</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Lab Topology Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <h2 className="section-title">Lab Topology</h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot bg-danger-500" />
                <div className="terminal-dot bg-amber-500" />
                <div className="terminal-dot bg-terminal-500" />
              </div>
              <span className="font-mono text-xs text-muted-300">network-diagram.txt</span>
            </div>
            <div className="terminal-content">
              <pre className="font-mono text-sm text-terminal-500 overflow-x-auto">
{`
  ┌─────────────┐
  │   Router    │  ← ISP
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │   Pi-hole   │  ← DNS filtering
  └──────┬──────┘
         │
  ┌──────▼──────────────────┐
  │    SSH Hosts (x3)        │  ← Raspberry Pi cluster
  │  ├─ Sentinel-SSH         │     Intrusion detection
  │  ├─ Log aggregation      │     journald → parser
  │  └─ Service monitoring   │     Health checks
  └──────┬──────────────────┘
         │
  ┌──────▼──────────────────┐
  │    Prometheus            │  ← Metrics collection
  └──────┬──────────────────┘
         │
  ┌──────▼──────────────────┐
  │     Grafana              │  ← Visualization
  └──────────────────────────┘

  Stack: Debian 12 • Python 3.11 • systemd • UFW • journald
`}
              </pre>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Box className="w-5 h-5 text-terminal-500" />
                <h3 className="font-display font-semibold text-white">Hardware</h3>
              </div>
              <p className="text-sm text-muted-300">
                3× Raspberry Pi 4B (4GB) • Budget: &lt;$100
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-terminal-500" />
                <h3 className="font-display font-semibold text-white">Security</h3>
              </div>
              <p className="text-sm text-muted-300">
                SSH hardening • UFW firewall • Real-time monitoring
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-terminal-500" />
                <h3 className="font-display font-semibold text-white">Monitoring</h3>
              </div>
              <p className="text-sm text-muted-300">
                Prometheus metrics • Grafana dashboards • Alerting
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tooling & Builds Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <h2 className="section-title">Tooling & Builds</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sentinel-SSH Card */}
            <div className="card-interactive group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-terminal-500" />
                  <h3 className="h4">Sentinel-SSH</h3>
                </div>
                <span className="status-badge status-production">
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal-500" />
                  production
                </span>
              </div>

              <p className="text-muted-300 mb-4">
                SSH intrusion detection that actually makes sense. Watches journald logs, detects
                brute-force patterns, auto-blocks attackers with temporary UFW rules.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">Python 3.8+</span>
                <span className="tag">systemd</span>
                <span className="tag">UFW</span>
                <span className="tag">Prometheus</span>
              </div>

              <div className="flex gap-3">
                <Link
                  href="https://github.com/yashpotdar-py/sentinel-ssh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  View Repo
                </Link>
                <Link
                  href="https://github.com/yashpotdar-py/sentinel-ssh#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Docs
                </Link>
              </div>
            </div>

            {/* Homelab Infrastructure Card */}
            <div className="card-interactive group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-amber-500" />
                  <h3 className="h4">Homelab Stack</h3>
                </div>
                <span className="status-badge status-tinkering">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  tinkering
                </span>
              </div>

              <p className="text-muted-300 mb-4">
                Production services on budget hardware. Pi-hole for DNS filtering, SSH hardening,
                network monitoring, and Prometheus + Grafana observability.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">Raspberry Pi</span>
                <span className="tag">Debian</span>
                <span className="tag">Docker</span>
                <span className="tag">Grafana</span>
              </div>

              <div className="flex gap-3">
                <Link href="/projects" className="btn-ghost flex-1 justify-center">
                  <Terminal className="w-4 h-4" />
                  View Lab
                </Link>
              </div>
            </div>

            {/* Log Parser Card */}
            <div className="card-interactive group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-terminal-500" />
                  <h3 className="h4">Log Parser</h3>
                </div>
                <span className="status-badge status-tinkering">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  tinkering
                </span>
              </div>

              <p className="text-muted-300 mb-4">
                Real-time journald log parsing with pattern matching. Extracts failed SSH attempts,
                suspicious activity, and system events for alerting.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">Python</span>
                <span className="tag">journald</span>
                <span className="tag">regex</span>
              </div>

              <div className="flex gap-3">
                <span className="btn-ghost flex-1 justify-center opacity-50 cursor-not-allowed">
                  <Github className="w-4 h-4" />
                  Coming Soon
                </span>
              </div>
            </div>

            {/* SSH Hardening Scripts Card */}
            <div className="card-interactive group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-terminal-500" />
                  <h3 className="h4">SSH Hardening</h3>
                </div>
                <span className="status-badge status-tinkering">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  tinkering
                </span>
              </div>

              <p className="text-muted-300 mb-4">
                Reproducible SSH configuration scripts. Disable root login, enforce key auth, set
                rate limits, and audit configs for compliance.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">Bash</span>
                <span className="tag">OpenSSH</span>
                <span className="tag">security</span>
              </div>

              <div className="flex gap-3">
                <span className="btn-ghost flex-1 justify-center opacity-50 cursor-not-allowed">
                  <Github className="w-4 h-4" />
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Postmortems & Writeups Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <h2 className="section-title">Postmortems & Writeups</h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot bg-danger-500" />
                <div className="terminal-dot bg-amber-500" />
                <div className="terminal-dot bg-terminal-500" />
              </div>
              <span className="font-mono text-xs text-muted-300">incident-log.md</span>
            </div>
            <div className="terminal-content">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-base-500 text-muted-300">
                      <th className="text-left py-2 font-mono">incident</th>
                      <th className="text-left py-2 font-mono">root cause</th>
                      <th className="text-left py-2 font-mono">fix</th>
                      <th className="text-left py-2 font-mono">lesson</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-200">
                    <tr className="border-b border-base-500/50">
                      <td className="py-3">SSH lockout</td>
                      <td className="py-3">Blocked own IP</td>
                      <td className="py-3">Whitelist logic</td>
                      <td className="py-3">Test exclusions first</td>
                    </tr>
                    <tr className="border-b border-base-500/50">
                      <td className="py-3">Pi reboots</td>
                      <td className="py-3">Power supply</td>
                      <td className="py-3">Upgraded PSU</td>
                      <td className="py-3">Don't cheap out</td>
                    </tr>
                    <tr className="border-b border-base-500/50">
                      <td className="py-3">Log flooding</td>
                      <td className="py-3">No rate limit</td>
                      <td className="py-3">Sliding window</td>
                      <td className="py-3">Always bound growth</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 card">
            <h3 className="h5 mb-3">Log Snippet Example</h3>
            <div className="bg-base-900 border border-base-500 rounded-terminal p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-terminal-500">
{`2026-02-14 18:42:15 [ALERT] Failed SSH attempt detected
Source: 192.168.1.247
User: root
Attempts: 5 in 60s window
Action: Temporary block (15m) via UFW
Block ID: blk_20260214184215_247`}
              </pre>
            </div>
          </div>
        </motion.section>

        {/* Philosophy/Approach Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <h2 className="section-title">Philosophy</h2>

          <div className="card">
            <blockquote className="border-l-4 border-terminal-500 pl-6 mb-6">
              <p className="text-lg md:text-xl text-muted-200 italic mb-2">
                "You come at infrastructure with grep and a prayer, you best know what you're
                looking for."
              </p>
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="h5 text-terminal-500">My Rules:</h3>
                <ul className="space-y-2 text-muted-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Break it first</strong> — If you don't know how it fails, you don't
                      know how it works
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Document everything</strong> — Future-me deserves context
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>No black boxes</strong> — If I can't read the code, I won't run it
                      as root
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Ship working, not perfect</strong> — Production teaches more than
                      planning
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="h5 text-terminal-500">What I Believe:</h3>
                <ul className="space-y-2 text-muted-200">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Security by obscurity = surprise incompetence with good PR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>READMEs longer than code = documentation done right</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>3 AM debugging sessions = best learning moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-terminal-500 mt-1 flex-shrink-0" />
                    <span>Failing fast &gt; planning forever</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section"
        >
          <div className="card text-center">
            <h2 className="h2 mb-4">
              <span className="text-gradient">Start Here</span>
            </h2>
            <p className="text-muted-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're here for security tools, homelab inspiration, or just want to see how
              things break—pick your path.
            </p>

            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link
                href="https://github.com/yashpotdar-py/sentinel-ssh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <Shield className="w-5 h-5" />
                Security Tools
              </Link>
              <Link href="/projects" className="btn-secondary justify-center">
                <Terminal className="w-5 h-5" />
                Explore Lab
              </Link>
              <Link href="/resume" className="btn-secondary justify-center">
                <Activity className="w-5 h-5" />
                View Timeline
              </Link>
              <Link href="/contact" className="btn-secondary justify-center">
                <ExternalLink className="w-5 h-5" />
                Get In Touch
              </Link>
            </div>

            <p className="text-sm text-muted-300 mt-6">
              ⭐ Like what you see? Star a repo — it's free dopamine for both of us!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;
