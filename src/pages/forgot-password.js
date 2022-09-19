import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import Input from '@/components/Input'
import InputError from '@/Components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - パスワードリセット</title>
            </Head>

            <AuthCard
                logo={
                    <div className='text-xl font-bold text-mytextcolor'>
                        パスワードリセット
                    </div>
                }>

                <div className="mb-4 text-base text-gray-600">
                    パスワードを忘れた場合は、新しいパスワードを再設定できます。
                </div>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">登録済みのメールアドレス</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <MyButton_lg
                            type='submit'
                            className="ml-4 bg-gray-100"
                        >
                            再設定リンクを送信
                        </MyButton_lg>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
