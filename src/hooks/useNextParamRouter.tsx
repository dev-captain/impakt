import { useLocation, useNavigate } from 'react-router-dom';

export const useNextParamRouter = () => {
  const navigate = useNavigate();
  const isThereNextParam = useLocation().search.substring(1, 5).includes('next');
  const nextParamLink = useLocation().search.substring(6);
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
