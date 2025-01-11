'use client'

import { Locale, usePathname, useRouter } from "@/i18n/routing"
import { useLocale } from "next-intl"
import { useSearchParams } from "next/navigation"

export default function SwitchLocale() {
    // translation
    const locale = useLocale() as Locale

    // navigation
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // variables 
    const searchQuery = new URLSearchParams(searchParams)

    // functions
    const changeLocale = () => {        
        router.push(`${pathname}?${searchQuery.toString()}, locale: locale ==='en'?'ar':'en'`)
    }


    return (
        <button onClick={changeLocale} className="px-3 py-1 rounded-md bg-stone-700 fixed top-4 right-4 text-white uppercase border border-white p-3 tracking-wider text-lg">
            {locale ==='en'? 'العربية':'English'}
        </button>
    )
}