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
        </motion.section>

        {/* Contact Channels */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="section-title">How to Reach Me</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {contactChannels.map((channel, index) => {
    const Icon = channel.icon;
    return (
      <motion.div
        key={channel.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="w-full"
      >
        <Link
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-interactive group h-full border border-terminal-500/50 hover:border-terminal-500 transition-all rounded-lg p-6 bg-base-900 shadow-md hover:shadow-lg flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-base-900 border border-terminal-500/30 flex items-center justify-center text-terminal-500 group-hover:border-terminal-500/50 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="h5 mb-1 whitespace-nowrap">
              {channel.name}
            </h3>
            <p className="text-sm text-muted-300 font-mono break-all">
              {channel.value}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  })}
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
