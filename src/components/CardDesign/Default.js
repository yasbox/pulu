import Link from 'next/link'

const Default = ({ card }) => (
    <>
        <div className="px-6 py-6 flex items-start">
            {card.organization_logo &&
                <div className="mr-4 w-[60px] h-[60px]">
                    <img
                        className="object-contain h-full"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${card.organization_logo}`}
                    />
                </div>
            }

            <div className="grow">
                {card.organization_name &&
                    <div className="py-1 text-lg sm:text-xl font-bold">
                        {card.organization_name}
                    </div>
                }

                {card.position_name &&
                    <div className="py-1 text-base">
                        {card.position_name}
                    </div>
                }
            </div>
            
        </div>

        <div className="px-6 py-6 flex flex-wrap items-center justify-center">

            {card.face_photo &&
                <div className="my-3">
                    <img
                        className="object-contain object-center m-auto"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${card.face_photo}`}
                        width={100}
                        height={100}
                    />
                </div>
            }
            
            <div className="mx-8 my-3">

                {card.name &&
                    <div className="py-2 text-center text-4xl font-bold tracking-widest">
                        {card.name}
                    </div>
                }
                {card.name_kana &&
                    <div className="text-sm text-center tracking-[.3em]">
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
                    <div className="text-base font-bold">
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
                <div className="text-sm tracking-widest">
                    E-mail　{card.email}
                </div>
            }

            {card.site &&
                <div className="py-2">
                    <Link href={`${card.site}`} className="">
                        <a className="text-md tracking-widest text-mylinkcolor">
                            {card.site}
                        </a>
                    </Link>
                </div>
            }
            
        </div>

        {card.description &&
            <div className="px-6 py-6 text-sm border-t border-b border-gray-200/100 whitespace-pre-wrap">
                {card.description}
            </div>
        }
        
    </>
)

export default Default
