import Head from 'next/head'
import Navigation from '@/components/Layouts/Navigation'

const GuestLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Navigation />

            {/* Page Content */}
            <main className="grow">{children}</main>
        </div>
    )

    {/* <div>
            <Head>
                <title></title>
            </Head>

            <div className="min-h-screen bg-gray-100">
                <div className="font-sans text-gray-900 antialiased">
                    {children}
                </div>
            </div>
            
        </div> */}
}

export default GuestLayout
