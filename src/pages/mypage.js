import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState } from 'react'
import Modal from 'react-modal'
import Button from '@/components/Button'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import autoprefixer from 'autoprefixer'

const pageTitle = 'マイページ'

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

const Mypage = () => {

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
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {pageTitle}
                </h2>
            }>

            <Head>
                <title>{pageTitle} | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                <div className="p-6 text-right">
                    <Button onClick={openModal} className="text-xl">+</Button>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Link href="/card">
                                <a>
                                    サンプル名刺
                                </a>
                            </Link>
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
                <CardForm
                    closeModal={closeModal}
                ></CardForm>
            </Modal>

        </AppLayout>
    )
}

export default Mypage
