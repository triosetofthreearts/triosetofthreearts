/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Derived from the TRIO logo (navy/black mark, gold swirl, teal
        // rings) and the studio's own event + team collateral (navy +
        // cream + gold editorial system). Token names kept stable
        // (ink/bone/brass/teal) even where the underlying hex changed.
        ink: {
          DEFAULT: '#0B1B32', // deep brand navy (site's primary dark bg)
          soft: '#122647',
          line: '#1F3A63',
        },
        bone: {
          DEFAULT: '#F3ECDD', // warm cream from event collateral
          dim: '#C8BEA6',
        },
        brass: {
          DEFAULT: '#B8935A', // gold swirl / script accent
          bright: '#D8B67E',
          dim: '#8A6C3E',
        },
        teal: {
          DEFAULT: '#1E9DAE', // logo ring
          bright: '#3FC0D1',
          dim: '#0F4E58',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
