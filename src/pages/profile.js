import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import Default from '@/components/CardDesign/Default'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import classNames from 'classnames'

const pageTitle = '運営'

export default function Profile() {
    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        
    }, [])

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - {pageTitle}</title>
            </Head>

            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="py-8 sm:py-12 lg:py-16">
                        <h2 className="text-2xl sm:text-3xl text-white font-bold text-center tracking-widest">
                            {pageTitle}
                        </h2>
                        <div className="text-base text-white font-thin text-center tracking-widest">
                            Management
                        </div>
                    </div>

                    <div className="py-8 px-4 sm:p-14 bg-white overflow-hidden shadow-lg rounded-lg text-gray-800">

                        <p>{process.env.NEXT_PUBLIC_APP_NAME}は個人が運営するサービスです。サービスご利用に当ってのご意見・ご質問などのお問い合わせは下記「ご連絡先」のお問い合わせフォームをご利用下さい。</p>

                        <h3 className="mt-6 py-2 text-lg sm:text-xl font-bold">運営</h3>
                        <div className="px-2">
                            <p class="my-2 font-bold">Webstusio YAS</p>
                            <Link href="https://studio-yas.jp/">
                                <a>
                                    https://studio-yas.jp/
                                </a>
                            </Link>
                        </div>

                        <h3 className="mt-6 py-2 text-lg sm:text-xl font-bold">ご連絡先</h3>
                        <div className="px-2">
                            <p class="my-2 font-bold">お問い合わせフォーム</p>
                            <Link href="https://studio-yas.jp/contact/">
                                <a>
                                    https://studio-yas.jp/contact/
                                </a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        </GuestLayout>
    )
}
