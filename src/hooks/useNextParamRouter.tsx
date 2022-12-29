import { useLocation, useNavigate } from 'react-router-dom';

export const useNextParamRouter = (fallBackLink?: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isThereNextParam = location.search.includes('next=');
  const navigateToLink = isThereNextParam ? useLocation().search.split('next=')[1] : fallBackLink;

  const navigateToNextParam = () => {
    if (navigateToLink) {
      if (isForOtherImpaktProduct(navigateToLink)) {
        window.location.replace(navigateToLink.substring(1));
      } else {
        navigate(navigateToLink, { state: location.state });
      }
    }
  };

  return navigateToNextParam;
};

const isForOtherImpaktProduct = (hostname: string) => {
  return (
    /impakt\.com */.test(hostname.substring(1)) || /impakt-dev\.com */.test(hostname.substring(1))
  );
};
