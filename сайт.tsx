// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Массажные услуги Светланы',
  description: 'Профессиональные массажные услуги от Светланы',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// app/components/header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-600 text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-between items-center">
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

// app/components/footer.tsx
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Массаж Светланы. Все права защищены.</p>
          <div className="flex space-x-4">
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Twitter /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Добро пожаловать в мир массажа Светланы</h1>
          <p className="mb-6 text-lg">Погрузитесь в атмосферу спокойствия и релаксации. Профессиональный массаж для вашего здоровья и комфорта.</p>
          <Button asChild className="bg-purple-500 hover:bg-purple-600">
            <Link href="/services">Записаться на массаж</Link>
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <Image 
            src="/8455dcb2-d635-4bdb-9352-abf755abc5d3.jpg" 
            alt="Профессиональный массаж для вашего здоровья" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </div>
  )
}

// app/biography/page.tsx
import Image from 'next/image'

export default function Biography() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">О Светлане</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image 
            src="/photo_2024-11-26_23-29-32.jpg" 
            alt="Светлана на фоне красивого водопада" 
            width={300} 
            height={400} 
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <p className="mb-4">
            Светлана - сертифицированный массажист с более чем 10-летним опытом работы в этой области. 
            Ее путь в массажной терапии начался, когда она лично открыла для себя целебные силы массажа...
          </p>
          <p className="mb-4">
            Светлана не только профессиональный массажист, но и заядлая путешественница. На фото вы можете увидеть ее на фоне живописного водопада во время одного из ее путешествий. Эти поездки вдохновляют ее на новые техники массажа и помогают поддерживать гармонию души и тела.
          </p>
          <h2 className="text-2xl font-bold mb-2">Образование и сертификаты</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Сертифицированный массажист - Шведский институт, Нью-Йорк</li>
            <li>Продвинутый курс глубокотканного массажа - Институт исцеляющих искусств</li>
            <li>Сертификация по спортивному массажу - Американская ассоциация массажной терапии</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Достижения</h2>
          <ul className="list-disc list-inside">
            <li>Упоминание в журнале "Massage Today"</li>
            <li>Работа с профессиональными спортсменами</li>
            <li>Более 1000 довольных клиентов</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// app/services/page.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    title: "Шведский массаж",
    description: "Мягкая форма массажа, использующая длинные поглаживания, разминания, глубокие круговые движения, вибрацию и постукивания.",
    price: "3000 руб / час"
  },
  {
    title: "Глубокотканный массаж",
    description: "Похож на шведский массаж, но с более глубоким давлением для воздействия на внутренние слои мышц и соединительных тканей.",
    price: "3500 руб / час"
  },
  {
    title: "Спортивный массаж",
    description: "Разработан для помощи спортсменам в подготовке их тел к оптимальной производительности, восстановлению после важных соревнований или эффективной тренировке.",
    price: "3200 руб / час"
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">Наши услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-white">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <p className="font-bold mt-2">{service.price}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

// app/reviews/page.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Иван Петров",
    rating: 5,
    comment: "Массаж Светланы был невероятно расслабляющим. Я чувствовал себя как новый человек после сеанса!"
  },
  {
    name: "Анна Сидорова",
    rating: 5,
    comment: "Глубокотканный массаж действительно помог с моей болью в спине. Очень рекомендую!"
  },
  {
    name: "Михаил Иванов",
    rating: 4,
    comment: "Очень профессиональный сервис. Обязательно приду снова!"
  },
]

export default function Reviews() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">Отзывы клиентов</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-white">
            <CardHeader>
              <CardTitle>{review.name}</CardTitle>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <CardDescription>{review.comment}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

// app/gallery/page.tsx
import Image from 'next/image'

const images = [
  { 
    src: "/37cbc0be-9bfb-45e3-a8b3-80b363aef502.jpg", 
    alt: "Спортивный массаж для атлетов",
    description: "Специализированный массаж для спортсменов"
  },
  { 
    src: "/45e8f312-5315-4ee9-860b-df46694cf16f.jpg", 
    alt: "Расслабляющий массаж",
    description: "Релаксационный массаж в уютной атмосфере" 
  },
  { 
    src: "/514faf8f-bb13-4d14-a13f-66553c8b450a.jpg", 
    alt: "Терапевтический массаж",
    description: "Профессиональный лечебный массаж" 
  },
  { 
    src: "/8455dcb2-d635-4bdb-9352-abf755abc5d3.jpg", 
    alt: "Массаж для расслабления",
    description: "Массаж для полного расслабления тела и разума" 
  }
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">Галерея</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="space-y-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-gray-600">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// app/contacts/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">Свяжитесь с нами</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Наши контакты</h2>
          <p className="mb-2">Телефон: +7 (123) 456-78-90</p>
          <p className="mb-2">Email: svetlana@massage.com</p>
          <p className="mb-4">Адрес: ул. Массажная, д. 123, г. Москва, 123456</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887659793983!2d37.61844661590764!3d55.75639998055643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Kremlin!5e0!3m2!1sen!2sru!4v1629814257725!5m2!1sen!2sru" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Отправьте нам сообщение</h2>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input type="email" placeholder="Ваш email" />
            <Input placeholder="Тема" />
            <Textarea placeholder="Ваше сообщение" />
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600">Отправить сообщение</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// app/calendar/page.tsx
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-12 bg-purple-100">
      <h1 className="text-3xl font-bold mb-6">Забронировать сеанс</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border bg-white"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Доступное время</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-white">9:00</Button>
            <Button variant="outline" className="bg-white">10:00</Button>
            <Button variant="outline" className="bg-white">11:00</Button>
            <Button variant="outline" className="bg-white">13:00</Button>
            <Button variant="outline" className="bg-white">14:00</Button>
            <Button variant="outline" className="bg-white">15:00</Button>
          </div>
          <Button className="mt-6 w-full bg-purple-500 hover:bg-purple-600">Забронировать сеанс</Button>
        </div>
      </div>
    </div>
  )
}