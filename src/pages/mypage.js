import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import useSWR from 'swr'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import MyModal, { MyModal_dark } from '@/components/Modules/MyModal'
import Button from '@/components/Button'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import Loading from '@/components/Modules/Loading'
import autoprefixer from 'autoprefixer'
import Default from '@/components/CardDesign/Default'
import { useCard } from '@/hooks/card'
import Swal from 'sweetalert2'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import { QRCodeSVG } from "qrcode.react"
import { useAuth } from '@/hooks/auth'

const pageTitle = 'マイ名刺'

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
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const [editCard, setEditCard] = useState(null)
    const [errors, setErrors] = useState([])
    const [isModalOpenFlag, setIsModalOpenFlag] = useState(false)
    const [qrURL, setQrURL] = useState('')

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

    // QRコードモーダルを開く
    const openQrModal = async (uuid) => {

        setQrURL(`${document.URL.replace(router.pathname, '')}card?uuid=${uuid}`)

        setIsModalOpenFlag(true)
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
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - {pageTitle}</title>
            </Head>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                <div className="m-6 text-right">
                    <MyButton_add
                        onClick={() => openModal(null)}
                    >
                        +
                    </MyButton_add>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:pb-8 lg:pb-10 overflow-hidden flex flex-wrap items-start justify-start">

                {/* カードリスト */}
                {cards?.map((card, index) => (
                    <div key={index} className="w-[100%] lg:w-[50%] md:px-4 lg:px-6 mb-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                            <Default
                                card={card}
                            />

                            <hr />

                            <div className="p-4 flex items-center justify-around">

                                <MyButton_sm onClick={() => openQrModal(card.uuid)}>
                                    QR
                                </MyButton_sm>

                                <Link href={`/card/?uuid=${card.uuid}`}>
                                    <a target="blanck_">
                                        <MyButton_sm>
                                            プレビュー
                                        </MyButton_sm>
                                    </a>
                                </Link>

                                <MyButton_sm onClick={() => dropCard(card.id)}>
                                    削除
                                </MyButton_sm>

                                <MyButton_sm onClick={() => openModal(card.id)}>
                                    編集
                                </MyButton_sm>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            
            {/* カード登録編集モーダル */}
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

            {/* QRコードモーダル */}
            <MyModal
                openFlag={isModalOpenFlag}
                setOpenFlag={setIsModalOpenFlag}
                closeButton={true}
            >
                <div className="flex items-center justify-center">
                    <QRCodeSVG
                        value={qrURL}
                        size="256"
                    />
                </div>
            </MyModal>

        </AppLayout>
    )
}

export default Mypage
