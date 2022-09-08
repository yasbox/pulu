import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title></title>
            </Head>

            <div className="min-h-screen bg-gray-100">
                <div className="font-sans text-gray-900 antialiased">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default GuestLayout
