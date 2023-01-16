import { createTheme } from '@vanilla-extract/css';
import { colors, typographyFont } from 'src/tokens';

export const [themeClass, vars] = createTheme({
  backgroundColor: {
    app: colors.offWhite,
    neutral: colors.white,
    highlight: colors.deepGreen600,
  },
  textColor: {
    neutral: colors.greyscale600,
    highlight: colors.white,
  },
  textFont: {
    primary: typographyFont.inter,
    secondary: typographyFont.bagossCondensed,
  },
  boxShadow: {
    sm: '0px 6px 20px rgba(54, 67, 82, 0.25)',
    md: '',
    lg: '',
  },
});
