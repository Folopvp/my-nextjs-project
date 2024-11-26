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
    description: "Разработан для помощи спортсменам в подготовке их тел к оптимальной производительности, восстановлению после важных соревнований или эффективной тренировки.",
    price: "3200 руб / час"
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
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

