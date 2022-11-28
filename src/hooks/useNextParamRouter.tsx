import { useLocation, useNavigate } from 'react-router-dom';

export const useNextParamRouter = () => {
  const navigate = useNavigate();
  const isThereNextParam = useLocation().search.includes('next');
  const nextParamLink = useLocation().search.split('=')[1];
  const navigateToNextParam = () => {
    if (isThereNextParam) {
      if (isForOtherImpaktProduct(nextParamLink)) {
        window.location.replace(nextParamLink.substring(1));

        return;
      }

      navigate(nextParamLink);
    } else {
      navigate('/dashboard');
    }
  };

  return navigateToNextParam;
};

const isForOtherImpaktProduct = (hostname: string) => {
  return (
    /impakt\.com */.test(hostname.substring(1)) || /impakt-dev\.com */.test(hostname.substring(1))
  );
};
