"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  BsEnvelope,
  BsPhone,
  BsGeoAlt,
  BsSend,
  BsCheckCircle,
  BsExclamationTriangle,
  BsLinkedin,
  BsGithub,
  BsCalendar,
  BsClock,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";
import {
  cardHoverVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";

const contactInfo = [
  {
    icon: <BsEnvelope />,
    title: "Email",
    description: "yashyogeshpotdar7@gmail.com",
    href: "mailto:yashyogeshpotdar7@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BsPhone />,
    title: "Phone",
    description: "+91 7028-712-645",
    href: "tel:+917028712645",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <BsGeoAlt />,
    title: "Location",
    description: "Pune, Maharashtra, India",
    href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <BsClock />,
    title: "Response Time",
    description: "Within 24 hours",
    href: null,
    color: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  {
    icon: <BsLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yashyogeshpotdar/",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: <BsGithub />,
    name: "GitHub",
    href: "https://github.com/yashpotdar-py",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: <SiUpwork />,
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01277c4d278595bf41",
    color: "from-green-600 to-green-700",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    href: "https://wa.me/917028712645",
    color: "from-green-500 to-green-600",
  },
];

const services = [
  "AI/ML Development",
  "Cybersecurity Consulting",
  "Full Stack Development",
  "Data Science & Analytics",
  "Other (Please specify)",
];

// EmailJS configuration - Replace with your actual values
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
  TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the email template parameters
      const templateParams = {
        to_name: "Yash Potdar", // Your name
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        service: formData.service,
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        subject: `🚀 PORTFOLIO-INQUIRY: New Project Request from ${formData.name}`,
        reply_to: formData.email,
        // Adding the special phrase for easy filtering
        filter_phrase: "PORTFOLIO-INQUIRY",
        // Additional context
        source: "Portfolio Website Contact Form",
        timestamp: new Date().toLocaleString(),
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/2 to-primary/2 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6"
          >
            <HiSparkles className="text-accent" />
            <span className="text-accent font-semibold">Let's Connect</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-white via-accent to-white bg-clip-text leading-tight"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : "_self"
                        }
                        className="block"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-white/70 group-hover:text-white transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/70">{item.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      className="group block"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-gradient-to-r ${social.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {social.icon}
                          </div>
                          <span className="font-medium text-white group-hover:text-accent transition-colors">
                            {social.name}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <BsCalendar className="text-accent text-xl" />
                <h3 className="text-xl font-bold text-white">
                  Quick Consultation
                </h3>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Book a free 30-minute consultation call to discuss your project
                requirements.
              </p>
              <button
                className="w-full bg-gradient-to-r from-accent to-accent-hover text-primary font-semibold hover:shadow-lg hover:shadow-accent/25 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() =>
                  window.open("https://cal.com/yashpotdar", "_blank")
                }
              >
                Schedule a Call
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Your Project
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Fill out the form below and I'll get back to you within 24
                  hours with a detailed proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone and Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    >
                      <option value="" className="bg-primary text-white">
                        Select a service
                      </option>
                      {services.map((service, index) => (
                        <option
                          key={index}
                          value={service}
                          className="bg-primary text-white"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    >
                      <option value="" className="bg-primary text-white">
                        Select budget range
                      </option>
                      <option
                        value="Under ₹5,000"
                        className="bg-primary text-white"
                      >
                        Under ₹5,000
                      </option>
                      <option
                        value="₹5,000 - ₹15,000"
                        className="bg-primary text-white"
                      >
                        ₹5,000 - ₹15,000
                      </option>
                      <option
                        value="₹15,000 - ₹30,000"
                        className="bg-primary text-white"
                      >
                        ₹15,000 - ₹30,000
                      </option>
                      <option
                        value="₹30,000 - ₹50,000"
                        className="bg-primary text-white"
                      >
                        ₹30,000 - ₹50,000
                      </option>
                      <option
                        value="₹50,000+"
                        className="bg-primary text-white"
                      >
                        ₹50,000+
                      </option>
                      <option
                        value="Let's discuss"
                        className="bg-primary text-white"
                      >
                        Let's discuss
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium block">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    >
                      <option value="" className="bg-primary text-white">
                        Select timeline
                      </option>
                      <option
                        value="ASAP (Rush job)"
                        className="bg-primary text-white"
                      >
                        ASAP (Rush job)
                      </option>
                      <option
                        value="1-2 weeks"
                        className="bg-primary text-white"
                      >
                        1-2 weeks
                      </option>
                      <option value="1 month" className="bg-primary text-white">
                        1 month
                      </option>
                      <option
                        value="2-3 months"
                        className="bg-primary text-white"
                      >
                        2-3 months
                      </option>
                      <option
                        value="Flexible"
                        className="bg-primary text-white"
                      >
                        Flexible
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-white font-medium block">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, requirements, goals, and any specific features you need..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent to-accent-hover text-primary font-bold text-lg py-6 rounded-xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <span>Send Message</span>
                        <BsSend />
                      </div>
                    )}
                  </button>
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-green-400"
                    >
                      <BsCheckCircle />
                      <span>
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-400"
                    >
                      <BsExclamationTriangle />
                      <span>
                        Failed to send message. Please try again or contact me
                        directly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-accent font-bold text-2xl">24h</div>
                    <div className="text-white/70 text-sm">Response Time</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-accent font-bold text-2xl">100%</div>
                    <div className="text-white/70 text-sm">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-accent font-bold text-2xl">Free</div>
                    <div className="text-white/70 text-sm">
                      Initial Consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="font-semibold text-accent">
                  How quickly can you start my project?
                </h4>
                <p className="text-white/70">
                  I can typically start new projects within 1-2 weeks, depending
                  on my current workload and project complexity.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-accent">
                  Do you offer ongoing support?
                </h4>
                <p className="text-white/70">
                  Yes, I provide ongoing support and maintenance for all
                  projects with flexible support packages.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-accent">
                  What's your preferred communication method?
                </h4>
                <p className="text-white/70">
                  I'm flexible with communication - email, WhatsApp, video
                  calls, or whatever works best for you.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-accent">
                  Do you work with international clients?
                </h4>
                <p className="text-white/70">
                  Absolutely! I work with clients globally and am comfortable
                  with different time zones.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
