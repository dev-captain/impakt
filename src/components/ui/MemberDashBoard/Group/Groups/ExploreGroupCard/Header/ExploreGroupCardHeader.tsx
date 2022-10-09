import { Box, Button } from '@chakra-ui/react';
import * as React from 'react';
import GroupCardWrapperHeader from '../../GroupCardHeader';
import ExploreGroupCardPrivatePublicToggleButton from './ExploreGroupCardPrivatePublicToggleButton';

interface ExploreGroupCardWrapperHeaderPropsI {
  status: 'public' | 'private';
  handleChangeStatus: (status: ExploreGroupCardWrapperHeaderPropsI['status']) => void;
}
const ExploreGroupCardHeader: React.FC<ExploreGroupCardWrapperHeaderPropsI> = ({
  status,
  handleChangeStatus,
}) => {
  return (
    <GroupCardWrapperHeader justify="space-between" title="Explore Groups">
      <Box m="20px 0 !important">
        <ExploreGroupCardPrivatePublicToggleButton
          status={status}
          handleChangeStatus={handleChangeStatus}
        />
      </Box>
    </GroupCardWrapperHeader>
  );
};

export default ExploreGroupCardHeader;
