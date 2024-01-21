import { useRef } from 'react';
import './header.css'

const Header = () => {
  const hamburgerNav = useRef<any>(null)
  const handleHamburgerClick = () => {
    if (hamburgerNav.current != null) {
      hamburgerNav.current.classList.toggle("showHamburgerMenu")
    }
  }
  return (
    <header>
      <nav className="header-links">
        <a href="#home">
          <h2>Home</h2>
        </a>
        <a href="#skills">
          <h2>Skills</h2>
        </a>
        <a href="#projects">
          <h2>Projects</h2>
        </a>
        <a href="#contact">
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
        <a onClick={() => handleHamburgerClick()} href="#skills">
          <h2>Skills</h2>
        </a>
        <a onClick={() => handleHamburgerClick()} href="#projects">
          <h2>Projects</h2>
        </a>
        <a onClick={() => handleHamburgerClick()} href="#contact">
          <h2>Contact</h2>
        </a>
      </nav>
    </header>
  )
}

export default Header