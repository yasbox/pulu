import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useCard = ({ funcIfSuccess } = {}) => {
    const router = useRouter()

    //const csrf = () => axios.get('/sanctum/csrf-cookie')

    const store = async ({ setErrors, ...props }) => {
        //await csrf()

        // フォームオブジェクトに変換
        const formData = new FormData()
        for (let key in props) {
            formData.append(key, props[key])
        }
        //console.log(...formData.entries())

        setErrors([])

        axios
            .post('/api/card/store', formData)
            .then(() => { funcIfSuccess() })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }


    return {
        store,
    }
}
