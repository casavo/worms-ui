import clsx from 'clsx';
import { spinnerRecipe, SpinnerVariants } from './Spinner.css';

type SpinnerProps = SpinnerVariants & {};

export const Spinner: React.FC<SpinnerProps> = ({ variant }) => {
  return <div className={clsx(spinnerRecipe({ variant }))} />;
};
