import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import useSWR from 'swr'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Button from '@/components/Button'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import Loading from '@/components/Modules/Loading'
import autoprefixer from 'autoprefixer'
import Default from '@/components/CardDesign/Default'
import { useCard } from '@/hooks/card'
import Swal from 'sweetalert2'

const pageTitle = 'マイページ'

/***********************************************
 * モーダル設定
 ***********************************************/
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
    
    const [editCard, setEditCard] = useState(null)
    const [errors, setErrors] = useState([])

    const { data: cards, error, mutate } = useSWR('/api/card/all', () =>
        axios
            .get('/api/card/all')
            .then(res => res.data)
            .catch(error => {
                console.error(error)
                throw error
            })
    )
    useEffect(() => {
        //console.log(cards)
    }, [cards])

    /***********************************************
     * カード削除
     ***********************************************/
    const { drop } = useCard({
        funcIfSuccess: closeModal,
    })
    function dropCard(id) {
        Swal.fire({
            title: '本当に削除しますか？',
            text: "削除すると元に戻せません",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '削除',
            cancelButtonText: 'キャンセル',
        }).then((result) => {
            if (result.isConfirmed) {

                drop({
                    id,
                    setErrors
                })
            }
        })
    }

    /***********************************************
     * モーダル設定
     ***********************************************/
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(editCardID) {

        if (editCardID) {
            setEditCard(
                cards.filter(card => (
                    card.id === editCardID
                ))[0]
            )
        } else {
            setEditCard(null)
        }

        setIsOpen(true)
    }
    useEffect(() => {
        //console.log(editCard)
    }, [editCard])

    function afterOpenModal() {
        // 参照が同期され、アクセスできるようになりました。
    }

    function closeModal() {
        mutate()
        setIsOpen(false)
    }

    ///////////////////////////////////////////////////

    if (!cards) return <Loading isShow={true} />

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
                    <Button onClick={() => openModal(null)} className="text-xl">+</Button>
                </div>
            </div>

            <div className="flex flex-wrap items-start justify-start">

                {/* カードリスト */}
                {cards?.map((card, index) => (
                    <div key={index} className="w-[100%] md:w-[50%] md:px-4 lg:px-6 my-4">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6">

                                <Default
                                    card={card}
                                />

                                <div className="pt-6 flex flex-wrap items-center justify-end">
                                    <div className="mx-4">
                                        QRコード
                                    </div>
                                    <div className="mx-4">
                                        <Link href={`/card?uuid=${card.uuid}`}>
                                            <a className="flex items-center justify-between">
                                                プレビュー
                                            </a>
                                        </Link>
                                    </div>
                                    <div onClick={() => dropCard(card.id)} className="mx-4">
                                        削除
                                    </div>
                                    <div onClick={() => openModal(card.id)} className="mx-4">
                                        編集
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Card Store Modal"
            >   
                <CardForm
                    editCard={editCard}
                    closeModal={closeModal}
                ></CardForm>
            </Modal>

        </AppLayout>
    )
}

export default Mypage
