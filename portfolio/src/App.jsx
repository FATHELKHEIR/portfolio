import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "PHP",
    "MySQL",
    "Python",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      id: 1,
      title: "KAI STORE",
      image: "/images/KAI-STORE.png",
      description:
        "A basketball e-commerce web application where users can browse products, manage their cart, place orders, and administrators can manage products through an admin dashboard.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      live: "https://kaistore.infinityfree.io",
      github: "https://github.com/FATHELKHEIR/KAI-STORE",
    },

    {
      id: 2,
      title: "Project Coming Soon",
      image: "/images/project-placeholder.png",
      description:
        "A new project will be added to my portfolio soon.",
      technologies: ["React", "JavaScript"],
      live: "#",
      github: "https://github.com/FATHELKHEIR",
    },

    {
      id: 3,
      title: "Project Coming Soon",
      image: "/images/project-placeholder.png",
      description:
        "A new project will be added to my portfolio soon.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/FATHELKHEIR",
    },
  ];

  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            K<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">
        <div className="container hero-content">
          <p className="hero-small">Hi, I'm</p>

          <h1>
            <span> Fathelkheir.</span><br />
            Mohamed Khalil
            
          </h1>

          <h2>Junior Web Developer</h2>

          <p className="hero-description">
            Digital Development student passionate about building modern web
            applications and learning more about cybersecurity.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a
              href="https://github.com/FATHELKHEIR"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Who am <span>I?</span>
          </h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am a Digital Development student at OFPPT ISTA NTIC Sidi
                Maârouf in Casablanca.
              </p>

              <p>
                I mainly develop web applications using JavaScript, React, PHP,
                and MySQL. I enjoy turning ideas into real, modern, and
                user-friendly applications.
              </p>

              <p>
                I am also interested in cybersecurity and continuously work on
                improving my skills in web development and information
                security.
              </p>
            </div>

            <div className="about-card">
              <div>
                <span>Name</span>
                <p>Mohamed Khalil Fathelkheir</p>
              </div>

              <div>
                <span>Location</span>
                <p>Casablanca, Morocco</p>
              </div>

              <div>
                <span>Education</span>
                <p>Digital Development</p>
              </div>

              <div>
                <span>Interests</span>
                <p>Web Development • Cybersecurity • Basketball</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section dark-section">
        <div className="container">
          <p className="section-label">MY SKILLS</p>

          <h2 className="section-title">
            Technologies I <span>work with</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">PORTFOLIO</p>

          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of projects I have built to put my web development
            skills into practice.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live"
                    >
                      View Live ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section id="education" className="section dark-section">
        <div className="container">
          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">
            My <span>Education</span>
          </h2>

          <div className="education-card">
            <div className="education-date">2024 — 2026</div>

            <div>
              <h3>Digital Development</h3>

              <h4>OFPPT — ISTA NTIC Sidi Maârouf</h4>

              <p>
                Training in front-end and back-end web development,
                programming, databases, and cybersecurity fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section contact">
        <div className="container contact-container">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's work <span>together.</span>
          </h2>

          <p>
            I'm open to internships, collaborations, and opportunities in web
            development.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:med.khalil.fatthelkheir@gmail.com"
              className="btn primary-btn"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/fathelkheir-mohamed-khalil "
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container footer-content">
          <p>© 2026 Fathelkheir Mohamed Khalil</p>

          <div>
            <a
              href="https://github.com/FATHELKHEIR"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fathelkheir-mohamed-khalil "
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;