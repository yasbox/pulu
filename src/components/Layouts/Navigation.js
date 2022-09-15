import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-gray-900 shadow-sm z-10">

            {/* メインメニュー */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">

                        {/* ロゴ */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <a>
                                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                                    {/* <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600 invert-[1] sepia-[0] saturate-[0] hue-rotate-[84deg] brightness-[1.04] contrast-[1.05]" /> */}
                                </a>
                            </Link>
                        </div>

                        {/* ナビゲーション */}
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            {user &&
                                <NavLink
                                    href="/home"
                                    active={router.pathname === '/home'}
                                >
                                    ホーム
                                </NavLink>
                            }
                        </div>
                    </div>

                    {/* ドロップダウン */}
                    {user ?
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <Dropdown
                                align="right"
                                width="48"
                                trigger={
                                    <button className="flex items-center text-lg font-medium text-gray-400 hover:text-gray-200 tracking-widest focus:outline-none transition duration-150 ease-in-out">
                                        <div>{user?.name}</div>

                                        <div className="ml-1">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                }>

                                {/* アカウント */}
                                <DropdownButton onClick={logout}>
                                    ログアウト
                                </DropdownButton>
                            </Dropdown>
                        </div>
                        :
                        <div className="fixed top-0 right-0 px-6 py-4">
                            <Link href="/login">
                                <a className="text-sm text-gray-700">ログイン</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700">
                                    登録
                                </a>
                            </Link>
                        </div>
                    }
                    
                    {/* メニューボタン */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-in-out">
                            <svg
                                className="h-8 w-8"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* モバイルメニュー */}
            {open && (
                <div className="m-4 p-4 bg-white block sm:hidden shadow-sm rounded-lg">
                    <div className="pt-2 pb-3 space-y-1">
                        {user &&
                            <ResponsiveNavLink
                                href="/home"
                                active={router.pathname === '/home'}>
                                ホーム
                            </ResponsiveNavLink>
                        }
                    </div>

                    {/* モバイルナビゲーション */}
                    {user &&
                        <div className="pt-4 pb-1 border-t border-gray-200/100">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-10 w-10 fill-current text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>

                                <div className="ml-3">
                                    <div className="font-medium text-base text-gray-800">
                                        {user?.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">
                                        {user?.email}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                {/* アカウント */}
                                <ResponsiveNavButton onClick={logout}>
                                    ログアウト
                                </ResponsiveNavButton>
                            </div>
                        </div>
                    }
                </div>
            )}
        </nav>
    )
}

export default Navigation
