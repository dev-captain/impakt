import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { leaveGroup } from '../../../../../lib/redux/slices/groups/actions/leaveGroup';
import { deleteGroup } from '../../../../../lib/redux/slices/groups/actions/deleteGroup';
import SearchUserModal from './SearchUserModal/SearchUserModal';

interface BannerProps {
  img: any;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const member = useAppSelector((state) => state.memberAuth.member);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup);
  const handleLeaveGroup = async () => {
    try {
      if (activeGroup) {
        await dispatch(leaveGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Left from Group successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `You can't leave your owned group`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }

    navigate('/dashboard/groups');
  };

  const handleGroupDelete = async () => {
    try {
      if (activeGroup?.id) {
        await dispatch(deleteGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Group is deleted successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
        navigate('/dashboard/groups');
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `${e.response.data.message}`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  return (
    <Box>
      <Box backgroundColor="#fff" borderRadius="24px" w="full" p={{ base: '16px', md: '32px' }}>
        <Image src={img} minH="100px" minWidth="100%" />
        <Box>
          <Box
            marginTop="32px"
            display={{ md: 'flex', base: 'block' }}
            justifyContent="space-between"
            alignItems="center"
            mb="24px"
          >
            <Text
              textStyle="TitleBold64"
              fontSize={{ base: '20px', md: '30px', lgx: '44px' }}
              color="29323B"
            >
              {activeGroup?.friendlyName}
            </Text>
            <Box display={{ md: 'flex', base: 'block' }} marginTop={{ md: '0', base: '20px' }}>
              <Button
                backgroundColor="#E7ECFF"
                borderRadius="8px"
                width="107px"
                height="34px"
                _hover={{ backgroundColor: '#E7ECFF' }}
                _active={{ backgroundColor: '#E7ECFF' }}
                _focus={{ boxShadow: 'none' }}
                color="#5C7FFF"
                marginRight="16px"
                fontSize={{ base: '14px', md: '16px' }}
              >
                <I.PeopleIcon width={{ md: '18px', base: '14px' }} marginRight="8px" />
                {members.length}
              </Button>
              {/* <Box display="flex" alignItems="center" marginTop={{ md: '0', base: '20px' }}>
                <AvatarGroup size="sm" max={3} spacing="-0.50rem">
                  {members.map(({ firstName, username }) => (
                    <Avatar name={firstName ?? username} src={Images.group.ellipse} />
                  ))}
                </AvatarGroup>
                <Text fontSize="18px" color="#5C7FFF" fontWeight="500" marginLeft="12px">
                  friends
                </Text>
              </Box> */}
            </Box>
          </Box>
          <Box
            display={{ md: 'flex', base: 'block' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display={{ md: 'flex', base: 'block' }}>
              <Box
                border="1px solid #D3E2F0"
                borderRadius="12px"
                width={{ base: 'auto', md: '200px' }}
                p="6px 12px"
              >
                <Box display="flex" alignItems="center">
                  <I.FireIcon />
                  <Box marginLeft="12px">
                    <Text color="#B0C3D6" fontSize="12px" fontWeight="700">
                      top challenge
                    </Text>
                    <Text color="#4E6070" fontSize={{ base: '14px', md: '20px' }} fontWeight="600">
                      Hero Cardio
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                border="1px solid #D3E2F0"
                borderRadius="12px"
                width={{ base: 'auto', md: '200px' }}
                p="6px 12px"
                marginLeft={{ md: '12px', base: '0' }}
                marginTop={{ md: '0', base: '12px' }}
              >
                <Box display="flex" alignItems="center">
                  <I.AppIcon />
                  <Box marginLeft="12px">
                    <Text color="#B0C3D6" fontSize="12px" fontWeight="700">
                      top program
                    </Text>
                    <Text color="#4E6070" fontSize={{ base: '14px', md: '20px' }} fontWeight="600">
                      Home Abs
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                border="1px solid #D3E2F0"
                borderRadius="12px"
                width={{ base: 'auto', md: '232px' }}
                p="6px 12px"
                marginLeft={{ md: '12px', base: '0' }}
                marginTop={{ md: '0', base: '12px' }}
              >
                <Box display="flex" alignItems="center">
                  <I.CalenderIcon />
                  <Box marginLeft="12px">
                    <Text color="#B0C3D6" fontSize="12px" fontWeight="700">
                      next event
                    </Text>
                    <Text color="#4E6070" fontSize={{ base: '14px', md: '20px' }} fontWeight="600">
                      Power Training
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box marginTop={{ md: '0', base: '20px' }} display="flex">
              <Button
                backgroundColor="#F4F7F9"
                borderRadius="8px"
                height="40px"
                width="40px"
                _focus={{ boxShadow: 'none' }}
              >
                <I.SearchIcon color="#4E6070" width="22px" />
              </Button>
              <Menu>
                <Button
                  as={MenuButton}
                  marginLeft="8px"
                  backgroundColor="#F4F7F9"
                  borderRadius="8px"
                  p="0"
                  justifyContent="space-evenly"
                  width="123px"
                  height="40px"
                  color="#4E6070"
                  _focus={{ boxShadow: 'none' }}
                >
                  <Text transform="translate(10px, 10px)">
                    <I.SettingIcon width="16px" />
                  </Text>
                  <Text transform="translate(10px,-11px)">Settings</Text>
                </Button>
                <MenuList padding="12px">
                  {activeGroup?.ownerId === member?.id && (
                    <MenuItem onClick={onOpen} gap="11px" padding="8px 10px">
                      <I.PeopleIcon width="16px" color="#4E6070" />
                      Invite
                    </MenuItem>
                  )}
                  <SearchUserModal onClose={onClose} isOpen={isOpen} />
                  <MenuItem gap="11px" padding="8px 10px">
                    <I.PinIcon width="16px" color="#4E6070" />
                    Pin Group
                  </MenuItem>
                  <MenuItem gap="11px" padding="8px 10px">
                    <I.InfoIcon width="16px" color="#4E6070" />
                    Report
                  </MenuItem>

                  {activeGroup?.ownerId === member?.id && (
                    <MenuItem onClick={handleGroupDelete} gap="11px" padding="8px 10px">
                      <I.LogOutIcon width="16px" color="#F04153" />
                      Delete Group
                    </MenuItem>
                  )}

                  {activeGroup?.ownerId !== member?.id && (
                    <MenuItem onClick={handleLeaveGroup} gap="11px" padding="8px 10px">
                      <I.LogOutIcon width="16px" color="#F04153" />
                      Leave Group
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
