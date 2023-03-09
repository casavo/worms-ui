import { BadgeVariantUnion } from './Badge.css';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={className}>
      <path d="M13.3484 2L14.6667 3.1916L6.00701 14L1.33337 9.82676L2.44729 8.41938L5.80333 11.4157L13.3484 2Z" />
    </svg>
  );
};

const WarningIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" className={className}>
      <path d="M.925 21.025 12 1.875l11.075 19.15Zm4-2.325h14.15L12 6.5ZM12 17.825q.425 0 .725-.3t.3-.7q0-.425-.3-.725T12 15.8q-.425 0-.725.3t-.3.7q0 .425.3.725t.725.3ZM11.075 15h1.875v-4.775h-1.875ZM12 12.6Z" />
    </svg>
  );
};

const ErrorIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" className={className}>
      <path d="m6.475 19.3-1.75-1.775 5.5-5.525-5.5-5.525L6.475 4.7 12 10.225 17.525 4.7l1.75 1.775-5.5 5.525 5.5 5.525-1.75 1.775L12 13.775Z" />
    </svg>
  );
};

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" className={className}>
      <path d="M10.875 17.075h2.275v-6.05h-2.275ZM12 9.375q.525 0 .875-.35t.35-.875q0-.525-.35-.875T12 6.925q-.525 0-.875.35t-.35.875q0 .525.35.875t.875.35Zm0 12.85q-2.125 0-4-.8t-3.25-2.187q-1.375-1.388-2.175-3.25-.8-1.863-.8-3.988t.8-4q.8-1.875 2.188-3.25Q6.15 3.375 8.012 2.575q1.863-.8 3.988-.8t4 .8q1.875.8 3.25 2.187 1.375 1.388 2.175 3.25.8 1.863.8 3.988t-.8 4q-.8 1.875-2.187 3.25-1.388 1.375-3.25 2.175-1.863.8-3.988.8Zm0-2.525q3.225 0 5.463-2.238Q19.7 15.225 19.7 12q0-3.225-2.237-5.463Q15.225 4.3 12 4.3T6.537 6.537Q4.3 8.775 4.3 12t2.237 5.462Q8.775 19.7 12 19.7Zm0-7.7Z" />
    </svg>
  );
};

export const badgeIcon: Record<BadgeVariantUnion, React.FC<{ className?: string }>> = {
  success: CheckIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  orangeB2C: InfoIcon,
  greenB2B: InfoIcon,
  deepGreen: InfoIcon,
  light: InfoIcon,
};
