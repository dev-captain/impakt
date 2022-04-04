import { useEffect, useState } from 'react';

const useResize = () => {
  const [sizes, setSizes] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const getListSize = () => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', getListSize);
  }, []);

  return {
    sizes,
  };
};

export default useResize;
