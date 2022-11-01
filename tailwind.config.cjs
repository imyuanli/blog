/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        "./pages/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
}
