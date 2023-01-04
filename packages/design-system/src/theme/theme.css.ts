import { createTheme } from '@vanilla-extract/css';
import { colors } from 'src/tokens';

export const [themeClass, vars] = createTheme({
  backgroundColor: {
    app: colors.offWhite,
    neutral: colors.white,
    highlight: colors.deepGreen600,
  },
  textColor: {
    neutral: 'black',
    highlight: 'white',
  },
  boxShadow: {
    sm: '0px 6px 20px rgba(54, 67, 82, 0.25)',
    md: '',
    lg: '',
  },
});
