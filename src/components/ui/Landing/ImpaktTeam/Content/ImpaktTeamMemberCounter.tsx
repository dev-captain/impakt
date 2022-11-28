import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import CountUp from 'react-countup';

const ImpaktTeamMemberCounter: React.FC = () => {
  return (
    <Box mt={{ base: '20px !important', lg: '80px !important' }} display="flex" flexDir="column">
      <Text
        width="100%"
        color="#35485a"
        fontSize="36px"
        fontWeight="700"
        textTransform="uppercase"
        textAlign="center"
      >
        TEAM MEMBERS
      </Text>
      <CountUp start={0} end={40} duration={3} separator=" " enableScrollSpy prefix="" suffix="+ ">
        {({ countUpRef }) => (
          <Box
            as="span"
            width="100%"
            color="#35485a"
            fontSize="96px"
            fontWeight="700"
            textTransform="uppercase"
            textAlign="center"
            mt={{ base: '20px !important', lg: '0 !important' }}
            ref={countUpRef as any}
          />
        )}
      </CountUp>
    </Box>
  );
};
export default ImpaktTeamMemberCounter;
