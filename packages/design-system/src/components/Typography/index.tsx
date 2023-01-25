import { CSSProperties, FC } from 'react';
import { vars } from '../../theme/theme.css';
import { typographyStyles } from './styles.css';

export type TypographyVariants = 'h2' | 'h3' | 'description' | 'bodyM' | 'bodyL' | 'caption';
export type TypographyColors = 'neutral' | 'inverted' | 'description' | 'title' | 'inactive';

export interface TypographyProps {
  variant: TypographyVariants;
  children: string;
  color?: TypographyColors;
  weight?: '300' | '400' | '600';
  style?: CSSProperties;
  dataTestId?: string;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  weight,
  color,
  style,
  dataTestId,
  className: additionalClassname,
}) => {
  const { tag, classname } = styles[variant];
  const Tag = tag as React.ElementType;

  return (
    <Tag
      className={`${additionalClassname || ''} ${classname}`}
      style={{ fontWeight: weight, color: vars.textColor[color || 'neutral'], ...style }}
      data-testid={dataTestId}
    >
      {children}
    </Tag>
  );
};

const styles = {
  h2: {
    tag: 'h2',
    classname: typographyStyles.h2,
  },
  h3: {
    tag: 'h3',
    classname: typographyStyles.h3,
  },
  description: {
    tag: 'p',
    classname: typographyStyles.description,
  },
  bodyM: {
    tag: 'p',
    classname: typographyStyles.bodyM,
  },
  bodyL: {
    tag: 'p',
    classname: typographyStyles.bodyL,
  },
  caption: {
    tag: 'p',
    classname: typographyStyles.caption,
  },
};
