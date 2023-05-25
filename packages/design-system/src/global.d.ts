export type ValuesAsUnion<T> = T[keyof T];

export type CommonBaseProps = {
  'data-testid'?: string;
  className?: string;
  style?: React.CSSProperties;
};
