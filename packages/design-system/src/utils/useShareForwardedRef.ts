import { Ref, useEffect, useRef } from 'react';

export function useShareForwardedRef<T>(forwardedRef: Ref<T>) {
  // https://github.com/adobe/react-spectrum/issues/834
  // final ref that will share value with forward ref. this is the one we will attach to components
  const innerRef = useRef<T>(null);

  useEffect(() => {
    // after every render - try to share current ref value with forwarded ref
    if (!forwardedRef) {
      return;
    }
    if (typeof forwardedRef === 'function') {
      forwardedRef(innerRef.current);
      return;
    } else {
      // @ts-ignore
      // by default forwardedRef.current is readonly. Let's ignore it
      forwardedRef.current = innerRef.current;
    }
  });

  return innerRef;
}
