import Providers from "@/components/providers";
import SwitchLocale from "@/components/providers/common/switch-locale";
import { Locale, routing } from "@/i18n/routing"
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
// import Link from "next/link";
import { notFound } from "next/navigation";


type LocaleLayoutProps = {
    children: React.ReactNode;
    params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
    const t = await getTranslations({ locale });

    return {
        title: t('metadata-title'),
        description: t('metadata-description'),
    }
}

// const languageSwitch: Record<Locale, string> = {
//     ar: 'English',
//     kr: '한국어',
//     en: 'العربية',
// };

export function generateStaticParams(){
    return routing.locales.map((locale)=>({locale}))
}

export default function LocaleLayout({ params: { locale }, children }: LocaleLayoutProps) {
    if (!routing.locales.includes(locale)) notFound()

        // Enable static rendering
        setRequestLocale(locale)

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body className="antialiased">
                {/* <Link href='/' className="block my-12 rounded-md border border-blue-500 p-4">{languageSwitch[locale]}</Link> */}
                {/* <Link href='/' className="block my-12 rounded-md border border-blue-500 p-4">{locale === 'ar' ? "English" : "العربية"}</Link> */}
                <Providers>
                    <SwitchLocale/>
                    {children}
                </Providers>
            </body>
        </html>
    )

}