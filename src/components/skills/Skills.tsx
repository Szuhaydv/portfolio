import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import './skills.css'

const Skills = (props: any) => {
  const characterScroll = props.value.characterScroll
  const setProjectsInView = props.value.setProjectsInView
  
  const iconFoundationRef = useRef(null)
  const iconFoundationInView = useInView(iconFoundationRef, { amount: 1, once: true })

  const iconsFoundation = [["html", "HTML"],["css", "CSS"],["javascript", "JavaScript"]] 
  const iconsMERN = [["mongodb", "MongoDB"], ["express", "ExpressJS"], ["react", "React"], ["nodejs", "NodeJS"]]

  const versionRef = useRef(null)
  const versionInView = useInView(versionRef, { amount: 1, once: true })
  const iconsVersion = [["git", "Git"],["github", "GitHub"]]
  
  const iconDesignRef = useRef(null)
  const iconDesignInView = useInView(iconDesignRef, {amount: 1, once: true })
  const iconsDesign = [["figma", "Figma"], ["inkscape", "Inkscape"], ["gimp", "GIMP"]]
  const iconsExtras = [["vite", "Vite"], ["mysql", "MySQL"], ["c", "C"], ["python", "Python"]]

  const iconAnimation = {
    hideIcons: {
      scale: 0
    },
    showIcons: {
      scale: [0, 1, 1, 1],
      rotate: [0, 5, 0, 0]
    }
  }

  const mernRef = useRef(null)
  const mernInView = useInView(mernRef, { amount: 1, once: true })
  const mernAnimate = {
    showMern: {
      fontSize: "4.5vw",
      transform: "translateX(0%)"
    },
    hideMern: {
      fontSize: "1.5vw",
      transform: "translateX(100%)"
    }
  }

  const cvRef = useRef(null)
  const cvInView = useInView(cvRef, { amount: 1, once: true })

  const copiedRef = useRef<any>(null)
  const handleEmailClick = () => {
    if (copiedRef.current != null) {
      copiedRef.current.style.opacity = "1"
      setTimeout(() => {
        copiedRef.current.style.opacity = "0"
      }, 1500)
    }
  }
  
  return (
    <motion.main>
          <motion.div style={{ bottom: characterScroll }} className="main-parallax">
            <motion.div onViewportEnter={() => setProjectsInView(false)} className="detector-2"></motion.div>
              <div className="topcontainer">
                <div className="foundation-version-container">
                  <div className="foundation-container">
                    <div className="position-relative">
                      <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="foundation-heading">THE FOUNDATION:</motion.h2>
                      <motion.div initial={{ scaleY: 1.3, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >THE FOUNDATION: -</h2></motion.div>
                      <motion.div initial="hideIcons" animate={iconFoundationInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1}} className="icons-foundation">
                        {
                          iconsFoundation.map((icon, index) => (
                            <motion.div key={index} ref={index === 0 ? iconFoundationRef : undefined} variants={iconAnimation} className="icon-container">
                              <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                            </motion.div>
                          ))
                        }
                      </motion.div>
                    </div>
                  </div>
                  <div className="mern-container">
                    <div className="position-relative">
                      <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="icons-mern-heading">SPECIALIZING IN:</motion.h2>
                      <motion.div initial={{ scaleY: 1.3, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover-2"><h2 aria-hidden="true" >SPECIALIZING IN: -</h2></motion.div>
                      <motion.div initial="hideIcons" animate={iconFoundationInView ? "showIcons" : "hideIcons"} transition={{staggerChildren: 0.1, delayChildren: 0.4}}>
                        <div className="icons-mern">
                          {iconsMERN.map((icon, index) => (
                            <motion.div key={index} variants={iconAnimation} className="icon-container">
                              <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.h2 ref={mernRef} initial="hideMern" animate={mernInView ? "showMern" : "hideMern"} transition={{staggerChildren: 0.3}} className="m-e-r-n">
                        <motion.span variants={mernAnimate} className="span1">M </motion.span> 
                        <motion.span variants={mernAnimate} className="span2">E </motion.span> 
                        <motion.span variants={mernAnimate} className="span3">R </motion.span> 
                        <motion.span variants={mernAnimate} className="span4">N </motion.span>
                      </motion.h2>
                    </div>  
                  </div>
                </div>
                <div ref={iconDesignRef} className="design-extras-container">
                  <div className="design-container">
                    <div className="position-relative">
                      <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="design-heading">DESIGN TOOLS:</motion.h2>
                      <motion.div initial={{ scaleY: 1.3, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >DESIGN TOOLS: -</h2></motion.div>
                      <motion.div initial="hideIcons" animate={iconDesignInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1 }} className="icons-design">
                        {
                          iconsDesign.map((icon, index) => (
                            <motion.div key={index} variants={iconAnimation} className="icon-container">
                              <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                            </motion.div>
                          ))
                        }
                      </motion.div>
                    </div>
                  </div>
                  <motion.div initial="hideIcons" animate={iconDesignInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1, delayChildren: 0.4 }} className="extras-container">
                    <div className="position-relative">
                      <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="extras-heading">EXTRAS:</motion.h2>
                      <motion.div initial={{ scaleY: 1.3, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover-2"><h2 aria-hidden="true" >EXTRAS: -</h2></motion.div>
                      <div className="icons-extras">
                        {
                          iconsExtras.map((icon, index) => (
                            <motion.div key={index} variants={iconAnimation} className="icon-container">
                              <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                            </motion.div>
                          ))
                        }
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="version-container">
                  <div>
                    <motion.img initial={{ x: "50%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.6 }} className="profile-picture" src="/profile-picture.jpg" alt="Profile picture" />
                    <motion.div initial={{ scaleY: 1.3, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >VERSION CONTROL: -</h2></motion.div>
                    <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="version-heading">VERSION CONTROL:</motion.h2>
                    <motion.div ref={versionRef} initial="hideIcons" animate={versionInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1 }} className="icons-version">
                      {
                        iconsVersion.map((icon, index) => {
                          if (icon[0] === "github") {
                            return (
                              <a key={index} target="_blank" href="https://github.com/Szuhaydv">
                                <motion.div variants={iconAnimation} className="icon-container">
                                  <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                                </motion.div>
                              </a>
                            )
                          } else
                          return (
                          <motion.div key={index} variants={iconAnimation} className="icon-container">
                            <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                          </motion.div>
                          )
                      })
                      }
                    </motion.div>
                  </div>
                  
                </div>
                <div>
                  <motion.div ref={cvRef} initial="hideIcons" animate={cvInView ? "showIcons" : "hideIcons"}className="cv position-relative">
                    <motion.div initial={{ scaleY: 1.2, scaleX: 1, y: "-50%"}} whileInView={{ scaleX: 0, y: "-50%"}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >RESUME-</h2></motion.div>
                    <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="version-heading">RESUME:</motion.h2>
                    <motion.div variants={iconAnimation} className="icon-container">
                      <a href="https://drive.google.com/file/d/1GjLt6H6cBM5c9LfNCy_Ai6pQwjzBYVP9/view?usp=sharing" target="_about">
                        <img src="https://cdn-icons-png.flaticon.com/512/7471/7471457.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Resume icon" />
                      </a>
                    </motion.div>
                  </motion.div>
                  <div className="email">
                    <motion.h2 
                      onClick={() => {
                        navigator.clipboard.writeText('szuhaydv@gmail.com')
                        handleEmailClick()
                      }} 
                      initial={{ y: 30, opacity: 0 }} 
                      whileInView={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.1, type: "spring", duration: 0.25 }} 
                      viewport={{ once: true, amount: 0 }} 
                      className="email-heading">
                        EMAIL: <span className="span-one">szuhaydv@gmail.com<span ref={copiedRef} className="span-animation">Copied!</span></span>
                    </motion.h2>
                  </div>
                </div>

              </div>
          </motion.div>
        </motion.main>
  )
}

export default Skills