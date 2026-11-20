import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I&apos;ve built and taught.</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={0.06 * index}>
              <article className="job">
                <div className="job-head">
                  <h3>{job.role}</h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-company">
                  {job.company}
                  {job.place ? ` · ${job.place}` : ''}
                </p>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
