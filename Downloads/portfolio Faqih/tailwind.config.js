
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-slow-reverse': 'spin 15s linear infinite reverse',
            },
            fontFamily: {
                heading: ['Orbitron', 'Space Grotesk', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
