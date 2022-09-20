import Navigation from '@/components/Layouts/Navigation'
import Footer from '@/components/Layouts/Footer'
import { useAuth } from '@/hooks/auth'
import Loading from '@/components/Modules/Loading'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    
    if (!user) return <Loading isShow={true} />

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation user={user} />

            {/* Page Heading */}
            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header> */}

            {/* Page Content */}
            <main className="grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
