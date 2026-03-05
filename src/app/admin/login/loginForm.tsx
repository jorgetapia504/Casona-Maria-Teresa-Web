"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginForm(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const submit = async (e:any)=>{
    e.preventDefault()

    await signIn("credentials",{
      email,
      password,
      callbackUrl:"/admin/dashboard"
    })
  }

  return(

    <form onSubmit={submit} className="flex flex-col gap-3">

      <h1 className="text-2xl font-bold">
        Panel administrador
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
        Entrar
      </button>

    </form>

  )
}