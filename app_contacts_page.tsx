import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12">
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
          <h2 className="text-
2xl font-bold mb-4">Отправьте нам сообщение</h2>
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

