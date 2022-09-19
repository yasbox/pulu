const ApplicationLogo = props => (
    <img
        src="/logo/logo_icon.png"
        alt={process.env.NEXT_PUBLIC_APP_NAME}
        {...props}
    />
)

export default ApplicationLogo
