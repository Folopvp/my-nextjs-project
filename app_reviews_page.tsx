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
    <div className="container mx-auto px-4 py-12">
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

