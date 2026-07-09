export interface NavItem {
  label: string
  href: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface PortfolioItem {
  name: string
  category: string
  summary: string
}

export interface TestimonialItem {
  name: string
  role: string
  quote: string
}

export interface StatItem {
  target: number
  suffix: string
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ContactDetails {
  phone: string
  email: string
  whatsapp: string
}

export const companyName = 'Nexora Yayıncılık Tasarım ve Programlama A.Ş.'
export const tagline = 'Yayıncılık • Tasarım • Programlama'

export const navItems: NavItem[] = [
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Neden Nexora?', href: '#why' },
  { label: 'Portföy', href: '#portfolio' },
  { label: 'Yorumlar', href: '#testimonials' },
  { label: 'SSS', href: '#faq' },
  { label: 'İletişim', href: '#contact' },
]

export const heroContent = {
  eyebrow: tagline,
  title: 'NEXORA ile dijital geleceği şekillendiriyoruz.',
  description:
    'Nexora Yayıncılık Tasarım ve Programlama A.Ş. olarak, markaların dijital dünyada güçlü, estetik ve stratejik bir varlık kurmasına yardımcı oluyoruz.',
  primaryAction: { label: 'Hizmetlerimizi İncele', href: '#services' },
  secondaryAction: { label: 'İletişime Geç', href: '#contact' },
  highlights: ['Premium kurumsal tasarım', 'Yapay zekâ destekli çözüm', 'Hızlı ve güvenilir teslimat'],
}

export const aboutContent = {
  title: 'NEXORA, yaratıcı düşünce ile teknolojinin güçlü birleşimidir.',
  body:
    'Nexora Yayıncılık Tasarım ve Programlama A.Ş. olarak, markaların dijital dünyada güçlü bir varlık oluşturmasına yardımcı oluyoruz. Tasarım, yayıncılık ve yazılım alanlarında stratejik çözümler üretirken, her proje için estetik, işlevsellik ve performansın dengede olmasını hedefliyoruz.',
  accent:
    'Kurumsal kimlikten dijital deneyimlere kadar tüm temas noktalarında tutarlı, modern ve etkileyici bir yapı kuruyoruz.',
}

export const services: ServiceItem[] = [
  {
    icon: 'web',
    title: 'Kurumsal Web Tasarım',
    description: 'Yüksek performanslı, premium görünümlü ve kullanıcı odaklı dijital deneyimler sunuyoruz.',
  },
  {
    icon: 'software',
    title: 'Özel Yazılım Geliştirme',
    description: 'İş süreçlerinizi hızlandıran, güvenli ve ölçeklenebilir yazılım çözümleri oluşturuyoruz.',
  },
  {
    icon: 'brand',
    title: 'Marka ve Logo Tasarımı',
    description: 'Sektörünüze uygun, güçlü ve akılda kalıcı marka kimlikleri geliştiriyoruz.',
  },
  {
    icon: 'publishing',
    title: 'Dijital Yayıncılık',
    description: 'Yayın projelerinizi modern içerik stratejileri ve etkileyici dijital dağıtım ile öne çıkarıyoruz.',
  },
  {
    icon: 'social',
    title: 'Sosyal Medya Yönetimi',
    description: 'Hedef kitlenize uygun içerik planlaması, yönetimi ve büyüme stratejileri sunuyoruz.',
  },
  {
    icon: 'ai',
    title: 'Yapay Zekâ Çözümleri',
    description: 'Akıllı otomasyon, veri analizi ve yapay zekâ destekli iş çözümleri geliştiriyoruz.',
  },
]

export const reasons = [
  'Stratejik düşünce ile projeleri ileriye taşıyoruz.',
  'Teknik kalite, estetik derinlik ve hızlı teslimat sunuyoruz.',
  'Her marka için benzersiz, ölçülebilir ve sürdürülebilir çözümler üretiyoruz.',
]

export const portfolioItems: PortfolioItem[] = [
  {
    name: 'Astra Digital',
    category: 'Kurumsal web sitesi',
    summary: 'Dijital kimliğini yeniden tasarlayıp, yüksek dönüşüm odaklı bir kullanıcı deneyimi sunduk.',
  },
  {
    name: 'Nova Studios',
    category: 'Marka ve yayın sistemi',
    summary: 'Logo, içerik yapısı ve yayın akışı ile marka algısını güçlendirdik.',
  },
  {
    name: 'BlueCore Yazılım',
    category: 'Yapay zeka entegrasyonu',
    summary: 'İş akış otomasyonu ve yapay zekâ destekli raporlama alanında çözüm geliştirdik.',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Elif Y.',
    role: 'Kurucu Ortak, Astra Digital',
    quote: 'Nexora ile marka deneyimimizi tamamen yeniden tasarladık. Sonuç, işimizin dijital yüzünü çok daha güçlü hale getirdi.',
  },
  {
    name: 'Mert K.',
    role: 'CEO, Nova Studios',
    quote: 'Profesyonel yaklaşımı, estetik kalite ve hızlı iletişim sayesinde projelerimizi çok rahat teslim ettik.',
  },
  {
    name: 'Deniz A.',
    role: 'Ürün Müdürü, BlueCore',
    quote: 'Yapay zekâ çözümlerindeki yaklaşımı çok yenilikçi. İş akışlarımızı ciddi ölçüde hızlandırdılar.',
  },
]

export const stats: StatItem[] = [
  { target: 50, suffix: '+', label: 'Proje' },
  { target: 20, suffix: '+', label: 'Marka' },
  { target: 5, suffix: '+', label: 'Hizmet Alanı' },
  { target: 100, suffix: '%', label: 'Müşteri Odaklılık' },
]

export const faqs: FaqItem[] = [
  {
    question: 'Nexora hangi alanlarda hizmet veriyor?',
    answer: 'Yayıncılık, tasarım, web geliştirme, yazılım, marka kimliği ve yapay zekâ çözümleri alanlarında hizmet veriyoruz.',
  },
  {
    question: 'Projeler ne kadar sürede teslim ediliyor?',
    answer: 'Proje kapsamına bağlı olarak ilk aşama planlamasıyla birlikte net bir zaman çizelgesi hazırlıyoruz.',
  },
  {
    question: 'Küçük ve orta ölçekli markalarla çalışıyor musunuz?',
    answer: 'Evet. Hem büyüme aşamasındaki markalar hem de kurumsal firmalarla etkili iş birlikleri kuruyoruz.',
  },
]

export const contactDetails: ContactDetails = {
  phone: '+90 534 685 83 64',
  email: 'muhittina262@icloud.com',
  whatsapp: 'https://wa.me/905346858364?text=Merhaba%20Nexora%20ile%20ilgileniyorum.',
}
