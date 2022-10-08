import {
  Box,
  // Button,
  Text,
  Image,
  CircularProgress,
  Skeleton,
  // useClipboard,
  // useToast,
} from '@chakra-ui/react';
// import { I } from 'components';
import * as React from 'react';
import Images from 'assets/images';
import { useAppSelector } from 'hooks';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';

const MemberList: React.FC = () => {
  // const toast = useToast();
  const isMemberLoading = useAppSelector((state) => state.groupsReducer.isMembersLoading);
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup);

  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '30%', lgx: '25%' }}>
      <Skeleton isLoaded={!isMemberLoading}>
        <MemberDashboardCard
          p={{ base: '16px', md: '24px' }}
          marginTop={{ base: 0, md: '26px' }}
          marginLeft="auto"
          marginBottom="20px"
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
            {members?.Members.map(
              ({ role, User }) =>
                role !== GroupRole.None && (
                  <Box
                    key={`${User.id}-box`}
                    display="flex"
                    justifyContent="space-between"
                    marginTop="16px"
                  >
                    <Box display="flex" alignItems="center">
                      <Image src={Images.group.ellipse} zIndex="10" />
                      <Text
                        color="#4E6070"
                        fontSize={{ lgx: '18px', md: '14px' }}
                        fontWeight="500"
                        marginLeft="16px"
                      >
                        {User.firstName ?? User.username}
                      </Text>
                    </Box>

                    <Box marginLeft="1em" display="flex" alignItems="center">
                      <Text color="#4E6070" fontSize={{ lgx: '18px', md: '14px' }} fontWeight="500">
                        {role}
                      </Text>
                      {/* <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" /> */}
                    </Box>
                  </Box>
                ),
            )}
          </Box>
        </MemberDashboardCard>
      </Skeleton>
    </Box>
  );
};
export default MemberList;
