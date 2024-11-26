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
    <div className="container mx-auto px-4 py-12">
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

