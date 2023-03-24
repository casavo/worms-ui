import { ToastAppearanceUnion } from './Toast.css';

const ErrorIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.99984 1.66667C5.39984 1.66667 1.6665 5.40001 1.6665 10C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 10C18.3332 5.40001 14.5998 1.66667 9.99984 1.66667ZM10.8332 14.1667H9.1665V12.5H10.8332V14.1667ZM10.8332 10.8333H9.1665V5.83334H10.8332V10.8333Z" />
    </svg>
  );
};

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 9.99999C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 9.99999C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666ZM11.0415 8.95832H8.95817V15.2083H11.0415V8.95832ZM9.99984 4.79166C9.13689 4.79166 8.43734 5.49121 8.43734 6.35416C8.43734 7.2171 9.13689 7.91666 9.99984 7.91666C10.8628 7.91666 11.5623 7.2171 11.5623 6.35416C11.5623 5.49121 10.8628 4.79166 9.99984 4.79166Z" />
    </svg>
  );
};

const SuccessIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 9.99999C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 9.99999C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666ZM14.4578 6.15253L9.19046 11.6229L6.58359 8.91471L5.08276 10.3596L9.19104 14.6269L15.9586 7.59744L14.4578 6.15253Z" />
    </svg>
  );
};

const WarningIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0.833496 17.5H19.1668L10.0002 1.66666L0.833496 17.5ZM10.8335 15H9.16683V13.3333H10.8335V15ZM10.8335 11.6667H9.16683V8.33332H10.8335V11.6667Z" />
    </svg>
  );
};

export const toastIcon: Record<ToastAppearanceUnion, React.FC<{ className?: string }>> = {
  error: ErrorIcon,
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};
