import Head from 'next/head'
import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Loading from '@/components/Modules/Loading'

const GuestLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="flex min-h-screen">
            <Navigation user={user ? user : null} />

            {/* Page Content */}
            <main className="grow pt-16">{children}</main>
        </div>
    )

    {/* <div>
            <Head>
                <title></title>
            </Head>

            <div className="min-h-screen bg-mylightcolor">
                <div className="font-sans text-gray-900 antialiased">
                    {children}
                </div>
            </div>
            
        </div> */}
}

export default GuestLayout
