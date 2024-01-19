
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'



const options: any = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials : any){
        const user = credentials
        // Add your own logic here to verify user credentials
        // and return a user object if they are valid   

        if (user) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        }

    })
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token : any, user: any) {
      if (user) {
        token.accessToken = user.access_token
        token.id = user.id;
      }
      return token;
    },
    async session(session : any, token: any) {
      session.user.id = token.id;
      return session;
    },
    async redirect( url:string, baseUrl:string ) {
       
        if (url.startsWith("/")) return `${baseUrl}${url}`
      
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl},
    pages: {

        login: '/auth/login',
        register:'auth/register',
        home: '/',
    
      },
}
}
export default (req:any, res:any) => NextAuth(options)