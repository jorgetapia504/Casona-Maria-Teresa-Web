"use client"
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import axios from "axios";
import { Spinner2 } from "./Spinner2";

export default function Cotizar ({ config }: { config?: string }) {

  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    typeEvent: '',
    dateEvent: '',
    quantity: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (success) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">¡Cotización enviada! 🎉</h2>
        <p>Te contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={async (e: any) => {
      e.preventDefault()
      if (!client.email || !client.firstName || !client.typeEvent) {
        alert("Completa los campos obligatorios");
        return;
      }
      if (loading) return
      try {
        setLoading(true)
        await axios.post('/api/quote', client)
        setSuccess(true)
      } catch (error: any) {
        alert(error.response?.data?.error || "Error al enviar")
      } finally {
        setLoading(false);
      }
    }} className={`${config} flex flex-col gap-4 w-full max-w-4xl m-auto`}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p>Fecha del evento</p>
          <Input type="date" change={(e: any) => setClient({ ...client, dateEvent: e.target.value })} value={client.dateEvent} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tipo de evento</p>
          <Select change={(e: any) => setClient({ ...client, typeEvent: e.target.value })} value={client.typeEvent}>
            <option>Matrimonio</option>
            <option>Cumpleaños</option>
            <option>Bautizo</option>
            <option>Evento corporativo</option>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Número de asistentes</p>
        <Input type="number" change={(e: any) => setClient({ ...client, quantity: e.target.value })} value={client.quantity} placeholder="Número de asistentes" />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-2">
          <p>Nombre</p>
          <Input change={(e: any) => setClient({ ...client, firstName: e.target.value })} value={client.firstName} placeholder="Nombre" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Apellido</p>
          <Input change={(e: any) => setClient({ ...client, lastName: e.target.value })} value={client.lastName} placeholder="Apellido" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Email</p>
        <Input change={(e: any) => setClient({ ...client, email: e.target.value })} value={client.email} placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2">
        <p>Teléfono</p>
        <div className="flex gap-2">
          <p className="my-auto">+56</p>
          <Input change={(e: any) => setClient({ ...client, phone: e.target.value })} value={client.phone} placeholder="Teléfono" config="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Mensaje adicional</p>
        <Textarea change={(e: any) => setClient({ ...client, message: e.target.value })} value={client.message} placeholder="Mensaje" />
      </div>
      <Button type='submit' config="w-full min-h-10">{loading ? <Spinner2 /> : 'Enviar'}</Button>
    </form>
  )
}