import * as React from 'react';
// import { useAppSelector } from 'hooks';
import { Box, HStack } from '@chakra-ui/react';

import { Common, I } from 'components';
import { GroupDetails } from 'data';
// import Images from 'assets/images';
import Images from 'assets/images';
import GroupsCard from '../../../GroupsCard';

const ExplorePublicSection: React.FC = () => {
  // const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  // if (exploreGroups.length === 0) return null;

  return (
    <HStack
      columnGap={{ md: '24px' }}
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      margin="30px 0"
      flexWrap={{ sm: 'wrap' }}
      display={{ sm: 'flex' }}
    >
      {/* here is the components */}
      {GroupDetails.map(
        (a) =>
          a.private === 'false' && (
            <Box
              w={{
                base: '100%',
                sm: '49%',
                md: '31%',
                lgx: '23%',
              }}
            >
              {/* <GroupsCard img={Images.group.img} member={Number(2)} name={a.name}> */}
              <GroupsCard img={Images.group.img} member={Number(2)} name={a.name}>
                <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
                  <Box maxW="99px" maxH="38px">
                    <Common.ImpaktButton
                      variant="transparent"
                      _hover={{ backgroundColor: '#000', color: '#fff' }}
                      borderRadius="8px"
                      fontWeight="600"
                      border="1px solid #1C1C28"
                      justifyContent="space-around"
                      fontSize="16px"
                      leftIcon={<I.UnionIcon width="12px" />}
                    >
                      Join
                    </Common.ImpaktButton>
                  </Box>
                </Box>
              </GroupsCard>
            </Box>
          ),
      )}
    </HStack>
  );
};
export default ExplorePublicSection;
