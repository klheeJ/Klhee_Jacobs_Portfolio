import AOS from "aos";
import 'aos/dist/aos.css'
import { Hero, Footer } from "../components"
import { useEffect } from "react";

const Home = () => {
  useEffect(()=> {
    AOS.init({duration: 2000});
  },[]);

  return (
  <div className="main">
    <Hero/>
    <section id="About-main">
            <div className="About-heading" data-aos='fade-up'><span id="number">01.</span> About Me</div>
            <div className="About-text" data-aos='fade-up'>
              I am a <span>full-stack developer</span> based in Nashville, TN transitioning out of 7 years in healthcare. I have always
              had a <span>passion for solving problems</span>, whether it be creating art through
              different mediums, attempting a logic-based puzzle or figuring out different strategies
              for a particular boardgame. Web development allows me to combine both parts of my brain that seek creative problem-solving with style
              and beauty in design.
            </div>
    </section>

  <section id="resume-main">
    <div className="resume-heading" data-aos='fade-up'><span id="number">02.</span> Experience</div>
    <div className="resume-exp" data-aos='fade-up'>
      <div id="exps">
        <li>Full-stack Software Engineer Intern (co.lab)</li>
        <div className="dates">Dec 2023 - Feb 2024</div>
      </div>
      <div id="exps">
        <li>Full-stack Software Engineer Intern (ScholarshipAuditions.com)</li>
        <div className="dates">Sept 2023 - Dec 2023</div>
      </div>
      <div id="exps">
        <li>Family Nurse Practitioner</li>
        <div className="dates">2016 - Current</div>
      </div>
    </div>
  </section>

  <section id="education-main">
    <div className="resume-heading" data-aos='fade-up'><span id="number">03.</span> Education</div>
    <div className="resume-exp" data-aos='fade-up'>
      <div id="exps">
        <li>Full-stack Software Engineer Student</li>
        <div className="dates">Dec 2022 - May 2023</div>
      </div>
      <div id="exps">
        <li>Vanderbilt University</li>
        <div className="school">Bachelor of Science</div>
      </div>
      <div id="exps">
        <li>Vanderbilt University School of Nursing</li>
        <div className="school">Masters of Science in Nursing</div>
      </div>
    </div>
  </section>

  <div className="resume-link"><a href="https://drive.google.com/file/d/1mK0QWEBl2PcVlIrMJzqNk37Fskw5zW7m/view?usp=sharing" target="blank">download the complete resume</a></div>


{/* //////PROJECTS//////////// */}

    <section id='projects-main'>
        <div className="projects-heading" data-aos='fade-up'><span id="number">04.</span> Projects</div>
        <div className="project-container" data-aos='fade-up'>
          <div className='projects'>
            <div>
              <p className="project-title">Doumi</p>
            </div>
            <div className='project-5'></div>
            <div className="project-info">
              <iframe className="iframe" src="https://drive.google.com/file/d/15ZbmFJCErcFSsIfl6BMnfgXI6uEVnB4g/preview" width="600" height="400" allow="autoplay"></iframe>
              <div>React Native/Expo/Firebase/Firestore</div>
              <div>Created a social app from conception to completion in 3 weeks in a cross-functional team of 4, consisting of a product manager, product designer, and web developers.</div>
              <div>An android social app that connects caregivers of dementia patients for community by being able to share insights and thoughts and provides support with caregiving strategies.</div>
              <div><a className="project-link" href="https://github.com/klheeJ/doumi">Github</a></div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">Scholarship Auditions</p>
            </div>
            <a href="http://www.scholarshipaudition.com/home" target='none'><div className='project-1'></div></a>
            <div className="project-info">
              <div>Node.js/HTML/CSS</div>
              <div>Built from ground up in a team of one graphic designer and two developers</div>
              <div>Informational site on the different services ScholarshipAuditions provides</div>
              <div><a className="project-link" href="https://github.com/klheeJ/ScholarshipAuditions">Github</a></div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">My Music Future</p>
            </div>
            <a href="https://www.mymusicfuture.com/" target='none'><div className='project-2'></div></a>
            <div className="project-info">
              <div>Angular/HTML/CSS</div>
              <div>Contributed to updates and changes on an existing project</div>
              <div>Website aimed at empowering students unlock their potential in music</div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">Music City Bowl Band</p>
            </div>
            <a href="https://www.musiccitybowlband.com/" target='none'><div className='project-3'></div></a>
            <div className="project-info">
              <div>Angular/HTML/CSS</div>
              <div>Contributed to updates and changes on an existing project</div>
              <div>Website aimed at connecting student musicians to Music City Bowl</div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">Foodbar (in progress)</p>
            </div>
            <a href="https://main--curious-halva-0315d4.netlify.app/" target='none'><div className='project-4'></div></a>
            <div className="project-info">
              <div>Self-project recreating a template website</div>
              <div>React/Typescript/HTML/SCSS</div>
              <div>Mock restaurant website displaying interactive elements</div>
              <div><a className="project-link" href="https://github.com/klheeJ/foodbar">Github</a></div>
            </div>
          </div>
        </div>
    </section>





  {/* /////////CONTACT////////////////// */}

    <Footer />
  </div>
  )
}

export default Home
