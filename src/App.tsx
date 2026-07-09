import './App.css'

const services = [
  'Web Tasarım',
  'Yazılım Geliştirme',
  'Yapay Zekâ Çözümleri',
  'Marka Kimliği',
  'Dijital Yayıncılık',
  'Otomasyon Sistemleri',
]

const stats = [
  ['50+', 'Proje'],
  ['20+', 'Marka'],
  ['6+', 'Hizmet Alanı'],
  ['100%', 'Müşteri Odaklılık'],
]

function App() {
  return (
    <main className="site">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <nav className="navbar">
        <div className="brand">
          <img src="/logo.png" alt="Nexora Logo" />
          <div>
            <strong>NEXORA</strong>
            <span>Yayıncılık • Tasarım • Programlama A.Ş.</span>
          </div>
        </div>

        <div className="navlinks">
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#projects">Projeler</a>
          <a href="#contact">İletişim</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="badge">PREMIUM DIGITAL COMPANY</p>
          <h1>Dijital Dünyanın Geleceğini İnşa Ediyoruz.</h1>
          <p>
            Nexora; yazılım, yapay zekâ, web çözümleri, yayıncılık ve dijital tasarım alanında
            kurumsal markalar için premium çözümler üretir.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn primary">Teklif Al</a>
            <a href="https://wa.me/905346858364" target="_blank" className="btn secondary">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="heroCard">
          <img src="/logo.png" alt="Nexora" />
          <h3>Nexora Studio</h3>
          <p>Design • Product • Engineering</p>
        </div>
      </section>

      <section id="services" className="section">
        <p className="badge">HİZMETLER</p>
        <h2>Markanı dijitalde güçlü gösterecek çözümler.</h2>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service}>
              <span>✦</span>
              <h3>{service}</h3>
              <p>Modern, hızlı, güvenilir ve kurumsal kaliteye uygun dijital üretim.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="badge">HAKKIMIZDA</p>
          <h2>Yaratıcı tasarım ile güçlü teknolojiyi birleştiriyoruz.</h2>
        </div>
        <p>
          Nexora Yayıncılık Tasarım ve Programlama A.Ş., markaların dijital dünyada daha güçlü,
          güvenilir ve profesyonel görünmesi için uçtan uca çözümler geliştirir.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="badge">PROJELER</p>
        <h2>Kurumsal markalar için premium dijital işler.</h2>

        <div className="projectBox">
          <div>
            <h3>Web • Yazılım • Tasarım • Yayıncılık</h3>
            <p>
              Nexora, markaların dijital kimliğini modern teknoloji ve estetik tasarım ile büyütür.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="badge">İLETİŞİM</p>
          <h2>Projen için bizimle iletişime geç.</h2>
          <p><b>Telefon / WhatsApp:</b> 0534 685 83 64</p>
          <p><b>E-posta:</b> info@nexora.com.tr</p>
          <p><b>Konum:</b> Türkiye</p>
        </div>

        <form>
          <input placeholder="Ad Soyad" />
          <input placeholder="E-posta" />
          <textarea placeholder="Mesajınız" />
          <button type="button">Mesaj Gönder</button>
        </form>
      </section>

      <footer>
        <img src="/logo.png" alt="Nexora" />
        <p>Nexora Yayıncılık Tasarım ve Programlama A.Ş.</p>
        <span>© 2026 Tüm hakları saklıdır.</span>
      </footer>

      <a className="whatsapp" href="https://wa.me/905346858364" target="_blank">
        WhatsApp
      </a>
    </main>
  )
}

export default App