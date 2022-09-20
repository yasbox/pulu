import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MyButton, { MyButton_sm } from '@/components/Modules/MyButton'
import classNames from 'classnames'

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    const [isScroll, setIsScroll] = useState(false)

    const toggleNaviBackGround = () => {
        window.scrollY > 20
            ? setIsScroll(true)
            : setIsScroll(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleNaviBackGround)
        return () => window.removeEventListener('scroll', toggleNaviBackGround)
    }, [])

    return (
        <nav className={classNames({ 'bg-mybgcolor/90 drop-shadow-lg': isScroll || open }, "fixed w-full z-10 transition ease-in-out duration-150 sm:py-2")}>

            {/* メインメニュー */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">

                        {/* ロゴ */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <a>
                                    <ApplicationLogo className="block h-10 sm:h-12 w-auto fill-current" />
                                    {/* <ApplicationLogo className="block h-10 w-auto fill-current invert-[1] sepia-[0] saturate-[0] hue-rotate-[84deg] brightness-[1.04] contrast-[1.05]" /> */}
                                </a>
                            </Link>
                        </div>

                    </div>

                    {/* ドロップダウン */}
                    {user ?
                        <>
                            <div className="hidden sm:flex sm:items-center sm:justify-around sm:ml-6">

                                {/* ナビゲーション */}
                                <div className="hidden space-x-8 sm:-my-px sm:mr-10 sm:flex">
                                    {user &&
                                        <NavLink
                                            href="/home"
                                            active={router.pathname === '/home'}
                                        >
                                            マイ名刺
                                        </NavLink>
                                    }
                                </div>

                                <Dropdown
                                    align="right"
                                    trigger={
                                        <button className="flex items-center text-lg font-medium text-gray-300 hover:text-gray-100 tracking-widest focus:outline-none transition duration-150 ease-in-out">
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

                                    {/* アカウント編集 */}
                                    <DropdownButton>
                                        <Link href="/account">
                                            <a>
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <svg
                                                            className="h-6 w-6 fill-current text-gray-400"
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
                                            </a>
                                        </Link>
                                    </DropdownButton>

                                    {/* ログアウト */}
                                    <DropdownButton onClick={logout}>
                                        <div className="mt-2 text-right">
                                            ログアウト
                                        </div>
                                    </DropdownButton>
                                </Dropdown>
                            </div>

                            {/* メニューボタン */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setOpen(open => !open)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-in-out">
                                    <div className="flex items-center px-4">
                                        <div className="ml-3">
                                            <div className="font-medium text-base text-gray-300">
                                                {user?.name}
                                            </div>
                                        </div>
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
                                    </div>
                                </button>
                            </div>
                            
                            {/* <div className="-mr-2 flex items-center sm:hidden">
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
                            </div> */}
                        </>
                        :
                        <div className="flex items-center ml-6">
                            <Link href="/login">
                                <a>
                                    <MyButton_sm className={'bg-transparent text-white hover:text-black'}>
                                        ログイン
                                    </MyButton_sm>
                                </a>
                            </Link>

                            <Link href="/register">
                                <a>
                                    <MyButton_sm>
                                        登録
                                    </MyButton_sm>
                                </a>
                            </Link>
                        </div>
                    }
                    
                </div>
            </div>

            {/* モバイルメニュー */}
            {open && (
                <div className="m-4 p-4 bg-white block sm:hidden rounded-lg">
                    <div className="pt-2 pb-3 space-y-1">
                        {user &&
                            <ResponsiveNavLink
                                href="/home"
                                active={router.pathname === '/home'}>
                                マイ名刺
                            </ResponsiveNavLink>
                        }
                    </div>

                    {/* モバイルナビゲーション */}
                    {user &&
                        <div className="pt-4 pb-1 border-t border-gray-200/100">
                            <Link href="/account">
                                <a>
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
                                </a>
                            </Link>

                            <div className="mt-3 pt-3 border-t space-y-1">
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
