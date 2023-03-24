import clsx from 'clsx';
import * as ReactToast from 'react-hot-toast';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { toastIcon } from './Icons';
import { closeIconButtonStyle, iconStyle, messageContainerStyle, toastRecipe } from './Toast.css';
import { ToastType } from './types';

type ToastProps = ToastType;

export const Toast: React.FC<ToastProps> = ({ appearance = 'info', ...toast }) => {
  const Icon = toastIcon[appearance];

  return (
    <ReactToast.ToastBar toast={toast} position="bottom-right" style={{ boxShadow: 'none', padding: 0, opacity: 1 }}>
      {() => {
        return (
          <div className={clsx(toastRecipe({ appearance }))} {...toast.ariaProps}>
            <Icon className={iconStyle[appearance]} />
            <div className={messageContainerStyle}>
              {toast.title ? <Text weight="strong">{toast.title}</Text> : null}
              <Text variant="description" as="div">
                {toast.content}
              </Text>
            </div>
            {toast.type !== 'loading' ? (
              <IconButton
                onClick={() => ReactToast.toast.dismiss(toast.id)}
                className={closeIconButtonStyle}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </div>
        );
      }}
    </ReactToast.ToastBar>
  );
};

const CloseIcon: React.FC = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8 2L14 3.2L9.19976 7.99994L14 12.8L12.8 14L7.99994 9.19976L3.2 14L2 12.8L6.79928 7.99994L2 3.2L3.2 2L7.99994 6.79928L12.8 2Z"
        fill="#1D1D1B"
      />
    </svg>
  );
};
