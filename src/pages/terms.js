import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import Default from '@/components/CardDesign/Default'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import classNames from 'classnames'

const pageTitle = 'ご利用規約'

export default function Terms() {
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
                            Terms of Service
                        </div>
                    </div>

                    <div className="py-8 px-4 sm:p-14 bg-white overflow-hidden shadow-lg rounded-lg text-sm sm:text-base text-gray-800">

                        <p class="mb-5">本規約は、{process.env.NEXT_PUBLIC_APP_NAME}（以下「当サービス」といいます）が提供するサービスの利用に関する条件を、当サービスを利用する者（以下「ユーザー」といいます）と当サービスの間で定めるものです。本規約は当サービスの利用に関して生ずるすべての関係に適用されるものとし、ユーザーは、本規約を熟読し、本規約の内容を十分に理解した上でこれを承諾して、本サイトを利用するものとします。当サービスを利用することで、下記の利用規約に同意していただいたこととみなさせていただきますのでご注意ください。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第1条 当サービスの利用</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">ユーザーは、本規約の定めに従って当サービスを利用しなければなりません。</li>
                            <li class="mb-2">ユーザーは、申し込みフォームを送信すること又は当サービスを実際に利用することによって、本規約の内容及び本規約が当サービスの利用契約の内容となることに同意したものとみなされます。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第2条 アカウントについて</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サービスの利用には、当サービスのアカウント（以下「アカウント」といいます。）のご登録が必要です。</li>
                            <li class="mb-2">アカウントを削除した場合、アカウントは消滅し、以降、ログインを伴う当サービスのご利用はできなくなります。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第3条 投稿画像について</h3>
                        <p class="mb-5">ユーザーが 当サービスに投稿した画像に関する一切の責任は、投稿されたユーザー自身にご負担いただきます。したがって、ユーザーにより投稿された画像に関し、第三者が損害を被った場合、当サービスは、ユーザーに代わっての責任は一切負いかねますので、あらかじめご了承ください。</p>
                        <p class="mb-5">画像を投稿されたユーザーが当該画像に関する複製権、公衆送信権、譲渡権、翻訳権・翻案権等の全ての著作権その他の著作権法上の権利を有していることを、当該ユーザーに保証していただきますので、著作権法上の権利の有無については十分に注意して投稿を行ってください。特に、以下に該当する場合においては、必要な手続きを実施の上、投稿をいただくよう、十分にご注意ください。

                        </p>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">第三者の著作物等を利用して投稿を行う場合
                                ユーザーの責任と負担において必要な権利処理がなされていることを前提とさせていただきます。第三者の著作物等を利用される場合にも十分に注意をして投稿を行ってください。</li>
                            <li class="mb-2">人物の登場する写真
                                撮影対象者本人の同意を得ずに撮影された写真はプライバシー、肖像等の侵害に該当する可能性があります。人物の写真を投稿する場合は、必ず本人に撮影及び掲載の許可をとってください。</li>
                            <li class="mb-2">撮影が禁止されている場所や対象の登場する写真
                                撮影が制限（明示的のみならず、黙示的な制限も含みます）されている場所や対象を撮影した写真については、撮影に関する許可のみならず、掲載に関する許可についても、必ず権限者より取得してください。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第4条 外部サービスとの共有機能について</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サービスは、個々の投稿画像の掲載ページ上に、他のユーザー（以下「連携サービス利用者」といいます。）が、当該投稿画像の掲載ページを不特定多数の第三者と共有することを目的に、LINEやTwitterなどのソーシャル・ネットワーク・サービス（以下「連携サービス」といいます。）に当該投稿画像の掲載ページを投稿するためのボタン（以下、「共有ボタン」といいます。）を設置します。連携サービスの仕様により、共有ボタンの押下による連携サービスへの投稿の結果、当サービスが、連携サービス運営会社に対し、投稿画像の掲載ページにかかる著作権法上の権利（連携サービス運営会社から第三者に対する再々利用許諾を含む）の利用を許諾する場合があることを、ユーザーは、予め同意するものとします。</li>
                            <li class="mb-2">共有ボタンの押下により、連携サービスへの投稿がなされた場合には、当サービスは、連携サービス運営会社に対し、投稿画像の掲載ページにかかる著作権法上の権利（連携サービス運営会社から第三者に対する再々利用許諾を含む）の利用を許諾することができるものとします。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第5条 禁止行為</h3>
                        <p class="mb-5">当サービスの利用に関して、次の行為を禁止します。</p>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サイト上に掲載ないし表示された情報（全部、一部を問いません。）について、法令上または本規約上特に認められている場合を除き、当サービスの事前の同意なく、複写、もしくはその他の方法により再生、複製、送付、譲渡、頒布、配布、転売、改変またはこれらの目的で使用するために保管する行為</li>
                            <li class="mb-2">本規約に違反する行為</li>
                            <li class="mb-2">公序良俗に反する行為</li>
                            <li class="mb-2">性的嫌悪感を催す、またはそのおそれがある画像を投稿する行為</li>
                            <li class="mb-2">犯罪的行為に結びつく行為</li>
                            <li class="mb-2">当サービスもしくは他のユーザーまたは第三者の知的財産権（著作権、意匠権、実用新案権、商標権、特許権、ノウハウが含まれますがこれに限定されません。）、名誉、プライバシーその他の権利または利益を侵害し、または侵害するおそれがある行為</li>
                            <li class="mb-2">他のユーザーまたは第三者に不利益を与える行為</li>
                            <li class="mb-2">当サービスの運営を妨げる行為、または信用を毀損する行為</li>
                            <li class="mb-2">その他、当サービスが不適切と判断する行為</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第6条 違反行為等への措置</h3>
                        <p class="mb-5">当サービスは、次に掲げる場合には、違法性・規約違反の有無にかかわらず、登録情報の全部もしくは一部の削除または非表示への変更等の措置（以下「削除等措置」といいます。）を行うことができるものとします。</p>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">サーバに著しく負荷をかける行為と当サービスが判断した場合</li>
                            <li class="mb-2">公的な機関または専門家（国、地方公共団体、特定電気通信役務提供者の損害賠償責任の制限及び発信者情報の開示に関する法律のガイドラインに規定された信頼性確認団体、インターネット・ホットライン、弁護士等をいいます。）から、違法、公序良俗違反または他人の権利を侵害する等の指摘・意見表明があった場合</li>
                            <li class="mb-2">投稿された画像等の情報が第三者の著作権を侵害すると当サービスが判断した場合</li>
                            <li class="mb-2">その他、削除等措置を講ずる必要があると当サービスが判断した場合</li>
                        </ul>
                        <p class="mb-5">ユーザーが前項各号のいずれかに該当すると当サービスが判断した場合、その他当サービスが必要と認める場合には、当サービスは当該ユーザーに対しアカウント停止の措置（以下「アカウント停止措置」といいます。）を行うことができるものとします。</p>
                        <p class="mb-5">ユーザーはアカウント停止措置について、当サービスに対し異議を述べないこととします。</p>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第7条 免責事項</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サービス利用において生じたトラブル、紛争等いかなる事由についても、ユーザーと当該他のユーザーとの間で解決いただくものとし、当サービスはその責任を一切負いません。</li>
                            <li class="mb-2">当サービスは、当サービスが必要と判断した場合は、ユーザーに通知することなくいつでも当サービスを変更、停止、または中止することができます。この場合、当サービスは、当サービスの変更等によりユーザーに生じたいかなる損害についても、一切責任を負いません。アクセス過多、その他予期せぬ要因で表示速度の低下や障害等が生じた場合も同様とします。</li>
                            <li class="mb-2">当サービスは、ユーザーが本規約若しくはその他の利用条件等に違反する行為またはその恐れのある行為を行ったと信じるに足りる相当な理由があると判断した場合には、当該行為を行ったユーザーのアカウント停止措置、画像等の情報の全部もしくは一部の削除、及び非表示への変更等を行う場合がありますが、それによって生じたいかなる損害についても、一切責任を負いません。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第8条 プライバシーについて</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サービスにおけるプライバシーの取り扱いについては、本規約及び<Link href="/policy"><a>プライバシーポリシー</a></Link>に準じます。</li>
                        </ul>

                        <h3 className="mt-6 py-2 text-base sm:text-xl font-bold">第9条 本規約について</h3>
                        <ul className='pl-4 my-4 list-disc'>
                            <li class="mb-2">当サービスは、本規約をいつでも変更、追加、削除（以下、総称して「改訂」といいます。）することができるものとします。</li>
                            <li class="mb-2">本規約の改訂が、ユーザの一般の利益に適合する場合又は本規約の目的に反せず、かつ合理的なものである場合以外の場合は、当社は、前項に定める本規約の改訂に関する内容の通知又は掲載を行った上で、当該改訂についてユーザの同意を得るものとします。ただし、改訂後ユーザが本サービスを利用する場合、ユーザは本規約の改訂に同意したものとみなします。その場合であっても、後にユーザが当該改訂に同意しない旨を当社に申し入れた場合には、当社は、当該申入れがあった日よりユーザの選択に応じて、本サービスの一時停止又は本規約の解約に応じるものとします。</li>
                        </ul>
                    </div>
                </div>
            </div>

        </GuestLayout>
    )
}
