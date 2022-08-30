import { overrideTailwindClasses } from 'tailwind-override'

const MyButton = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-3 py-1 bg-sky-500 border border-transparent rounded-md font-semibold text-sm sm:text-lg text-white uppercase tracking-widest hover:bg-sky-600 active:bg-sky-400 focus:outline-none focus:border-sky-600 focus:ring ring-sky-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_lg = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-4 py-2 bg-sky-500 border border-transparent rounded-md font-semibold text-xl text-white uppercase tracking-widest hover:bg-sky-600 active:bg-sky-400 focus:outline-none focus:border-sky-600 focus:ring ring-sky-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_sm = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-2 py-1 bg-sky-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-sky-600 active:bg-sky-400 focus:outline-none focus:border-sky-600 focus:ring ring-sky-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_order = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-4 py-2 bg-yellow-400 border border-transparent rounded-md font-bold text-black uppercase tracking-widest hover:bg-yellow-300 active:bg-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring ring-yellow-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export const MyButton_detail = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-2 py-1 bg-gray-300 border border-transparent rounded-md font-semibold text-sm text-black uppercase tracking-widest hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:border-gray-300 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export default MyButton
