import React, { useEffect } from 'react';

const ScrollToTop: React.FC = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ScrollToTop;
