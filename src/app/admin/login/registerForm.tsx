"use client"

import { useState } from "react"
import axios from "axios"

export default function RegisterForm(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const submit = async (e:any)=>{
    e.preventDefault()

    await axios.post("/api/admin/register",{
      email,
      password
    })

    window.location.reload()
  }

  return(

    <form onSubmit={submit} className="flex flex-col gap-3">

      <h1 className="text-2xl font-bold">
        Crear administrador
      </h1>

      <input
        placeholder="Correo"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        className="border p-2"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        className="border p-2"
      />

      <button className="bg-black text-white p-2">
        Crear cuenta
      </button>

    </form>

  )
}