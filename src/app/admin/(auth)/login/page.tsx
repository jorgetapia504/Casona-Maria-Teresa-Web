import { adminExists } from "@/lib/users"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {

  const exists = await adminExists()

  const session = await getServerSession(authOptions)

  if(session){
    redirect("/admin/inicio")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">

      <div className="w-full max-w-sm">

        {exists ? <LoginForm/> : <RegisterForm/>}

      </div>

    </div>
  )
}