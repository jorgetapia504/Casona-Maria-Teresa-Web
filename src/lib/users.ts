import { dbConnect } from "@/lib/mongoose"
import User from "@/models/User"

export async function adminExists() {

  await dbConnect()

  const count = await User.countDocuments()

  return count > 0
}