type LogoVariant = 'navbar' | 'hero' | 'footer'

interface LogoProps {
  variant?: LogoVariant
}

export default function Logo({ variant = 'navbar' }: LogoProps) {
  return (
    <div className={`logo ${variant}`}>
      <svg className="logo-icon" viewBox="0 0 160 160" role="img" aria-label="Nexora logosu">
        <defs>
          <linearGradient id={`nexoraGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3fd4ff" />
            <stop offset="55%" stopColor="#5f7cff" />
            <stop offset="100%" stopColor="#a56dff" />
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="128" height="128" rx="34" fill="rgba(255,255,255,0.06)" stroke={`url(#nexoraGradient-${variant})`} strokeWidth="3.2" />
        <path d="M54 46V114" stroke={`url(#nexoraGradient-${variant})`} strokeWidth="10" strokeLinecap="round" />
        <path d="M54 114L106 46" stroke={`url(#nexoraGradient-${variant})`} strokeWidth="10" strokeLinecap="round" />
        <path d="M106 46V114" stroke={`url(#nexoraGradient-${variant})`} strokeWidth="10" strokeLinecap="round" />
        <path d="M58 46V108" stroke="rgba(255,255,255,0.82)" strokeWidth="2.7" strokeLinecap="round" />
        <path d="M58 108L106 46" stroke="rgba(255,255,255,0.82)" strokeWidth="2.7" strokeLinecap="round" />
        <path d="M106 46V108" stroke="rgba(255,255,255,0.82)" strokeWidth="2.7" strokeLinecap="round" />
      </svg>
      <div className="logo-text-block">
        <span className="logo-name">NEXORA</span>
        <span className="logo-subtitle">Yayıncılık • Tasarım • Programlama A.Ş.</span>
      </div>
    </div>
  )
}