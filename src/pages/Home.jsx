import { certifications } from "../constants"
import { Hero } from "../components"
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
  <>
{/* ///////TOP//////////////////////// */}
    <section id="About-main">
      <Hero/>
      <div className="About-section">
        <div className="scroller">
          <ul className="tag-list scroller__inner">
            {certifications.map((certificates)=> (
              <li
              key={certificates.id}>
                <img src={certificates.image} alt="" /></li>
            ))
          }
          </ul>
        </div>
        <div className="About-desc">
          <div className="About-text">
            I am a frontend developer based in Nashville, TN transitioning out of 7 years in healthcare. I have always
            had a passion for creating and solving problems, whether it be creating art through
            different mediums, attempting a logic-based puzzle or figuring out different strategies
            for a particular boardgame. Web development allows me to combine both parts of my brain that seek creative problem solving with style
            and beauty in design.
          </div>
          <div className="About-pic">
            <img src="../public/Me-Mt.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>

{/* //////PROJECTS//////////// */}

    <section id='projects-main'>
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
    </section>


  {/* ////////////RESUME///////////////// */}
  <section id="resume-main">
    <div className="resume">
    <table>
      <thead>
          <th colSpan="3" className="resume-title">Experience</th>
      </thead>
      <tbody className="resume-info" id="resume-exp">
        <tr>
          <td>ScholarshipAuditions</td>
          <td>Web Developer Intern</td>
          <td>Sept 2023 - Current</td>
        </tr>
        <tr>
            <td>CVS MinuteClinic</td>
            <td>Nurse Practitioner</td>
            <td>2021 - Current</td>
          </tr>
          <tr>
            <td>Progressive Care Solutions</td>
            <td>Nurse Practitioner</td>
            <td>2020 - 2021</td>
          </tr>
          <tr>
            <td>Renuven Health Partners</td>
            <td>Nurse Practitioner</td>
            <td>2019-2020</td>
          </tr>
          <tr>
            <td>Sleep Centers of Middle TN</td>
            <td>Nurse Practitioner</td>
            <td>2016-2019</td>
          </tr>
      </tbody>
    </table>
    <table>
      <thead>
          <th colSpan="3" className="resume-title">Education</th>
      </thead>
      <tbody className="resume-info" id="resume-edu">
        <tr>
          <td>Coding Temple</td>
          <td>Fullstack Software Engineering</td>
          <td>Dec 2022-May 2023</td>
        </tr>
        <tr>
            <td>Vanderbilt University School of Nursing</td>
            <td></td>
            <td>2013-2016</td>
          </tr>
          <tr>
            <td>Vanderbilt University</td>
            <td></td>
            <td>2009 - 2013</td>
          </tr>
      </tbody>
    </table>
  </div>
  </section>


  {/* /////////CONTACT////////////////// */}
  <section id='connect'>
      <div className='connect-main'>
        <div className="connect-text">Let's Connect</div>
        <div className='connect-social'>
          <ul>
            <p>klhee.jacobs@gmail.com</p>
          </ul>
          <ul>
            <a id='connect-links' href="https://www.linkedin.com/in/klhee-jacobs-99743a161/">LinkedIn</a>
          </ul>
          <ul>
            <a id='connect-links' href="https://www.instagram.com/klheee/">Instagram</a>
          </ul>
          <ul>
            <a id='connect-links' href="https://github.com/klheeJ">Github</a>
          </ul>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
