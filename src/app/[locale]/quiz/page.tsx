import { getServerSession, Session } from "next-auth"
import LogoutButton from "./_components/logout-button"
import { authOptions } from "@/auth"
import { getTranslations } from "next-intl/server"




export default async function Quiz() {
    // translations
    const t = await getTranslations()

    // variables
    const session = await getServerSession(authOptions) as Session

    return (
        <main>
            <ul className="border rounded-md p-3">
                <li>{t('welcome-name', {
                    name: session.username
                })}</li>
                <li>{session.email}</li>
            </ul>

            <LogoutButton />
        </main>
    )
}