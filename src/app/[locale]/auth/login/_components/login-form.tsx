'use client';

import { FormEvent, useState } from 'react';
import img1 from '../../../../../../public/assets/bro.png'
import Image from 'next/image'
import { signIn } from 'next-auth/react';
import { useTranslations } from 'use-intl';

export default function LoginForm() {
    // translation
    const t = useTranslations()

    // state
    const [error, setError] = useState<string | null>(null)

    // functions
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        const response = await signIn('credentials', {
            ...data,
            redirect: false
        })

        // if login was successful, redirect to quiz page
        if (response?.ok) {
            window.location.href = response.url || '/quiz';
            return;
        }

        // if login was unsuccessful, show error message
        setError(response?.error || "something went wrong , please try again")
    }


    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="ms-0 bg-secondaryColour rounded-r-lg shadow-lg">

                <div className=" pt-10 ps-5 pb-20">
                    <h1 className='font-bold text-5xl leading-[75px]'>{t('welcome-to')}</h1>
                    <span className='text-[#122D9C] leading-[90px] text-6xl font-bold'>Elevate</span>
                    <p className='leading-10 text-lg font-normal'>Quidem autem voluptatibus qui quaerat aspernatur <br /><span> architecto natus</span></p>
                    <Image src={img1} alt='image' className="" width={408} height={434.59} />
                </div>

            </div>
            <div className="">
                <div className=" flex flex-col gap-8 justify-center items-center h-full ">
                    <form onSubmit={handleSubmit} autoComplete="off" className="  w-[35%] flex flex-col gap-6  ">
                        <p className="font-semibold text-lg">{t('sign-in')}</p>

                        {/* username */}
                        <input type="text" className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out" placeholder={t('username')} autoComplete="off" />

                        {/* password */}
                        <input type="password" className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out" placeholder={t('password')} autoComplete="off" />

                        <p className="text-xs text-[#122D9C] text-end">{t('recover-password')}</p>

                        {/* error message */}
                        <p className='text-error mb-2 text-center'>{error}</p>

                        {/* signin button */}
                        <button type="submit" className="bg-mainColour text-white font-light text-sm w-full p-3 rounded-2xl"> {/* */}{t('sign-in')}{/* */} </button>
                    </form>
                    <div className=" flex gap-3 items-center">
                        <div className="divider h-[1px] bg-[#E7E7E7] w-12" />
                        <p> {t('or-continue-with')}</p>
                        <div className="divider  h-[1px] bg-[#E7E7E7] w-12" />
                    </div>
                    <div className="social-login flex gap-4"><div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
                        <img alt="google" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{ color: 'transparent' }} srcSet="/_next/image?url=%2FVector.png&w=32&q=75 1x, /_next/image?url=%2FVector.png&w=48&q=75 2x" src="/_next/image?url=%2FVector.png&w=48&q=75" />
                    </div>

                        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
                            <img alt="google" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{ color: 'transparent' }} srcSet="/_next/image?url=%2FLogo%20Google.png&w=32&q=75 1x, /_next/image?url=%2FLogo%20Google.png&w=48&q=75 2x" src="/_next/image?url=%2FLogo%20Google.png&w=48&q=75" />
                        </div>
                        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
                            <img alt="google" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{ color: 'transparent' }} srcSet="/_next/image?url=%2FLogo.png&w=32&q=75 1x, /_next/image?url=%2FLogo.png&w=48&q=75 2x" src="/_next/image?url=%2FLogo.png&w=48&q=75" />
                        </div>
                        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer"><img alt="google" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{ color: 'transparent' }} srcSet="/_next/image?url=%2FLogo%20(1).png&w=32&q=75 1x, /_next/image?url=%2FLogo%20(1).png&w=48&q=75 2x" src="/_next/image?url=%2FLogo%20(1).png&w=48&q=75" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}