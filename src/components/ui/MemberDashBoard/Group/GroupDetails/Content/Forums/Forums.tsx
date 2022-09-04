import { Box, Text, Button } from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';
// import Images from 'assets/images';
import UserForumsCard from '../../../../UserForumsCard';

const Forums: React.FC = () => {
  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '40%', lgx: '50%' }}>
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        p={{ base: '16px', md: '24px' }}
        marginTop="26px"
        marginLeft="auto"
        marginBottom="20px"
      >
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                Forums
              </Text>
              <Button
                background="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                padding="0"
              >
                <I.FullScreenIcon color="#B0C3D6" width="20px" />
              </Button>
            </Box>
          </Box>
          <UserForumsCard
            name="KittenSpy"
            msg="Should be good 9am UTC?"
            title="Best time for Morning routines"
            msgNo="18"
            view="44"
            time="2h"
          />
          <UserForumsCard
            name="NoIdea"
            msg="more Cardio pls"
            title="What exercises you’d like to see?"
            msgNo="12"
            view="14"
            time="8h"
          />
          <UserForumsCard
            name="Modern47"
            msg="same for me..."
            title="How to find time for fitness?"
            msgNo="66"
            view="152"
            time="4d"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Forums;
