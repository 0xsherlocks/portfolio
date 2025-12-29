/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a0a0f',
        'secondary-bg': '#12121a',
        'accent-cyan': '#00f0ff',
        'accent-purple': '#a855f7',
        'accent-green': '#00ff88',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b0',
      },
      fontFamily: {
        main: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
