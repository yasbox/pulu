const Modal = ({ title, openFlag, setOpenFlag, closeButton, children }) => {

    return (
        <section>
            <div className={(openFlag ? "opacity-100" : "opacity-0 pointer-events-none") + " transition-all ease-in-out duration-700 bg-black bg-opacity-90 fixed top-0 left-0 w-full min-h-screen h-full flex items-start justify-center px-2 pt-12 pb-5 overflow-scroll z-20"}>
                <div className="relative w-full max-w-[980px] rounded-[20px] bg-white pt-12 pb-6 px-4 md:py-[60px] md:px-[70px] text-black">

                    <div className="modalHeader">

                        <h3 className="w-full font-bold text-dark text-xl sm:text-2xl pr-14">
                            {title}
                        </h3>

                        {closeButton === true &&
                            <div className="flex items-center justify-center absolute top-3 right-3 w-[50px] h-[50px] cursor-pointer rounded-full bg-black bg-opacity-10" onClick={() => setOpenFlag(false)}>
                                <div className="relative w-[25px] h-[2px] align-middle text-inherit leading-none bg-slate-400 rotate-45 inline-block pointer-events-none">
                                    <div className="before:content-[''] before:absolute top-0 right-0 w-full h-full text-inherit leading-none bg-inherit rounded-sm rotate-90">
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div>

                    <div className="modalBody pt-8">
                        {children}
                    </div>

                </div>
            </div>
        </section>
    )
}

export const Modal_dark = ({ title, openFlag, setOpenFlag, closeButton, children }) => {

    return (
        <section>
            <div className={(openFlag ? "opacity-100" : "opacity-0 pointer-events-none") + " transition-all ease-in-out duration-700 bg-black bg-opacity-90 fixed top-0 left-0 w-full min-h-screen h-full flex items-start justify-center px-2 pt-12 pb-5 overflow-scroll z-20"}>
                <div className="relative w-full max-w-[980px] rounded-[20px] bg-mybgcolor pt-12 pb-6 px-4 md:py-[60px] md:px-[70px] text-white">

                    <div className="modalHeader">

                        <h3 className="w-full font-bold text-dark text-xl sm:text-2xl pr-14">
                            {title}
                        </h3>

                        {closeButton === true &&
                            <div className="flex items-center justify-center absolute top-3 right-3 w-[50px] h-[50px] cursor-pointer rounded-full bg-white bg-opacity-10" onClick={() => setOpenFlag(false)}>
                                <div className="relative w-[25px] h-[2px] align-middle text-inherit leading-none bg-slate-400 rotate-45 inline-block pointer-events-none">
                                    <div className="before:content-[''] before:absolute top-0 right-0 w-full h-full text-inherit leading-none bg-inherit rounded-sm rotate-90">
                                    </div>
                                </div>
                            </div>
                        }

                    </div>

                    <div className="modalBody">
                        {children}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Modal
