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
                <div className="px-4 sm:px-8 py-20 w-full max-w-3xl mx-auto">

                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
                        <div className="px-4 max-w-[300px] sm:max-w-[360px]">
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

                    <div className="mt-4 sm:mt-14 flex flex-wrap lg:flex-nowrap items-center justify-evenly">

                        <div className="p-8 max-w-[300px] sm:max-w-[300px] flex items-center justify-center">
                            <img
                                className="block h-auto w-full fill-current"
                                src="/images/top_img_00.png"
                                alt="人と人をシンプルにつなげる。"
                            />
                        </div>

                        <div className="w-full lg:w-auto flex items-center justify-center">
                            <h1 className={classNames({ 'scale-100 opacity-1': isLoad }, { 'scale-90 opacity-0': !isLoad }, "text-xl sm:text-3xl text-white font-thin tracking-widest drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] transition ease-out duration-[5000ms]")}>
                                人と人をシンプルにつなげる。
                            </h1>
                        </div>

                    </div>

                    <div className="mt-8 sm:mt-24 flex items-center justify-center">
                        <div className="p-0 sm:p-8 text-lg text-white font-thin tracking-widest border border-white/0 sm:border-white/30">
                            「ぷる」は、デジタル名刺を簡単に作成できる無料のサービスです。クラウド管理でいつでもどこでも編集・閲覧可能。QRコードを読み取ってもらうだけですぐに相手に送れます！
                        </div>
                    </div>

                </div>
            </div>

            <div className="mb-10 sm:mb-40 mt-0 sm:mt-20 flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center flex-wrap">
                        <div className="p-4 max-w-[400px] sm:max-w-none sm:w-[50%] flex items-center justify-center">
                            <img
                                className="block h-auto w-full fill-current"
                                src="/images/top_img_01.png"
                                alt="QRコードで名刺交換"
                            />
                        </div>

                        <div className="p-4 max-w-[350px] sm:max-w-none sm:w-[50%]">
                            <div className="flex items-center justify-center">
                                <div className="text-white">
                                    <h2 className="my-6 text-2xl sm:text-3xl text-center sm:text-left font-semibold">
                                        QRコードで簡単名刺交換
                                    </h2>
                                    <div className="flex items-center justify-start">
                                        <p className="my-3 py-1 px-3 min-w-[80px] text-center border border-white inline-block rounded-2xl">
                                            あなた
                                        </p>
                                        <p className="ml-4 my-2 text-sm sm:text-base">
                                            QRコードを表示する
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-start">
                                        <p className="my-3 py-1 px-3 min-w-[80px] text-center border border-white inline-block rounded-2xl">
                                            相手
                                        </p>
                                        <p className="ml-4 my-2 text-sm sm:text-base">
                                            QRコードを読み取る
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="mb-10 sm:mb-40 flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center flex-wrap-reverse">

                        <div className="p-4 max-w-[350px] sm:max-w-none sm:w-[50%]">
                            <div className="flex items-center justify-center">
                                <div className="text-white">
                                    <h2 className="my-6 text-2xl sm:text-3xl text-center sm:text-left font-semibold">
                                        クラウド管理
                                    </h2>
                                    <p className="my-3 text-base sm:text-lg font-light">
                                        クラウドだから、「名刺を忘れる」「名刺を切らす」がなく安心。いつでもどこでも名刺にアクセス。
                                    </p>
                                    <p className="my-3 text-base sm:text-lg font-light">
                                        アプリインストール不要で、パソコン、スマホ、タブレットなどの端末からご利用できます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 max-w-[300px] sm:max-w-none sm:w-[50%] flex items-center justify-center">
                            <img
                                className="block h-auto w-full fill-current"
                                src="/images/top_img_02.png"
                                alt="クラウド管理"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="mb-0 sm:mb-60 flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center flex-wrap">
                        <div className="p-4 max-w-[400px] max-h-[300px] sm:max-w-none sm:w-[50%] flex items-start justify-center">
                            <img
                                className="max-h-[300px] sm:max-h-[500px] fill-current"
                                src="/images/top_img_03.png"
                                alt="特徴"
                            />
                        </div>

                        <div className="p-4 max-w-[350px] sm:max-w-none sm:w-[50%]">
                            <div className="flex items-center justify-center">
                                <div className="text-white">
                                    <h2 className="my-10 text-xl sm:text-2xl font-light text-center">
                                        その他の特徴
                                    </h2>

                                    <h3 className="mt-6 sm:mt-10 mb-1 text-lg sm:text-xl font-semibold">
                                        複数作成可能
                                    </h3>
                                    <p className="my-2 text-base sm:text-lg font-light">
                                        無料で複数の名刺を作成・管理することができます。
                                    </p>

                                    <h3 className="mt-6 sm:mt-10 mb-1 text-lg sm:text-xl font-semibold">
                                        名刺のグループ化
                                    </h3>
                                    <p className="my-2 text-base sm:text-lg font-light">
                                        複数の名刺をまとめて相手に送ることができます。複数の肩書をお持ちの場合に便利です。
                                    </p>

                                    <h3 className="mt-6 sm:mt-10 mb-1 text-lg sm:text-xl font-semibold">
                                        ロゴ・顔写真掲載可能
                                    </h3>
                                    <p className="my-2 text-base sm:text-lg font-light">
                                        会社のロゴマークや顔写真を手軽にアップロードして表示することができます。
                                    </p>
                                </div>
                            </div>
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
                        <h2 className="text-2xl text-white font-bold text-center tracking-widest">
                            今すぐ作ってみる
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
                </div>
            </div>

        </GuestLayout>
    )
}
