import { overrideTailwindClasses } from 'tailwind-override'

const MyButton = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center m-2 px-3 py-1 bg-sky-500 border border-transparent rounded-full font-semibold text-sm sm:text-base text-white uppercase tracking-widest hover:bg-sky-600 active:bg-sky-400 focus:outline-none focus:border-sky-600 focus:ring ring-sky-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_lg = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center m-2 px-8 py-2 bg-white border border-transparent rounded-full font-semibold text-base sm:text-xl text-black uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-300 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_md = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center m-2 px-6 py-2 bg-white border border-transparent rounded-full font-semibold text-sm sm:text-lg text-black uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-300 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_sm = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center m-1 px-4 py-1 bg-white border border-transparent rounded-full font-semibold text-base sm:text-lg text-black uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-300 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_add = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`min-w-[70px] min-h-[70px] inline-flex items-center m-2 justify-center bg-sky-500 sm:bg-white border border-transparent rounded-full font-bold text-2xl text-white sm:text-black uppercase tracking-widest hover:bg-sky-300 active:bg-gray-100 focus:outline-none focus:border-gray-300 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150 shadow-lg ${className}`)}
        {...props}
    />
)

export const MyButton_detail = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center m-2 px-6 py-4 bg-white border border-transparent rounded-full font-semibold text-sm text-black uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-300 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export default MyButton
