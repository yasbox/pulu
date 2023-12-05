import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import Default from '@/components/CardDesign/Default'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import classNames from 'classnames'

const pageTitle = 'プライバシーポリシー'

export default function Policy() {
    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        
    }, [])

    return (
        <GuestLayout>
            <Head>
                <title>{`${process.env.NEXT_PUBLIC_APP_NAME} - ${pageTitle}`}</title>
            </Head>

            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto py-4 px-1 sm:px-6 lg:px-8">

                    <div className="py-8 sm:py-12 lg:py-16">
                        <h2 className="text-2xl sm:text-3xl text-white font-bold text-center tracking-widest">
                            {pageTitle}
                        </h2>
                        <div className="text-base text-white font-thin text-center tracking-widest">
                            Privacy policy
                        </div>
                    </div>

                    <div className="py-8 px-4 sm:p-14 bg-white overflow-hidden shadow-lg rounded-lg text-sm sm:text-base text-gray-800">

                        <p className="mb-5">{process.env.NEXT_PUBLIC_APP_NAME}（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">個人情報の定義</h3>
                        <p className="mb-5">本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">個人情報の管理</h3>
                        <p className="mb-5">お客様からお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">個人情報の利用目的</h3>
                        <p className="mb-5">当サイトでは、お客様からのお問い合わせやサービスへのお申し込み等を通じて、お客様の氏名、生年月日、住所、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。その場合は、以下に示す利用目的のために、適正に利用するものと致します。</p>

                        <ul className='pl-4 my-4 list-disc'>
                            <li>お客様からのお問い合わせ等に対応するため。</li>
                            <li>お客様からお申し込みいただいたサービス等の提供のため。</li>
                            <li>商品や景品、プレゼント等の発送のため。</li>
                            <li>当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。</li>
                            <li>個人を識別できない形で統計データを作成し、当サイトおよびお客様の参考資料とするため。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">個人情報の第三者提供</h3>
                        <p className="mb-5">お客様からお預かりした個人情報を、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人様の同意を得ずに第三者に提供することはありません。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">個人情報の開示・訂正・削除について</h3>
                        <p className="mb-5">お客様からお預かりした個人情報の開示・訂正・削除をご希望の場合は、ご本人様よりお申し出ください。適切な本人確認を行った後、速やかに対応させていただきます。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">Cookie（クッキー）について</h3>
                        <p className="mb-5">Cookie（クッキー）とは、お客様のサイト閲覧履歴を、お客様のコンピュータにデータとして保存しておく仕組みです。</p>

                        <h4 className="mt-3 py-2 text-lg font-bold">アクセス解析ツールについて</h4>
                        <p className="mb-5">当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは、Cookieを使用することでお客様のトラフィックデータを収集しています。</p>

                        <p className="mb-5">お客様はブラウザの設定でCookieを無効にすることで、トラフィックデータの収集を拒否することができます。なお、トラフィックデータからお客様個人を特定することはできません。詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクス利用規約</a>をご確認ください。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">本ポリシーの変更</h3>
                        <p className="mb-5">当サイトは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく変更する場合があります。本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。</p>
                    </div>
                </div>
            </div>

        </GuestLayout>
    )
}
