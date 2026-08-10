/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0D12',
        surface: '#12171F',
        surface2: '#1A212B',
        line: '#232B36',
        fg: '#E9EDEF',
        muted: '#8B98A5',
        muted2: '#5C6773',
        teal: {
          DEFAULT: '#3FBFA6',
          soft: '#2E9683',
          dim: 'rgba(63,191,166,0.12)',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dim: 'rgba(232,163,61,0.12)',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        dash: 'dash 2.4s ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
