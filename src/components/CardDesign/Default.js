import Link from 'next/link'

const Default = ({ card }) => (
    <>
        <div className="px-6 py-6 flex items-start">
            {card.organization_logo &&
                <div className="mr-4 w-[70px] h-[60px]">
                    <img
                        className="object-contain h-full"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${card.organization_logo}`}
                    />
                </div>
            }

            <div className="grow">
                {card.organization_name &&
                    <div className="py-1 text-lg sm:text-xl font-bold break-words">
                        {card.organization_name}
                    </div>
                }

                {card.position_name &&
                    <div className="py-1 text-base break-words">
                        {card.position_name}
                    </div>
                }
            </div>
            
        </div>

        <div className="px-6 py-6 flex flex-wrap sm:flex-nowrap items-center justify-center">

            {card.face_photo &&
                <div className="m-3">
                    <img
                        className="w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] object-contain object-center m-auto"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${card.face_photo}`}
                    />
                </div>
            }
            
            <div className="w-full sm:w-auto sm:ml-8 my-3">

                {card.name &&
                    <div className="py-2 text-[min(8vw,2rem)] sm:text-4xl font-bold tracking-widest text-center break-words">
                        {card.name}
                    </div>
                }
                {card.name_kana &&
                    <div className="text-sm tracking-[.3em] text-center break-words">
                        {card.name_kana}
                    </div>
                }
                
            </div>
        </div>

        <div className="px-6 pb-6">
            <div className="py-2">

                {card.zip &&
                    <div className="text-sm">
                        〒{card.zip}
                    </div>
                }

                {card.address &&
                    <div className="text-base font-bold break-words">
                        {card.address}
                    </div>
                }
                
            </div>

            {card.tel &&
                <div className="text-sm tracking-widest">
                    TEL　{card.tel}
                </div>
            }

            {card.tel2 &&
                <div className="text-sm tracking-widest">
                    TEL　{card.tel2}
                </div>
            }

            {card.fax &&
                <div className="text-sm tracking-widest">
                    FAX　{card.fax}
                </div>
            }

            {card.email &&
                <div className="text-sm tracking-widest break-words">
                    E-mail　{card.email}
                </div>
            }

            {card.site &&
                <div className="py-2">
                    <Link href={`${card.site}`} className="" legacyBehavior>
                        <a className="text-md tracking-widest text-mylinkcolor break-all">
                            {card.site}
                        </a>
                    </Link>
                </div>
            }
            
        </div>

        {card.description &&
            <div className="px-6 py-6 text-sm border-t border-b border-gray-200/100 whitespace-pre-wrap break-all">
                {card.description}
            </div>
        }
        
    </>
)

export default Default
