/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('./background.webp')",
      }),
    },
  },
  plugins: [],
}

