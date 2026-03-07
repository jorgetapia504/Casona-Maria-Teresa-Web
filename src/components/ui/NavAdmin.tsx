"use client"
import { signOut } from "next-auth/react"
import Button from "./Button"
import { useState } from "react"
import { Spinner2 } from "./Spinner2"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from 'next/image'

export default function NavAdmin () {

  const [loading, setLoading] = useState(false)

  const pathname = usePathname()

  return (
    <div className="w-60 h-full border-r border-neutral-200 p-2 flex flex-col justify-between">
      <nav className="flex flex-col gap-1">
        <Link href='/admin/incio'><Image src='/Logo.png' className="w-30 mb-2" alt="Logo Casona Maria Teresa" width={500} height={300} /></Link>
        <Link href='/admin/inicio' className={`${pathname === '/admin/inicio' ? 'bg-black text-white' : 'hover:bg-neutral-100 transition-colors duration-200'} p-2 rounded-md`}>Inicio</Link>
        <Link href='/admin/cotizaciones' className={`${pathname === '/admin/cotizaciones' ? 'bg-black text-white' : 'hover:bg-neutral-100 transition-colors duration-200'} p-2 rounded-md`}>Cotizaciones</Link>
        <Link href='/admin/clientes' className={`${pathname === '/admin/clientes' ? 'bg-black text-white' : 'hover:bg-neutral-100 transition-colors duration-200'} p-2 rounded-md`}>Clientes</Link>
        <Link href='/admin/estadisticas' className={`${pathname === '/admin/estadisticas' ? 'bg-black text-white' : 'hover:bg-neutral-100 transition-colors duration-200'} p-2 rounded-md`}>Estadisticas</Link>
      </nav>
      <Button config="w-full min-h-10" click={async () => {
        setLoading(true)
        await signOut()
      }}>{loading ? <Spinner2 /> : 'Cerrar sesión'}</Button>
    </div>
  )
}