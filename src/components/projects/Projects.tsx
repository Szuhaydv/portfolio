import { motion } from "framer-motion"
import './projects.css'

const Projects = (props: any) => {
  const characterScroll = props.value.characterScroll
  const setVideoURLNo = props.value.setVideoURLNo
  const setProjectsInView = props.value.setProjectsInView
  return (
    <motion.section style={{ bottom: characterScroll }} className="projects">
        <div className="project-1">
          <div className="project-info-container">
            <iframe src={'https://www.youtube.com/embed/O6eNAMayZzQ?autoplay=1&mute=1&loop=1'} allowFullScreen title="Mapex Demo"></iframe>
            <motion.div style={{display: "block"}} className="take-space"></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.65 }} className="project-desciption">
              <div className="d-flex align-items-center project-name-container">
                <motion.h3 onViewportEnter={() => setVideoURLNo(0)}>MAPEX</motion.h3>
                <a href="https://mapexsite.netlify.app/" target='_blank'>
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/6994/6994770.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of a link" />
                  </div>
                </a>
                <a href="https://github.com/Szuhaydv?tab=repositories&q=mapex&type=&language=&sort=" target='_blank'>
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of GitHub logo" />
                  </div>
                </a>
              </div>
              <div className="pitch-description">
              For everyone who loves traveling... Create beautiful pinmaps of your bucket list destinations! ✈️
                <div className="d-flex justify-content-center">
                  <ul>
                    <li>Encrypted login/authentication</li>
                    <li>CRUD operations</li>
                    <li>Mapbox/Stripe integration</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div className="project-2" onViewportEnter={() => setProjectsInView(true)}>
          <div className="project-info-container">
            <iframe src={"https://www.youtube.com/embed/fgxX95LU1qo?autoplay=1&mute=1&loop=1"} allowFullScreen title="Space-Spice Demo"></iframe>
            <motion.div style={{display: "block"}} className="take-space"></motion.div>
            <motion.div onViewportEnter={() => setVideoURLNo(1)} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.65 }} className="project-desciption">
              <div className="d-flex align-items-center project-name-container">
                <motion.h3>SPACE-SPICE</motion.h3>
                <a target="_blank" href="https://space-spice.netlify.app">
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/6994/6994770.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of a link" />
                  </div>
                </a>
                <a target="_blank" href="https://github.com/Szuhaydv/space-spice">
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of GitHub logo" />
                  </div>
                </a>
              </div>
              <div className="pitch-description">
                Deciding what to cook for your loved ones in seconds. Recipes based on <span>your</span> ingredients! 🍲
                <div className="d-flex justify-content-center">
                  <ul>
                    <li>OOP API integration</li>
                    <li>Custom querying</li>
                    <li>My first website 💓</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="project-3">
          <div className="project-info-container">
            <iframe src={"https://www.youtube.com/embed/qN4wyto2rDo?autoplay=1&mute=1&loop=1"} allowFullScreen title="Portfolio Demo"></iframe>
            <motion.div style={{display: "block"}} className="take-space"></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.65 }} className="project-desciption">
              <div className="d-flex align-items-center project-name-container">
                <motion.h3 onViewportEnter={() => setVideoURLNo(2)}>PORTFOLIO</motion.h3>
                <a href="https://github.com/Szuhaydv/portfolio" target='_blank'>
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of GitHub logo" />
                  </div>
                </a>
              </div>
              <div className="pitch-description">
                A gorgeous site made exciting with a bunch of cool animations, parallax scrolling & more! 👏
                <div className="d-flex justify-content-center">
                  <ul>
                  <li>Animations by 'Framer Motion'</li>
                  <li>Custom Domain Deployment</li>
                  <li>EmailJS integration</li>
                  </ul>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}

export default Projects