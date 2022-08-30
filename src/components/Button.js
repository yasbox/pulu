import { overrideTailwindClasses } from 'tailwind-override'

const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={overrideTailwindClasses(`inline-flex items-center px-3 py-1 bg-sky-500 border border-transparent rounded-md font-semibold text-sm sm:text-lg text-white uppercase tracking-widest hover:bg-sky-600 active:bg-sky-400 focus:outline-none focus:border-sky-600 focus:ring ring-sky-300 disabled:opacity-25 transition ease-in-out duration-150 ${className}`)}
        {...props}
    />
)

export default Button
