import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  const reduce = useReducedMotion()

  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Popular frontend, backend &amp; SQL toolkit.</h2>
          <p className="section-lead">
            Keywords and tools I use daily for fintech UIs, REST integrations, and database-backed product flows.
          </p>
        </Reveal>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], groupIndex) => (
            <Reveal key={group} delay={0.06 * groupIndex}>
              <div className="skill-group">
                <h3>{group}</h3>
                <div className="skill-tags">
                  {items.map((item, i) => (
                    <motion.span
                      key={item}
                      className="skill-tag"
                      {...(reduce
                        ? {}
                        : {
                            initial: { opacity: 0, y: 8 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { delay: 0.03 * i, duration: 0.35 },
                            whileHover: { y: -2, scale: 1.03 },
                          })}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
