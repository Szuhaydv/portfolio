import { useEffect, useRef } from 'react';
import './header.css'

const Header = () => {
  const hamburgerNav = useRef<any>(null)
  const handleHamburgerClick = () => {
    if (hamburgerNav.current != null) {
      hamburgerNav.current.classList.toggle("showHamburgerMenu")
    }
  }
  let vhHeight: any = null
  let scrollToSkills: any = null
  let scrollToProjects: any = null
  let scrollToContact: any = null

  useEffect(() => {
    vhHeight= document.querySelector('header')?.offsetHeight
    scrollToSkills = vhHeight * 4.52
    scrollToProjects = scrollToSkills * 3.8
    scrollToContact = scrollToSkills * 9.4
  })
  
  
  return (
    <header>
      <nav className="header-links">
        <a href="#home">
          <h2>Home</h2>
        </a>
        <a href='#skills'onClick={() => window.scrollTo(0,scrollToSkills)}>
          <h2>Skills</h2>
        </a>
        <a onClick={() => window.scrollTo(0, scrollToProjects)}>
          <h2>Projects</h2>
        </a>
        <a onClick={() => window.scrollTo(0, scrollToContact)}>
          <h2>Contact</h2>
        </a>
      </nav>
      <div className="hamburger" onClick={() => handleHamburgerClick()}>
        <i className="bi bi-list h1"></i>
      </div>
      <nav ref={hamburgerNav} className='hamburger-nav'>
        <a onClick={() => handleHamburgerClick()} href="#home">
          <h2>Home</h2>
        </a>
        <a onClick={() => {
          handleHamburgerClick()
          window.scrollTo({ top: scrollToSkills })
        }}>
          <h2>Skills</h2>
        </a>
        <a onClick={() => {
          handleHamburgerClick()
          window.scrollTo({ top: scrollToProjects })
          }}>
          <h2>Projects</h2>
        </a>
        <a onClick={() => {
          handleHamburgerClick()
          window.scrollTo({ top: scrollToContact })
          }}>
          <h2>Contact</h2>
        </a>
      </nav>
    </header>
  )
}

export default Header