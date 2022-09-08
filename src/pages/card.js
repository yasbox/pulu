import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Modal from 'react-modal'
import Button from '@/components/Button'
import Link from 'next/link'
import CardForm from '@/components/Modules/CardForm'
import autoprefixer from 'autoprefixer'
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
        //console.log(cards)
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
        setIsOpen(false);
    }
    ///////////////////////////////////////////////////

    if (!cards) return <Loading isShow={true} />
    
    return (
        <GuestLayout>

            <Head>
                <title>{cards[0].name ? cards[0].name : pageTitle} - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="sm:p-6 max-w-4xl mx-auto bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                        {cards.map((card, index) =>
                            <div key={index}>

                                {index === 0 ?
                                    <Default
                                        card={card}
                                    />
                                    :
                                    <div className="px-6 py-4 border-b border-gray-200/100">
                                        <Link href={`/group?uuid=${card.uuid}`}>
                                            <a className="flex items-center justify-between">
                                                <div>
                                                    <div className="text-lg font-bold">
                                                        {card.organization_name}
                                                    </div>
                                                    <div className="text-base">
                                                        {card.position_name}
                                                    </div>
                                                    {(card.organization_name === '' && card.position_name === '') &&
                                                        <div className="text-lg font-bold">
                                                            {card.position_name}
                                                        </div>
                                                    }
                                                </div>
                                                <Arrow/>
                                            </a>
                                        </Link>
                                    </div>
                                }
                                
                            </div>
                        )}
                        
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
