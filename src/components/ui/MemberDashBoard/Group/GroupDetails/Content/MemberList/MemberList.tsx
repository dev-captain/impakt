import {
  Box,
  // Button,
  Text,
  Avatar,
  HStack,
  // useClipboard,
  // useToast,
} from '@chakra-ui/react';
// import { I } from 'components';
import * as React from 'react';

import MemberDashboardCard from '../../../../MemberDashBoardCard';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import AccessDeniedBox from '../AccessDeniedBox';
import { GetMembersOfGroupResGroupRole } from '../../../../../../../lib/impakt-dev-api-client/react-query/types';

const rolesOrders: GetMembersOfGroupResGroupRole[] = [
  'Creator',
  'Owner',
  'Admin',
  'Moderator',
  'Member',
  'None',
];

const MemberList: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();
  // const toast = useToast();
  // const isMemberLoading = useAppSelector((state) => state.groupsReducer.isMembersLoading);
  const members = usePersistedGroupStore().membersOfGroup;
  const sortByRole = members?.Members.sort(
    (a, b) =>
      rolesOrders.indexOf(a.role) - rolesOrders.indexOf(b.role) ||
      a.User.username.localeCompare(b.User.username),
  );

  if (activeGroup?.isPreview && activeGroup.private) return <AccessDeniedBox />;

  return (
    <MemberDashboardCard
      p={{ base: '16px', md: '24px' }}
      marginTop={{ base: 0, md: '26px' }}
      marginLeft="auto"
      marginBottom="20px"
      minW="312px"
      width={{ base: '100%', md: '30%', lgx: '25%' }}
    >
      <Box w="full">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
              Members
            </Text>
            {/* <I.SettingIcon color="#B0C3D6" width="20px" /> */}
          </Box>
          {/* <Button
              onClick={onCopyHandle}
              backgroundColor="#1C1C28"
              fontWeight="700"
              color="#fff"
              width="36px"
              minW="36px"
              height="36px"
              p="0"
              _hover={{ backgroundColor: '#1C1C28' }}
              _active={{ backgroundColor: '#1C1C28' }}
              borderRadius="8px"
              _focus={{ boxShadow: 'none' }}
              justifyContent="space-evenly"
            >
              <I.UnionIcon />
            </Button> */}
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
        <Box maxHeight="428px" overflowY="scroll">
          {sortByRole?.map(
            ({ role, User }) =>
              role !== 'None' && (
                <HStack
                  as="a"
                  href=""
                  onClick={(e) => e.preventDefault()}
                  title={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                  key={`${User.id}-box`}
                  w="full"
                  alignItems="center"
                  marginTop="16px !important"
                >
                  <HStack
                    w="full"
                    maxW="60%"
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
        </Box>
      </Box>
    </MemberDashboardCard>
  );
};
export default MemberList;
