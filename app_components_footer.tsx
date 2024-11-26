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

