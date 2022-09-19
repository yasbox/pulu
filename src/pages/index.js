import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import MyButton, { MyButton_sm } from '@/components/Modules/MyButton'
import Default from '@/components/CardDesign/Default'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    const card = {
        organization_logo: "sample/logo_icon_bgw.png",
        organization_name: "クラウド名刺サービス",
        position_name: "誰でも無料で気軽に名刺作成",
        face_photo: "sample/qr.png",
        name: "ぷる",
        name_kana: "クラウド名刺",
        zip: "000-0000",
        address: "◯◯県◯◯市◯◯1-2-3",
        tel: "000-0000-0000",
        tel2: "",
        fax: "",
        email: "",
        site: process.client ? window.location.href : '',
        /* site: process.client ? document.URL : window.location.href, */
        image_photo: "",
        description: "",
        sort_num: 0,
        is_list: 0,
        is_share: 0,
    }

    return (
        <GuestLayout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="py-14 flex items-center justify-center h-full">
                <div className="w-full max-w-3xl mx-auto py-4 px-1 sm:px-6 lg:px-8">
                    <div className="sm:p-6 bg-white overflow-hidden shadow-lg rounded-lg divide-y divide-slate-200">
                        <div>
                            <Default
                                card={card}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
