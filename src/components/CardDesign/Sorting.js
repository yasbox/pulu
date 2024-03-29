import Link from 'next/link'

const Sorting = ({ card }) => (
    <>
        {card.organization_name &&
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
        }

        {!card.organization_name &&
            <div className="px-6 py-4 flex items-center justify-center">

                {card.face_photo &&
                    <div className="m-2">
                        <img
                            className="object-contain object-center m-auto"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${card.face_photo}`}
                            width={50}
                            height={50}
                        />
                    </div>
                }

                <div className="w-full sm:w-auto sm:ml-8 my-0">

                    {card.name &&
                        <div className="py-2 text-center text-xl sm:text-4xl font-bold tracking-widest break-words">
                            {card.name}
                        </div>
                    }
                    {card.name_kana &&
                        <div className="text-sm text-center tracking-[.3em] break-words">
                            {card.name_kana}
                        </div>
                    }

                </div>
            </div>
        }
        
    </>
)

export default Sorting
