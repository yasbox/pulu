import { useEffect, useState } from 'react'
import Input from '@/components/Input'
import MyButton, { MyButton_lg, MyButton_md, MyButton_sm } from '@/components/Modules/MyButton'
import Label from '@/components/Label'
import { useCard } from '@/hooks/card'
import InputError from '@/Components/InputError'
import Loading from '@/components/Modules/Loading';

const CardForm = ({ editCard, closeModal }) => {

    const [uuid, setUuid] = useState(editCard ? editCard.uuid : '')
    const [name, setName] = useState(editCard ? editCard.name : '')
    const [name_kana, setName_kana] = useState(editCard ? editCard.name_kana : '')
    const [face_photo, setFace_photo] = useState(editCard ? editCard.face_photo : null)
    const [organization_name, setOrganization_name] = useState(editCard ? editCard.organization_name : '')
    const [organization_logo, setOrganization_logo] = useState(editCard ? editCard.organization_logo : null)
    const [position_name, setPosition_name] = useState(editCard ? editCard.position_name : '')
    const [zip, setZip] = useState(editCard ? editCard.zip : '')
    const [address, setAddress] = useState(editCard ? editCard.address : '')
    const [tel, setTel] = useState(editCard ? editCard.tel : '')
    const [tel2, setTel2] = useState(editCard ? editCard.tel2 : '')
    const [fax, seFax] = useState(editCard ? editCard.fax : '')
    const [email, setEmail] = useState(editCard ? editCard.email : '')
    const [site, setSite] = useState(editCard ? editCard.site : '')
    const [description, setDescription] = useState(editCard ? editCard.description : '')
    //const [image_photo, setImage_photo] = useState(editCard ? editCard.image_photo : null)
    //const [sort_num, setSort_num] = useState(editCard ? editCard.sort_num : '')
    const [is_list, setIs_list] = useState(editCard ? String(editCard.is_list) : '0')
    const [is_share, setIs_share] = useState(editCard ? String(editCard.is_share) : '0')
    const [face_photo_pre, setFace_photo_pre] = useState(editCard ? editCard.face_photo : null)
    const [organization_logo_pre, setOrganization_logo_pre] = useState(editCard ? editCard.organization_logo : null)
    const is_lists = ['する', 'しない']
    const is_shares = ['する', 'しない']

    const [errors, setErrors] = useState([])

    /* カード登録 */
    const { store } = useCard({
        funcIfSuccess: closeModal,
    })
    const submitForm = event => {
        event.preventDefault()

        store({
            uuid,
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
            site,
            description,
            //image_photo,
            //sort_num,
            is_list,
            is_share,
            setErrors
        })
    }
    useEffect(() => {
        if (errors.length > 0) {
            console.log(errors)
        }
    }, [errors])

    // 顔写真フォームが変更時
    useEffect(() => {

        if (typeof face_photo !== "object") return
        
        try {
            let file = face_photo[0]
            let reader = new FileReader()
            reader.onload = (e) => {
                setFace_photo_pre(e.target.result)
            };
            reader.readAsDataURL(file)

        } catch (e) {
            setFace_photo_pre(null)
        }

    }, [face_photo])

    // ロゴフォームが変更時
    useEffect(() => {

        if (typeof organization_logo !== "object") return

        try {
            let file = organization_logo[0]
            let reader = new FileReader()
            reader.onload = (e) => {
                setOrganization_logo_pre(e.target.result)
            };
            reader.readAsDataURL(file)

        } catch (e) {
            setOrganization_logo_pre(null)
        }

    }, [organization_logo])

    // テキストエリア高さ自動調整
    useEffect(() => {
        let textarea = document.getElementById('description');
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 10 + 'px';
    }, [description])

    return (
        <div className="max-w-lg mx-auto sm:px-6 lg:px-8">
            <div className="bg-white">
                <form onSubmit={submitForm} encType="multipart/form-data">
                    <input type="hidden" name="uuid" value={uuid} />

                    <div className="p-2 bg-white border-b sticky top-[-20px] z-10 drop-shadow mx-[-20px] sm:mx-[-60px]">
                        <div className="flex items-center justify-between">
                            <MyButton_md onClick={closeModal}>キャンセル</MyButton_md>
                            {/* <span className="text-base sm:text-lg font-bold text-gray-900">
                                名刺
                            </span> */}
                            <MyButton_lg type="submit" className="font-bold">保存</MyButton_lg>
                        </div>
                    </div>

                    <div className="py-4">
                        
                        <div className="my-4">
                            <div className="mb-6 py-4 flex items-center justify-between justify-self-end">
                                {organization_logo_pre &&
                                    <div className="relative">
                                        <img
                                            className="object-contain"
                                            src={organization_logo_pre.match(/base64/) ? organization_logo_pre : `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${organization_logo_pre}`}
                                            width={100}
                                            height={100}
                                        />
                                        <div
                                            className="absolute top-[-5px] right-[-5px] w-[30px] h-[30px] rounded-full rotate-45 bg-sky-500 text-white font-bold text-2xl flex items-center justify-center cursor-pointer"
                                            onClick={() => setOrganization_logo(null)}
                                        >
                                            +
                                        </div>
                                    </div>
                                }
                                <Input
                                    id="organization_logo"
                                    hidden
                                    type="file"
                                    accept="image/*"
                                    name="organization_logo"
                                    onChange={event => setOrganization_logo(event.target.files)}
                                />
                                <Label
                                    htmlFor="organization_logo"
                                    className="inline-flex items-center ml-auto px-4 py-2 bg-sky-500 rounded-full cursor-pointer"
                                >
                                    <span className="font-semibold text-sm text-white">
                                        ロゴ画像を選択
                                    </span>
                                </Label>
                                
                                <InputError messages={errors.organization_logo} className="mt-2" />
                            </div>
                        </div>

                        <div className="my-4">
                            <Label htmlFor="organization_name" className="text-sm sm:text-base text-gray-600">会社・組織・団体名</Label>
                            <Input
                                id="organization_name"
                                type="text"
                                name="organization_name"
                                value={organization_name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setOrganization_name(event.target.value)}
                            />
                            <InputError messages={errors.organization_name} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="position_name" className="text-sm sm:text-base text-gray-600">役職等</Label>
                            <Input
                                id="position_name"
                                type="text"
                                name="position_name"
                                value={position_name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setPosition_name(event.target.value)}
                            />
                            <InputError messages={errors.position_name} className="mt-2" />
                        </div>

                        <hr className="my-8" />

                        <div className="my-4">
                            <div className="mb-6 py-4 flex items-center justify-between">
                                {face_photo_pre &&
                                    <div className="relative">
                                        <img
                                            className="object-contain"
                                            src={face_photo_pre.match(/base64/) ? face_photo_pre : `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${face_photo_pre}`}
                                            width={100}
                                            height={100}
                                        />
                                        <div
                                            className="absolute top-[-5px] right-[-5px] w-[30px] h-[30px] rounded-full rotate-45 bg-sky-500 text-white font-bold text-2xl flex items-center justify-center cursor-pointer"
                                            onClick={() => setFace_photo(null)}
                                        >
                                            +
                                        </div>
                                    </div>
                                }
                                <Input
                                    id="face_photo"
                                    hidden
                                    type="file"
                                    accept="image/*"
                                    name="face_photo"
                                    onChange={event => setFace_photo(event.target.files)}
                                />
                                <Label
                                    htmlFor="face_photo"
                                    className="inline-flex items-center ml-auto px-4 py-2 bg-sky-500 rounded-full cursor-pointer"
                                >
                                    <span className="font-semibold text-sm text-white">
                                        顔写真を選択
                                    </span>
                                </Label>
                                
                                <InputError messages={errors.face_photo} className="mt-2" />
                            </div>
                        </div>

                        <div className="my-4">
                            <Label htmlFor="name" className="text-sm sm:text-base text-gray-600">氏名<span className="ml-4 text-xs sm:text-sm text-gray-500">入力必須</span></Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setName(event.target.value)}
                            />
                            <InputError messages={errors.name} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="name_kana" className="text-sm sm:text-base text-gray-600">ふりがな<span className="ml-4 text-xs sm:text-sm text-gray-500">アルファベットなども可</span></Label>
                            <Input
                                id="name_kana"
                                type="text"
                                name="name_kana"
                                value={name_kana}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setName_kana(event.target.value)}
                            />
                            <InputError messages={errors.name_kana} className="mt-2" />
                        </div>

                        <hr className="my-8" />
                            
                        <div className="my-4">
                            <Label htmlFor="zip" className="text-sm sm:text-base text-gray-600">郵便番号</Label>
                            <Input
                                id="zip"
                                type="text"
                                name="zip"
                                value={zip}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setZip(event.target.value)}
                            />
                            <InputError messages={errors.zip} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="address" className="text-sm sm:text-base text-gray-600">住所</Label>
                            <Input
                                id="address"
                                type="text"
                                name="address"
                                value={address}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setAddress(event.target.value)}
                            />
                            <InputError messages={errors.address} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="tel" className="text-sm sm:text-base text-gray-600">TEL</Label>
                            <Input
                                id="tel"
                                type="text"
                                name="tel"
                                value={tel}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setTel(event.target.value)}
                            />
                            <InputError messages={errors.tel} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="tel2" className="text-sm sm:text-base text-gray-600">TEL2</Label>
                            <Input
                                id="tel2"
                                type="text"
                                name="tel2"
                                value={tel2}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setTel2(event.target.value)}
                            />
                            <InputError messages={errors.tel2} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="fax" className="text-sm sm:text-base text-gray-600">FAX</Label>
                            <Input
                                id="fax"
                                type="text"
                                name="fax"
                                value={fax}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setFax(event.target.value)}
                            />
                            <InputError messages={errors.fax} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="email" className="text-sm sm:text-base text-gray-600">メールアドレス</Label>
                            <Input
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setEmail(event.target.value)}
                            />
                            <InputError messages={errors.email} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="site" className="text-sm sm:text-base text-gray-600">ホームページ</Label>
                            <Input
                                id="site"
                                type="text"
                                name="site"
                                value={site}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setSite(event.target.value)}
                            />
                            <InputError messages={errors.site} className="mt-2" />
                        </div>

                        <div className="my-4">
                            <Label htmlFor="description" className="text-sm sm:text-base text-gray-600">自由文</Label>
                            <textarea
                                id="description"
                                type="text"
                                name="description"
                                value={description}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setDescription(event.target.value)}
                            />
                            <InputError messages={errors.description} className="mt-2" />
                        </div>

                        {/* <div className="my-4">
                            <Label htmlFor="image_photo" className="text-sm sm:text-base text-gray-600">イメージ写真</Label>
                            <Input
                                id="image_photo"
                                type="text"
                                name="image_photo"
                                value={image_photo}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setImage_photo(event.target.value)}
                            />
                            <InputError messages={errors.image_photo} className="mt-2" />
                        </div> */}

                        {/* <div className="my-4">
                            <Label htmlFor="sort_num" className="text-sm sm:text-base text-gray-600">優先順位</Label>
                            <Input
                                id="sort_num"
                                type="text"
                                name="sort_num"
                                value={sort_num}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                                onChange={event => setSort_num(event.target.value)}
                            />
                            <InputError messages={errors.sort_num} className="mt-2" />
                        </div> */}

                        <hr className="my-8" />

                        <div className="my-4 flex flex-wrap sm:flex-nowrap items-center justify-between">
                            <div className="sm:max-w-[50%]">
                                <p className="text-base text-gray-900 font-bold">名刺リストの表示</p>
                                <p className="my-2 text-sm text-gray-800 font-light">
                                    この名刺の下部に他の名刺リストを表示するかどうか
                                </p>
                            </div>
                            <ul className="w-full sm:w-auto flex flex-wrap items-center justify-end sm:justify-between">
                                {is_lists.map((item, index) =>
                                    <li key={index} className="flex flex-nowrap items-center py-3 mx-5">
                                        <Input
                                            type="radio"
                                            id={'is_list-' + index}
                                            name="is_list"
                                            value={String(is_lists.length - index - 1)} // index番号反転
                                            checked={is_list === String(is_lists.length - index - 1)} // index番号反転
                                            onChange={event => setIs_list(event.target.value)}
                                        />
                                        <Label
                                            htmlFor={'is_list-' + index}
                                            className="ml-2 text-base font-medium text-gray-900">
                                            <span className="text-base">{item}</span>
                                        </Label>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <hr className="my-8" />

                        <div className="my-4 flex flex-wrap sm:flex-nowrap items-center justify-between">
                            <div className="sm:max-w-[50%]">
                                <p className="text-base text-gray-900 font-bold">名刺リスト共有</p>
                                <p className="my-2 text-sm text-gray-800 font-light">
                                    この名刺を他の名刺のリスト表示に含めるかどうか
                                </p>
                            </div>

                            <ul className="w-full sm:w-auto flex flex-wrap items-center justify-end sm:justify-between">
                                {is_shares.map((item, index) =>
                                    <li key={index} className="flex flex-nowrap items-center py-3 mx-5">
                                        <Input
                                            type="radio"
                                            id={'is_share-' + index}
                                            name="is_share"
                                            value={String(is_shares.length - index - 1)} // index番号反転
                                            checked={is_share === String(is_shares.length - index - 1)} // index番号反転
                                            onChange={event => setIs_share(event.target.value)}
                                        />
                                        <Label
                                            htmlFor={'is_share-' + index}
                                            className="ml-2 text-base font-medium text-gray-900">
                                            <span className="text-base">{item}</span>
                                        </Label>
                                    </li>
                                )}
                            </ul>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardForm
