import Link from 'next/link'

const Footer = () => {

    return (
        <footer>
            <div className="w-full px-2 py-4 sm:py-8 flex items-center justify-center">
                <Link href="/">
                    <a className="text-sm text-white/80">
                        <span className="mr-2 text-xs text-white/60">Copyright</span>{process.env.NEXT_PUBLIC_APP_NAME}
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
