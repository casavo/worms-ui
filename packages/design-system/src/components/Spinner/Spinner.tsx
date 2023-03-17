import clsx from 'clsx';
import { spinnerRecipe, SpinnerVariants } from './Spinner.css';

export const Spinner: React.FC<{} & SpinnerVariants> = ({ variant }) => {
  return <div className={clsx(spinnerRecipe({ variant: variant }))}></div>;
};
