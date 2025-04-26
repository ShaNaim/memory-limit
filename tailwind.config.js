/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        base: 'var(--color-base-100)', // bg-base
        'base-100': 'var(--color-base-100)', // bg-base-100
        'base-200': 'var(--color-base-200)', // bg-base-200
        'base-300': 'var(--color-base-300)', // bg-base-300
        'base-content': 'var(--color-base-content)',

        // Primary
        primary: 'var(--color-primary)',
        'primary-content': 'var(--color-primary-content)',
        'sub-content': 'var(--color-sub-content)',

        // Secondary
        secondary: 'var(--color-secondary)',
        'secondary-content': 'var(--color-secondary-content)',

        // Accent
        accent: 'var(--color-accent)',
        'accent-content': 'var(--color-accent-content)',

        // Neutral
        neutral: 'var(--color-neutral)',
        'neutral-content': 'var(--color-neutral-content)',

        // Info / Success / Warning / Error
        info: 'var(--color-info)',
        'info-content': 'var(--color-info-content)',
        success: 'var(--color-success)',
        'success-content': 'var(--color-success-content)',
        warning: 'var(--color-warning)',
        'warning-content': 'var(--color-warning-content)',
        error: 'var(--color-error)',
        'error-content': 'var(--color-error-content)',
      },

      borderRadius: {
        selector: 'var(--radius-selector)',
        field: 'var(--radius-field)',
        box: 'var(--radius-box)',
      },

      borderWidth: {
        DEFAULT: 'var(--border)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(130deg, #3a1c89, #d76d77, #ffaf7b)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
