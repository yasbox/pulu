import Link from 'next/link'

const Footer = () => {

    return (
        <footer>
            <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
                <hr className="my-2 opacity-25" />

                <div className="py-1 sm:py-3 lg:py-4 flex items-center justify-center sm:justify-end">
                    <div className="p-2">
                        <Link href="/profile" legacyBehavior>
                            <a className="text-sm text-gray-200">
                                運営
                            </a>
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link href="/policy" legacyBehavior>
                            <a className="text-sm text-gray-200">
                                プライバシーポリシー
                            </a>
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link href="/terms" legacyBehavior>
                            <a className="text-sm text-gray-200">
                                ご利用規約
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="py-4 sm:py-6 lg:py-8 flex items-center justify-center">
                    <Link href="/" legacyBehavior>
                        <a className="text-xs text-white/80">
                            <span className="mr-2 text-xs text-white/60">Copyright</span>{process.env.NEXT_PUBLIC_APP_NAME}
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
