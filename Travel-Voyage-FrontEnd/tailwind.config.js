/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'darkBlue': '#000a1f',
                'neonBlue': '#00c7ff',
            },
            textColor: {
                'darkBlue': '#000a1f',
                'neonBlue': '#00c7ff',
            }
        },
    },
    plugins: [],
}