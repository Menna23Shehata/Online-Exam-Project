"use client"

import { useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { SubmitHandler, useForm } from "react-hook-form"


type Inputs = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    rePassword: string,
    phone: string
}

export default function RegisterForm() {
    // translation
    const t = useTranslations()

    // navigation
    const router = useRouter()

    // form and validation
    const { register, handleSubmit, formState } = useForm<Inputs>({})

    // functions
    const onSubmit: SubmitHandler<Inputs> = (values) => {
        console.log(values);

    }


    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-16 gap-4 w-[45%] mx-auto rounded-lg border bg-stone-800 my-10">
        <h1 className="text-center capitalize text-white text-[2rem]">{t('register-form')}</h1>

        {/* userName */}
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white capitalize text-lg font-semibold">{t('username')}</label>
            <input {...register("username",{required:{
                value:true,
                message:t('please-enter-your-username')
            }})} type="text" placeholder={t('please-enter-your-username')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.username?.message}</p>
        </div>

        {/* firstName */}
        <div className="flex flex-col gap-1">
            <label htmlFor="firstname" className="text-white capitalize text-lg font-semibold">{t('first-name')}</label>
            <input {...register("firstName")} type="text" placeholder={t('please-enter-your-first-name')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.firstName?.message}</p>

        </div>


        {/* lastName */}
        <div className="flex flex-col gap-1">
            <label htmlFor="lastname" className="text-white capitalize text-lg font-semibold">{t('last-name')}</label>
            <input  {...register("lastName")} type="text" placeholder={t('please-enter-your-last-name')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.lastName?.message}</p>

        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white capitalize text-lg font-semibold">{t('email')}</label>
            <input {...register("email")} type="email" placeholder={t('please-enter-your-email-address')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.username?.message}</p>

        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white capitalize text-lg font-semibold">{t('password')}</label>
            <input {...register("password")} type="password" placeholder={t('please-enter-your-password')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.password?.message}</p>

        </div>

        {/* confirm password */}
        <div className="flex flex-col gap-1">
            <label htmlFor="re-password" className="text-white capitalize text-lg font-semibold">{t('confirm-password')}</label>
            <input  {...register("rePassword")} type="password" placeholder={t('please-confirm-your-password')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.rePassword?.message}</p>

        </div>

        {/* phone */}
        <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-white capitalize text-lg font-semibold">{t('phone')}</label>
            <input {...register("phone")} type="number" placeholder={t('please-enter-your-phone-number')} className="rounded-md px-3 py-1 text-stone-950" />
            <p className="text-red-400 text-sm font-semibold">{formState.errors.phone?.message}</p>
        </div>

        {/* register button */}
        <div className="flex flex-col justify-center mt-12">
            <button type="submit" className="text-white uppercase font-bold border border-white p-5 tracking-wider rounded-md" >{t('register')}</button>
        </div>
    </form>

}
