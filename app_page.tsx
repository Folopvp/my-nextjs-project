import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
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

