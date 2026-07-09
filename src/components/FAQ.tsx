import { faqs } from '../data/siteData'

export default function FAQ() {
  return (
    <section id="faq" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Sıkça Sorulan Sorular</p>
        <h2>Proje süreci ve hizmetler hakkında sık sorulan sorular.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
