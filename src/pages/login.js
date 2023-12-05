import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/home',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(decodeURIComponent(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({ email, password, remember: shouldRemember, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <Head>
                <title>{`${process.env.NEXT_PUBLIC_APP_NAME} - ログイン`}</title>
            </Head>

            <AuthCard
                logo={
                    <div className='text-xl font-bold text-mytextcolor'>
                        ログイン
                    </div>
                }>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">メールアドレス</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">パスワード</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />

                        <InputError messages={errors.password} className="mt-2" />
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={event => setShouldRemember(event.target.checked)}
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                次回自動ログイン
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/forgot-password" legacyBehavior>
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                パスワードを忘れた方
                            </a>
                        </Link>

                        <MyButton_lg
                            type='submit'
                            className="ml-4 bg-gray-100"
                        >
                            ログイン
                        </MyButton_lg>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
