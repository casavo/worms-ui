import { Toaster as ReactToaster } from 'react-hot-toast';
import { Toast } from './Toast';
import { ToastType } from './types';

type ToasterProps = { duration?: number };

export const Toaster: React.FC<ToasterProps> = ({ duration = 5000 }) => {
  return (
    <ReactToaster position="top-right" reverseOrder toastOptions={{ duration }}>
      {(t: ToastType) => <Toast toast={t} />}
    </ReactToaster>
  );
};
