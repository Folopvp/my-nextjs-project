'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-12">
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

