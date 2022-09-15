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
        formData.append('face_photo', props.face_photo ? props.face_photo[0] : '')
        formData.append('organization_logo', props.organization_logo ? props.organization_logo[0] : '')
        formData.append('image_photo', props.image_photo ? props.image_photo[0] : '')

        //console.log(...formData.entries())

        setErrors([])

        axios
            .post('/api/card/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(() => { funcIfSuccess() })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const drop = async ({ setErrors, ...props }) => {
        //await csrf()

        // フォームオブジェクトに変換
        const formData = new FormData()
        formData.append('id', props.id)

        setErrors([])

        axios
            .post('/api/card/drop', formData)
            .then(() => { funcIfSuccess() })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const sort = async ({ setErrors, ...props }) => {
        //await csrf()

        const sortedCards = {
            'sortedCards': JSON.stringify(props.cardboxs)
        }

        setErrors([])

        axios
            .post('/api/card/sort', sortedCards, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(() => { funcIfSuccess() })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    return {
        store,
        drop,
        sort,
    }
}
