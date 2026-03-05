import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import User from "@/models/User"
import { dbConnect } from "@/lib/mongoose"

export const authOptions:any = {

  session:{
    strategy:"jwt"
  },

  providers:[
    CredentialsProvider({

      name:"credentials",

      credentials:{
        email:{},
        password:{}
      },

      async authorize(credentials){

        if (!credentials) return null

        await dbConnect()

        const user = await User.findOne({
          email: credentials.email
        })

        if(!user) return null

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if(!valid) return null

        return {
          id:user._id.toString(),
          email:user.email
        }
      }

    })
  ],

  pages:{
    signIn:"/admin"
  },

  secret:process.env.NEXTAUTH_SECRET
}