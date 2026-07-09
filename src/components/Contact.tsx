import { contactDetails } from '../data/siteData'

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="contact-card">
        <div>
          <p className="eyebrow">İletişim</p>
          <h2>Bir sonraki projenizi birlikte hayal edelim.</h2>
          <p>
            Fikirlerinizi paylaşın; güçlü, modern ve etkili bir dijital varlık inşa etmek için birlikte çalışalım.
          </p>
          <div className="contact-details">
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Hattı
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Adınız Soyadınız" aria-label="Adınız Soyadınız" />
          <input type="email" placeholder="E-posta adresiniz" aria-label="E-posta adresiniz" />
          <textarea rows={4} placeholder="Projeniz hakkında kısa bilgi" aria-label="Projeniz hakkında kısa bilgi" />
          <button type="submit">Mesaj Gönder</button>
        </form>
      </div>
    </section>
  )
}
