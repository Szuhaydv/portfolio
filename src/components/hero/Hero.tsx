import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import './hero.css'

const Hero = (props: any) => {
  const opacity2 = props.value.opacity2
  const characterScroll = props.value.characterScroll

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
  const textsArray = ["Hello,".split(""), "my name is David!".split(""), "I'm a Web Developer".split(""), "Nice to meet you!".split("")]

  useEffect(() => {
    if (!helloCursor && cursorRef.current != null) {
      cursorRef.current.style.display = "none"
    }
  }, [helloCursor])

  return (
    <section className="hero">
          <img className="bg-background" src="/Mountain.svg" alt="Mountains in the background" />
          <motion.div className="bg-dock" style={{ bottom: characterScroll }}>
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
          
        </section>
  )
}

export default Hero