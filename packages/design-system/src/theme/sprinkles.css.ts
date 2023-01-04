import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { colors, breakpoints, spacings } from 'src/tokens';

const unresponsiveProperties = defineProperties({
  properties: {
    // can be separated to colorProperties with conditions light/dark for theming
    color: colors,
    background: colors,
    boxShadow: {
      sm: '0px 6px 20px rgba(54, 67, 82, 0.25)',
    },
  },
});

function transformBreakpoints<Output>(input: Record<string, any>) {
  let responsiveConditions!: Output;

  Object.entries(input).forEach(([key, value]) => {
    if (value === 0) {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {},
      };
    } else {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {
          '@media': `screen and (min-width: ${value}px)`,
        },
      };
    }
  });

  return responsiveConditions;
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    ...transformBreakpoints<{ tablet: {}; laptop: {}; desktop: {} }>(breakpoints),
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'laptop', 'desktop'],
  properties: {
    position: [`relative`],
    display: [`none`, `block`, `inline`, `inline-block`, `flex`],
    alignItems: [`flex-start`, `center`, `flex-end`, `baseline`],
    justifyContent: [`flex-start`, `center`, `flex-end`, `space-between`],
    flexDirection: [`row`, `row-reverse`, `column`, `column-reverse`],
    flexWrap: [`wrap`, `nowrap`],
    padding: spacings,
    paddingTop: spacings,
    paddingBottom: spacings,
    paddingLeft: spacings,
    paddingRight: spacings,
    margin: spacings,
    marginTop: spacings,
    marginBottom: spacings,
    marginLeft: spacings,
    marginRight: spacings,
  },
  shorthands: {
    p: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    px: [`paddingLeft`, `paddingRight`],
    py: [`paddingTop`, `paddingBottom`],
    m: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    mx: [`marginLeft`, `marginRight`],
    my: [`marginTop`, `marginBottom`],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, unresponsiveProperties);

export type WormsUISprinkles = Parameters<typeof sprinkles>[0];
