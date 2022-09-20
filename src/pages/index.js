import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import Default from '@/components/CardDesign/Default'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import classNames from 'classnames'
import { keyframes } from 'styled-components'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsLoad(true), 100)
    }, [])

    useEffect(() => {
        setCard((card) => (
            { ...card, 'site': document.URL }
        ))
    }, [])

    const [card, setCard] = useState({
        organization_logo: "sample/logo.png",
        organization_name: "クラウド名刺サービス",
        position_name: "誰でも無料で気軽に名刺作成",
        face_photo: "sample/qr.png",
        name: "「ぷる」",
        name_kana: "クラウド名刺サービス",
        zip: "000-0000",
        address: "◯◯県◯◯市◯◯1-2-3",
        tel: "000-0000-0000",
        tel2: "",
        fax: "",
        email: "",
        site: '',
        /* site: process.client ? document.URL : window.location.href, */
        image_photo: "",
        description: "",
        sort_num: 0,
        is_list: 0,
        is_share: 0,
    })

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="flex items-center justify-center min-h-screen">
                <div className="py-20 w-full max-w-3xl mx-auto px-8">
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
                        <div className="max-w-[300px] sm:max-w-[360px]">
                            <img
                                className="block h-auto w-full fill-current invert-[1] sepia-[0] saturate-[0] hue-rotate-[84deg] brightness-[1.04] contrast-[1.05]"
                                src="/images/hero_image01.png"
                                alt="クラウド名刺サービス"
                            />
                        </div>
                        <div className="p-4 max-w-[300px] sm:max-w-none">
                            <img
                                className="block h-auto w-full fill-current invert-[1] sepia-[0] saturate-[0] hue-rotate-[84deg] brightness-[1.04] contrast-[1.05]"
                                src="/images/hero_image02.png"
                                alt="「ぷる」"
                            />
                        </div>
                    </div>
                    <div className="mt-14 flex items-center justify-center">
                        <h1 className={classNames({ 'scale-100 opacity-1': isLoad }, { 'scale-90 opacity-0': !isLoad }, "text-xl sm:text-3xl text-white font-thin tracking-widest drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] transition ease-out duration-[5000ms]")}>
                            すべてはここから始まる。
                        </h1>
                    </div>
                    <div className="mt-24 flex items-center justify-center">
                        <div className="p-0 sm:p-8 text-lg text-white font-thin tracking-widest border border-white/0 sm:border-white/30">
                            「ぷる」は、デジタル名刺を簡単に作成できる無料のサービスです。クラウド管理でいつでもどこでも編集・閲覧可能。QRコードを読み取ってもらうだけですぐに相手に送れます！
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full max-w-3xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="py-14">
                        <h2 className="text-3xl text-white font-bold text-center tracking-widest">
                            見本
                        </h2>
                        <div className="text-base text-white font-thin text-center tracking-widest">
                            Sample
                        </div>
                    </div>

                    <div className="sm:p-6 bg-white overflow-hidden shadow-lg rounded-lg">
                        <Default
                            card={card}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full max-w-3xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="py-14">
                        <h2 className="text-3xl text-white font-bold text-center tracking-widest">
                            作ってみる
                        </h2>
                    </div>

                    <div className="pb-14 text-center">
                        <Link href="/register">
                            <a>
                                <MyButton_lg>
                                    アカウント作成
                                </MyButton_lg>
                            </a>
                        </Link>
                    </div>

                    {/* <div className="sm:p-6 bg-white overflow-hidden shadow-lg rounded-lg">
                        <MyButton_lg>
                            アカウント作成
                        </MyButton_lg>
                    </div> */}
                </div>
            </div>

        </GuestLayout>
    )
}
