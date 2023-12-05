import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import useSWR from 'swr'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import MyModal, { MyModal_dark } from '@/components/Modules/MyModal'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import Loading from '@/components/Modules/Loading'
import autoprefixer from 'autoprefixer'
import Default from '@/components/CardDesign/Default'
import Sorting from '@/components/CardDesign/Sorting'
import { useCard } from '@/hooks/card'
import Swal from 'sweetalert2'
import MyButton, { MyButton_lg, MyButton_sm, MyButton_add } from '@/components/Modules/MyButton'
import { QRCodeSVG } from "qrcode.react"
import { useAuth } from '@/hooks/auth'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import classNames from 'classnames'

const pageTitle = 'マイ名刺'

/***********************************************
 * モーダル設定
 ***********************************************/
const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: "10"
    },
    content: {
        inset: 10,
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 600,
    },
}
Modal.setAppElement('body')



// ドラッグ&ドロップした要素を入れ替える
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

/* // ドラッグ&ドロップの質問のスタイル
const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "#757ce8" : "white",
    ...draggableStyle
})
// ドラッグ&ドロップのリストのスタイル
const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#1769aa" : "lightgrey",
    padding: "10px"
}) */



const home = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const [editCard, setEditCard] = useState(null)
    const [errors, setErrors] = useState([])
    const [isModalOpenFlag, setIsModalOpenFlag] = useState(false)
    const [qrURL, setQrURL] = useState('')
    const [cardboxs, setCardboxs] = useState(null)
    const [isSortMode, setIsSortMode] = useState(false)
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    const { data: cards, error, mutate } = useSWR('/api/card/all', () =>
        axios
            .get('/api/card/all')
            .then(res => res.data)
            .catch(error => {
                //console.error(error)
                throw error
            })
    )
    useEffect(() => {
        //console.log(cards)

        setCardboxs(cards)
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
            /* icon: 'warning', */
            showCancelButton: true,
            confirmButtonText: '削除する',
            cancelButtonText: 'キャンセル',
            customClass: {
                confirmButton: 'bg-gray-100 text-black font-semibold rounded-full',
                cancelButton: 'bg-gray-100 text-black font-semibold rounded-full',
            }
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

    /***********************************************
     * カードソート
     ***********************************************/
    const onDragEnd = (result) => {
        // ドロップ先がない
        if (!result.destination) {
            return
        }
        // 配列の順序を入れ替える
        let sortedItems = reorder(
            cardboxs, //　順序を入れ変えたい配列
            result.source.index, // 元の配列の位置
            result.destination.index // 移動先の配列の位置
        )
        setCardboxs(sortedItems)
    }

    const { sort } = useCard({
        funcIfSuccess: mutate,
    })

    function onSortButton() {
        if (isSortMode) {
            sort({
                cardboxs,
                setErrors
            })
        }
        
        setIsSortMode(isSortMode ? false : true)
    }

    /**
     * モバイル時のカード追加ボタンの位置調整
     */
    const toggleAddBottonPosition = (target) => {
        // IntersectionObserver : 見えてるかどうか判別
        const observer = new IntersectionObserver((entries) => {
            for (const e of entries) {
                setIsFooterVisible(e.isIntersecting)
            }
        })
        observer.observe(target[0])
    }
    useEffect(() => {
        let abortCtrl = new AbortController() // エラー対策(Can't perform a React state update on an unmounted component.)

        let target = document.getElementsByTagName('footer')
        if (target.length === 0) return

        toggleAddBottonPosition(target)
        window.addEventListener('scroll', toggleAddBottonPosition(target))

        // エラー対策(Can't perform a React state update on an unmounted component.)
        return () => {
            abortCtrl.abort()
        }
    })

    if (!cards || !cardboxs) return <Loading isShow={true} />

    return (
        <AppLayout
            header={
                {/* <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {pageTitle}
                </h2> */}
            }>

            <Head>
                <title>{`${process.env.NEXT_PUBLIC_APP_NAME} - ${pageTitle}`}</title>
            </Head>

            {cards.length === 0 &&
                <div className="pt-20  max-w-2xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                    <div className="m-4 sm:m-6 text-2xl text-white/50 text-center">
                        名刺がありません
                    </div>
                    <div className="m-4 sm:m-6 text-base text-white/50 text-center">
                        + ボタンから作成できます
                    </div>
                </div>
            }

            {!isSortMode &&
                <div className="fixed sm:static bottom-0 sm:bottom-auto w-full max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap items-center justify-end sm:justify-center pointer-events-none">
                    <div className={classNames({ 'mb-[100px]': isFooterVisible }, "p-6 sm:mb-0 transition-all ease-in-out duration-1000 pointer-events-auto")}>
                        <MyButton_add
                            onClick={() => openModal(null)}
                        >
                            +
                        </MyButton_add>
                    </div>
                </div>
            }

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden flex flex-wrap items-center justify-end">
                <div className="m-4 sm:m-6">
                    {cards.length > 1 &&
                        <div
                            className="text-white text-base sm:text-lg cursor-pointer"
                            onClick={() => onSortButton()}
                        >
                            {isSortMode ? '終了' : '並べ替え'}
                        </div>
                    }
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-24">

                {/* カードリスト */}
                {!isSortMode &&
                    <div className="flex flex-wrap items-start justify-start">
                    {cards?.map((card, index) => (
                        <div key={index} className="w-[100%] lg:w-[50%] px-2 md:px-4 lg:px-6 mb-8">
                            <div className="bg-white overflow-hidden shadow-lg rounded-lg">

                                {/* <div className="pt-2 pr-2 text-xs text-gray-400 text-right">
                                    ID:{card.id}
                                </div> */}

                                <div className="hidden sm:block">
                                    <Default
                                        card={card}
                                    />
                                </div>

                                <div className="block sm:hidden">
                                    <Sorting
                                        card={card}
                                    />
                                </div>

                                <hr />

                                <div className="p-4 flex items-center justify-around">

                                    <div className="flex items-center justify-center">
                                        <div
                                            className="pt-2 px-4 min-w-[70px] bg-white border border-transparent rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
                                            onClick={() => openQrModal(card.uuid)}
                                        >
                                            <img
                                                className="object-contain object-center m-auto"
                                                src={'/images/qr.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <div className='mt-2 text-[10px] sm:text-[12px] text-gray-500 text-center'>QRコード</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <Link href={`/card/?uuid=${card.uuid}`} legacyBehavior>
                                            <a target="blanck_">
                                                <div className="pt-2 px-4 min-w-[70px] bg-white border border-transparent rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150">
                                                    <img
                                                        className="object-contain object-center m-auto"
                                                        src={'/images/preview.png'}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <div className='mt-2 text-[10px] sm:text-[12px] text-gray-500 text-center'>プレビュー</div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <div
                                            className="pt-2 px-4 min-w-[70px] bg-white border border-transparent rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
                                            onClick={() => dropCard(card.id)}
                                        >
                                            <img
                                                className="object-contain object-center m-auto"
                                                src={'/images/trash.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <div className='mt-2 text-[10px] sm:text-[12px] text-gray-500 text-center'>削除</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <div
                                            className="pt-2 px-4 min-w-[70px] bg-white border border-transparent rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
                                            onClick={() => openModal(card.id)}
                                        >
                                            <img
                                                className="object-contain object-center m-auto"
                                                src={'/images/edit.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <div className='mt-2 text-[10px] sm:text-[12px] text-gray-500 text-center'>編集</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                }

                {/* ソートモード用 */}
                {isSortMode &&
                    <DragDropContext onDragEnd={onDragEnd}>
                        {/* ドロップできる範囲 */}
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div className="flex flex-wrap items-start justify-start"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                /* style={getListStyle(snapshot.isDraggingOver)} */
                                >
                                    {/*　ドラッグできる要素　*/}
                                    {cardboxs.map((cardbox, index) => (
                                        <Draggable
                                            key={cardbox.id}
                                            draggableId={"q-" + cardbox.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div className="w-[100%] lg:w-[50%] px-2 md:px-4 lg:px-6 mb-8"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                /* style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )} */
                                                >
                                                    <div className="relative max-h-[200px] sm:max-h-[300px] bg-white overflow-hidden shadow-lg rounded-lg">
                                                        <Sorting
                                                            card={cardbox}
                                                        />
                                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
                                                            <div className="text-8xl text-white font-bold">
                                                                {index + 1}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                }
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

export default home
