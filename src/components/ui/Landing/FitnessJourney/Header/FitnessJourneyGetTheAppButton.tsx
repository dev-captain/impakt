import * as React from 'react';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../../data/routes';

const FitnessJourneyGetTheAppButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Common.ImpaktButton
      variant="black"
      height={{ lgx: '75px', lg: '60px' }}
      w={{ lgx: '280px', lg: '240px' }}
      borderRadius="10px"
      gap="8px"
      fontSize={{ lgx: '22px', lg: '18px' }}
      display="flex"
      justifyContent="center"
      width="100%"
      margin={{ base: 'auto', md: 'initial' }}
      mt={{ base: '30px', md: '0' }}
      onClick={() => navigate(routes.download)}
    >
      <I.DownloadIcon />
      Get The App
    </Common.ImpaktButton>
  );
};

export default FitnessJourneyGetTheAppButton;
