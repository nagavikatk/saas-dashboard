/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'card-shadow': '0px 10px 30px 0px rgba(17, 24, 39, 0.05)',
      },
      colors: {
        'page-light': '#F8FAFC',
        'light-surface': '#FFFFFF',
        'light-text-primary': '#0F172A',
        'light-text-secondary': '#64748B',
        'light-border': '#E2E8F0',
        'page-dark': '#0B1120',
        'dark-surface': '#172134',
        'dark-text-primary': '#F8FAFC',
        'dark-text-secondary': '#94A3B8',
        'dark-border': '#334155',
        'accent-blue': '#3B82F6',
        'accent-blue-light': '#EFF6FF',
        'dark-accent-blue-light': 'rgba(59, 130, 246, 0.1)',
        'status-green': '#10B981', 'status-green-bg': '#F0FDF4',
        'status-yellow': '#F59E0B', 'status-yellow-bg': '#FFFBEB',
        'status-red': '#EF4444', 'status-red-bg': '#FEF2F2',
        'status-blue': '#3B82F6', 'status-blue-bg': '#EFF6FF',
        'status-gray': '#64748B', 'status-gray-bg': '#F8FAFC',
      },
      fontSize: {
        'xxs': '0.6875rem',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
      }
    }
  },
  plugins: [],
}
