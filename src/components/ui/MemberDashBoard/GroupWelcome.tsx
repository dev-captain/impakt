import { Box, Text, Image, Button } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import Images from 'assets/images';
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../../hooks';

interface BannerProps {
  hideGroupWelcome: () => void;
}
const GroupWelcome: React.FC<BannerProps> = ({ hideGroupWelcome }) => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);

  return (
    <Box>
      <Box backgroundColor="#fff" borderRadius="24px" w="full" p={{ base: '16px', md: '32px' }}>
        <Image src={Images.group.group} minH="100px" minWidth="100%" />
        <Box>
          <Box
            marginTop="24px"
            display={{ md: 'flex', base: 'block' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              textStyle="TitleBold64"
              fontSize={{ base: '20px', md: '30px', lgx: '44px' }}
              color="29323B"
            >
              {activeGroup?.groupName}
            </Text>
            <Box
              display={{ base: 'block', md: 'flex' }}
              alignItems="center"
              marginTop={{ md: '0', base: '20px' }}
            >
              <Box display="flex" alignItems="center" mr="50px">
                <I.PeopleIcon color="#5C7FFF" />
                <Text
                  as="h1"
                  textStyle="TitleBold64"
                  fontSize="48px"
                  letterSpacing="-1.5px"
                  marginLeft="12px"
                  color="#5C7FFF"
                >
                  {activeGroup?.memberCount}
                </Text>
                <Text
                  as="h1"
                  textStyle="TitleBold64"
                  fontSize="16px"
                  color="rgba(28, 28, 40, 0.7)"
                  marginLeft="12px"
                  maxW="60px"
                >
                  People joined
                </Text>
              </Box>
              {/* <Box display="flex" alignItems="center" mt={{ base: '20px', md: '0' }}>
                <I.RewardIcon color="#000" />
                <Text
                  as="h1"
                  textStyle="TitleBold64"
                  fontSize="48px"
                  letterSpacing="-1.5px"
                  marginLeft="12px"
                  color="#000"
                >
                  0
                </Text>
                <Text
                  as="h1"
                  textStyle="TitleBold64"
                  fontSize="16px"
                  color="rgba(28, 28, 40, 0.7)"
                  marginLeft="12px"
                  maxW="94px"
                >
                  Challenges completed
                </Text>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        p={{ base: '16px', md: '48px' }}
        w={{ base: '100%', md: 'max-content' }}
        m="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="20px"
      >
        <Text
          color="#1C1C28"
          fontSize={{ base: '20px', md: '32px' }}
          fontWeight="700"
          mb={{ base: '10px', md: '16px' }}
          textAlign="center"
        >
          Welcome to your new Group
        </Text>
        <Text
          maxW="624px"
          fontSize={{ base: '14px', md: '20px' }}
          color="rgba(28, 28, 40, 0.7)"
          textAlign="center"
          mb="32px"
        >
          This is your new group. Here are the steps to get you started. You can find more tips in
          our{' '}
          <Text as="span" color="#000 !important" fontWeight="600">
            knowledge base.
          </Text>
        </Text>
        <Box
          border="1px solid #D3E2F0"
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="12px"
          padding={{ base: '7px', md: '18px' }}
        >
          <Box display="flex" alignItems="center">
            <Box
              background="#F9E0ED"
              w={{ base: '26px', md: '64px' }}
              h={{ base: '26px', md: '64px' }}
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <I.FrameIcon color="#D92D85" w={{ base: '12px', md: '32px' }} />
            </Box>
            <Box />
            <Text
              color="#728ba3"
              opacity=".3"
              fontSize={{ base: '10px', md: '20px' }}
              fontWeight="600"
              maxW={{ base: 'auto', md: '240px' }}
              marginLeft={{ base: '6px', md: '16px' }}
            >
              Personalize the group with cover image{' '}
            </Text>
          </Box>
          <I.TickMarkIcon width={{ base: '16px', md: '30px' }} h={{ base: '16px', md: '30px' }} />
        </Box>
        <Box
          mt="8px"
          border="1px solid #D3E2F0"
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="12px"
          padding={{ base: '7px', md: '18px' }}
        >
          <Box display="flex" alignItems="center">
            <Box
              background="#E6DCFC"
              w={{ base: '26px', md: '64px' }}
              h={{ base: '26px', md: '64px' }}
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <I.PeopleIcon color="#5C7FFF" w={{ base: '12px', md: 'auto' }} />
            </Box>
            <Text
              color="#728ba3"
              fontSize={{ base: '10px', md: '20px' }}
              fontWeight="600"
              maxW="240px"
              marginLeft={{ base: '6px', md: '16px' }}
            >
              Invite people
            </Text>
          </Box>
          <ChevronRightIcon
            color="#728BA3"
            w={{ base: '20px', md: '30px' }}
            h={{ base: '20px', md: '30px' }}
          />
        </Box>
        <Box
          mt="8px"
          border="1px solid #D3E2F0"
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="12px"
          padding={{ base: '7px', md: '18px' }}
        >
          <Box display="flex" alignItems="center">
            <Box
              background="#F9E8E8"
              w={{ base: '26px', md: '64px' }}
              h={{ base: '26px', md: '64px' }}
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <I.CommentIcon color="#D76661" w={{ base: '12px', md: '32px' }} />
            </Box>
            <Text
              color="#728ba3"
              fontSize={{ base: '10px', md: '20px' }}
              fontWeight="600"
              maxW="240px"
              marginLeft={{ base: '6px', md: '16px' }}
            >
              Send the first message
            </Text>
          </Box>
          <ChevronRightIcon
            color="#728BA3"
            w={{ base: '20px', md: '30px' }}
            h={{ base: '20px', md: '30px' }}
          />
        </Box>
        <Button
          w="100%"
          border="1px solid #1C1C28"
          background="transparent"
          h={{ base: '58px', md: '64px' }}
          borderRadius="16px"
          mt={{ base: '22px', md: '32px' }}
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          onClick={() => hideGroupWelcome()}
        >
          <CloseIcon w={3} h={3} color="#000" boxSize="12px" marginRight="16px" />
          Hide tips
        </Button>
      </Box>
    </Box>
  );
};
export default GroupWelcome;
