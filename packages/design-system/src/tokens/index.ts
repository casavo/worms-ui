export const colors = {
  orange100: '#FFF5E9',
  orange400: '#FFD6A5',
  orange500: '#FFB862',
  orange600: '#FF991F',
  orange700: '#E68A1C',

  deepGreen100: '#E6ECEB',
  deepGreen400: '#9BB1B0',
  deepGreen500: '#517774',
  deepGreen600: '#063D39',
  deepGreen700: '#05312E',

  green100: '#E9F9F6',
  green400: '#A8E6DA',
  green500: '#66D4BF',
  green600: '#25C1A3',
  green700: '#1E9A82',

  lightBlue: '#D6F5FF',

  offWhite: '#F6F6F1',

  greyscale0: '#FFFFFF',
  greyscale50: '#F5F5F5',
  greyscale100: '#E8E8E8',
  greyscale200: '#D4D4D3',
  greyscale300: '#B3B3B2',
  greyscale400: '#737372',
  greyscale500: '#525251',
  greyscale600: '#1D1D1B',
  greyscale900: '#12181E',

  success100: '#F0F9EE',
  success400: '#A4D99A',
  success500: '#85CD79',
  success600: '#67C057',
  success700: '#5DAD4E',
  success800: '#529A46',

  warning100: '#FFF9EC',
  warning400: '#FFD98E',
  warning500: '#FFCD69',
  warning600: '#FFC043',
  warning700: '#E6AD3C',
  warning800: '#CC9A36',

  error100: '#FDEEEE',
  error400: '#F39A9A',
  error500: '#EF7979',
  error600: '#EB5757',
  error700: '#D44E4E',
  error800: '#BC4646',

  white: '#FFFFFF',
} as const;

export const spacings = {
  auto: 'auto',
  x2s: '2px',
  xs: '4px',
  s: '8px',
  sm: '12px',
  m: '16px',
  ml: '20px',
  l: '24px',
  xl: '32px',
  x2l: '48px',
  x3l: '64px',
  x4l: '80px',
  x5l: '96px',
} as const;

export const fontFamily = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  serif: 'Bagoss Condensed',
} as const;

export const fontWeight = {
  light: '300',
  regular: '400',
  strong: '600',
} as const;

export const fontSizes = {
  desktop: {
    display: '52px',
    h1: '40px',
    h2: '32px',
    h3: '28px',
    h4: '24px',
    bodyL: '20px',
    bodyM: '16px',
    description: '14px',
    caption: '12px',
    small: '11px',
  },
  mobile: {
    display: '40px',
    h1: '32px',
    h2: '28px',
    h3: '24px',
    h4: '20px',
    bodyL: '18px',
    bodyM: '16px',
    description: '14px',
    caption: '12px',
    small: '11px',
  },
} as const;

export const shadows = {} as const;

export const radii = {} as const;

export const breakpoints = {
  tablet: 768,
  laptop: 960,
  desktop: 1024,
} as const;

export const mediaQueries = {
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  laptop: `screen and (min-width: ${breakpoints.laptop}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
} as const;
