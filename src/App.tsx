import { Variants, motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

function App() {

  const textsArray = ["Hello,".split(""), "my name is David!".split(""), "I'm a Web Developer".split(""), "Nice to meet you!".split("")]
  const firstThreeRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: firstThreeRef,
  })
  
  const opacity2 = useTransform(
    scrollYProgress,
    [0,0.1],
    [1, 0]
  )

  const sectionScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  )
  const characterScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-100%"]
  )
  const nextSectionScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  )

  const [helloStart, setHelloStart] = useState(false)
  const [animationStart, setAnimationStart] = useState(false)
  const [animationEnd, setAnimationEnd] = useState(true)
  const [animation2Start, setAnimation2Start] = useState(false)
  const [animation2End, setAnimation2End] = useState(true)
  const [animation3Start, setAnimation3Start] = useState(false)
  const [helloCursor, setHelloCursor] = useState(true)
  const [cursor3Start, setCursor3Start] = useState(false)
  const cursorRef = useRef<any>(null)
  const animationValues = {
    hide: {
      display: "none"
    },
    show: {
      display: "inline"
    }
  }
  const cursorAnimation = {
    blinking: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.33, 0.66, 1]
      }
    }
  }
  const iconAnimation = {
    hideIcons: {
      scale: 0
    },
    showIcons: {
      scale: [0, 1, 1, 1],
      rotate: [0, 5, 0, 0]
    }
  }
  useEffect(() => {
    if (!helloCursor && cursorRef.current != null) {
      cursorRef.current.style.display = "none"
    }
  }, [helloCursor])
  
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
      <header>
        <a href="#home">
          <h2>Home</h2>
        </a>
        <a className="scroll-padding-link" href="#skills">
          <h2>Skills</h2>
        </a>
        <a className="scroll-padding-link-projects" href="#projects">
          <h2>Projects</h2>
        </a>
        <a className="scroll-padding-link" href="#contact">
          <h2>Contact</h2>
        </a>
      </header>
      <div ref={firstThreeRef} className="first-three">
        <motion.section style={{ y: sectionScroll }} className="hero">
          <img className="bg-background" src="/Mountain.svg" alt="Mountains in the background" />
          <motion.div className="bg-dock" style={{ y: characterScroll }}>
            <img src="/Dock.svg" alt="Person on a dock" />
          </motion.div>
          <motion.div style={{ opacity: opacity2}} className="text-disappear" >
            <div className="hello-text-container">
              {
                helloStart &&
              <motion.p 
              onAnimationComplete={() => {
                setHelloCursor(false)
                setAnimationEnd(false)
              }} 
              transition={{ staggerChildren: 0.03 }} initial="hide" animate="show" className="hello-text">
                {textsArray[0].map((char, index) => (
                    <motion.span key={index} variants={animationValues}>{char}</motion.span>
                  )
                )}
              </motion.p>
              }
              <motion.div ref={cursorRef} animate="blinking" variants={cursorAnimation} onAnimationStart={() => setTimeout(() => setHelloStart(true), 500)} className="cursor">&nbsp;</motion.div>
            </div>
            <div className="title-text-container">
              {!animationEnd && 
                animationStart &&
                <motion.p 
                  transition={{ staggerChildren: 0.03}} 
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setAnimationEnd(true)
                      setAnimation2End(false)
                    }, 2500)
                  }} 
                  initial="hide" animate="show" className="title-text">{
                    textsArray[1].map((char, index) => (
                      <motion.span key={index} variants={animationValues}>{char}</motion.span>
                    )  
                  )
                }</motion.p>
              }&nbsp;
              {!animationEnd && <motion.div animate="blinking" variants={cursorAnimation} onAnimationStart={() => setTimeout(() => setAnimationStart(true), 100)} className="cursor">&nbsp;</motion.div>}
            </div>
            <div className="title-text-container">
              {!animation2End && 
                animation2Start &&
                <motion.p 
                  transition={{ staggerChildren: 0.03}} 
                  onAnimationComplete={() => setTimeout(() => {
                    setAnimation2End(true)
                    setCursor3Start(true)
                  }, 2500)} 
                  initial="hide" animate="show" className="title-text">{
                    textsArray[2].map((char, index) => (
                      <motion.span key={index} variants={animationValues}>{char}</motion.span>
                    )  
                  )
                }</motion.p>
                
              }
              {!animation2End && <motion.div animate="blinking" variants={cursorAnimation} onAnimationStart={() => setTimeout(() => setAnimation2Start(true), 100)} className="cursor">&nbsp;</motion.div>}
            </div>
            <div className="title-text-container">
              {animation3Start &&
                <motion.p initial="hide" animate="show" transition={{ staggerChildren: 0.03 }} className="title-text">{textsArray[3].map((char, index) => (
                  <motion.span key={index} variants={animationValues}>{char}</motion.span>
                ))}</motion.p>
              }&nbsp;
              {cursor3Start && <motion.div animate="blinking" variants={cursorAnimation} onAnimationStart={() => setTimeout(() => setAnimation3Start(true), 100)} className="cursor">&nbsp;</motion.div>}
            </div>
          </motion.div>
          
        </motion.section>
        <motion.main style={{ y: sectionScroll }}>
          <motion.div style={{ y: nextSectionScroll }} className="main-parallax">
            <motion.div onViewportEnter={() => setProjectsInView(false)} className="detector-2"></motion.div>
              <div className="topcontainer">
                <motion.div className="foundation-version-headings">
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="foundation-heading">THE FOUNDATION:</motion.h2>
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >THE FOUNDATION: -</h2></motion.div>
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="icons-mern-heading">SPECIALIZING IN:</motion.h2>
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover-2"><h2 aria-hidden="true" >SPECIALIZING IN: -</h2></motion.div>
                </motion.div>
                <motion.div initial="hideIcons" animate={iconFoundationInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1}} className="icons-foundation-version">
                  <div className="icons-foundation">
                    {
                      iconsFoundation.map((icon, index) => (
                        <motion.div key={index} ref={index === 0 ? iconFoundationRef : undefined} variants={iconAnimation} className="icon-container">
                          <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                        </motion.div>
                      ))
                    }
                  </div>
                  <div>
                    <div className="icons-mern">
                      {iconsMERN.map((icon, index) => (
                        <motion.div key={index} variants={iconAnimation} className="icon-container">
                          <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                        </motion.div>
                      ))}
                    </div>
                    <motion.h2 ref={mernRef} initial="hideMern" animate={mernInView ? "showMern" : "hideMern"} transition={{staggerChildren: 0.3}} className="m-e-r-n">
                      <motion.span variants={mernAnimate} className="span1">M </motion.span> 
                      <motion.span variants={mernAnimate} className="span2">E </motion.span> 
                      <motion.span variants={mernAnimate} className="span3">R </motion.span> 
                      <motion.span variants={mernAnimate} className="span4">N </motion.span>
                    </motion.h2>
                  </div>
                </motion.div>
                <div className="d-flex icons-design-extras-heading">
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="design-heading">DESIGN TOOLS:</motion.h2>
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >DESIGN TOOLS: -</h2></motion.div>
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="extras-heading">EXTRAS:</motion.h2>
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover-2"><h2 aria-hidden="true" >EXTRAS: -</h2></motion.div>
                </div>
                <motion.div ref={iconDesignRef} initial="hideIcons" animate={iconDesignInView ? "showIcons" : "hideIcons"} transition={{ staggerChildren: 0.1 }} className="icons-design-extras">
                  <div className="icons-design">
                    {
                      iconsDesign.map((icon, index) => (
                        <motion.div key={index} variants={iconAnimation} className="icon-container">
                          <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                        </motion.div>
                      ))
                    }
                  </div>
                  <div className="icons-extras">
                    {
                      iconsExtras.map((icon, index) => (
                        <motion.div key={index} variants={iconAnimation} className="icon-container">
                          <img src={`/icons/${icon[0]}.svg`} alt={`${icon[1]} logo svg`} />
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
                <div className="position-relative">
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1}} whileInView={{ scaleX: 0}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >VERSION CONTROL: -</h2></motion.div>
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="version-heading">VERSION CONTROL:</motion.h2>
                </div>
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
                <motion.div ref={cvRef} initial="hideIcons" animate={cvInView ? "showIcons" : "hideIcons"}className="cv position-relative d-flex">
                  <motion.div initial={{ scaleY: 1.2, scaleX: 1, y: "-50%"}} whileInView={{ scaleX: 0, y: "-50%"}} transition={{ type: "spring", duration: 1 }} viewport={{ once: true, amount: 1 }} className="heading-cover"><h2 aria-hidden="true" >CURRICULUM VIT</h2></motion.div>
                  <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", duration: 0.25 }} viewport={{ once: true, amount: 0 }} className="version-heading">CURRICULUM VITAE:</motion.h2>
                  <motion.div variants={iconAnimation} className="icon-container">
                    <a href="" target="_about">
                      <img src="https://cdn-icons-png.flaticon.com/512/7471/7471457.png?uid=R104716327&ga=GA1.1.1237044025.1704978951&" alt="Resume icon" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
          </motion.div>
        </motion.main>
      </div>
      <motion.div variants={showcaseAnimate} transition={{duration: 0.5}} initial="relativeContainer" animate={projectsInView ? "fixedContainer" : contactInView ? "absoluteContainer" : "staticContainer"} className="project-showcase-container">
      <iframe width="100%" height="100%" src={videoURLs[videoURLNo]} allowFullScreen title="Mapex Demo"></iframe>
      </motion.div>
      <motion.section style={{y: sectionScroll}} className="projects">
      <motion.img initial={{ x: 70, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", duration: 0.5 }} viewport={{ once: true, amount: 0.6 }} className="profile-picture" src="/profile-picture.jpg" alt="Profile picture" />
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
      <motion.section style={{y: sectionScroll}} ref={contactRef} 
      onViewportEnter={() => {
        setProjectsInView(false)
        setContactInView(true)
      }} 
      onViewportLeave={() => {
        setContactInView(false)
      }} className="contact" id="contact">
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
