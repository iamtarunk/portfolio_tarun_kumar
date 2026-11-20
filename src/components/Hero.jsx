import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content'

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        }

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <motion.h1 className="hero-brand" {...fade(0)}>
            Tarun <em>Kumar</em>
          </motion.h1>
          <motion.p className="hero-headline" {...fade(0.1)}>
            {profile.title} — shipping fintech products with React, Node & SQL.
          </motion.p>
          <motion.p className="hero-copy" {...fade(0.18)}>
            I build loan journeys, repayment flows, and API-driven UIs with React.js, Node.js, and SQL —
            from white-label lending sites to production payment experiences.
          </motion.p>
          <motion.div className="hero-actions" {...fade(0.26)}>
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
              })}
        >
          <div className="hero-panel">
            <div className="hero-panel-top">
              <span className="hero-chip">Full Stack · Fintech</span>
              <span className="hero-chip">{profile.location}</span>
            </div>

            <div className="hero-stack">
              <div className="hero-stack-row">
                <span>Frontend</span>
                <strong>React.js | Next.js</strong>
              </div>
              <div className="hero-stack-row">
                <span>Backend</span>
                <strong>Node.js | Express.js</strong>
              </div>
              <div className="hero-stack-row">
                <span>Data</span>
                <strong>SQL | PostgreSQL</strong>
              </div>
            </div>

            <div className="hero-metrics">
              <div className="hero-metric">
                <strong>3+</strong>
                <span>Years span</span>
              </div>
              <div className="hero-metric">
                <strong>MERN</strong>
                <span>Core stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
