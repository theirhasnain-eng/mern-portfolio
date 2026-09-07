import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { HiOutlineCloud, HiOutlineCode } from "react-icons/hi";
import { skillsList } from "../../data/skills";

const iconMap = {
  javascript: SiJavascript,
  react: SiReact,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  bootstrap: SiBootstrap,
  github: SiGithub,
  vite: SiVite,
  api: HiOutlineCloud,
  vscode: HiOutlineCode,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-main">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
            My Talent
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Professional <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-5">
          {skillsList.map((skill, i) => {
            const Icon = iconMap[skill.icon] || SiJavascript;
            return (
              <motion.div
                key={skill.name}
                className="glass glass-hover flex flex-col items-center gap-3 rounded-2xl px-4 py-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 10) * 0.05 }}
              >
                <Icon className="h-8 w-8 text-brand-400" />
                <span className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
