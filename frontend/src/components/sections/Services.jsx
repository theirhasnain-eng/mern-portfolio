import { motion } from "framer-motion";
import {
  FiCode,
  FiCreditCard,
  FiGlobe,
  FiHeart,
  FiLayout,
  FiSmartphone,
} from "react-icons/fi";
import { services } from "../../data/services";

const iconMap = {
  globe: FiGlobe,
  layout: FiLayout,
  device: FiSmartphone,
  code: FiCode,
  wallet: FiCreditCard,
  heart: FiHeart,
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-main">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
            I like to make things easy and fun
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">Special Services</span> For
            your
            <br className="hidden sm:block" /> Business{" "}
            <span className="text-gradient">Development</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiCode;
            return (
              <motion.div
                key={service.id}
                className="glass glass-hover rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
