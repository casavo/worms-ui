import clsx from 'clsx';
import { spinnerRecipe, SpinnerVariants } from './Spinner.css';

type SpinnerProps = SpinnerVariants & {
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ variant, className }) => {
  return <div className={clsx(spinnerRecipe({ variant }), className)} />;
};
