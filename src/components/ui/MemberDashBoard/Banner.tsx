import { Box, Button, Image, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import Images from 'assets/images';
import { useAppSelector } from 'hooks';
import GroupDetailSettingsModal from './Group/GroupDetails/GroupDetailsSettingsModal';

interface BannerProps {
  img: any;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');
  const [isLessThan576] = useMediaQuery('(max-width: 576px)');

  const member = useAppSelector((state) => state.memberAuth.member);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup);

  return (
    <>
      <Box>
        <Box backgroundColor="#fff" borderRadius="24px" w="full" p={{ base: '16px', md: '32px' }}>
          <Image src={img} />
          <Box>
            <Box
              marginTop="32px"
              display={isLessThan768 ? 'block' : 'flex'}
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
              <Box
                display={isLessThan576 ? 'block' : 'flex'}
                marginTop={isLessThan768 ? '20px' : '0'}
              >
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
                  fontSize={isLessThan576 ? '14px' : '16px'}
                >
                  <I.PeopleIcon width={isLessThan576 ? '14px' : '18px'} marginRight="8px" />
                  {activeGroup?.memberCount}
                </Button>
                <Box display="flex" alignItems="center" marginTop={isLessThan576 ? '20px' : '0'}>
                  <Box display="flex" position="relative">
                    {members.slice(0, 5).map(() => (
                      <Image src={Images.group.ellipse} zIndex="10" />
                    ))}
                    {/* <Image src={Images.group.ellipse} zIndex="10" />
                  <Image src={Images.group.ellipse} zIndex="9" position="absolute" left="27px" />
                  <Image src={Images.group.ellipse} zIndex="8" position="absolute" left="53px" />
                  <Image src={Images.group.ellipse} zIndex="7" position="absolute" left="79px" />
                  <Image src={Images.group.ellipse} position="absolute" left="105px" /> */}
                  </Box>
                  <Text fontSize="18px" color="#5C7FFF" fontWeight="500" marginLeft="112px">
                    friends
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={isLessThan768 ? 'block' : 'flex'}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display={isLessThan576 ? 'block' : 'flex'}>
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
                      <Text
                        color="#4E6070"
                        fontSize={{ base: '14px', md: '20px' }}
                        fontWeight="600"
                      >
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
                  marginLeft={isLessThan576 ? '0' : '12px'}
                  marginTop={isLessThan576 ? '12px' : '0'}
                >
                  <Box display="flex" alignItems="center">
                    <I.AppIcon />
                    <Box marginLeft="12px">
                      <Text color="#B0C3D6" fontSize="12px" fontWeight="700">
                        top program
                      </Text>
                      <Text
                        color="#4E6070"
                        fontSize={{ base: '14px', md: '20px' }}
                        fontWeight="600"
                      >
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
                  marginLeft={isLessThan576 ? '0' : '12px'}
                  marginTop={isLessThan576 ? '12px' : '0'}
                >
                  <Box display="flex" alignItems="center">
                    <I.CalenderIcon />
                    <Box marginLeft="12px">
                      <Text color="#B0C3D6" fontSize="12px" fontWeight="700">
                        next event
                      </Text>
                      <Text
                        color="#4E6070"
                        fontSize={{ base: '14px', md: '20px' }}
                        fontWeight="600"
                      >
                        Power Training
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box marginTop={isLessThan768 ? '20px' : '0'}>
                <Button
                  backgroundColor="#F4F7F9"
                  borderRadius="8px"
                  height="40px"
                  width="40px"
                  _focus={{ boxShadow: 'none' }}
                >
                  <I.SearchIcon color="#4E6070" width="22px" />
                </Button>
                {activeGroup?.ownerId === member?.id && (
                  <Button
                    onClick={onOpen}
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
                    <I.SettingIcon width="16px" />
                    Settings
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <GroupDetailSettingsModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};
export default Banner;
