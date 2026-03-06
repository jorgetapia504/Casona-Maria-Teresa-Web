"use client"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { Spinner2 } from "@/components/ui/Spinner2"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginForm(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async (e:any)=>{
    e.preventDefault()

    if(!email || !password){
      setError("Debes ingresar correo y contraseña")
      return
    }

    setLoading(true)

    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res?.error){
      setError("Correo o contraseña incorrectos")
      setLoading(false)
    }else{
      window.location.href = "/admin/inicio"
    }
  }

  return(

    <form onSubmit={submit} className="flex flex-col gap-3">

      <h1 className="text-2xl font-semibold">
        Panel administrativo
      </h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded">
          {error}
        </div>
      )}

      <Input
        placeholder="Correo"
        value={email}
        change={(e:any)=>setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        change={(e:any)=>setPassword(e.target.value)}
      />

      <Button type='submit' config="w-full min-h-10">
        {loading ? <Spinner2 /> : 'Entrar'}
      </Button>

    </form>

  )
}