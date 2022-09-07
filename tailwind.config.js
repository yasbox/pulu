const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./src/styles/variables.module.js');

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: colors
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
    important: true,
}
