import { Auth } from "@//features/auth/auth"
import { Metadata } from "next"



const metadata: Metadata={
    title: 'Авторизация'
}

export default function AuthPage() {
    return <Auth />
}
