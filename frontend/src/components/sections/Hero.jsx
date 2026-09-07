import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { siteImages } from "../../data/images";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialLinks = [
  { href: siteConfig.social.github, icon: FiGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: FiTwitter, label: "Twitter" },
];

export default function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen h-auto items-center overflow-hidden pt-32 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="container-main relative z-10 px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={item}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-400"
            >
              Hello, my name is
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-gradient">{firstName}</span>{" "}
              <span className="text-[var(--text-primary)]">
                {rest.join(" ")}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 font-display text-2xl font-semibold text-[var(--text-secondary)] sm:text-3xl"
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] lg:mx-0"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                className="!rounded-full"
              >
                <FiDownload className="h-5 w-5" />
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="!rounded-full"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-brand-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative aspect-square w-full h-auto max-w-[360px]">
              <div className="absolute inset-0 rounded-full bg-brand-500/25 blur-2xl" />
              <div className="absolute bottom-0 h-[55%] w-[85%] -translate-x-1/2 rounded-[45%] bg-brand-500" />
              <div className="absolute  md:  lg:-mt-60 lg:-left-30 sm:h-0 sm:w-0 lg:h-100 lg:w-100 bg-[#ce5151] overflow-hidden rounded-full border-4 border-brand-500 shadow-2xl">
                <img
                  src={siteImages.landing}
                  alt={`${siteConfig.name} — ${siteConfig.title}`}
                  className=" sm:h-60 sm:w-60 lg:h-100 lg:w-100 object-cover rounded-b-full "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
