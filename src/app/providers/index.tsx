import { ToastContainer } from 'react-toastify';

import { QueryProvider } from './QueryProvider';
import { RouterProvider } from './RouterProvider';

export const Providers = () => {
  return (
    <QueryProvider>
      <RouterProvider />
      <ToastContainer
        position="bottom-right"
        theme="light"
        toastClassName="!bg-card/80 !backdrop-blur-sm !text-gray-900 !shadow-lg"
        closeButton={false}
        autoClose={5000}
        newestOnTop
        draggable
      />
    </QueryProvider>
  );
};
