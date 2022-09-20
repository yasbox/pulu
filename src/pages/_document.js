import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="bg-mybgcolor">
                <Head>

                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-42CSGPYBBH"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-42CSGPYBBH');
                        `}
                    </Script>
                    <meta name="google-site-verification" content="RZfzMxJjlyNSKuxjSxNKSBsu3Ko4s4pYcbTD6vfXU6w" />
                    {/* <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                            ga('create', 'UA-XXXXX-Y', 'auto');
                            ga('send', 'pageview');
                        `}
                    </Script> */}

                    <link
                        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#142a52" />
                    <meta name="msapplication-TileColor" content="#142a52" />
                    <meta name="theme-color" content="#142a52" />
                    <meta name="description" content="「ぷる」は、デジタル名刺を簡単に作成できる無料のサービスです。クラウド管理でいつでもどこでも編集・閲覧可能。QRコードを読み取ってもらうだけですぐに相手に送れます！"></meta>
                </Head>
                <body className="antialiased bg-gradient-to-tr from-mylightcolor to-mydarkcolor">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
