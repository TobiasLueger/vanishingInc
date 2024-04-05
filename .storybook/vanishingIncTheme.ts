import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Inter", sans-serif',
    fontCode: 'monospace',

    colorPrimary: 'white',
    colorSecondary: '#468453',

    // UI
    appBg: 'white',
    appContentBg: '#E5ECE0',
    appBorderColor: 'grey',
    appBorderRadius: 20,

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'black',
    barSelectedColor: '#468453',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: '#468453',
    inputTextColor: 'black',
    inputBorderRadius: 6,

    brandTitle: 'Storybook of VanishingINC.',
    brandUrl: 'https://vanishingincmagic.vercel.app/',
    brandImage: '/vanishing-inc-logo.png',
    brandTarget: '_self',
});