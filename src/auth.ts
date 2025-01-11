import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constants";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
    },

    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {}
            },
            authorize: async (credentials) => {
                const baseUrl = process.env.API + '/auth/login';

                const response = await fetch(baseUrl, {
                    method: "POST",
                    cache: "no-store",
                    body: JSON.stringify(credentials),
                    headers: {
                        ...JSON_HEADER
                    }
                })

                const payload: APIResponse<LoginResponse> = await response.json()

                // Return the user if the login was successful
                if (payload.status === 'success') {
                    return {
                        ...payload.data.user,
                        token: payload.data.token
                    }
                }

                // Othetwise, throw an error
                throw new Error(payload.message)
            }
        })
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.token = user.token
                token.username = user.username
                token.firstName = user.firstName
                token.lastName = user.lastName
                token.email = user.email
                token.phone = user.phone
                token.role = user.role
                token.isVerified = user.isVerified
            }
            return token
        },

        session: ({ session, token }) => {
            session.username = token.username
            session.firstName = token.firstName
            session.lastName = token.lastName
            session.email = token.email
            session.phone = token.phone
            session.role = token.role
            session.isVerified = token.isVerified

            return session
        }
    }
}