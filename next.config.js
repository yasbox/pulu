
// ホットリロードが効かない場合の対処
module.exports = {
    //reactStrictMode: true,
    //webpackDevMiddleware: config => {
    webpack: config => {
        config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300,
            ignored: /node_modules/,
        }
        return config
    },
    trailingSlash: true,

    images: {
        domains: [process.env.NEXT_PUBLIC_BACKEND_HOSTNAME],
    },

    compiler: {
        styledComponents: {
            "ssr": true
        },
    },

    output: 'export',

    /* assetPrefix: "/sub",
    basePath: "/sub", */


    /* async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME },
                ],
            },
        ]
    }, */

    /* async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME + '/:path*',
            },
        ]
    }, */
}


// module.exports = {
//     reactStrictMode: true,
//     watchers: {
//         webpack: {
//             poll: true
//         }
//     }
// }