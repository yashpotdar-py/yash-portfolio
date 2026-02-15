"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Terminal,
  CheckCircle,
  X,
  MessageSquare,
  Clock,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    name: "Email",
    value: "yashyogeshpotdar7@gmail.com",
    href: "mailto:yashyogeshpotdar7@gmail.com",
    primary: true,
    responseTime: "1-3 days",
    note: "Best for technical questions, collaboration requests, and detailed discussions",
  },
  {
    icon: Github,
    name: "GitHub",
    value: "yashpotdar-py",
    href: "https://github.com/yashpotdar-py",
    primary: true,
    responseTime: "24-48 hours",
    note: "For bug reports, feature requests, and pull requests on my projects",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    value: "yashyogeshpotdar",
    href: "https://www.linkedin.com/in/yashyogeshpotdar/",
    primary: false,
    responseTime: "3-7 days",
    note: "Professional networking—I don't check this frequently",
  },
];

const reachOutFor = [
  {
    title: "Project Collaboration",
    description: "Want to build security tools, work on CTFs, or experiment with homelabs together?",
  },
  {
    title: "Learning Resources",
    description: "Found a great cybersecurity course, tool, or resource? I'd love to hear about it.",
  },
  {
    title: "Bug Reports",
    description: "Found a bug in my projects? Please let me know so I can learn and fix it.",
  },
  {
    title: "Technical Discussion",
    description: "Want to discuss security concepts, tools, or interesting attack vectors?",
  },
  {
    title: "Homelab Ideas",
    description: "Building a homelab or have ideas for security experiments? Let's talk.",
  },
  {
    title: "Code Review Exchange",
    description: "Want to review each other's code? I'm always looking for feedback.",
  },
];

const dontReachOutFor = [
  {
    title: "Professional Consulting",
    description: "I'm a student, not a consultant. Can't offer professional security services.",
  },
  {
    title: "Crypto/NFT/Blockchain Pitches",
    description: "Not interested. Please don't.",
  },
  {
    title: "Job Recruitment",
    description: "Focused on learning right now. Will update when I'm actively job hunting.",
  },
  {
    title: "Do My Homework",
    description: "I won't do your assignments. Happy to discuss concepts, but you need to learn yourself.",
  },
  {
    title: "Enterprise Security Audits",
    description: "I'm not qualified for professional pentesting or security audits yet.",
  },
  {
    title: "Hacking for Illegal Purposes",
    description: "Only ethical hacking on systems I own or have permission to test. Hard pass on anything shady.",
  },
];

