"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Terminal,
  GitBranch,
  FileText,
  CheckCircle,
  X,
  Github,
  Mail,
  ExternalLink,
  AlertTriangle,
  Code,
  Search,
} from "lucide-react";

const collaborationAreas = [
  {
    id: "open-source",
    title: "Open-Source Contributions",
    icon: Github,
    description:
      "I contribute to security and infrastructure projects to learn and improve my skills. If you have beginner-friendly issues or want someone to test your security tools, I'm interested.",
    whatILookFor: [
      "Projects with clear contribution guidelines",
      "Beginner-friendly or 'good first issue' tasks",
      "Active maintainers who provide feedback",
      "Security, infrastructure, or Python-based projects",
      "Learning opportunities in real codebases",
    ],
    whatIDont: [
      "Projects without documentation",
      "Abandoned repos (no commits in 6+ months)",
      "Enterprise-only tools requiring paid licenses",
    ],
    timeframe: "Ongoing (as I learn)",
  },
  {
    id: "code-review",
    title: "Code Review Exchange",
    icon: Code,
    description:
      "I'm looking for peers to exchange code reviews on security projects. You review my Python/Bash scripts, I'll review yours. We both learn from each other's approaches.",
    whatILookFor: [
      "Fellow students or early-career devs",
      "Security tooling or homelab automation projects",
      "Constructive feedback on code quality",
      "Python, Bash, or infrastructure-as-code",
      "Learning through mutual review",
    ],
    whatIDont: [
      "Professional enterprise code reviews",
      "Full-stack web applications",
      "AI/ML model implementations",
    ],
    timeframe: "1-2 weeks per review",
  },
  {
    id: "learning-together",
    title: "Learning & Experimenting",
    icon: Terminal,
    description:
      "Want to learn ethical hacking, build security tools, or set up a homelab together? I'm always looking for people to learn alongside and share knowledge with.",
    whatILookFor: [
      "Other students interested in cybersecurity",
      "People building homelabs or CTF teams",
      "Shared learning goals (pentesting, forensics, etc.)",
      "Collaborative experimentation mindset",
      "Willingness to share both wins and failures",
    ],
    whatIDont: [
      "Looking for mentorship (I'm learning too)",
      "Enterprise consulting expectations",
      "Requests to 'teach' without collaboration",
    ],
    timeframe: "Ongoing collaboration",
  },
  {
    id: "threat-modeling",
    title: "Threat Modeling Sessions",
    icon: AlertTriangle,
    description:
      "I help map threat models for homelab setups, security tools, and small-scale infrastructure. We'll walk through attack vectors, failure modes, and mitigation strategies.",
    whatILookFor: [
      "Clear system boundaries and trust zones",
      "Realistic threat actors (not nation-states for homelabs)",
      "Attack surface analysis",
      "Failure mode enumeration",
      "Pragmatic mitigations (not just theoretical)",
    ],
    whatIDont: [
      "Enterprise threat modeling (different scale)",
      "Compliance-driven checklists (I focus on real threats)",
      "Anything requiring formal certifications",
    ],
    timeframe: "1-2 sessions (async or scheduled)",
  },
  {
    id: "open-source",
    title: "Open-Source Contributions",
    icon: Github,
    description:
      "I contribute to security and infrastructure projects. Bug fixes, feature additions, documentation improvements, and test coverage. If your project aligns with my focus areas, I'm interested.",
    whatILookFor: [
      "Active maintainers who respond to issues/PRs",
      "Clear contribution guidelines",
      "Well-documented codebase",
      "Projects solving real problems",
      "Welcoming community",
    ],
    whatIDont: [
      "Abandoned projects (no commits in 6+ months)",
      "Projects with toxic maintainers",
      "Anything without a clear license",
    ],
    timeframe: "Ongoing (as time permits)",
  },
];

