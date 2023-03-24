import clsx from 'clsx';
import * as ReactToast from 'react-hot-toast';
import { Text } from '../Text';
import { toastIcon } from './Icons';
import { iconStyle, messageContainerStyle, toastRecipe } from './Toast.css';
import { ToastType } from './types';

type ToastProps = {
  toast: ToastType;
};

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const appearance = toast?.appearance ?? 'info';
  const Icon = toastIcon[appearance];

  return (
    <ReactToast.ToastBar toast={toast} position="bottom-right" style={{ boxShadow: 'none', padding: 0 }}>
      {() => {
        return (
          <div className={clsx(toastRecipe({ appearance }))}>
            <Icon className={iconStyle[appearance]} />
            <div className={messageContainerStyle}>
              {toast.title ? <Text weight="strong">{toast.title}</Text> : null}
              <Text variant="description" as="div">
                {toast.content}
              </Text>
            </div>
            {toast.type !== 'loading' && <button onClick={() => ReactToast.toast.dismiss(toast.id)}>X</button>}
          </div>
        );
      }}
    </ReactToast.ToastBar>
  );
};
