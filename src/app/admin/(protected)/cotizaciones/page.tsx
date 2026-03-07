"use client"

import { Spinner } from "@/components/ui/Spinner"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Cotizaciones () {

  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  const getQuotes = async () => {
    setLoading(true)
    const res = await axios.get('/api/quote')
    setQuotes(res.data)
    setLoading(false)
  }

  useEffect(() => {
    getQuotes()
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-CL", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  return (
    <main className="bg-white text-black p-4 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-medium">Cotizaciones</h1>
      {
        loading
          ? <div className="h-100 flex w-full">
                <div className="w-fit h-fit m-auto">
                    <Spinner />
                </div>
             </div>
          : (
<table>
        <thead className="bg-gray-50 border-b border-neutral-200">
            <tr className="text-left text-gray-600">
              <th className="p-4 font-medium">Nombre</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Teléfono</th>
              <th className="p-4 font-medium">Tipo Evento</th>
              <th className="p-4 font-medium">Fecha Evento</th>
              <th className="p-4 font-medium">Personas</th>
              <th className="p-4 font-medium">Estado</th>
              <th className="p-4 font-medium">Creado</th>
              <th className="p-4 font-medium"></th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((q: any) => (
              <tr
                key={q._id}
                className="border-b border-neutral-200 last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium text-gray-900">
                  {q.firstName} {q.lastName}
                </td>

                <td className="p-4 text-gray-600">
                  {q.email}
                </td>

                <td className="p-4 text-gray-600">
                  {q.phone}
                </td>

                <td className="p-4 text-gray-600">
                  {q.typeEvent}
                </td>

                <td className="p-4 text-gray-600">
                  {formatDate(q.dateEvent)}
                </td>

                <td className="p-4 text-gray-600">
                  {q.quantity}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                    {q.state}
                  </span>
                </td>

                <td className="p-4 text-gray-500">
                  {formatDate(q.createdAt)}
                </td>

                <td className="p-4">
                  <Link href={`/admin/cotizaciones/${q._id}`} className="text-sm px-3 py-1 rounded-md bg-black text-white hover:opacity-80">
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
          )
      }
    </main>
  )
}