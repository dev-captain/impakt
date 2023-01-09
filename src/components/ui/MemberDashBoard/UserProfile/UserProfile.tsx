import React from 'react';
import { Box, HStack, VStack, Divider, Avatar, Input, Text } from '@chakra-ui/react';
import { InputGroup, Image, useDisclosure, InputLeftElement } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardCard from '../MemberDashBoardCard';
import { usePersistedAuthStore } from '../../../../lib/zustand';
import { Common, I } from '../../..';
import {
  WarningIcon,
  LockIcon,
} from '@chakra-ui/icons';
import ChangePassword from '../UserProfile/ChangePassword';
import ChangeEmail from '../UserProfile/ChangeEmail';

const UserProfile: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const ChangePasswordDisclosure = useDisclosure();
  const ChangeEmailDisclosure = useDisclosure();

  return (
    <>
      <Box
        w="full"
        as="section"
        id="general-section"
      >
        <MemberDashboardSectionHeadlineText title="Profile" />
        <HStack mt="2em" flexWrap="wrap" columnGap="1em" rowGap={{ base: '18px', lg: '32px' }}>
          <MemberDashboardCard
            p={{ base: '1.5em', md: '2em' }}
            maxW={{ base: '100%', md: '588px' }}
          >
            <VStack spacing="0" rowGap="2em" w="full">
              <VStack rowGap="40px" justify="center" align="center" w="full">
                <Box>
                  <Avatar
                    boxShadow="extra"
                    width="160px"
                    border="8px solid #fff"
                    height="160px"
                    size="2xl"
                    name={member?.firstName?.replace(' ', '') ?? member?.username?.replace(' ', '')}
                  />
                </Box>
                <HStack>
                  <Common.ImpaktButton
                    p="1em"
                    w="160px"
                    leftIcon={<I.UploadIcon />}
                    variant="white-50"
                  >
                    Upload
                  </Common.ImpaktButton>
                  <Common.ImpaktButton
                    p="1em"
                    w="160px"
                    leftIcon={<I.CloseIcon width="20px" />}
                    variant="white-50"
                    fontWeight="bold"
                  >
                    Remove
                  </Common.ImpaktButton>
                </HStack>
              </VStack>
              <Divider />
              <HStack
                display="flex"
                flexWrap="wrap"
                align="center"
                justify="center"
                w="full"
                columnGap="12px"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  w={{ base: '100%', md: '72%', lg: '72%', xl: '155px' }}
                >
                  <Box w="66%" paddingRight="10px">
                    <Text>Membername:</Text>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        margin="9px 12px"
                        width="20px"
                        children={<I.NickNameIcon />}
                      ></InputLeftElement>
                      <Input margin="5px 0" size="lg" placeholder="Demideus"></Input>
                    </InputGroup>
                  </Box>
                  <Box w="33%" display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="space-between">
                      <Text mr="20px">ID:</Text>
                      <Text color="red">Generate</Text>
                    </Box>
                    <Box>
                      <Input margin="5px 0" size="lg" placeholder="#0001"></Input>
                    </Box>
                  </Box>
                </Box>
                <Box
                  w={{ base: '100%', md: '25%', lg: '25%', xl: '155px' }}
                  marginLeft="0px !important"
                >
                  <Box marginLeft="0">
                    <Common.ImpaktButton
                      marginTop="22px"
                      height="48px"
                      bgGradient="linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))"
                      leftIcon={<I.CheckIcon margin="auto 9px" />}
                    >
                      <Text fontWeight="500">Save</Text>
                    </Common.ImpaktButton>
                  </Box>
                </Box>
              </HStack>
              <Divider />
              <HStack
                align="center"
                justify="center"
                w="full"
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Box w={{ base: '100%', md: '69%', lg: '69%', xl: '155px' }}>
                  <Text>Email:</Text>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      margin="9px 12px"
                      width="20px"
                      children={<I.Email />}
                    ></InputLeftElement>
                    <Input size="lg" margin="5px 0" placeholder="hello@mail.com"></Input>
                  </InputGroup>
                </Box>
                <Box
                  w={{ base: '100%', md: '30%', lg: '30%', xl: '155px' }}
                  marginLeft="0px !important"
                >
                  <Text></Text>
                  <Common.ImpaktButton
                    height="48px"
                    marginTop="21px"
                    bg="rgba(238, 244, 246, 1)"
                    onClick={() => {
                      ChangeEmailDisclosure.onOpen();
                    }}
                  >
                    <Text color="rgba(41, 50, 59, 1)" fontWeight="600">
                      {' '}
                      Change Email
                    </Text>
                  </Common.ImpaktButton>
                </Box>
              </HStack>
              <Divider />
              <HStack
                align="center"
                justify="flex-end"
                w="full"
                display="flex"
                flexWrap="wrap"
                rowGap="16px"
              >
                <Box w={{ base: '100%', md: '36%', lg: '36%', xl: '155px' }}>
                  <Common.ImpaktButton height="48px" bg="rgba(238, 244, 246, 1)">
                    <LockIcon
                      marginRight="10px"
                      color="#29323B"
                      onClick={() => {
                        ChangePasswordDisclosure.onOpen();
                      }}
                    ></LockIcon>
                    <Text color="rgba(41, 50, 59, 1)" fontWeight="bold">
                      {' '}
                      Change Password
                    </Text>
                  </Common.ImpaktButton>
                </Box>
                <Box
                  w={{ base: '100%', md: '20%', lg: '20%', xl: '155px' }}
                  marginLeft={{ base: '0px !important', md: '8px !important' }}
                >
                  <Common.ImpaktButton height="48px" bg="rgba(240, 65, 83, 0.1)">
                    <Text color="rgba(189, 15, 33, 1)" fontWeight="bold">
                      Sign Out
                    </Text>
                  </Common.ImpaktButton>
                </Box>
              </HStack>
            </VStack>
          </MemberDashboardCard>
          <MemberDashboardCard
            maxW={{ base: '100%', md: '588px' }}
            p={{ base: '1.5em', md: '2em' }}
            marginLeft={{ base: '0px !important', md: '8px' }}
          >
            <VStack spacing="0" rowGap="24px" w="full" justifyContent="space-between">
              <HStack
                display="flex"
                gap="16px"
                flexWrap="wrap"
                justifyContent="space-between"
                width="100%"
              >
                <Box
                  backgroundColor="rgba(242, 121, 97, 0.1)"
                  textAlign="center"
                  borderRadius="17px"
                  w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
                >
                  <Text fontSize="32px" fontWeight="900" color="#CC4C33" padding="12px 0 0 0">
                    1,200
                  </Text>
                  <Text
                    color="#CC4C33"
                    fontWeight="500"
                    fontSize="16px"
                    padding="0 12px 12px 12px"
                    opacity="1"
                  >
                    Koin Balance
                  </Text>
                </Box>
                <Box
                  backgroundColor="#F5F8FA"
                  textAlign="center"
                  borderRadius="17px"
                  w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
                  marginLeft="0px !important"
                >
                  <Text fontSize="32px" fontWeight="900" padding="12px 0 0 0">
                    9,800
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize="16px"
                    padding="0 12px 12px 12px"
                    color="rgba(114, 139, 163, 1)"
                  >
                    GODL Balance
                  </Text>
                </Box>
                <Box
                  backgroundColor="#F5F8FA"
                  textAlign="center"
                  borderRadius="17px"
                  w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
                  marginLeft="0px !important"
                >
                  <Box>
                    <Text fontSize="32px" fontWeight="900" padding="12px 0 0 0">
                      47
                    </Text>
                    <Text
                      fontWeight="500"
                      fontSize="16px"
                      padding="0 12px 12px 12px"
                      color="rgba(114, 139, 163, 1)"
                    >
                      Active Days
                    </Text>
                  </Box>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <Image
                    src="../../../../src/assets/images/avatar.png"
                    width="16.25rem"
                    height="inherit"
                    alt="Dan Abramov"
                  />
                </Box>
              </HStack>
              <HStack>
                <Box
                  backgroundColor="rgba(242, 121, 97, 0.1)"
                  padding="10px"
                  display="inline-flex"
                  borderRadius="5px"
                >
                  <WarningIcon color="rgba(204, 76, 51, 1)" margin="auto 9px"></WarningIcon>
                  <Text fontSize="14px" color="rgba(204, 76, 51, 1)" fontWeight="400">
                    Soon you'll be able to customize and play as your avatar.
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </MemberDashboardCard>
        </HStack>
      </Box>
      <ChangePassword
        open={ChangePasswordDisclosure.isOpen}
        close={ChangePasswordDisclosure.onClose}
      />
      <ChangeEmail open={ChangeEmailDisclosure.isOpen} close={ChangeEmailDisclosure.onClose} />
    </>
  );
};

export default UserProfile;
