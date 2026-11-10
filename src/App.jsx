import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'SkinWise AI',
    type: 'AI · WEB APP',
    description: 'A skincare discovery concept designed around helpful recommendations and a more personal digital experience.',
    tags: ['Python', 'Machine Learning', 'React'],
    tone: 'peach',
    mark: 'skinwise',
  },
  {
    number: '02',
    name: 'ShopKit',
    type: 'FRONTEND · E-COMMERCE',
    description: 'A responsive storefront built with reusable React components and a playful product-first interface.',
    tags: ['React', 'Bootstrap', 'Vite'],
    tone: 'lavender',
    mark: 'shopkit',
  },
  {
    number: '03',
    name: 'ProcShell',
    type: 'SYSTEMS · C PROJECT',
    description: 'A modular Linux shell project exploring process execution and core operating-system concepts.',
    tags: ['C', 'Linux', 'Operating Systems'],
    tone: 'mint',
    mark: 'procshell',
  },
];

const skills = ['React', 'JavaScript', 'Python', 'C', 'HTML & CSS', 'Machine Learning', 'Git', 'Linux'];

function SectionLabel({ children }) {
  return <p className="section-label"><span />{children}</p>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Millan Noor home">MN<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO LEARNING & COLLABORATION</div>
            <p className="eyebrow">COMPUTER SCIENCE STUDENT · DEVELOPER IN PROGRESS</p>
            <h1 id="hero-title">Curious mind.<br /><em>Creative</em> builder.</h1>
            <p className="hero-intro">I’m Millan Noor — a CS student exploring the space where thoughtful design, useful software, and artificial intelligence meet.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN PAKISTAN</span><span>BUILDING ONE IDEA AT A TIME ↗</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <img src="/profile-art.svg" alt="Abstract illustration of a person working at a laptop, surrounded by creative shapes" />
            <div className="floating-note note-top"><Sparkles size={15} /> LEARN. BUILD. REPEAT.</div>
            <div className="floating-note note-bottom"><span className="note-dot" /> CURRENTLY EXPLORING AI + WEB</div>
            <span className="visual-index">FIG. 01 / THE CREATIVE PROCESS</span>
          </div>
        </section>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
            <h2 id="about-title">Building skills.<br /><span>Turning ideas into things.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">I enjoy understanding how things work — then using that knowledge to make something useful.</p>
            <p className="about-body">I’m studying Computer Science at Sukkur IBA University. My interests range from frontend development to machine learning and the systems that power our everyday tools. I’m still learning, experimenting, and getting better with every project.</p>
            <div className="skills-block">
              <p className="mini-label">TOOLS & TECHNOLOGIES</p>
              <ul className="skill-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <div><SectionLabel>SELECTED PROJECTS</SectionLabel><h2 id="work-title">Things I’ve <em>made.</em></h2></div>
            <p>A few experiments and builds from my learning journey. More ideas are always in progress.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-art" aria-hidden="true">
                  <span className="project-number">/{project.number}</span>
                  <div className={`project-symbol ${project.mark}`}>
                    {project.mark === 'skinwise' && <><span className="skin-circle" /><span className="skin-line" /><span className="skin-spark">✳</span></>}
                    {project.mark === 'shopkit' && <><span className="shop-bag">S</span><span className="shop-star">✳</span></>}
                    {project.mark === 'procshell' && <><span className="terminal-window"><i /><i /><i /><b>procshell<span>_</span></b></span></>}
                  </div>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
                  <p>{project.description}</p>
                  <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-top"><SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel><span>LET’S MAKE IT HAPPEN ↗</span></div>
            <h2 id="contact-title">Let’s create<br /><em>something useful.</em></h2>
            <p>I’m always interested in learning from people, sharing ideas, and collaborating on thoughtful projects.</p>
            <a className="button button-light" href="mailto:hello@example.com">Say hello <Mail size={16} /></a>
            <span className="contact-decoration" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">MN<span>.</span></a>
        <p>DESIGNED & BUILT WITH CURIOSITY · © {new Date().getFullYear()} MILLAN NOOR</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="mailto:hello@example.com" aria-label="Email"><Mail size={17} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
