import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiAlertCircle,
  FiAward,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiMonitor,
  FiSend,
  FiUsers,
} from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import { submitContact } from "../../services/api";
import Button from "../ui/Button";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters";

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";

  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  return errors;
}

const highlights = [
  { icon: FiAward, text: "2+ Years of Experience" },
  { icon: FiMonitor, text: "Professional Web Developer" },
  { icon: FiUsers, text: "Front end Web Developer" },
  { icon: FiBriefcase, text: "Technical Mentor" },
];

const socialLinks = [
  { href: siteConfig.social.github, icon: FiGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || "Portfolio inquiry",
        message: `${form.phone ? `Phone: ${form.phone.trim()}\n\n` : ""}${form.message.trim()}`,
      });
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      if (err.errors) setErrors((prev) => ({ ...prev, ...err.errors }));
      setServerError(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-brand-500 focus:bg-brand-500/5 focus:ring-2 focus:ring-brand-500/20 ${
      errors[field] ? "border-red-500/50" : "border-[var(--border-subtle)]"
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-main relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Let&apos;s Talk For your{" "}
              <span className="text-gradient">Next Projects</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
              Discuss a project or just want to say hi? Connect with me via
              email or through a phone call.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-brand-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass card-shine rounded-2xl p-8"
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="+254 7XX XXX XXX"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass("subject")}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Write your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            {serverError && status === "error" && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === "sending"} className="!rounded-full">
                <FiSend className="h-4 w-4" />
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Thank you! Your message has been saved. I&apos;ll reply soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
