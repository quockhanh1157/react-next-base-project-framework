import type {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name:"Credentails",
      credentials:{
        username:{
          label:"Username:",
          type:'text',
          placeholder:"your-cool-username"
        },
        password:{
          label:"Password:",
          type:'text',
          placeholder:"your-awesome-password"
        }
      },
      async authorize(credentials){

        const user = {id:'42',name:'khanh',password:'123456'}

        if(credentials?.username === user.name && credentials?.password===user.password){
          return user
        } else {
          return null
        }
      }
    })
  ],
  // pages: {
  //   signIn: '/signin'
  // }
}