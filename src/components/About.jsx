const About = () => {
  return (
    <div className="about-section-container">
      <h2>ABOUT ME</h2>
      <div className="about-text-section">
        <p>
          I am currently working as a <span>React Developer Intern</span> from last 2 months,
          previously I worked as a <span>frontend developer intern</span> for 7 months.
        </p> <br />
        <p>
          As a graduate with a Bachelor's degree in Computer Science, I am eager
          to apply my skills and knowledge to a challenging and dynamic
          environment.
        </p> <br />
        <p>
          Throughout my academic journey, I have developed a strong foundation
          in <span>HTML, CSS, JavaScript, firebase, tailwind css, Material UI</span>, etc.
          and have completed multiple projects where I applied these skills. I
          also have knowledge of JS front-end library <span>React, Redux (State
            Management Library)</span> and currently I am learning <span>NextJS</span> and <span>Data
            Structures & Algorithms</span>. Moreover, I have learnt to use tools like 
          Git, GitHub, and VS Code to improve my workflow and collaboration with
          others.
        </p>
      </div>
      <div className="education-experience-section">
        <div className="education">
            <h3>Education</h3>
            <div className="education-timeline">
                <div className="education-timeline-item">
                    <section>
                    <p className="year">2019-2022</p>
                    <p>CSJMU</p>
                    </section>
                    <div>
                    <p className="education-title">Bachelor of Computer Application</p>
                    <p className="institute">Allenhouse Business School</p>
                    </div>
                </div>
                <div className="education-timeline-item">
                    <section>
                    <p className="year">2018-2019</p>
                    <p>ISC</p>
                    </section>
                    <div>
                    <p className="education-title">Intermediate</p>
                    <p className="institute">SR Education Centre</p>
                    </div>
                </div>
                <div className="education-timeline-item">
                    <section>
                    <p className="year">2016 - 2017</p>
                    <p>ICSE</p>
                    </section>
                    <div>
                    <p className="education-title">High School</p>
                    <p className="institute">Krishna Foundation Academy</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="experience">
            <h3>Work Experience</h3>
            <div className="education-timeline">
                <div className="education-timeline-item">
                    <section>
                    <p className="year">July/2024 - Present</p>
                    <p>Onsite</p>
                    </section>
                    <div>
                    <p className="education-title">ReactJS Developer Intern</p>
                    <p className="institute">Samta Infotech Pvt Ltd</p>
                    <p className="institute">Noida, Uttar Pradesh, India</p>
                    </div>
                </div>
                <div className="education-timeline-item">
                    <section>
                    <p className="year">Nov/2023 - Jun/2024</p>
                    <p>Remote</p>
                    </section>
                    <div>
                    <p className="education-title">Frontend Developer Intern</p>
                    <p className="institute">Indivue Technologies Pvt Ltd</p>
                    <p className="institute">New Delhi, Delhi, India</p>
                    </div>
                </div>
                <div className="education-timeline-item">
                    <section>
                    <p className="year">Mar/2023 - Nov/2023</p>
                    <p>Onsite</p>
                    </section>
                    <div>
                    <p className="education-title">Recruiting Sourcer</p>
                    <p className="institute">BestInfo Systems Pvt Ltd</p>
                    <p className="institute">Kanpur, Uttar Pradesh, India</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
