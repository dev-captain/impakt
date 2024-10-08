import * as React from 'react';

// import keys from '@/i18n/translations/en';

import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { I, Common } from '@/components';
import Images from '../../../../assets/images';
import WalletAddressModal from '../WalletAddressModal/WalletAddressModal';
import MemberDashboardCard from '../MemberDashBoardCard';

const WhiteList: React.FC = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  // const { isWhitelistedCollection } = usePersistedAuthStore();

  return (
    <MemberDashboardCard
      w="100%"
      flexDir="column"
      mt="0 !important"
      alignItems="start"
      rowGap={{ base: '18px', lg: '32px' }}
    >
      <Box
        display="flex"
        borderRadius="24px"
        letterSpacing="-0.04em !important"
        justifyContent="space-between"
        marginTop="0 !important"
        id="whitelist-challange-description-box-2"
        position="relative"
        bgImage={Images.backgrounds.gradientBg}
        bgSize="cover"
        minHeight="194px"
        w="full"
      >
        <Box
          display="flex"
          flexWrap="wrap-reverse"
          justifyContent="center"
          alignItems="center"
          w="full"
        >
          <Box
            sx={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            background="linear-gradient(248.29deg, rgba(89, 0, 255, 0) 65.74%, rgba(89, 0, 255, 0.35) 100%), linear-gradient(111.71deg, rgba(255, 0, 21, 0) 64.07%, rgba(255, 0, 21, 0.5) 100%), #FFFFFF;"
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              width="min-content"
              fontWeight="700"
              fontSize="48px"
              lineHeight="56px"
              letterSpacing="-2px"
              padding="5px"
            >
              How to get whitelisted
            </Text>
          </Box>
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            background="linear-gradient(248.29deg, rgba(89, 0, 255, 0) 65.74%, rgba(89, 0, 255, 0.35) 100%), linear-gradient(111.71deg, rgba(255, 0, 21, 0) 64.07%, rgba(255, 0, 21, 0.5) 100%), #FFFFFF;"
          >
            <Box>
              <I.IllustrationIcon />
            </Box>
            {/* <Text
              fontWeight="700"
              fontSize={{ base: '32px', lg: '48px' }}
              lineHeight={{ base: '100%', lg: '56px' }}
              letterSpacing="-2px"
            >
              How to get whitelisted
            </Text> */}
          </Box>
        </Box>
        {/* <Tooltip
          hasArrow
          label="You can see me"
          mt="3"
          placement="auto"
          closeOnClick={false}
          onClick={TooltipHandler}
        >
          <Box position="absolute" top="16px" right="16px">
            <img src={TooltopIcon} alt="TooltopIcon" sizes="10px" />
          </Box>
        </Tooltip> */}
      </Box>
      <Box w="100%" id="whitelist-challange-description-box-2" sx={{ marginTop: '0px !important' }}>
        <Box>
          {/* <Common.ImpaktButton
            as="a"
            leftIcon={
              <Box marginRight="8px">
                <I.DiscordIcon />
              </Box>
            }
            size="lg"
            variant="white"
            color="#fff"
            bgColor="black"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            {isWhitelistedCollection.isDiscordConnected ? 'Discord Connected' : 'Connect Discord'}
          </Common.ImpaktButton> */}
        </Box>

        <Box mt="12px">
          <Common.ImpaktButton
            as="a"
            href={`${import.meta.env.VITE_API_BASE_URL}/api/v1/iam/auth/twitter`}
            leftIcon={
              <Box marginRight="8px">
                <I.TwitterIcon />
              </Box>
            }
            size="lg"
            variant="white"
            color="#fff"
            bgColor="black"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            Connect Twitter
          </Common.ImpaktButton>
        </Box>

        <Box mt="12px">
          <Common.ImpaktButton
            onClick={onOpen}
            leftIcon={
              <Box marginRight="8px">
                <I.EthIcon />
              </Box>
            }
            size="lg"
            variant="white"
            color="#fff"
            bgColor="black"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            Submit wallet address
          </Common.ImpaktButton>
        </Box>

        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(254, 196, 23, 0.100);"
          p="16px 24px"
          borderRadius="16px"
          alignItems="center"
          mt="12px"
          minH="88px"
        >
          <Box>
            <img src={Images.Common.Goldaword} alt="Discord" width="24px" />
          </Box>
          <Box marginLeft="16px" width={{ base: '100%', lg: '285px' }}>
            <Text textStyle="regular3" fontWeight={500} color="#FEC417">
              Win WL by participating in events or buy WL on GODL marketplace
            </Text>
          </Box>
        </Box>
      </Box>
      {isOpen && <WalletAddressModal isOpen onClose={onClose} />}
    </MemberDashboardCard>
  );
};
export default WhiteList;
