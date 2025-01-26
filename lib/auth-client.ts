import { createAuthClient } from "better-auth/react"
import { oneTapClient } from "better-auth/client/plugins"
const isDev = process.env.NODE_ENV === "development"
export const authClient = createAuthClient({
  baseURL: isDev ? "http://localhost:3000" : "https://hanabi.app",
  plugins: [
    oneTapClient({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
    })
]
})