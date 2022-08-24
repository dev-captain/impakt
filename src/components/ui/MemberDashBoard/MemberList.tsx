import { Box, Button, Text, Image, useMediaQuery, CircularProgress } from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';
import Images from 'assets/images';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchMembersOfGroup } from '../../../lib/redux/slices/groups/actions/fetchMembersOfGroup';

const MemberList: React.FC = () => {
  const [isLessThan576] = useMediaQuery('(max-width: 576px)');
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (activeGroup) {
      dispatch(fetchMembersOfGroup(activeGroup.id));
    }
  }, []);

  if (isLoading) return <CircularProgress isIndeterminate />;

  return (
    <Box marginStart="0 !important">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w={isLessThan576 ? 'full' : '342px'}
        p={{ base: '16px', md: '24px' }}
        marginTop="26px"
        marginLeft="auto"
        marginBottom="20px"
      >
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                Members
              </Text>
              <I.SettingIcon color="#B0C3D6" width="20px" />
            </Box>
            <Button
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
            </Button>
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
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
                MattFox
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginRight="16px">
                Creator
              </Text>
              <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
                Demideus
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginRight="16px">
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
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
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
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
                0dd431c8
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <I.PlayChallengeIcon />
            </Box>
          </Box> */}
          {/* <Box backgroundColor="#E2EDF7" w="full" height="1px" margin="20px 0" />
          <Box display="flex" marginTop="24px" justifyContent="space-between" alignItems="center">
            <Text textTransform="uppercase" color="#728BA3" fontSize="16px" fontWeight="600">
              members
            </Text>
            <I.SearchIcon color="#B0C3D6" width="20px" />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Box display="flex" alignItems="center">
              <Image src={Images.group.ellipse} zIndex="10" />
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
                Ani D.
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text color="#4E6070" fontSize="18px" fontWeight="500" marginRight="16px">
                31 250
              </Text>
              <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" />
            </Box>
          </Box> */}
          {members.map(({ firstName, username }) => (
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
              <Box display="flex" alignItems="center">
                <Image src={Images.group.ellipse} zIndex="10" />
                <Text color="#4E6070" fontSize="18px" fontWeight="500" marginLeft="16px">
                  {firstName ?? username}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default MemberList;