const ContactPage = () => {
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
            <MessageSquare className="w-8 h-8 text-terminal-500" />
            <h1 className="h1">
              <span className="text-gradient">Get In Touch</span>
            </h1>
          </div>
          <p className="text-xl text-muted-300 max-w-3xl mb-6">
            I'm a student learning cybersecurity through hands-on projects. Feel free to reach out for collaboration, project discussions, or to share learning resources.
          </p>

          <div className="card bg-base-900 border-terminal-500/30">
            <div className="flex items-start gap-3">
              <Terminal className="w-5 h-5 text-terminal-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-200 mb-2">
                  <span className="font-semibold text-terminal-500">Student status:</span> I check
                  messages during evenings and weekends. Response times may vary during exam periods.
                </p>
                <p className="text-xs text-muted-300">
                  I'm not offering professional services—just looking to connect with other learners and collaborate on projects.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Channels */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title">How to Reach Me</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-interactive group h-full ${
                      channel.primary ? "border-terminal-500/30" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-base-900 border border-terminal-500/30 flex items-center justify-center text-terminal-500 group-hover:border-terminal-500/50 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="h5 mb-1">
                          {channel.name}
                          {channel.primary && (
                            <span className="ml-2 text-xs font-mono text-terminal-500">
                              [Primary]
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-300 font-mono truncate">
                          {channel.value}
                        </p>
                      </div>
                    </div>

                    <div className="terminal-window mb-4">
                      <div className="terminal-content">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-terminal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-300">Response Time</p>
                            <p className="text-sm text-muted-100 font-mono">
                              {channel.responseTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-300">{channel.note}</p>

                    <div className="mt-4 flex items-center gap-2 text-terminal-500 text-sm font-mono group-hover:gap-3 transition-all">
                      Open Link
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* What to Reach Out For / What Not To */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Communication Guidelines</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Reach Out For */}
            <div className="card">
              <h3 className="h3 mb-6 text-terminal-500 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Reach Out For:
              </h3>
              <div className="space-y-4">
                {reachOutFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-terminal-500 mt-1 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-sm text-muted-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don't Reach Out For */}
            <div className="card border-amber-500/30">
              <h3 className="h3 mb-6 text-amber-500 flex items-center gap-2">
                <X className="w-6 h-6" />
                Please Don't:
              </h3>
              <div className="space-y-4">
                {dontReachOutFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 flex-shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-sm text-muted-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Response Time Expectations */}
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
              <span className="font-mono text-xs text-muted-300">response-sla.log</span>
            </div>
            <div className="terminal-content space-y-4">
              <div>
                <p className="font-mono text-terminal-500 mb-3">$ cat response-expectations.txt</p>
                <div className="space-y-3 pl-4 text-sm">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-terminal-500 font-mono mb-1">GitHub Issues/PRs</p>
                      <p className="text-muted-200">24-48 hours</p>
                    </div>
                    <div>
                      <p className="text-terminal-500 font-mono mb-1">Technical Questions</p>
                      <p className="text-muted-200">1-3 days</p>
                    </div>
                    <div>
                      <p className="text-terminal-500 font-mono mb-1">General Inquiries</p>
                      <p className="text-muted-200">3-7 days</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-base-500">
                    <p className="text-xs text-muted-300">
                      <span className="text-amber-500">[WARNING]</span> I don't offer same-day
                      support. If you need instant help, check documentation or Stack Overflow
                      first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tips for Better Responses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Writing Better Messages</h2>

          <div className="card">
            <div className="flex items-start gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-terminal-500 mt-0.5 flex-shrink-0" />
              <p className="text-muted-200">
                The more specific your question, the faster and more useful my response will be.
                Here's how to increase your chances of getting a helpful reply:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="h5 text-terminal-500 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Good Examples:
                </h4>
                <div className="space-y-3">
                  <div className="card bg-base-900 text-sm">
                    <p className="text-muted-300 italic mb-2">"Bug in Sentinel-SSH:"</p>
                    <p className="text-muted-200">
                      "Running v1.1.0 on Ubuntu 22.04. Parser fails on multiline SSH auth logs from
                      journalctl. Error: [paste error]. Steps to reproduce: [details]."
                    </p>
                  </div>
                  <div className="card bg-base-900 text-sm">
                    <p className="text-muted-300 italic mb-2">"Collaboration idea:"</p>
                    <p className="text-muted-200">
                      "I built a SSH log aggregator (link). Could you review the threat model? I'm
                      concerned about X and Y attack vectors."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="h5 text-amber-500 mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" />
                  Bad Examples:
                </h4>
                <div className="space-y-3">
                  <div className="card bg-base-900 border-amber-500/20 text-sm">
                    <p className="text-muted-300 italic mb-2">"Vague request:"</p>
                    <p className="text-muted-200">
                      "Hi, your project looks cool. Can you help me with my homelab?" (Help with
                      what? Be specific.)
                    </p>
                  </div>
                  <div className="card bg-base-900 border-amber-500/20 text-sm">
                    <p className="text-muted-300 italic mb-2">"Zero-context ask:"</p>
                    <p className="text-muted-200">
                      "Can I pick your brain about cybersecurity?" (About what, specifically? I'm
                      not a walking encyclopedia.)
                    </p>
                  </div>
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
              <span className="text-gradient">Ready to Reach Out?</span>
            </h2>
            <p className="text-muted-300 text-lg mb-8 max-w-2xl mx-auto">
              If your message aligns with the guidelines above, I'd love to hear from you. Pick
              your preferred channel and be specific about what you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:yashyogeshpotdar7@gmail.com"
                className="btn-primary"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </Link>
              <Link
                href="https://github.com/yashpotdar-py"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5" />
                Open GitHub Issue
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
