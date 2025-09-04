import type {Config} from 'tailwindcss';

const neumorphicOutset = '5px 5px 10px #d0d5db, -5px -5px 10px #ffffff';
const neumorphicOutsetSm = '3px 3px 6px #d0d5db, -3px -3px 6px #ffffff';
const neumorphicInset = 'inset 5px 5px 10px #d0d5db, inset -5px -5px 10px #ffffff';
const darkNeumorphicOutset = '5px 5px 10px #1f242a, -5px -5px 10px #353c44';
const darkNeumorphicOutsetSm = '3px 3px 6px #1f242a, -3px -3px 6px #353c44';
const darkNeumorphicInset = 'inset 5px 5px 10px #1f242a, inset -5px -5px 10px #353c44';


export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-body)'],
        headline: ['var(--font-headline)'],
      },
       boxShadow: {
        'neumorphic-outset': `var(--shadow-light) 5px 5px 10px, var(--shadow-dark) -5px -5px 10px`,
        'neumorphic-outset-sm': `var(--shadow-light) 3px 3px 6px, var(--shadow-dark) -3px -3px 6px`,
        'neumorphic-inset': `inset var(--shadow-light) 5px 5px 10px, inset var(--shadow-dark) -5px -5px 10px`,
       },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addBase, theme }: any) {
      addBase({
        ':root': {
          '--shadow-light': '#d0d5db',
          '--shadow-dark': '#ffffff',
        },
        '.dark': {
          '--shadow-light': '#1f242a',
          '--shadow-dark': '#353c44',
        }
      })
    }
  ],
} satisfies Config;
