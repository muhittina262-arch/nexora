import Logo from './Logo'
import { navItems } from '../data/siteData'

interface NavbarProps {
  menuOpen: boolean
  closeMenu: () => void
  toggleMenu: () => void
}

export default function Navbar({ menuOpen, closeMenu, toggleMenu }: NavbarProps) {
  return (
    <header className="topbar reveal">
      <a className="brand" href="#hero" onClick={closeMenu}>
        <Logo variant="navbar" />
      </a>

      <button
        type="button"
        className="mobile-toggle"
        aria-label="Menüyü aç/kapat"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Ana menü">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
