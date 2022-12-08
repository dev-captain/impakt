import {
  Box,
  // Button,
  Text,
  Avatar,
  HStack,
  VStack,
  // useClipboard,
  // useToast,
} from '@chakra-ui/react';
// import { I } from 'components';
import * as React from 'react';
import { I } from 'components';

import MemberDashboardCard from '../../../../MemberDashBoardCard';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const MemberList: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();
  // const toast = useToast();
  // const isMemberLoading = useAppSelector((state) => state.groupsReducer.isMembersLoading);
  const members = usePersistedGroupStore().membersOfGroup;

  if (activeGroup?.isPreview && activeGroup.private)
    return (
      <MemberDashboardCard
        justifyContent="center"
        alignItems="center"
        width={{ base: '100%', md: '312px' }}
        minW={{ base: '100%', md: '312px' }}
        minH={{ base: '100%', md: '312px' }}
        height={{ base: '100%', md: '312px' }}
        marginTop="26px"
      >
        <I.LockIcon />
      </MemberDashboardCard>
    );

  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '30%', lgx: '25%' }}>
      {/* <Skeleton isLoaded={!isMemberLoading}> */}
      <MemberDashboardCard
        marginTop={{ base: 0, md: '26px' }}
        marginLeft="auto"
        marginBottom="20px"
        overflow="hidden"
      >
        <VStack display="flex" w="full">
          <Box display="flex" alignItems="center" w="full">
            <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
              Members
            </Text>
          </Box>
          {/* <Text
            textTransform="uppercase"
            color="#728BA3"
            fontSize="16px"
            fontWeight="600"
            marginTop="24px"
          >
            moderators
          </Text>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginLeft="16px"
              >
                MattFox
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginRight="16px"
              >
                Creator
              </Text>
              <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginLeft="16px"
              >
                Demideus
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginRight="16px"
              >
                Admin
              </Text>
              <Box backgroundColor="#E2EDF7" width="8px" height="8px" borderRadius="50%" />
            </Box>
          </Box>
          <Box backgroundColor="#E2EDF7" w="full" height="1px" margin="20px 0" />
          <Text
            textTransform="uppercase"
            color="#728BA3"
            fontSize="16px"
            fontWeight="600"
            marginTop="24px"
          >
            on challenge
          </Text>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginLeft="16px"
              >
                Dahaka
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <I.PlayChallengeIcon />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginLeft="16px"
              >
                0dd431c8
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <I.PlayChallengeIcon />
            </Box>
          </Box> */}
          {/* <Box backgroundColor="#E2EDF7" w="full" height="1px" margin="20px 0" />
          <Box display="flex" marginTop="24px" justifyContent="space-between" alignItems="center">
            <Text
              textTransform="uppercase"
              color="#728BA3"
              fontSize={{ lgx: '18px', md: '14px' }}
              fontWeight="600"
            >
              members
            </Text>
            <I.SearchIcon color="#B0C3D6" width="20px" />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginLeft="16px"
              >
                Ani D.
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text
                color="#4E6070"
                fontSize={{ lgx: '18px', md: '14px' }}
                fontWeight="500"
                marginRight="16px"
              >
                31 250
              </Text>
              <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" />
            </Box>
          </Box> */}
          {members?.Members.map(
            ({ role, User }) =>
              role !== 'None' && (
                <HStack
                  key={`${User.id}-box`}
                  w="full"
                  alignItems="center"
                  marginTop="16px !important"
                >
                  <HStack
                    w="full"
                    maxW="75%"
                    spacing="1em"
                    sx={{
                      _before: { wordBreak: 'keep-all' },
                      _after: { wordBreak: 'keep-all' },
                      wordBreak: 'keep-all',
                    }}
                  >
                    <Avatar
                      name={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                      width="32px"
                      height="32px"
                    />
                    <Text
                      color="#4E6070"
                      fontSize={{ lgx: '18px', md: '14px' }}
                      lineHeight="100%"
                      fontWeight="500"
                      marginLeft="16px"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                    </Text>
                  </HStack>
                  <HStack justifyContent="flex-end" w="full">
                    <Text
                      color="#4E6070"
                      fontSize={{ lgx: '18px', md: '14px' }}
                      lineHeight="100%"
                      fontWeight="500"
                    >
                      {role}
                    </Text>
                  </HStack>
                  {/* <HStack flex="2" display="flex" alignItems="center">
                    <Avatar
                      name={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                      width="32px"
                      height="32px"
                    />
                    <Text
                      color="#4E6070"
                      fontSize={{ lgx: '18px', md: '14px' }}
                      lineHeight="100%"
                      fontWeight="500"
                      marginLeft="16px"
                      whiteSpace="nowrap"
                      sx={{
                        _before: { wordBreak: 'keep-all' },
                        _after: { wordBreak: 'keep-all' },
                        wordBreak: 'keep-all',
                      }}
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                      fjasjfajlskaklsafsajfaskjlfkjl
                    </Text>
                  </HStack>

                  <HStack flex="2" marginLeft="1em" display="flex" alignItems="center">
                    <Text color="#4E6070" fontSize={{ lgx: '18px', md: '14px' }} fontWeight="500">
                      {role}
                    </Text>
                    {/* <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" /> */}
                </HStack>
              ),
          )}
        </VStack>
      </MemberDashboardCard>
      {/* </Skeleton> */}
    </Box>
  );
};
export default MemberList;
