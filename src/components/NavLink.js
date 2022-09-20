import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center my-2 px-1 pt-4 pb-3 border-b-2 text-lg font-bold tracking-widest leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                    ? 'border-indigo-400 text-gray-100 focus:border-indigo-700'
                    : 'border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300 focus:border-gray-300'
            }`}>
            {children}
        </a>
    </Link>
)

export default NavLink
