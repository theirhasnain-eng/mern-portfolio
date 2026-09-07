import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../data/projects";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-main">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
            Latest Works
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Explore My Popular <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:[direction:rtl]"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-[var(--border-subtle)] shadow-2xl lg:[direction:ltr]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>

                <div className="lg:[direction:ltr]">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
                    {project.tech[0]}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-[var(--border-subtle)] bg-white/5 px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 text-brand-400 transition-colors hover:bg-brand-500 hover:text-white"
                    aria-label={`Visit ${project.title}`}
                  >
                    <FiArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            href={siteConfig.social.github}
            className="!rounded-full"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
