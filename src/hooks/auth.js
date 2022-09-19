import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const edit = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/edit', props)
            .then(() => {
                mutate()
                Swal.fire({
                    title: '保存しました',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-gray-100 text-black font-semibold rounded-full',
                    }
                })
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const del = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/del', props)
            .then(() => window.location.pathname = '/')
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + encodeURIComponent(response.data.status)))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.message))
    }

    const logout = async () => {
        if (! error) {
            await axios
                .post('/logout')
                .then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)

        if (!(window.location.pathname === "/account/" || window.location.pathname === "/unregister/")) {
            if (middleware === 'auth' && !user?.email_verified_at) router.push("/verify-email")
        }

        if (window.location.pathname === "/verify-email/" && user?.email_verified_at) router.push('/home')

        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        edit,
        del,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
