import { Toast as ReactToast, ToastOptions as ReactToastOptions } from 'react-hot-toast';
import { ToastAppearanceUnion } from './Toast.css';

export type AdditionalToastOptions = {
  appearance?: ToastAppearanceUnion;
  title?: string;
  content?: JSX.Element | string;
};
export type ToastOptions = ReactToastOptions & AdditionalToastOptions;

export type ToastType = ReactToast & AdditionalToastOptions;
