import { Variants, motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"

function App() {

  
  const firstThreeRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: firstThreeRef,
  })
  
  const opacity2 = useTransform(
    scrollYProgress,
    [0,0.1],
    [1, 0]
  )

  const characterScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100vh"]
  )


  

  

  

  const [projectsInView, setProjectsInView] = useState(false)
  const [contactInView, setContactInView] = useState(false)

  const showcaseAnimate: Variants = {
    fixedContainer: {
      position: "fixed",
      top: "calc(30vh)"
    },
    staticContainer: {
      opacity: "0",
      display: "none"
    },
    absoluteContainer: {
      position: "absolute",
      top: "calc(193vh + 2rem)"
    }
  }
  const frameRef = useRef(null)
  const contactRef = useRef(null)
  
  
  const [frameInView, setFrameInView] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    const serviceID = 'contact_service'
    const templateID = 'template_sjct3wf'
    const publicKey = 'tUiOAKB_sM3BPCWwg'

    const templateParams = {
      from_name: firstName + " " + lastName,
      from_email: email,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!')
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }
  const videoURLs = ["https://www.youtube.com/embed/O6eNAMayZzQ?autoplay=1&mute=1&loop=1", "https://www.youtube.com/embed/fgxX95LU1qo?autoplay=1&mute=1&loop=1", "https://www.youtube.com/embed/qN4wyto2rDo?autoplay=1&mute=1&loop=1"]
  const [videoURLNo, setVideoURLNo] = useState(-1)

  return (
    <div className="sections" id="home">
      <div className="skills" id="skills"></div>
      <div className="projects-detector" id="projects"></div>
      <Header />
      <div ref={firstThreeRef} className="first-three">
        <Hero value={{ opacity2, characterScroll }} />
        <Skills value={{ characterScroll, setProjectsInView }}/>
      </div>
      <motion.div variants={showcaseAnimate} transition={{duration: 0.5}} initial="relativeContainer" animate={projectsInView ? "fixedContainer" : contactInView ? "absoluteContainer" : "staticContainer"} className="project-showcase-container">
      <iframe width="100%" height="100%" src={videoURLs[videoURLNo]} allowFullScreen title="Mapex Demo"></iframe>
      </motion.div>
      <motion.section style={{ bottom: characterScroll }} className="projects">
        <div className="project-1">
          <div className="project-info-container">
            <motion.div style={{display: "block"}} className="take-space"></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.65 }} className="project-desciption">
              <div className="d-flex align-items-center project-name-container">
                <motion.h3 onViewportEnter={() => setVideoURLNo(0)}>MAPEX</motion.h3>
                <a href="">
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/6994/6994770.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of a link" />
                  </div>
                </a>
                <a href="">
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of GitHub logo" />
                  </div>
                </a>
              </div>
              <motion.p>
              A website for everyone who loves traveling. Create beautiful pinmaps of your bucket list destinations and share them with others. Need inspiration for your next journey? Take a look at what’s popular!
              </motion.p>
            </motion.div>
          </div>
        </div>
        <motion.div className="project-2" onViewportEnter={() => setProjectsInView(true)}>
          <div className="project-info-container">
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
              <motion.p>
                Deciding what to cook for yourself or your loved ones can be a daunting task... Don't worry, 'Space-Spice' is here to help. As an ingredient based recipe site you can get inspired in seconds!
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        <div className="project-3">
          <div className="project-info-container">
            <motion.div style={{display: "block"}} className="take-space"></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.65 }} className="project-desciption">
              <div className="d-flex align-items-center project-name-container">
                <motion.h3 onViewportEnter={() => setVideoURLNo(2)}>PORTFOLIO</motion.h3>
                <a href="">
                  <div className="icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Icon of GitHub logo" />
                  </div>
                </a>
              </div>
              <p>
                A gorgeous site made exciting with a bunch of cool animations. It showcases a few of my projects like 'Mapex' and 'Space-Spice' and also my skills as a Full-Stack Web Developer. 
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section 
        style={{ bottom: characterScroll }}
        ref={contactRef} 
        onViewportEnter={() => {
          setProjectsInView(false)
          setContactInView(true)
        }} 
        onViewportLeave={() => {
          setContactInView(false)
        }}
        className="contact" 
        id="contact"
      >
        <div className="about-me">
          <h2>A LITTLE ABOUT ME...</h2>
          <p>"Dream big, work hard, achieve!"</p>
          <p>Nice to meet you, my name is David! I'm a dedicated traveler ✈️ and avid reader 📚. </p>
          <p>I'm 21 years old with a passion for exploring anything. The two words which fit me the best are: calm and hardworking. Talk to me anytime! 😉</p>
          <p className="goodbye">Thank you for checking out my portfolio.<br />Have a great day! 🥳 🎉</p>
        </div>
        <div className="about-illustration">
          <img src="/aboutme.jpg" alt="Illustration about a black haired male" />
        </div>
        <motion.div onViewportEnter={() => setFrameInView(true)} className="detector"></motion.div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>CONTACT ME</h2>
          <div className="inputs h-100 d-flex flex-column justify-content-evenly">
            <input placeholder="First Name" value={firstName || ''} onChange={(e) => setFirstName(e.target.value)} type="text" />
            <input placeholder="Last Name" value={lastName || ''} onChange={(e) => setLastName(e.target.value)} type="text" />
            <input placeholder="E-mail" value={email || ''} onChange={(e) => setEmail(e.target.value)} type="email" />
            <textarea value={message || ''} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
            <div className="button-container">
              <button type="submit" className="btn btn-primary">Send Message!</button>
            </div>
          </div>

        </form>
        <div ref={frameRef} className="frame">
          <motion.img initial={{ y: -70, opacity: 0}} animate={frameInView ? {y: 0, opacity: 1} : {}} transition={{ stiffness: 100, delay: 0.25, duration: 1, type: "backInOut"}} viewport={{amount: 1, once: true}} className="top-frame" src="/top-frame.svg" alt="" />
          <div className="side-frames d-flex justify-content-between">
            <motion.img initial={{ x: -70, opacity: 0}} animate={frameInView ? {x: 0, opacity: 1} : {}} transition={{ stiffness: 100, delay: 0.25, duration: 1, type: "backInOut"}} viewport={{amount: 1, once: true}} className="left-frame" src="/left-frame.svg" alt="" />
            <motion.img initial={{ x: 70, opacity: 0}} animate={frameInView ? {x: 0, opacity: 1} : {}} transition={{ stiffness: 100, delay: 0.25, duration: 1, type: "backInOut"}} viewport={{amount: 1, once: true}} className="right-frame" src="/right-frame.svg" alt="" />
          </div>
          <motion.img initial={{ y: 70, opacity: 0}} animate={frameInView ? {y: 0, opacity: 1} : {}} transition={{ stiffness: 100, delay: 0.25, duration: 1, type: "backInOut"}} viewport={{amount: 1, once: true}} className="bottom-frame" src="/bottom-frame.svg" alt="" />
        </div>
      </motion.section>
    </div>
  )
}

export default App
