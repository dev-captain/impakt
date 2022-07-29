import * as React from 'react';

// import { useTranslation } from 'react-i18next';
// import keys from 'i18n/types';

import { Box, Text, Tooltip } from '@chakra-ui/react';
import useAppSelector from 'hooks/useAppSelector';
import TooltopIcon from '../../../../assets/svgs/tooltipIcon.svg';
import Images from '../../../../assets/images';
import WalletAddressModal from '../WalletAddressModal/WalletAddressModal';
import MemberDashboardCard from '../MemberDashBoardCard';
import { ImpaktButton } from '../../../common';
import { I } from '../../..';

const WhiteList: React.FC = () => {
  // const { t } = useTranslation().i18n;
  const isWhitelisted = useAppSelector((state) => state.whitelistReducer.isWhitelisted);
  const [isTooltipClicked, setIsTooltipClicked] = React.useState(false);
  const [isWallet, setIsWallet] = React.useState(false);
  const TooltipHandler = () => {
    setIsTooltipClicked(!isTooltipClicked);
  };
  const handleModal = () => {
    setIsWallet(!isWallet);
  };

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
            css={{
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
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
            css={{
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
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
          <ImpaktButton
            as="a"
            href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
            leftIcon={
              <Box marginRight="8px">
                <I.DiscordIcon />
              </Box>
            }
            size="lg"
            variant="secondary"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            {isWhitelisted ? 'Discord Connected' : 'Connect Discord'}
          </ImpaktButton>
        </Box>

        <Box mt="12px">
          <ImpaktButton
            leftIcon={
              <Box marginRight="8px">
                <I.TwitterIcon />
              </Box>
            }
            size="lg"
            variant="secondary"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            Connect Twitter
          </ImpaktButton>
        </Box>

        <Box mt="12px">
          <ImpaktButton
            onClick={handleModal}
            leftIcon={
              <Box marginRight="8px">
                <I.EthIcon />
              </Box>
            }
            size="lg"
            variant="secondary"
            justifyContent="flex-start"
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '24px', lg: '32px' }}
          >
            Submit wallet address
          </ImpaktButton>
        </Box>

        <Box
          display="flex"
          backdropBlur={40}
          bgColor="rgba(254, 196, 23, 0.15);"
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
      {isWallet && <WalletAddressModal handleModal={handleModal} isModalOpen={isWallet} />}
    </MemberDashboardCard>
  );
};
export default WhiteList;
