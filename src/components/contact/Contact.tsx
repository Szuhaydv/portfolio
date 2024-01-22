import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = (props: any) => {
  const setContactInView = props.value.setContactInView
  const characterScroll = props.value.characterScroll
  const setProjectsInView = props.value.setProjectsInView

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    if (email === "" || firstName === "" || lastName === "") {
      alert('Please fill out the form!')
      return
    }

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
  const frameRef = useRef(null)
  const contactRef = useRef(null)
  
  
  const [frameInView, setFrameInView] = useState(false)
  return (
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
  )
}

export default Contact