const ServicesPage = () => {
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
            <GitBranch className="w-8 h-8 text-terminal-500" />
            <h1 className="h1">
              <span className="text-gradient">Collaboration</span>
            </h1>
          </div>
          <p className="text-xl text-muted-300 max-w-3xl mb-6">
            I'm an AI/ML student learning cybersecurity through hands-on projects. Looking to collaborate with other learners, contribute to open-source, and build cool security tools together.
          </p>

          <div className="card bg-base-900 border-terminal-500/30">
            <div className="flex items-start gap-3">
              <Terminal className="w-5 h-5 text-terminal-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-200 mb-2">
                  <span className="font-semibold text-terminal-500">Reality check:</span> I'm a student still learning. I'm not offering professional services or consulting—I'm looking for peers to learn and build with.
                </p>
                <p className="text-xs text-muted-300">
                  If you need an experienced security engineer, that's not me yet. But if you're also learning cybersecurity and want to collaborate on projects, I'm all in.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Collaboration Areas */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title">What I'm Looking For</h2>

          <div className="space-y-8">
            {collaborationAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-interactive group"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Title & Description */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-terminal-500" />
                        <h3 className="h3">{area.title}</h3>
                      </div>

                      <p className="text-muted-200 leading-relaxed">{area.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* What I Look For */}
                        <div>
                          <h4 className="h5 text-terminal-500 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            What I Look For:
                          </h4>
                          <ul className="space-y-2">
                            {area.whatILookFor.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-muted-200"
                              >
                                <span className="text-terminal-500 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What I Don't */}
                        <div>
                          <h4 className="h5 text-amber-500 mb-3 flex items-center gap-2">
                            <X className="w-4 h-4" />
                            What I Don't:
                          </h4>
                          <ul className="space-y-2">
                            {area.whatIDont.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-muted-200"
                              >
                                <span className="text-amber-500 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right: Timeframe & Action */}
                    <div className="space-y-4">
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="flex items-center gap-2">
                            <div className="terminal-dot bg-danger-500" />
                            <div className="terminal-dot bg-amber-500" />
                            <div className="terminal-dot bg-terminal-500" />
                          </div>
                          <span className="font-mono text-xs text-muted-300">timeframe</span>
                        </div>
                        <div className="terminal-content">
                          <div className="flex items-start gap-3">
                            <span className="text-terminal-500">➜</span>
                            <span className="text-muted-200 text-sm">{area.timeframe}</span>
                          </div>
                        </div>
                      </div>

                      <div className="card bg-base-900">
                        <p className="text-xs text-muted-300 mb-3">
                          Interested in this type of collaboration?
                        </p>
                        <Link href="/contact" className="btn-secondary w-full justify-center">
                          <Mail className="w-4 h-4" />
                          Get In Touch
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* What I Respond To / Ignore */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Response Guidelines</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* I Respond Fast To */}
            <div className="card">
              <h3 className="h4 mb-4 text-terminal-500 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                I Respond Fast To:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-terminal-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Technical questions about my projects</p>
                    <p className="text-sm text-muted-300">
                      Bugs, feature requests, or "how does this work?"
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Ideas for obscure sysadmin tooling</p>
                    <p className="text-sm text-muted-300">
                      "What if we did X to solve Y?" conversations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Postmortem war stories</p>
                    <p className="text-sm text-muted-300">
                      "Here's how I broke production at 3 AM"
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">
                      "I tried your thing and it broke"
                    </p>
                    <p className="text-sm text-muted-300 italic">Feature, not bug</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Please Don't */}
            <div className="card border-amber-500/30">
              <h3 className="h4 mb-4 text-amber-500 flex items-center gap-2">
                <X className="w-5 h-5" />
                Please Don't:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Ask me to fix your printer</p>
                    <p className="text-sm text-muted-300">
                      Or any other non-security/infra issues
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Pitch crypto/NFT/blockchain anything</p>
                    <p className="text-sm text-muted-300">Instant ignore</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">
                      Expect enterprise support on hobby projects
                    </p>
                    <p className="text-sm text-muted-300">
                      These are learning experiments, not SaaS products
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Send unsolicited job spam</p>
                    <p className="text-sm text-muted-300">
                      Recruiters: I'm not looking right now
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Expected Response Time */}
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
              <span className="font-mono text-xs text-muted-300">response-time.log</span>
            </div>
            <div className="terminal-content space-y-3">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-mono text-terminal-500 mb-1">GitHub Issues/PRs</p>
                  <p className="text-muted-200">24-48 hours</p>
                </div>
                <div>
                  <p className="font-mono text-terminal-500 mb-1">Technical Questions</p>
                  <p className="text-muted-200">1-3 days</p>
                </div>
                <div>
                  <p className="font-mono text-terminal-500 mb-1">Collaboration Requests</p>
                  <p className="text-muted-200">3-7 days</p>
                </div>
              </div>
              <div className="pt-3 border-t border-base-500">
                <p className="text-xs text-muted-300">
                  <span className="text-terminal-500">Note:</span> I check messages during US
                  Eastern evenings (after work). If you're in a different timezone, expect slight
                  delays.
                </p>
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
              <span className="text-gradient">Let's Learn Together</span>
            </h2>
            <p className="text-muted-300 text-lg mb-8 max-w-2xl mx-auto">
              If you're also learning cybersecurity, building security tools, or experimenting with
              homelabs, let's collaborate. I'm always looking for peers to learn alongside.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
              <Link
                href="https://github.com/yashpotdar-py"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;
