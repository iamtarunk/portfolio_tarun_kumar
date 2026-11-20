import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <h2>Let&apos;s build the next fintech experience.</h2>
            <p>
              Open to Full Stack / Frontend / MERN roles focused on React.js, Node.js, and SQL database
              operations. Reach out for product work, interviews, or collaboration.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
