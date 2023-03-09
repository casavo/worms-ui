import clsx from 'clsx';
import { separatorRecipe, SeparatorVariants } from './Separator.css';

type SeparatorProps = {
  className?: string;
} & SeparatorVariants;

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', className }) => {
  return (
    <div
      aria-orientation={orientation}
      className={clsx(separatorRecipe({ orientation }), className)}
      role="separator"
    />
  );
};
