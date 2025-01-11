import NextAuthProvider from "./components/next-auth-provider"
import NextIntlProvider from "./components/next-intl-provider"

type ProvidersProps = {
    children: React.ReactNode
}


export default function Providers({ children }: ProvidersProps) {

    return (
        <NextAuthProvider>
            <NextIntlProvider>
                {children}
            </NextIntlProvider>
        </NextAuthProvider>
    )
}