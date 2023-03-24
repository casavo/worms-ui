import clsx from 'clsx';
import { useCallback } from 'react';
import * as ReactToast from 'react-hot-toast';
import { Text } from '../Text';
import { toastIcon } from './Icons';
import { iconStyle, messageContainerStyle, toastRecipe, ToastAppearanceUnion } from './Toast.css';

type AdditionalToastOptions = { appearance?: ToastAppearanceUnion; title?: string; content?: JSX.Element | string };
type ToastOptions = ReactToast.ToastOptions & AdditionalToastOptions;

export const useToasts = () => {
  const addToast = useCallback((message: JSX.Element | string, opts?: ToastOptions) => {
    return ReactToast.toast(null, { ...opts, type: opts?.appearance, content: message } as ToastOptions);
  }, []);

  return { addToast };
};

export const Toaster: React.FC = () => {
  return (
    <ReactToast.Toaster position="top-right" reverseOrder toastOptions={{ duration: 5000 }}>
      {(t: ReactToast.Toast & AdditionalToastOptions) => {
        const appearance = t?.appearance ?? 'info';
        const Icon = toastIcon[appearance];

        return (
          <ReactToast.ToastBar toast={t} position="bottom-right" style={{ boxShadow: 'none', padding: 0 }}>
            {() => {
              return (
                <div className={clsx(toastRecipe({ appearance }))}>
                  <Icon className={iconStyle[appearance]} />
                  <div className={messageContainerStyle}>
                    {t.title ? <Text weight="strong">{t.title}</Text> : null}
                    <Text variant="description" as="div">
                      {t.content}
                    </Text>
                  </div>
                  {t.type !== 'loading' && <button onClick={() => ReactToast.toast.dismiss(t.id)}>X</button>}
                </div>
              );
            }}
          </ReactToast.ToastBar>
        );
      }}
    </ReactToast.Toaster>
  );
};
