import '../styles/Header.css';

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <h2>Mon portfolio</h2>
      <nav className="nav">
        <a onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projets</a>
        <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
