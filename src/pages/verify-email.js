import AuthCard from '@/components/AuthCard'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'

const VerifyEmail = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/home',
    })

    const [status, setStatus] = useState(null)

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - メール認証</title>
            </Head>

            <AuthCard
                logo={
                    <div className='text-xl font-bold text-mytextcolor'>
                        メール認証
                    </div>
                }>

                <div className="mb-4 text-sm text-gray-600">
                    認証用メールを確認して認証を済ませてください。届いていない場合は、下記のボタンで再送信できます。
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <MyButton_sm
                        className="ml-4 bg-gray-100"
                        onClick={() => resendEmailVerification({ setStatus })}>
                        認証メールを再送
                    </MyButton_sm>

                    <button
                        type="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        onClick={logout}>
                        ログアウト
                    </button>
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mt-4 font-medium text-sm text-green-600">
                        認証用メールを送信しました。
                    </div>
                )}

            </AuthCard>
        </GuestLayout>
    )
}

export default VerifyEmail
