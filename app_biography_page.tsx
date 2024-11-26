import Image from 'next/image'

export default function Biography() {
  return (
    <div className="container mx-auto px-4 py-12">
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

