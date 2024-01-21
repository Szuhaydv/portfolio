import './header.css'

const Header = () => {
  return (
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
  )
}

export default Header