
function Projects() {
    return (
      <div id= 'projects-main' className='projects-main'>
        <div className='projects'>
          <div>
            <p className="project-title">Scholarship Auditions</p>
            <a className="project-link" href="https://github.com/lcluischavez/SA">Github</a>
          </div>
          <a href="http://www.scholarshipaudition.com/home" target='none'><div className='hello'></div></a>
          <div className="project-info">
            <p>Node.js/HTML/CSS</p>
            <p>Informational site on the different services ScholarshipAuditions provides</p>
          </div>
        </div>
        <div className='projects'>
          <div>
            <p className="project-title">Chicago Museum of Arts API</p>
            <a className="project-link" href="https://github.com/klheeJ/Javascript_ChicagoArt_API">Github</a>
          </div>
          <a href="https://main--spectacular-moxie-623ab5.netlify.app/" target='none'><div className='hello2'></div></a>
          <div className="project-info">
            <p>JS/HTML/CSS</p>
            <p>Utilizes an API to showcase selected art pieces from the Chicago Museum of Art</p>
          </div>
        </div>
        <div className='projects'>
          <div>
            <p className="project-title">Foodbar (in progress)</p>
            <a className="project-link" href="https://github.com/klheeJ/foodbar">Github</a>
          </div>
          <a href="https://main--curious-halva-0315d4.netlify.app/" target='none'><div className='hello3'></div></a>
          <div className="project-info">
            <p>Self project recreating a template website</p>
            <p>React/Typescript/HTML/SCSS</p>
            <p>Mock restaurant website displaying interactive elements</p>
          </div>
        </div>
        <div className='projects'>
          <div>
            <p className="project-title">Otter Gym</p>
            <a className="project-link" href="https://github.com/klheeJ/gym-webiste">Github</a>
          </div>
          <a href="https://vocal-beignet-099224.netlify.app/" target='none'><div className='hello4'></div></a>
          <div className="project-info">
            <p>Project done with Coding Temple</p>
            <p>HTML/CSS</p>
            <p>Mpti-page static representation of a gym website</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects
  