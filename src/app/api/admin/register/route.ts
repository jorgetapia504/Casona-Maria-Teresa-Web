import { dbConnect } from "@/lib/mongoose"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req:Request){

  const {email,password} = await req.json()

  await dbConnect()

  const exists = await User.countDocuments()

  if(exists > 0){
    return NextResponse.json(
      {error:"Admin ya existe"},
      {status:400}
    )
  }

  const hash = await bcrypt.hash(password,10)

  await User.create({
    email,
    password:hash
  })

  return NextResponse.json({success:true})
}