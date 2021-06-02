import { useState, useEffect } from 'react';

/**
 * This hook returns true or depending on whether the width is less than or greater the
 * provided parameter
 * If the width is lesser it return true.
 */

function useBreakpoint(width) {
  const [state, setState] = useState(() =>
    window.innerWidth < width ? true : false
  );

  const resizeListener = () =>
    window.innerWidth < width ? setState(true) : setState(false);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return [state];
}

export default useBreakpoint;
