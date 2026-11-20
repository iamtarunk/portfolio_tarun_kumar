import Reveal from './Reveal'
import { education } from '../data/content'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic foundation.</h2>
        </Reveal>

        <div className="edu-grid">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={0.08 * index}>
              <article className="edu-item">
                <h3>{item.degree}</h3>
                <p className="meta">
                  {item.school} · {item.period}
                </p>
                <p>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
