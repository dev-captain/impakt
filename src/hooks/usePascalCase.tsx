import { useEffect, useState } from 'react';

const usePascalCase = (label: string) => {
  const [excerciseLable, setExcerciseLable] = useState<string>();
  useEffect(() => {
    if (label) {
      setExcerciseLable(label.replace(/([a-z0-9])([A-Z])/g, '$1 $2'));
    }
  }, [excerciseLable]);

  return excerciseLable;
};

export default usePascalCase;
