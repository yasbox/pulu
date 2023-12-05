import AuthCard from '@/components/AuthCard'
import MyButton, { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Unregister = () => {
    const { user, del } = useAuth({
        middleware: 'auth',
    })

    const [id, setId] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if(!user) return
        setId(user.id)
    }, [user])

    const submitForm = event => {
        event.preventDefault()

        Swal.fire({
            title: '本当に解除しますか？',
            showCancelButton: true,
            confirmButtonText: '解除する',
            cancelButtonText: 'キャンセル',
            customClass: {
                confirmButton: 'bg-gray-100 text-black font-semibold rounded-full',
                cancelButton: 'bg-gray-100 text-black font-semibold rounded-full',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                del({ id, setErrors })
            }
        })
    }

    return (
        <AppLayout>
            <Head>
                <title>{`${process.env.NEXT_PUBLIC_APP_NAME} - 登録解除`}</title>
            </Head>

            <div className="my-4 sm:my-16 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className='text-xl font-bold text-mytextcolor'>
                    登録解除
                </div>
                <div className="w-full sm:max-w-md mt-6 p-6 sm:p-12 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    
                    <form onSubmit={submitForm}>
                        <input type="hidden" name="id" value={id} />

                        <div>
                            <p>アカウントの登録を解除します。</p>
                            <p className='my-2 text-sm text-gray-500'>アカウント情報とすべての名刺データが削除されます。元に戻すことはできません。</p>
                            <InputError messages={errors.name} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <MyButton_sm
                                type='submit'
                                className="ml-4 bg-gray-100"
                            >
                                解除する
                            </MyButton_sm>
                        </div>
                    </form>
                </div>
            </div>

        </AppLayout>
    )
}

export default Unregister
