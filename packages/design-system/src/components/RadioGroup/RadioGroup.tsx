import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Children, cloneElement } from 'react';
import { sprinkles } from '../../theme/sprinkles.css';
import { legendStyle, radioGroupRecipe, RadioGroupRecipeVariant } from './RadioGroup.css';

export type RadioGroupProps<T> = Omit<
  React.ComponentProps<typeof RadioGroupPrimitive.Root>,
  'aria-label' | 'onChange'
> & {
  legend?: string;
  onChange: (value: T) => void;
  value: T;
} & RadioGroupRecipeVariant;

export function RadioGroup<T extends string = string>({
  children,
  legend,
  onChange,
  orientation = 'horizontal',
  required,
  variant,
  size,
  ...props
}: React.PropsWithChildren<RadioGroupProps<T>>) {
  const clones = Children.map(children as React.ReactElement[], (child) =>
    cloneElement(child, { className: radioGroupRecipe({ variant, size }) })
  );
  return (
    <fieldset style={{ margin: 0, padding: 0, borderWidth: 0 }}>
      <legend className={legendStyle}>
        {legend} {required ? '*' : null}
      </legend>
      <RadioGroupPrimitive.Root aria-label={legend} orientation={orientation} {...props} onValueChange={onChange}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
            gap: 's',
          })}
        >
          {clones}
        </div>
      </RadioGroupPrimitive.Root>
    </fieldset>
  );
}

type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  label: string;
} & RadioGroupRecipeVariant;

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ id, label, variant, ...props }) => {
  return (
    <div className={sprinkles({ display: 'flex', alignItems: 'center' })}>
      <RadioGroupPrimitive.Item aria-label={label} id={id} title={label} {...props}>
        {label}
      </RadioGroupPrimitive.Item>
    </div>
  );
};
