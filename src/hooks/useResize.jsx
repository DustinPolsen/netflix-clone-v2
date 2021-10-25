import { useEffect } from 'react';

const useResize = (cb) => {
  useEffect(() => {
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, [cb]);
};

export default useResize;
