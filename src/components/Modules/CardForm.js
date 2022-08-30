import { useEffect, useState } from 'react'
import Input from '@/components/Input'
import { MyButton_lg, MyButton_sm } from '@/components/Modules/MyButton'
import Label from '@/components/Label'
import { useCard } from '@/hooks/card'
import Loading from '@/components/Modules/Loading';

const CardForm = ({ closeModal }) => {

    const { store } = useCard({
        funcIfSuccess: closeModal,
    })

    const [name, setName] = useState('')
    const [name_kana, setName_kana] = useState('')
    const [face_photo, setFace_photo] = useState('')
    const [organization_name, setOrganization_name] = useState('')
    const [organization_logo, setOrganization_logo] = useState('')
    const [position_name, setPosition_name] = useState('')
    const [zip, setZip] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [tel2, setTel2] = useState('')
    const [fax, seFax] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [image_photo, setImage_photo] = useState('')
    const [sort_num, setSort_num] = useState('')
    const [valid, setValid] = useState('')

    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        store({
            name,
            name_kana,
            face_photo,
            organization_name,
            organization_logo,
            position_name,
            zip,
            address,
            tel,
            tel2,
            fax,
            email,
            description,
            image_photo,
            sort_num,
            valid,
            setErrors
        })
    }

    return (
        <div className="max-w-lg mx-auto sm:px-6 lg:px-8">
            <div className="bg-white">
                <form onSubmit={submitForm}>

                    <div className="py-4 bg-white border-b sticky top-[-20px]">
                        <div className="flex items-center justify-between">
                            <button onClick={closeModal}>キャンセル</button>
                            <span className="text-base sm:text-lg font-bold text-gray-900">
                                名刺
                            </span>
                            <button type="submit">保存</button>
                        </div>
                    </div>

                    <div className="py-4">

                        <div className="my-4">
                            <Label htmlFor="name" className="text-sm sm:text-base text-gray-900">氏名<span className="text-xs font-normal">（アルファベット２文字程度）お客様には表示されません</span></Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setName(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="name_kana" className="text-sm sm:text-base text-gray-900">氏名（ふりがな）</Label>
                            <Input
                                id="name_kana"
                                type="text"
                                name="name_kana"
                                value={name_kana}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setName_kana(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="face_photo" className="text-sm sm:text-base text-gray-900">顔写真</Label>
                            <Input
                                id="face_photo"
                                type="text"
                                name="face_photo"
                                value={face_photo}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setFace_photo(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="organization_name" className="text-sm sm:text-base text-gray-900">会社・組織・団体名</Label>
                            <Input
                                id="organization_name"
                                type="text"
                                name="organization_name"
                                value={organization_name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setOrganization_name(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="organization_logo" className="text-sm sm:text-base text-gray-900">ロゴ</Label>
                            <Input
                                id="organization_logo"
                                type="text"
                                name="organization_logo"
                                value={organization_logo}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setOrganization_logo(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="position_name" className="text-sm sm:text-base text-gray-900">役職等</Label>
                            <Input
                                id="position_name"
                                type="text"
                                name="position_name"
                                value={position_name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setPosition_name(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="zip" className="text-sm sm:text-base text-gray-900">郵便番号</Label>
                            <Input
                                id="zip"
                                type="text"
                                name="zip"
                                value={zip}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setZip(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="address" className="text-sm sm:text-base text-gray-900">住所</Label>
                            <Input
                                id="address"
                                type="text"
                                name="address"
                                value={address}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setAddress(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="tel" className="text-sm sm:text-base text-gray-900">TEL</Label>
                            <Input
                                id="tel"
                                type="text"
                                name="tel"
                                value={tel}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setTel(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="tel2" className="text-sm sm:text-base text-gray-900">TEL2</Label>
                            <Input
                                id="tel2"
                                type="text"
                                name="tel2"
                                value={tel2}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setTel2(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="fax" className="text-sm sm:text-base text-gray-900">FAX</Label>
                            <Input
                                id="fax"
                                type="text"
                                name="fax"
                                value={fax}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setFax(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="email" className="text-sm sm:text-base text-gray-900">メールアドレス</Label>
                            <Input
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="description" className="text-sm sm:text-base text-gray-900">説明</Label>
                            <Input
                                id="description"
                                type="text"
                                name="description"
                                value={description}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setDescription(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="image_photo" className="text-sm sm:text-base text-gray-900">イメージ写真</Label>
                            <Input
                                id="image_photo"
                                type="text"
                                name="image_photo"
                                value={image_photo}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setImage_photo(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="sort_num" className="text-sm sm:text-base text-gray-900">優先順位</Label>
                            <Input
                                id="sort_num"
                                type="text"
                                name="sort_num"
                                value={sort_num}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setSort_num(event.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="valid" className="text-sm sm:text-base text-gray-900">有効/無効</Label>
                            <Input
                                id="valid"
                                type="text"
                                name="valid"
                                value={valid}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setValid(event.target.value)}
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardForm
