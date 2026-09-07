import { motion } from "framer-motion";
import { experience } from "../../data/experience";

function TimelineColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-6 font-display text-xl font-bold text-[var(--text-primary)]">
        {title}
      </h3>
      <div className="relative space-y-8 border-l border-[var(--border-subtle)] pl-8">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-500 bg-[var(--bg-primary)]">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </span>
            <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
              {item.title}
            </h4>
            <p className="mt-1 text-sm font-medium italic text-[var(--text-secondary)]">
              {item.organization}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-brand-400">
              {item.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const education = experience.filter((item) => item.type === "education");
  const work = experience.filter((item) => item.type === "work");

  return (
    <section id="experience" className="section-padding">
      <div className="container-main">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
            My Resume
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Real <span className="text-gradient">Problem Solutions</span>{" "}
            Experience
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <TimelineColumn title="Education" items={education} />
          <TimelineColumn title="Experience" items={work} />
        </div>
      </div>
    </section>
  );
}
