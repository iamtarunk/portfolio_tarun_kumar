import Reveal from './Reveal'
import { profile } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Building digital lending experiences end to end.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text" delay={0.08}>
            <p>{profile.summary}</p>
            <p>
              Previously instructed coding and theoretical sessions as a Lab Assistant, then moved into
              fintech frontend and full-stack product work across multi-brand loan platforms.
            </p>
          </Reveal>

          <Reveal className="about-facts" delay={0.16}>
            <div className="fact">
              <strong>Focus</strong>
              <span>React.js · Node.js · SQL</span>
            </div>
            <div className="fact">
              <strong>Domain</strong>
              <span>Digital lending · NBFC · Payments</span>
            </div>
            <div className="fact">
              <strong>Based in</strong>
              <span>{profile.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
