import AuthCard from '@/components/AuthCard'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import Input from '@/components/Input'
import InputError from '@/Components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/home',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation: passwordConfirmation, setErrors })
    }

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - 登録</title>
            </Head>

            <AuthCard
                logo={
                    <div className='text-xl font-bold text-mytextcolor'>
                        登録
                    </div>
                }>

                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">アカウント名</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
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
                            autoComplete="new-password"
                        />

                        <InputError messages={errors.password} className="mt-2" />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            パスワード（確認用）
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError messages={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                ログインはこちら
                            </a>
                        </Link>

                        <MyButton_lg
                            type='submit'
                            className="ml-4 bg-gray-100"
                        >
                            登録
                        </MyButton_lg>
                    </div>
                    <div className="pt-6 text-center text-xs text-gray-500">
                        ご登録の前に必ず<Link href="/terms"><a>「ご利用規約」</a></Link>をお読み下さい。
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
