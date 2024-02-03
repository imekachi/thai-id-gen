import tailwindcssForms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{ts,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssForms],
}
