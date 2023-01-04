import { cardRecipe, CardVariants, clickableCardStyle } from './Card.css';

type CardProps = {
  onClick?: () => void;
} & CardVariants;

export const Card: React.FC<CardProps> = ({ type, onClick }) => {
  const clickableClassName = onClick ? clickableCardStyle : '';

  return <div className={`${cardRecipe({ type })} ${clickableClassName}`}>My card!</div>;
};