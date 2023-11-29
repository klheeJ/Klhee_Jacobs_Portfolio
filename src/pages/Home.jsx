import { certifications } from "../constants"
import { Hero, Footer } from "../components"
import { useEffect, useState } from 'react'

const Home = () => {
  // Scroll Animation of Certificates//
  const [shouldAddAnimation, setShouldAddAnimation] = useState(true);

  useEffect(()=> {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setShouldAddAnimation(!prefersReducedMotion);
  }, []);

  useEffect(()=> {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller)=> {
        if (!scroller.getAttribute("data-animated")) {
          scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item)=> {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
      });
    }
    });
  }; 
  if (shouldAddAnimation) {
      addAnimation();
    }
  },
  [shouldAddAnimation]);

  return (
  <div className="main">
{/* ///////TOP//////////////////////// */}
    <Hero/>
    <section id="About-main">
            <div className="About-heading">01. About Me</div>
            <div className="About-text">
              I am a <span>frontend developer</span> based in Nashville, TN transitioning out of 7 years in healthcare. I have always
              had a <span>passion for solving problems</span>, whether it be creating art through
              different mediums, attempting a logic-based puzzle or figuring out different strategies
              for a particular boardgame. Web development allows me to combine both parts of my brain that seek creative problem-solving with style
              and beauty in design.
            </div>
    </section>

  {/* ////////////RESUME///////////////// */}
  <section id="resume-main">
    <div className="resume-heading">02. Experience</div>
    <div className="resume-exp">
      <div id="exps">
        <div>Fullstack Software Engineer Intern</div>
        <div>Sept 2023 - Current</div>
      </div>
      <div id="exps">
        <div>Fullstack Software Engineer Student</div>
        <div>Dec 2022 - May 2023</div>
      </div>
      <div id="exps">
        <div>Family Nurse Practitioner</div>
        <div>2016 - Current</div>
      </div>
      <div id="exps">
        <div>Vanderbilt University</div>
        <div>Bachelor of Science</div>
      </div>
      <div id="exps">
      <div>Vanderbilt University School of Nursing</div>
        <div>Masters of Science in Nursing</div>
      </div>
    </div>
  </section>


{/* //////PROJECTS//////////// */}

    <section id='projects-main'>
        <div className="projects-heading">03. Projects</div>
        <div className="project-container">
          <div className='projects'>
            <div>
              <p className="project-title">Scholarship Auditions</p>
            </div>
            <a href="http://www.scholarshipaudition.com/home" target='none'><div className='hello'></div></a>
            <div className="project-info">
              <div>Node.js/HTML/CSS</div>
              <div>Built from ground up in a team of one graphic designer and two developers</div>
              <div>Informational site on the different services ScholarshipAuditions provides</div>
              <div><a className="project-link" href="https://github.com/lcluischavez/SA">Github</a></div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">My Music Future</p>
            </div>
            <a href="https://www.mymusicfuture.com/" target='none'><div className='hello5'></div></a>
            <div className="project-info">
              <div>Angular/HTML/CSS</div>
              <div>Contributed to updates and changes on an existing project</div>
              <div>Website aimed at empowering students unlock their potential in music</div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">My Music Future</p>
            </div>
            <a href="https://www.musiccitybowlband.com/" target='none'><div className='hello6'></div></a>
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
            <a href="https://main--curious-halva-0315d4.netlify.app/" target='none'><div className='hello3'></div></a>
            <div className="project-info">
              <div>Self-project recreating a template website</div>
              <div>React/Typescript/HTML/SCSS</div>
              <div>Mock restaurant website displaying interactive elements</div>
              <div><a className="project-link" href="https://github.com/klheeJ/foodbar">Github</a></div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">Chicago Museum of Arts API</p>
            </div>
            <a href="https://main--spectacular-moxie-623ab5.netlify.app/" target='none'><div className='hello2'></div></a>
            <div className="project-info">
              <div>JS/HTML/CSS</div>
              <div>Utilizes an API to showcase selected art pieces from the Chicago Museum of Art</div>
              <div><a className="project-link" href="https://github.com/klheeJ/Javascript_ChicagoArt_API">Github</a></div>
            </div>
          </div>
          <div className='projects'>
            <div>
              <p className="project-title">Otter Gym</p>
            </div>
            <a href="https://vocal-beignet-099224.netlify.app/" target='none'><div className='hello4'></div></a>
            <div className="project-info">
              <div>Project done with Coding Temple</div>
              <div>HTML/CSS</div>
              <div>Multi-page static representation of a gym website</div>
              <div><a className="project-link" href="https://github.com/klheeJ/gym-webiste">Github</a></div>
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
