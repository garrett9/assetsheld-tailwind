const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    jit: true,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    safelist: process.env.NODE_ENV === 'development' ? [
        {
            pattern: /.*/
        },
        '2xl:max-w-6xl',
        'xl:max-w-5xl',
        'lg:max-w-3xl',
        'md:max-w-xl',
    ] : [
        '2xl:max-w-6xl',
        'xl:max-w-5xl',
        'lg:max-w-3xl',
        'md:max-w-xl',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            textColor: {
                default: colors.gray[600],
                link: {
                    ...colors.sky,
                    DEFAULT: colors.sky[600],
                },
            },
            maxWidth: {
                app: '100em',
                '20': '5rem',
                '3xl': '48rem',
                '4xl': '56rem',
                '5xl': '64rem',
            },
            maxHeight: {
                '120': '30rem',
                '140': '35rem',
                '160': '40rem',
            },
            height: {
                'store-nav': defaultTheme.spacing[20],
                '100': '25rem',
                '120': '30rem',
                '140': '35rem',
            },
            colors: {
                cyan: colors.cyan,
                sky: colors.sky,
                primary: {
                    ...colors.sky,
                    DEFAULT: colors.sky[800]
                },
                danger: {
                    ...colors.red,
                    DEFAULT: colors.red[800],
                },
                success: {
                    ...colors.green,
                    DEFAULT: colors.green[800],
                },
                disabled: colors.gray[100],
            },
            borderRadius: {
                DEFAULT: '0.375rem',
            },
            fontSize: {
                base: '0.875rem',
            },
            lineHeight: {
                DEFAULT: '1.25rem',
                '12': '3rem',
            },
            spacing: {
                'store-horizontal-gutter': defaultTheme.spacing[12],
                'horizontal-gutter': '2.5rem',
                '2.5': '0.675rem',
                '3.5': '0.875rem',
            },
            inset: {
                filters: '8rem',
            },
            minHeight: {
                '10': '2.5rem',
            },
            minWidth: {
                stat: '3rem',
                app: '58rem',
                sidebar: '11rem',
                'order-status': '50rem',
                '20': '5rem',
                '28': '7rem',
                '48': '12rem',
            }
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
            boxShadow: ['disabled'],
            backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled', 'checked'],
            cursor: ['disabled'],
            right: ['checked'],
            border: ['hover'],
            textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
            fontWeight: ['hover'],
            scale: ['hover'],
        },
    },

    plugins: [
        // require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require('@tailwindcss/line-clamp'),
    ],
};
