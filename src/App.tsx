import { Variants, motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

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
  

  
  const videoURLs = ["https://www.youtube.com/embed/O6eNAMayZzQ?autoplay=1&mute=1&loop=1", "https://www.youtube.com/embed/fgxX95LU1qo?autoplay=1&mute=1&loop=1", "https://www.youtube.com/embed/qN4wyto2rDo?autoplay=1&mute=1&loop=1"]
  const [videoURLNo, setVideoURLNo] = useState(-1)

  return (
    <div className="sections" id="home">
      <Header />
      <div ref={firstThreeRef} className="first-three">
        <Hero value={{ opacity2, characterScroll }} />
        <Skills value={{ characterScroll, setProjectsInView }}/>
      </div>
      <motion.div variants={showcaseAnimate} transition={{duration: 0.5}} initial="relativeContainer" animate={projectsInView ? "fixedContainer" : contactInView ? "absoluteContainer" : "staticContainer"} className="project-showcase-container">
      <iframe width="100%" height="100%" src={videoURLs[videoURLNo]} allowFullScreen title="Projects Demo"></iframe>
      </motion.div>
      <Projects value={{characterScroll, setVideoURLNo, setProjectsInView}}/>
      <Contact value={{setContactInView, characterScroll, setProjectsInView}}/>
    </div>
  )
}

export default App
