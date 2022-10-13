import { overrideTailwindClasses } from 'tailwind-override'

const Label = ({ className, children, ...props }) => (
    <label
        className={overrideTailwindClasses(`block font-medium text-sm text-gray-700 ${className}`)}
        {...props}>
        {children}
    </label>
)

export default Label
