import { MutableRefObject, useEffect } from 'react';

// eslint-disable-next-line
function useOnClickOutside(ref: MutableRefObject<any>, handler: (event: any) => void) {
  useEffect(() => {
    // eslint-disable-next-line
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or children elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
