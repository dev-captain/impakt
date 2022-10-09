import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';

interface MemberCountPropsI {
  count: number;
}
const MemberCount: React.FC<MemberCountPropsI> = ({ count }) => {
  return (
    <Box display="flex" alignItems="center">
      <I.PeopleIcon width={{ lgx: '32px', base: '26px' }} />
      <Text
        as="h1"
        textStyle="TitleBold64"
        fontSize={{ lgx: '20px', base: '16px' }}
        color="#1C1C28"
        marginLeft="6px"
      >
        {count}
      </Text>
    </Box>
  );
};

export default MemberCount;
