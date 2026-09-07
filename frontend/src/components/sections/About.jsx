import { motion } from "framer-motion";
import { FiCheckCircle, FiDownload } from "react-icons/fi";
import { siteImages } from "../../data/images";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";

const highlights = [
  "Develop highly interactive Front and / User Interfaces for the web",
  "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
  "Integration of third party services such as AWS / Digital Ocean",
  "Integration of payment services such as M-Pesa and paypal etc",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative mx-auto max-w-sm lg:mx-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <img
                src={siteImages.about}
                alt={siteConfig.name}
                className="aspect-[4/5] w-full object-cover "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
              About Me
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl">
              <span className="text-gradient">Driven,</span> innovative
              <br />
              Software <span className="text-gradient">Engineer</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[var(--text-secondary)]">
              {siteConfig.bio.split("\n\n")[0]}
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                className="!rounded-full"
              >
                <FiDownload className="h-5 w-5" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
