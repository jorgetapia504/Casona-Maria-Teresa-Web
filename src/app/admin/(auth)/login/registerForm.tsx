"use client"

import { useState } from "react"
import axios from "axios"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { Spinner2 } from "@/components/ui/Spinner2"

export default function RegisterForm(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState("")

  const submit = async (e:any)=>{
    e.preventDefault()

    if (!email || !password) {
      setError("Debes ingresar correo y contraseña")
      return
    }

    setLoading(true)

    await axios.post("/api/admin/register",{
      email,
      password
    })

    window.location.reload()
  }

  return(

    <form onSubmit={submit} className="flex flex-col gap-3">

      <h1 className="text-2xl font-semibold">
        Crear administrador
      </h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded">
          {error}
        </div>
      )}

      <Input placeholder="Correo" value={email} change={(e: any)=>setEmail(e.target.value)} />

      <Input type="password" placeholder="Contraseña" value={password} change={(e: any)=>setPassword(e.target.value)} />

      <Button type='submit'>
        {loading ? <Spinner2 /> : 'Crear cuenta'}
      </Button>

    </form>

  )
}