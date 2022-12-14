import { Box } from '@chakra-ui/react';
import * as React from 'react';
import GroupCardWrapperHeader from '../../GroupCardHeader';
import ExploreGroupCardPrivatePublicToggleButton from './ExploreGroupCardPrivatePublicToggleButton';

interface ExploreGroupCardWrapperHeaderPropsI {
  status: 'Public' | 'Private';
  setStatus: (status: 'Public' | 'Private') => void;
}
const ExploreGroupCardHeader: React.FC<ExploreGroupCardWrapperHeaderPropsI> = ({
  status,
  setStatus,
}) => {
  return (
    <GroupCardWrapperHeader justify="space-between" title="Explore">
      <Box m="20px 0 !important">
        <ExploreGroupCardPrivatePublicToggleButton status={status} setStatus={setStatus} />
      </Box>
    </GroupCardWrapperHeader>
  );
};

export default ExploreGroupCardHeader;
