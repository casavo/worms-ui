import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { ToastOptions } from './types';

export const useToasts = () => {
  const addToast = useCallback((message: JSX.Element | string, opts?: ToastOptions) => {
    return toast(null, { ...opts, type: opts?.appearance, content: message } as ToastOptions);
  }, []);

  return { addToast };
};
