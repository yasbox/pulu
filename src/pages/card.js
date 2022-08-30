import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import { useState } from 'react'
import Modal from 'react-modal'
import Button from '@/components/Button'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import autoprefixer from 'autoprefixer'

const pageTitle = 'サンプル'

const customStyles = {
    overlay: {
        /* position: "fixed",
        top: 0,
        left: 0, */
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    content: {
        inset: 10,
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 600,
    },
}

Modal.setAppElement('body')

const Card = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // 参照が同期され、アクセスできるようになりました。
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <GuestLayout>

            <Head>
                <title>{pageTitle} | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden">
                        <div className="px-6 py-4">
                            <img
                                className="object-contain"
                                src={`/images/sample-logo.jpg`}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="px-6 py-1 text-xl font-bold">
                            一般社団法人日本ライオンズ
                        </div>
                        <div className="px-6 py-1 text-base">
                            前理事長 2022-2023年度 理事
                        </div>

                        <div className="px-6 py-6 flex flex-wrap items-center justify-center">
                            <div className="">
                                <img
                                    className="object-contain object-center m-auto"
                                    src={`/images/sample-face.jpg`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="px-8">
                                <div className="text-sm tracking-[.5em]">
                                    にしな　りょうぞう
                                </div>
                                <div className="py-1 text-4xl font-bold tracking-widest">
                                    仁科良三
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pb-6">
                            <div className="py-2">
                                <div className="text-sm">
                                    〒104-0028
                                </div>
                                <div className="text-base">
                                    東京都中央区八重洲2-6-15 JOTOビル9階
                                </div>
                            </div>
                            <div className="text-sm tracking-widest">
                                TEL 03-6262-1263
                            </div>
                            <div className="text-sm tracking-widest">
                                FAX 03-3241-4388
                            </div>
                            <div className="text-sm tracking-widest">
                                E-mail jlo@jade.plala.or.jp
                            </div>
                        </div>
                        
                        <div className="px-6 py-6 text-sm border-t border-b border-gray-200">
                            自由文
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Card Store Modal"
            >   
                モーダル
            </Modal>

        </GuestLayout>
    )
}

export default Card
