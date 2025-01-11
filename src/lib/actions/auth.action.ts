"use server"

import { JSON_HEADER } from "../constants/api.constants"

const BASE_URL = process.env.API +'/auth'

export const registerAction =async(fields:{[key:string]:any})=>{
    const response = await fetch(BASE_URL+'/register',{
        method:'POSt',
        body:JSON.stringify(fields),
        headers:{
            ...JSON_HEADER
        }
    })

    const payload : APIResponse<RegisterResponse> = await response.json()

    return payload
} 
