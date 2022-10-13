const AuthCard = ({ logo, children }) => (
    <div className="px-1 pt-6 sm:pt-12 h-full flex flex-col sm:justify-center items-center">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 p-6 sm:p-12 bg-white shadow-md overflow-hidden rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
