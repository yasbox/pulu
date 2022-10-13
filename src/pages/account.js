import AuthCard from '@/components/AuthCard'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Input from '@/components/Input'
import InputError from '@/Components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import Loading from '@/components/Modules/Loading'

const Account = () => {
    const { user, edit } = useAuth({
        middleware: 'auth',
    })

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if(!user) return
        setId(user.id)
        setName(user.name)
        setEmail(user.email)
    }, [user])

    const submitForm = event => {
        event.preventDefault()

        edit({ id, name, email, password, password_confirmation: passwordConfirmation, setErrors })
    }

    return (
        <AppLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - アカウント情報</title>
            </Head>

            <div className="my-4 sm:my-16 flex flex-col sm:justify-center items-center px-1 pt-6 sm:pt-0">
                <div className='text-xl font-bold text-mytextcolor'>
                    アカウント情報
                </div>
                <div className="w-full sm:max-w-md mt-6 p-6 sm:p-12 bg-white shadow-md overflow-hidden rounded-lg">

                    <form onSubmit={submitForm}>
                        <input type="hidden" name="id" value={id} />

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
                                placeholder="パスワードを変更する場合のみ入力"
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
                                placeholder="パスワードを変更する場合のみ入力"
                                autoComplete="new-password"
                            />

                            <InputError messages={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <MyButton_lg
                                type='submit'
                                className="ml-4 bg-gray-100"
                            >
                                保存
                            </MyButton_lg>
                        </div>
                    </form>

                    <hr className='my-8' />

                    <div className='text-sm text-gray-500 text-right'>
                        アカウント登録の解除は、
                        <Link href="/unregister">
                            <a>
                                こちらから
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </AppLayout>
    )
}

export default Account
