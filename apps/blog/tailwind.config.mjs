import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        app: '48rem',
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground) / 0.92)',
            a: {
              color: 'rgb(var(--accent) / 1)',
              textDecoration: 'none',
              fontWeight: '500',
            },
            h1: { color: 'rgb(var(--foreground) / 1)' },
            h2: { color: 'rgb(var(--foreground) / 1)' },
            h3: { color: 'rgb(var(--foreground) / 1)', fontStyle: 'italic' },
            h4: { color: 'rgb(var(--foreground) / 1)' },
            strong: { color: 'rgb(var(--foreground) / 1)' },
            code: {
              color: 'rgb(var(--foreground) / 1)',
              backgroundColor: 'rgb(var(--muted) / 0.6)',
              borderRadius: '0.375rem',
              padding: '0.125rem 0.375rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            hr: { borderColor: 'rgb(var(--border) / 1)' },
            blockquote: {
              borderLeftColor: 'rgb(var(--accent) / 0.75)',
              color: 'rgb(var(--foreground) / 0.8)',
            },
            img: {
              borderRadius: '0.75rem',
              border: '1px solid rgb(var(--border) / 1)',
            },
            th: { color: 'rgb(var(--foreground) / 1)' },
            td: { borderColor: 'rgb(var(--border) / 1)' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
