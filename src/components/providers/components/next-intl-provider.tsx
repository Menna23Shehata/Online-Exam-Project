import { Locale } from "@/i18n/routing"
import { NextIntlClientProvider, useLocale, useMessages, useNow, useTimeZone } from "next-intl"

type NextIntlProviderProps = {
    children: React.ReactNode
}


export default function NextIntlProvider({ children }: NextIntlProviderProps) {
    const messages = useMessages()
    const now = useNow()
    const timeZone = useTimeZone()
    const locale = useLocale() as Locale

    return (
        <NextIntlClientProvider messages={messages} now={now} timeZone={timeZone} locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}