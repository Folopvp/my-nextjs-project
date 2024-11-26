import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-600 text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex flex-wrap justify-between items-center">
          <li><Link href="/" className="text-2xl font-bold">Массаж Светланы</Link></li>
          <li><Link href="/biography">Биография</Link></li>
          <li><Link href="/services">Услуги</Link></li>
          <li><Link href="/reviews">Отзывы</Link></li>
          <li><Link href="/gallery">Галерея</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
          <li><Link href="/calendar">Календарь</Link></li>
        </ul>
      </nav>
    </header>
  )
}

