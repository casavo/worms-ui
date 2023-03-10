import { createContainer, style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

const CONTAINER_SIZE = 385;
const cardContainer = createContainer();
export const cardContainerStyle = style({
  containerName: cardContainer,
  containerType: 'inline-size',
});

const clickableCardStyle = style({
  selectors: {
    '&[role=button]': {
      cursor: 'pointer',
    },
    '&[role=button]:hover, &[role=button]:focus': {
      boxShadow: vars.boxShadow.lifted,
      transform: 'translateY(-1px)',
    },
  },
});

export const cardRecipe = recipe({
  base: {
    borderRadius: spacings.s,
    transition: 'all 300ms, border 200ms',
    backgroundColor: vars.backgroundColor.neutral,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: spacings.l,
    padding: spacings.l,
    '@container': {
      [`${cardContainer} (max-width: ${CONTAINER_SIZE}px)`]: {
        padding: spacings.m,
      },
    },
  },

  defaultVariants: { variant: 'default' },
  variants: {
    variant: {
      default: [
        clickableCardStyle,
        {
          border: `1px solid ${vars.colors.deepGreen100}`,
        },
      ],
      defaultOnWhite: [
        clickableCardStyle,
        {
          border: `1px solid ${vars.colors.deepGreen400}`,
        },
      ],
      highlight: {
        backgroundColor: vars.backgroundColor.highlight,
        color: vars.colors.white,
        border: `1px solid ${vars.backgroundColor.highlight}`,
      },
      selected: [
        clickableCardStyle,
        {
          border: `1px solid ${vars.colors.green600}`,
        },
      ],
    },
  },
});

export type CardVariants = RecipeVariants<typeof cardRecipe>;

export const cardTitle = styleVariants({
  default: {
    color: vars.textColor.title,
  },
  defaultOnWhite: {
    color: vars.textColor.title,
  },
  highlight: {
    color: vars.textColor.inverted,
  },
  selected: {
    color: vars.textColor.title,
  },
});
