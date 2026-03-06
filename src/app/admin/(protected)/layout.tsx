import NavAdmin from "@/components/ui/NavAdmin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions)
  
    if(!session){
      redirect("/admin/login")
    }

  return (
    <div className="flex h-screen bg-white text-black">
      <NavAdmin />
      { children }
    </div>
  )
}