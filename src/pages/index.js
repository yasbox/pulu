import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4">
                    {user ?
                        <Link href="/mypage">
                            <a className="ml-4 text-sm text-gray-700">
                                マイ名刺
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700">ログイン</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700">
                                    登録
                                </a>
                            </Link>
                        </>
                    }
                </div>

                <div className="pt-10 flex items-center justify-center min-h-screen bg-my-bgcolor">

                    <div className="w-72 mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex justify-center sm:justify-center">
                            <ApplicationLogo className="block h-16 w-auto fill-current text-gray-600" />
                        </div>

                        <div className="flex justify-center sm:justify-center">
                            <span className="my-4 text-base text-gray-700">
                                {process.env.NEXT_PUBLIC_APP_NAME}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
