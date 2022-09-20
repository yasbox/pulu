import Head from 'next/head'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Modal from 'react-modal'
import Link from 'next/link'
import Arrow from '@/components/Modules/Arrow'
import Loading from '@/components/Modules/Loading'
import Default from '@/components/CardDesign/Default' 

const pageTitle = 'クラウド名刺'

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

    const router = useRouter()
    const [cardsTemp, setCardsTemp] = useState(null)

    //if (!router.isReady) return <Loading isShow={true} />

    const { data: cards, error, mutate } = useSWR(router.query.uuid ? `/api/card/uuid/${router.query.uuid}` : null, () =>
        axios
            .get(`/api/card/uuid/${router.query.uuid}`)
            .then(res => res.data)
            .catch(error => {
                console.error(error)
                throw error
            })
    )
    useEffect(() => {
        setCardsTemp(cards)
        console.log(cards)
    }, [cards])

    /**
     * モーダル設定
     */////////////////////////////////////////////////
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // 参照が同期され、アクセスできるようになりました。
    }

    function closeModal() {
        setIsOpen(false)
    }
    ///////////////////////////////////////////////////


    const changeCardsSort = (card_id) => {
        setCardsTemp(null)
        setTimeout(() => {
            setCardsTemp(() => {
                let sortedCards = cardsTemp.filter((card) => card.id !== card_id)
                sortedCards.unshift(cards.filter((card) => card.id === card_id)[0])
                return sortedCards
            })
        }, 500)
    }

    if (!cardsTemp) return <Loading isShow={true} />
    
    return (
        <>
            <Head>
                <title>{cardsTemp[0].name ? cardsTemp[0].name : pageTitle} - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <main className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="w-full pb-16 flex items-center justify-center min-h-screen">
                    <div className="w-full max-w-3xl mx-auto py-4 px-1 sm:px-6 lg:px-8">
                        <div className="sm:p-6 bg-white overflow-hidden shadow-lg rounded-lg divide-y divide-slate-200">

                            {cardsTemp.map((card, index) =>
                                <div key={index}>

                                    {index === 0 ?
                                        <>
                                            <Default
                                                card={card}
                                            />
                                            {cardsTemp.length > 1 &&
                                                <div className="mt-6 p-6 text-base text-gray-500">
                                                    その他の名刺
                                                </div>
                                            }
                                        </>
                                        :
                                        <div
                                            className="px-6 py-4 flex items-center justify-between cursor-pointer"
                                            onClick={() => changeCardsSort(card.id)}
                                        >
                                            <div className="">
                                                <div className="text-lg font-bold">
                                                    {card.organization_name}
                                                </div>
                                                <div className="text-base">
                                                    {card.position_name}
                                                </div>
                                                {(card.organization_name === '' && card.position_name === '') &&
                                                    <div className="text-lg font-bold">
                                                        {card.name}
                                                    </div>
                                                }
                                            </div>
                                            <Arrow />
                                        </div>
                                    }

                                </div>
                            )}

                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full px-2 py-4 sm:py-8 flex items-center justify-center">
                    <Link href="/">
                        <a className="text-sm text-white/80">
                            <span className="mr-2 text-xs text-white/60">Powerd by</span>{process.env.NEXT_PUBLIC_APP_NAME}
                        </a>
                    </Link>
                </div>
            </main>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Card Store Modal"
            >   
                モーダル
            </Modal>

        </>
    )
}

export default Card
