import Logo from './Logo'
import { companyName } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrap">
        <Logo variant="footer" />
      </div>
      <p>© 2026 {companyName}</p>
      <p className="footer-domain">nexora.com.tr</p>
    </footer>
  )
}
