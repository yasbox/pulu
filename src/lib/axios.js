import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        /* 'content-type': 'application/json' */
        /* 'X-CSRF-TOKEN': window.csrf_token */
        /* 'Access-Control-Allow-Origin': '*', */
    },
    withCredentials: true,
    withXSRFToken: true, // axios 1.6.2 以降で必要
})

export default axios
